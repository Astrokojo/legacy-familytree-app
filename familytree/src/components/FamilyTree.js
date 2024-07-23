import React, { useEffect } from 'react';
import { setupDiagram } from './setupDiagram';


const FamilyTree = ({modelData}) => {
    
    useEffect(() => {
        const diagramDivId = 'myDiagramDiv';

        // Initialize the diagram
        const diagram = setupDiagram(diagramDivId, modelData);

        // Cleanup on unmount
        return () => {
            diagram.clear();
            diagram.div = null;
        };
    }, [modelData]);
  
    return <div id="myDiagramDiv" />;
};

export default FamilyTree;
