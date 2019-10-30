
export const Data =async data => {
    try {
        const response = await fetch('https://us-central1-enye-reduxx.cloudfunctions.net/users', {
            method: 'POST', 
            body: JSON.stringify(data), 
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        console.log('Success:', JSON.stringify(json));
    } catch (error) {
        console.error('Error:', error);
    }

}

