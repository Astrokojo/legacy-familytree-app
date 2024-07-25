import{ useEffect, useRef } from 'react';
import { setupDiagram } from './setupDiagram';
import useConvert from './useConvert';

const FamilyTree = () => {
    const { convertedData: modelData, isPending, error } = useConvert();
    const diagramRef = useRef(null); // Create a ref for the diagram div

    useEffect(() => {
        if (modelData && diagramRef.current) {
            console.log(modelData);
            const diagram = setupDiagram(diagramRef.current.id, modelData);
            const diagramDiv = diagramRef.current;
            // Cleanup on unmount
            return () => {
                diagram.div = null;
                diagramDiv.innerHTML = ''; // Clear the div's contents
            };
        }
    }, [modelData]);

    if (isPending) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return <div id="myDiagramDiv" ref={diagramRef} />;
};

export default FamilyTree;
