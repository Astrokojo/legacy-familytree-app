import React, { useEffect, useState } from 'react';
import GojsDiagram from './TestDiagram';

const FamilyTree = () => {
    const [nodeDataArray, setNodeDataArray] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.example.com/family-tree');
                const data = await response.json();

                const transformedData = data.map((person, index) => {
                    return {
                        key: index,
                        name: person.name,
                        nickname: person.nickname,
                        gender: person.gender,
                        birthYear: person.birthYear,
                        deathYear: person.deathYear,
                        parent: person.parentId,
                    }
                });
                setNodeDataArray(transformedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {/* <GojsDiagram nodeDataArray={nodeDataArray} /> */}
        </div>);
};

export default FamilyTree;