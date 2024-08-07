import { motion } from 'framer-motion';
import { slideIn } from '../utils/variants';
const FamilyList = ({ modelData }) => {

    // Create a map of id to name for parent lookup
    const parentNameMap = modelData.reduce((acc, md) => {
        acc[md.key] = md.name;
        return acc;
    }, {});
    console.log(parentNameMap);

    return (
        <motion.div
            variants={slideIn("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }} className="md-list">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Birth Year</th>
                        <th>Death Year</th>
                        <th>Parent</th>
                    </tr>
                </thead>
                <tbody>
                    {modelData.map(md => (
                        <tr key={md.key}>
                            <td>{md.name}</td>
                            <td>{md.gender}</td>
                            <td>{md.birthYear}</td>
                            <td>{md.deathYear}</td>
                            <td>{md.parent ? parentNameMap[md.parent] || 'Unknown' : 'None'}</td>
                        </tr>
                    ))}
                </tbody>
                {/* <h2>{md.name}</h2> */}
            </table>

        </motion.div>
    );
}
export default FamilyList;