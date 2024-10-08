document.getElementById('donorForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const donorData = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        blood: document.getElementById('blood').value,
        phone: document.getElementById('phone').value,
        gender: document.getElementById('gender').value
    };

    try {
        const response = await fetch('/api/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(donorData)
        });

        if (response.ok) {
            alert('Donor added successfully');
            window.location.href = '../index.html';
        } else {
            alert('Error adding donor');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
