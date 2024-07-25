import { useEffect, useState } from "react";
import useFetch from "./useFetch";
const useConvert = () => {
    // const { data, isPending, error } = useFetch("http://localhost:8000/modelData");
    const { data, isPending, error } = useFetch("https://my-json-server.typicode.com/Astrokojo/json-server/modelData");

    const [convertedData, setConvertedData] = useState([]);

    useEffect(() => {
        if (data) {
            const transformedData = data.map(item => ({
                key: item.key,
                parent: item.parent,
                name: item.name,
                gender: item.gender,
                birthYear: item.birthYear,
                deathYear: item.deathYear
            }));
            setConvertedData(transformedData);
        }
    }, [data]);
    return { convertedData, isPending, error };
}
export default useConvert;