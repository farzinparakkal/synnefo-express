async function getEmployeeDetails() {
    const res = await fetch(`http://localhost:3001/api/getemployee/${id}`);
    const employee = await res.json();

    document.getElementById('main_2').innerHTML = `
        <div>
            <input type="text" placeholder="ID" id="id" value="${employee.id}">
            <input type="text" placeholder="Name" id="name" value="${employee.name}">
            <input type="text" placeholder="Designation" id="designation" value="${employee.designation}">
            <input type="text" placeholder="Salary" id="salary" value="${employee.salary}">
            <input type="text" placeholder="Experience" id="experience" value="${employee.experience}">
            <input type="text" placeholder="Email" id="email" value="${employee.email}">
            <input type="text" placeholder="Phone" id="phone" value="${employee.phone}">
        </div>
        <button onclick="updateEmployee()">Save</button>
    `;
}

async function updateEmployee() {
    const updatedData = {
        id: document.getElementById('id').value,
        name: document.getElementById('name').value,
        designation: document.getElementById('designation').value,
        salary: document.getElementById('salary').value,
        experience: document.getElementById('experience').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
    };

    const res = await fetch(`http://localhost:3001/api/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData)
    });

    const data = await res.json();
    if (res.status === 201) {
        alert(data.msg);
        window.location.href = "/index.html";
    } else {
        alert(data.error);
    }
}

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

getEmployeeDetails();
