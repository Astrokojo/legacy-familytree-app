import FamilyList from "./FamilyList";
import useFetch from "./useFetch";
import {LOCAL_API} from "./api";

const FamilyDetails = () => {
  const { error, isPending, data: modelData } = useFetch(LOCAL_API)

  return (
    <div className="family-details">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { modelData && <FamilyList modelData={modelData} /> }
    </div>
  );
}
 
export default FamilyDetails;