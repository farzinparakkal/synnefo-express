// document.addEventListener('DOMContentLoaded', async function() {
//     const urlParams = new URLSearchParams(window.location.search);
//     const donorId = urlParams.get('id');

//             const response = await fetch(`/api/getdonor/${donorId}`);
//             const donor = await response.json();
//             console.log(donor);
            
//             document.getElementById('name').value = donor.name;
//             document.getElementById('age').value = donor.age;
//             document.getElementById('blood').value = donor.blood;
//             document.getElementById('phone').value = donor.phone;
//             document.getElementById('gender').value = donor.gender;
//     }

//  );

const url=window.location.href
console.log(url);
const urlParams=new URLSearchParams(url.split("?")[1])
console.log(urlParams);
const id=urlParams.get('id')
console.log(id);

async function getdonor() {
    const response = await fetch(`/api/getdonor/${id}`);
    const donor = await response.json();
    console.log("hai");
    
    console.log(donor);

            
    document.getElementById('name').value = donor.name;
    document.getElementById('age').value = donor.age;
    document.getElementById('blood').value = donor.blood;
    document.getElementById('phone').value = donor.phone;
    document.getElementById('gender').value = donor.gender;
}
getdonor()



