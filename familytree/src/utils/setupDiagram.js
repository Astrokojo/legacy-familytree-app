import * as go from 'gojs';

export function setupDiagram(diagramDivId, modelData) {
  const $ = go.GraphObject.make;

  // Create a new Diagram
  const diagram = $(go.Diagram, diagramDivId, {
    'undoManager.isEnabled': true,
    layout: $(go.TreeLayout, { angle: 90, layerSpacing: 35 }),
  });
  var bluegrad = $(go.Brush, 'Linear', { 0: 'rgb(60, 204, 254)', 1: 'rgb(70, 172, 254)' });
  var pinkgrad = $(go.Brush, 'Linear', { 0: 'rgb(255, 192, 203)', 1: 'rgb(255, 142, 203)' });

  // Set up a Part as a legend, and place it directly on the diagram
  diagram.add(
    $(go.Part,
      'Table',
      { layerName: 'ViewportBackground', alignment: new go.Spot(0, 0, 20, 20) },
      $(go.TextBlock, 'Key', { row: 0, font: 'bold 10pt Helvetica, Arial, sans-serif' }), // end row 0
      $(go.Panel,
        'Horizontal',
        { row: 1, alignment: go.Spot.Left },
        $(go.Shape, 'Rectangle', { desiredSize: new go.Size(30, 30), fill: bluegrad, margin: 5 }),
        $(go.TextBlock, 'Males', { font: 'bold 8pt Helvetica, bold Arial, sans-serif' })
      ), // end row 1
      $(go.Panel,
        'Horizontal',
        { row: 2, alignment: go.Spot.Left },
        $(go.Shape, 'Rectangle', { desiredSize: new go.Size(30, 30), fill: pinkgrad, margin: 5 }),
        $(go.TextBlock, 'Females', { font: 'bold 8pt Helvetica, bold Arial, sans-serif' })
      ) // end row 2
    )
  );

  // get tooltip text from the object's data
  function tooltipTextConverter(person) {
    var str = '';
    str += 'Born: ' + person.birthYear;
    if (person.deathYear !== undefined) str += '\nDied: ' + person.deathYear;
    if (person.reign !== undefined) str += '\nReign: ' + person.reign;
    return str;
  }

  // define tooltips for nodes
  var tooltiptemplate = $('ToolTip',
    { 'Border.fill': 'whitesmoke', 'Border.stroke': 'black' },
    $(go.TextBlock,
      {
        font: 'bold 8pt Helvetica, bold Arial, sans-serif',
        wrap: go.Wrap.Fit,
        margin: 5,
      },
      new go.Binding('text', '', tooltipTextConverter)
    )
  );

  // define Converters to be used for Bindings
  function genderBrushConverter(gender) {
    if (gender === 'M') return bluegrad;
    if (gender === 'F') return pinkgrad;
    return 'orange';
  }

  // replace the default Node template in the nodeTemplateMap
  diagram.nodeTemplate = $(go.Node,
    'Auto',
    { deletable: false, toolTip: tooltiptemplate },
    new go.Binding('text', 'name'),
    $(go.Shape,
      'Rectangle',
      {
        fill: 'orange',
        stroke: 'black',
        stretch: go.Stretch.Fill,
        alignment: go.Spot.Center,
      },
      new go.Binding('fill', 'gender', genderBrushConverter)
    ),
    $(go.Panel,
      'Vertical',
      $(go.TextBlock,
        {
          font: 'bold 8pt Helvetica, bold Arial, sans-serif',
          alignment: go.Spot.Center,
          margin: 6,
        },
        new go.Binding('text', 'name')
      ),
      $(go.TextBlock, new go.Binding('text', '', ({ birthYear, deathYear }) => {
        if (deathYear === undefined) return birthYear;
        return `${birthYear} - ${deathYear}`;
      }))
    )
  );

  // define the Link template
  diagram.linkTemplate = $(go.Link, // the whole link panel
    { routing: go.Routing.Orthogonal, corner: 5, selectable: false },
    $(go.Shape)
  ); // the default black link shape


  // Set the model for the diagram
  diagram.model = new go.TreeModel(modelData);

  return diagram;
}
