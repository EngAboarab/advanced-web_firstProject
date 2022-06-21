import express from 'express'
import {promises as fsPromises } from 'fs'
import apis from './apis/apis'
import images from './apis/images'

const routes = express.Router()
routes.get('/',(req:express.Request,res:express.Response)=>{
    res.send(`<h1> welcome to the Home Page</h1>`)
})

routes.use('/api',apis)
routes.use("/api/images",images)
export default routes