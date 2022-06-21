
import supertest from 'supertest'
import express from 'express'
import images from '../../../routes/apis/images'
import path from 'path'


describe (`the testing of the image processing enpoint `,()=>{
    it ('the "/api/images" endpoint testing by supertest expected to give status 200',async ()=>{
        supertest(images).get("/api/images")
       .expect(200)
   
    })

 
})
    



