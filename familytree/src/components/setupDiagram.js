import * as go from 'gojs';

export function setupDiagram(diagramDivId, modelData) {
    const $ = go.GraphObject.make;

    // Create a new Diagram
    const diagram = $(go.Diagram, diagramDivId, {
        'undoManager.isEnabled': true,
        layout: $(go.TreeLayout, { angle: 90, layerSpacing: 35 }),
    });

    // Define the Node template
    // diagram.nodeTemplate =
    //     $(go.Node, 'Auto',
    //         $(go.Shape, 'Rectangle',
    //             new go.Binding('fill', 'gender', gender => gender === 'M' ? 'blue' : 'pink')),
    //         $(go.TextBlock,
    //             { margin: 5 },
    //             new go.Binding('text', 'name'))
    //     );
    diagram.nodeTemplate = $(go.Node,
        'Auto',
        { deletable: false },
        new go.Binding('text', 'name'),
        $(go.Shape,
          'Rectangle',
          {
            fill: 'orange',
            stroke: 'black',
            stretch: go.Stretch.Fill,
            alignment: go.Spot.Center,
          }
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
          )
        )
      );

     // define the Link template
     diagram.linkTemplate = $(go.Link, // the whole link panel
        { routing: go.Routing.Orthogonal, corner: 5, selectable: false },
        $(go.Shape)
      );

    // Define the legend as a separate part
    diagram.add(
        $(go.Part, 'Table', { position: new go.Point(10, 10) },
            $(go.TextBlock, 'Key', { row: 0, font: 'bold 10pt Helvetica, Arial, sans-serif' }),
            $(go.Panel, 'Horizontal', { row: 1, alignment: go.Spot.Left },
                $(go.Shape, 'Rectangle', { desiredSize: new go.Size(30, 30), fill: 'blue', margin: 5 }),
                $(go.TextBlock, 'Males', { font: 'bold 8pt Helvetica, Arial, sans-serif' })
            ),
            $(go.Panel, 'Horizontal', { row: 2, alignment: go.Spot.Left },
                $(go.Shape, 'Rectangle', { desiredSize: new go.Size(30, 30), fill: 'pink', margin: 5 }),
                $(go.TextBlock, 'Females', { font: 'bold 8pt Helvetica, Arial, sans-serif' })
            )
        )
    );

    // Set the model for the diagram
    diagram.model = new go.TreeModel(modelData);

    return diagram;
}
