import React, { useEffect } from 'react';
import { setupDiagram } from './setupDiagram';
import useConvert from './useConvert';


const FamilyTree = () => {
    const { data: modelData, isPending, error } = useConvert('http://localhost:3000/0');

    useEffect(() => {
        if (modelData) {
            console.log(modelData);
            const diagramDivId = 'myDiagramDiv';
            const diagram = setupDiagram(diagramDivId, modelData);


            // Cleanup on unmount
            return () => {
                diagram.clear();
                diagram.div = null;
            };
        }
    }, [modelData]);

    if (isPending) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return <div id="myDiagramDiv" />;
};

export default FamilyTree;
