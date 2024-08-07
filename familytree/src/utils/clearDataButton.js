const ClearDataButton = () => {
    const handleClearAll = () => {
        // Step 1: Fetch all data
        fetch('http://localhost:8000/modelData')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Step 2: Send DELETE requests for each entry
                return Promise.all(data.map(item =>
                    fetch(`http://localhost:8000/modelData/${item.id}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                ));
            })
            .then(responses => {
                // Check if all delete requests were successful
                responses.forEach(response => {
                    if (!response.ok) {
                        throw new Error('Failed to delete some data');
                    }
                });
                console.log('Data cleared successfully');
                window.location.reload(); // Step 3: Reload the page
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    };

    return (
        <button onClick={handleClearAll}>Clear All Data</button>
    );
};

export default ClearDataButton;
