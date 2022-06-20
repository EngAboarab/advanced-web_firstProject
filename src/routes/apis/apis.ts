import express from 'express'




const apis = express.Router()
apis.get('/',(req,res)=>{
    res.send(`<h1> welcome to the APIs Page</h1>`)
    res.status(200)
})

export default apis