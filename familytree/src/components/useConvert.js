import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import {LOCAL_API, EXTERNAL_API} from './api';
const useConvert = () => {
    // const { data, isPending, error } = useFetch(LOCAL_API);
    const { data, isPending, error } = useFetch(EXTERNAL_API);

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