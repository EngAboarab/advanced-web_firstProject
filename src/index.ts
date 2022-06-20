// lets make the entry point ** the server and the app setup

import express from 'express'




const app = express()
const port = 3000





//get the main route (api)
import routes from './routes/index'

app.use('/',routes)

// //create the endpoint with middleware

// app.get('/api/images',(req:express.Request,res:express.Response)=>{

//     console.log(req.query)

// })

app.listen(port, () =>
    console.log(`the server has been started at Port ${port}`)
)
