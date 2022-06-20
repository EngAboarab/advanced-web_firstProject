
import express from 'express'
import {promises as fsPromises ,existsSync} from 'fs'
import path from 'path'
import { stringify } from 'querystring'
import sharp, { cache } from 'sharp'
import fileCheck from '../fileCheck'


 const images = express.Router()

 
 


images.get("/",(req,res)=>{
  
    const filename: string= (req.query.filename as unknown)as string
    const fwidth:string = (req.query.width as unknown)as string
    const fheight:string = (req.query.height as unknown)as string
    try{
   
        const fullfilepath:string= path.join(__dirname,`..`,`..`,`..`,`assets`,`full`,`${filename}.jpg`)
        
    
        const outpath:string= path.join(__dirname,`..`,`..`,`..`,`assets`,`thumb`,`${filename}-${fwidth}-${fheight}.jpg`)
        //check if the file exist at first
        if( fileCheck(outpath)){
            console.log(`the file already exist:${outpath}`)
            // add the file to the cache
          
            // res.sendFile(outpath)
          
            res.sendFile(outpath)
           
        }else{
             sharp(fullfilepath)
            .resize(parseInt(fwidth) ,parseInt(fheight))
            .toFile(outpath)
            .then(data=>{
              console.log(data)
             
              res.sendFile(outpath)
            })
    
        }
         
       
        
      
    
      
        
    }catch(err){
    
        console.log(`$the resize process throw the following error:{err}`)
        
        
    }
}
)
export default images