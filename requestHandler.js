import donorSchema from './model/donor.model.js'

export async function addDonor(req,res) {
    console.log(req.body);

    const {...donors}=req.body
    await donorSchema.create({...donors}).then(()=>{
        res.status(201).send({msg: "Success"})
    })
    .catch((error)=>{
        res.status(500).send({error: error})
    })
}

export async function getDonors(req,res){
    console.log("get donors")

    const data = await donorSchema.find()
    console.log(data);
    
    res.status(200).send(data)
}

export async function getDonorById(req, res) {
        const donor = await donorSchema.findById(req.params.id);
            res.status(200).send(donor);    
}
