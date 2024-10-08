document.addEventListener('DOMContentLoaded', async function() {
    const urlParams = new URLSearchParams(window.location.search);
    const donorId = urlParams.get('id');

    // Fetch the donor's details and populate the form
    if (donorId) {
        try {
            const response = await fetch(`/api/getdonor/${donorId}`);
            const donor = await response.json();
            console.log(donor);
            

            document.getElementById('name').value = donor.name;
            document.getElementById('age').value = donor.age;
            document.getElementById('blood').value = donor.blood;
            document.getElementById('phone').value = donor.phone;
            document.getElementById('gender').value = donor.gender;
        } catch (error) {
            console.error('Error fetching donor details:', error);
        }
    }

    // Handle form submission to update the donor
    document.getElementById('editDonorForm').addEventListener('submit', async function(e) {
        e.preventDefault();

        const updatedDonor = {
            name: document.getElementById('name').value,
            age: document.getElementById('age').value,
            blood: document.getElementById('blood').value,
            phone: document.getElementById('phone').value,
            gender: document.getElementById('gender').value
        };

        try {
            const response = await fetch(`/api/updatedonor/${donorId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedDonor)
            });

            if (response.ok) {
                alert('Donor updated successfully');
                window.location.href = '../index.html'; // Redirect to index page
            } else {
                alert('Error updating donor');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });
});
