import { useEffect, useRef } from 'react';
import { setupDiagram } from '../utils/setupDiagram';
import useConvert from '../hooks/useConvert';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';

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

    return (<motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.9 }} className='familytree-header'>
        <h2>See Your Ancestry in Full Bloom</h2>
        <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
            id="myDiagramDiv" ref={diagramRef} />
    </motion.div>)
};

export default FamilyTree;
