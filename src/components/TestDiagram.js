
import React, { useEffect, useRef } from 'react';
import * as go from 'gojs';
import '../styles/diagram.css';

const GojsDiagram = ({ nodeDataArray }) => {
  const diagramRef = useRef(null);

  useEffect(() => {
    const $ = go.GraphObject.make;
    
    // Create a new Diagram
    const diagram = $(go.Diagram, diagramRef.current, {
      'undoManager.isEnabled': true
    });

    // Define a simple Node template
    diagram.nodeTemplate = $(
      go.Node,
      'Auto',
      $(go.Shape, 'RoundedRectangle', { strokeWidth: 0, fill: 'white' }, new go.Binding('fill', 'color')),
      $(go.TextBlock, { margin: 8 }, new go.Binding('text', 'key'))
    );

    // Define the model data
    diagram.model = new go.GraphLinksModel(
      [
        { key: 'Alpha', color: 'lightblue' },
        { key: 'Beta', color: 'orange' },
        { key: 'Gamma', color: 'lightgreen' },
        { key: 'Delta', color: 'pink' }
      ],
      [
        { from: 'Alpha', to: 'Beta' },
        { from: 'Alpha', to: 'Gamma' },
        { from: 'Gamma', to: 'Delta' },
        { from: 'Delta', to: 'Alpha' }
      ]
    );

    return () => {
      diagram.dispose(); // Clean up the diagram
    };
  }, [nodeDataArray]);

  return <div className='diagram-wrapper' ref={diagramRef} style={{ border: '1px solid black' }} />;
};

export default GojsDiagram;
