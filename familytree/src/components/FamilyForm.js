import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';


const FamilyForm = () => {

    const [modelData, setModelData] = useState([
        { key: uuidv4(), name: '', gender: '', fullTitle: '', kanjiName: '', posthumousName: '', birthYear: '', deathYear: '', parent: '', statusChange: '' }
    ]);

   const parentKeys = modelData.map((member => ({key: member.key, name: member.name})));
   
    // Handle input change for member data
    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const newModelData = [...modelData];
        newModelData[index] = { ...newModelData[index], [name]: value };
        setModelData(newModelData);
    };

    // Add new member with uuid key
    const handleAdd = () => {
        setModelData([...modelData, { key: uuidv4(), name: '', gender: '', fullTitle: '', kanjiName: '', posthumousName: '', birthYear: '', deathYear: '', parent: '', statusChange: '' }]);
    };

    // remove a member from the form 
    const handleRemove = (index) => {
        const newModelData = modelData.filter((_, i) => i !== index);
        setModelData(newModelData);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = modelData.filter((data) => data.name !== '');
        console.log(JSON.stringify({modelData: data})); // expected output
        console.log(JSON.stringify(data)); // expected output
        console.log(data); //actual output being submitted
        // fetch('http://localhost:8000/modelData', {
        //     method: 'POST',
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(data)
        //   }).then(() => {
        //     console.log('new member added');
        //   })
    };

   
    return (
        <form onSubmit={handleSubmit}>
            {modelData.map((data, index) => (
                <div key={data.key} className="form-group">
                    <h3>{data.name}</h3>
                    <input type="text" name="name" value={data.name} onChange={(e) => handleChange(index, e)} placeholder="Name" />
                    <input type="text" name="gender" value={data.gender} onChange={(e) => handleChange(index, e)} placeholder="Gender" />
                    <input type="text" name="birthYear" value={data.birthYear} onChange={(e) => handleChange(index, e)} placeholder="Birth Year" />
                    <input type="text" name="deathYear" value={data.deathYear} onChange={(e) => handleChange(index, e)} placeholder="Death Year" />
                    <select name="parent" value={data.parent} onChange={(e) => handleChange(index, e)}>
                        <option value="" disabled>Select a Parent</option>
                        {parentKeys.filter(option => option.key !== data.key).map(option => (
                            <option key={option.key} value={option.key}>{option.name}
                            </option>
                        ))}
                    </select>
                    <button type="button" onClick={() => handleRemove(index)}>Remove</button>
                </div>
            ))}
            <button type="button" onClick={handleAdd}>Add Member</button>
            <button type="submit">Submit</button>
        </form>
    );
};

export default FamilyForm;