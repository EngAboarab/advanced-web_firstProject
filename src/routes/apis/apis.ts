import express from 'express'




const apis = express.Router()
apis.get('/',(req:express.Request,res:express.Response)=>{
    res.send(`<h1> welcome to the APIs Page</h1>`)
    res.status(200)
})

export default apis