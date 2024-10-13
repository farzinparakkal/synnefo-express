let deleteId = null;

async function openDeleteModal(id) {
    deleteId = id;
    document.getElementById('deleteModal').style.display = 'flex';
}

function closeDeleteModal() {
    deleteId = null;
    document.getElementById('deleteModal').style.display = 'none';
}

document.getElementById('confirmDelete').addEventListener('click', async () => {
    if (deleteId) {
        const res = await fetch(`http://localhost:3001/api/deleteEmp/${deleteId}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        });

        if (res.status === 201) {
            alert("Employee deleted successfully!");
            getEmployees();
        } else {
            alert("Failed to delete employee!");
        }
        closeDeleteModal();
    }
});

document.getElementById('cancelDelete').addEventListener('click', closeDeleteModal);

async function getEmployees() {
    const res = await fetch("http://localhost:3001/api/getemployee");
    const employees = await res.json();
    console.log(employees);

    let str = '';
    employees.forEach((employee) => {
        str += `
        <div class="card-box">
            <div class="card-content" id="card-content">
                <div id="id"><strong>ID:</strong> ${employee.id} </div>
                <div id="name"><strong>Name:</strong> ${employee.name}</div>
                <div id="designation"><strong>Designation:</strong> ${employee.designation} </div>
                <div id="experience"><strong>Experience:</strong> ${employee.experience} </div>
                <div id="salary"><strong>Salary:</strong> ${employee.salary}</div>
            </div>
            <div class="card-actions">
                <a href="../pages/edit.html?id=${employee._id}">
                    <button class="edit-btn">Edit</button>
                </a>
                <button class="del-btn" onclick="openDeleteModal('${employee._id}')">Delete</button>
            </div>
        </div>
        `;
    });
    document.getElementById('card').innerHTML = str;
}

getEmployees();
