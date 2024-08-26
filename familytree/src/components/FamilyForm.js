import { v4 as uuidv4 } from 'uuid';

const FamilyForm = ({modelData, setModelData}) => {
   
    // Calculate parent keys (excluding the current member)
    const getParentKeys = (currentKey) => {
        return modelData
            .filter(member => member.key !== currentKey)
            .map(member => ({ key: member.key, name: member.name }));
    };

    // Handle input change for member data
    const handleChange = (key, e) => {
        const { name, value } = e.target;
        const newModelData = modelData.map(member =>
            member.key === key ? { ...member, [name]: value } : member
        );
        setModelData(newModelData);
    };

    // Add new member with uuid key
    const handleAdd = () => {
        setModelData([...modelData, { key: uuidv4(), name: '', gender: '', birthYear: '', deathYear: '', parent: '' }]);
    };

    // Remove a member from the form
    const handleRemove = (key) => {
        const newModelData = modelData.filter(member => member.key !== key);
        setModelData(newModelData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = modelData;

        // console.log(JSON.stringify({ modelData: data })); // expected output
        // console.log(JSON.stringify(data)); // expected output
        // console.log(data); // actual output being submitted

        data.forEach(member => {
            fetch('http://localhost:8000/modelData', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(member) // Convert each member to JSON string
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json(); // Process the JSON response if needed
                })
                .then(data => {
                    console.log('New member added', data);
                    window.location.reload(); // Reload the page after successful submission    
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                });
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            {modelData.map((data) => (
                <div key={data.key} className="family-form">
                    <h3>{data.name || 'New Member'}</h3>
                    <input
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={(e) => handleChange(data.key, e)}
                        placeholder="Name"
                    />
                    <label htmlFor={`gender-${data.key}`}></label>
                    <select
                        id={`gender-${data.key}`}
                        name="gender"
                        value={data.gender}
                        onChange={(e) => handleChange(data.key, e)}
                    >
                        <option value="" disabled>Select Gender</option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                        <option value="non-binary">Non-binary</option>
                        <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>


                    <input
                        type="text"
                        name="birthYear"
                        value={data.birthYear}
                        onChange={(e) => handleChange(data.key, e)}
                        placeholder="Birth Year"
                    />
                    <input
                        type="text"
                        name="deathYear"
                        value={data.deathYear}
                        onChange={(e) => handleChange(data.key, e)}
                        placeholder="Death Year"
                    />
                    <select
                        name="parent"
                        value={data.parent}
                        onChange={(e) => handleChange(data.key, e)}
                    >
                        <option value="" disabled>Select a Parent</option>
                        {getParentKeys(data.key).map(option => (
                            <option key={option.key} value={option.key}>
                                {option.name}
                            </option>
                        ))}
                    </select>
                    <button type="button" onClick={() => handleRemove(data.key)}>Remove</button>
                </div>
            ))}
            <button type="button" onClick={handleAdd}>Add Member</button>
            <button type="submit">Submit</button>
        </form>
    );
};

export default FamilyForm;
