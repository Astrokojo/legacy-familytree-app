import React, { useEffect, useRef } from 'react';
import * as go from 'gojs';

const GojsDiagram = () => {
    const diagramRef = useRef(null);

    useEffect(() => {
        const $ = go.GraphObject.make;

        // Create a new Diagram
        const diagram = $(go.Diagram, diagramRef.current, {
            initialContentAlignment: go.Spot.Center,
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
    }, []);

    return <div ref={diagramRef} style={{ width: '600px', height: '400px', border: '1px solid black' }} />;
};

export default GojsDiagram;
