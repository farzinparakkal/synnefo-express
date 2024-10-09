document.getElementById('donorForm').addEventListener('submit', async function(e) {
    e.preventDefault();

        name= document.getElementById('name').value,
        age= document.getElementById('age').value,
        blood= document.getElementById('blood').value,
        phone= document.getElementById('phone').value,
        gender= document.getElementById('gender').value
        const res=await fetch('http://localhost:3005/api/add',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({name,age,phone,blood,gender})
        })
        const data=await res.json()
        if(res.status==201){
            alert(data.msg)
             window.location.href = `../index.html`
        }else{
            alert(data.error)
        }
});
