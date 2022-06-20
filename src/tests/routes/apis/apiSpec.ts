
import supertest from 'supertest'
import express from 'express'
import apis from '../../../routes/apis/apis'



    it ('the "/api" endpoint testing by supertest expected to give status 200',async ()=>{
        supertest(apis).get("/api")
       .expect(200)
   
    })
