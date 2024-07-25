import FamilyList from "./FamilyList";
import useFetch from "./useFetch";
import { LOCAL_API } from "./api";
import ClearDataButton from "./ClearDataButton";
import FamilyForm from "./FamilyForm";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
const FamilyDetails = () => {
  const { error, isPending, data: modelData } = useFetch(LOCAL_API)

  return (
    <div className="family-details">

      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }} className="family-details-header">
        <h2>Family Details</h2>
      </motion.div>

      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}><FamilyForm />
      </motion.div>

      {modelData && <FamilyList modelData={modelData} />}
      <ClearDataButton />
    </div>
  );
}

export default FamilyDetails;