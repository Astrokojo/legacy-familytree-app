import FamilyList from "./FamilyList";
import useFetch from "./useFetch";
import {LOCAL_API} from "./api";
import ClearDataButton from "./ClearDataButton";
import FamilyForm from "./FamilyForm";
const FamilyDetails = () => {
  const { error, isPending, data: modelData } = useFetch(LOCAL_API)

  return (
    <div className="family-details">
      { error && <div>{ error }</div> }
      {isPending && <div>Loading...</div>}
      <FamilyForm />
      {modelData && <FamilyList modelData={modelData} />}
      <ClearDataButton />
    </div>
  );
}
 
export default FamilyDetails;