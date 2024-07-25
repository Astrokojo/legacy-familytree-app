import FamilyList from "./FamilyList";
import useFetch from "./useFetch";
import { LOCAL_API } from "./api";
import ClearDataButton from "./ClearDataButton";
import FamilyForm from "./FamilyForm";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "./variants";
const FamilyDetails = () => {
  const { error, isPending, data: modelData } = useFetch(LOCAL_API)

  return (
    <div className="family-details">

      <motion.div
        variants={slideIn("left", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.9 }} className="family-details-header">
        <h2>Help Us Build Your Family Tree</h2>
      </motion.div>

      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.9 }}><FamilyForm />
      </motion.div>

      {modelData && <FamilyList modelData={modelData} />}
      <ClearDataButton />
    </div>
  );
}

export default FamilyDetails;