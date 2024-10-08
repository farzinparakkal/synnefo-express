async function fetchDonors() {
    try {
        const response = await fetch('/api/getdonors');
        const donors = await response.json();
        let str=''

        donors.map(donor => {
            str+= `
            <div class="card">
                <div><p>Name: ${donor.name}</p></div>
                <div><p>Age: ${donor.age}</p></div>
                <div><p>Blood Type: ${donor.blood}</p></div>
                <div><p>Phone: ${donor.phone}</p></div>
                <div><p>Gender: ${donor.gender}</p></div>
                <div><button class="edit-btn" onclick="editDonor('${donor._id}')">Edit</button>
                <button class="del-btn" >Delete</button></div>
            </div>
            `;
            document.getElementById('donorList').innerHTML=str
        });
    } catch (error) {
        console.error('Error fetching donors:', error);
    }
}

function editDonor(donorId) {
    window.location.href = `../pages/donorEdit.html?id=${donorId}`;
}

fetchDonors();
