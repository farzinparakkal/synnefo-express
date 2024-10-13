document.getElementById('form').addEventListener('submit',async function (e) {
    e.preventDefault();
    console.log("form");

    id=document.getElementById('id').value,
    name=document.getElementById('name').value,
    designation=document.getElementById('designation').value,
    salary=document.getElementById('salary').value,
    experience=document.getElementById('experience').value,
    email=document.getElementById('email').value,
    phone=document.getElementById('phone').value

    console.log(id,name,designation,salary,experience,email,phone);

    const res=await fetch('http://localhost:3001/api/add',{
        method:"POST",
        headers:{"content-Type":'application/json'},
        body:JSON.stringify({id,name,designation,salary,experience,email,phone})
    })
    console.log(res);
    

    const data=await res.json()
    if(res.status==201){
        alert(data.msg)
        window.location.href="/index.html"
    }
    else{
        alert(data.error)
    }

    
 });

