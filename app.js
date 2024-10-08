import express from 'express'
import router from './router.js'
import connection from './connection.js'
import { error } from 'console'
const app=express()
const port=3000

app.use(express.json())
app.use(express.static("frontend"))
app.use('/api',router)

connection().then(()=>{
    app.listen(port, () => {
        console.log(`port listening on http://localhost:${port}`)
      })
})
.catch((error)=>{
    console.log(error)
})