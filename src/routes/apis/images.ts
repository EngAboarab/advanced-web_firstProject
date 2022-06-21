

import express from 'express'

import path from 'path'
import imageProcessing from '../apis/imageProcessing'
import fileCheck from '../fileCheck'


 const images = express.Router()

 
 


images.get("/", async(req:express.Request,res:express.Response)=>{
  
    const filename: string= (req.query.filename as unknown)as string
    const fwidth:string = (req.query.width as unknown)as string
    const fheight:string = (req.query.height as unknown)as string
     
    const fullfilepath: string = path.resolve(`.`, `assets`, `full`, `${filename}.jpg`)

    //get the existing files names
    if (isNaN(parseInt(fwidth)) ||isNaN(parseInt(fheight))) {
        res.status(400).send (`<h2>you have entered invaid width or height  value or Both</h2>`)}else{
            const status= await fileCheck(fullfilepath)
            if(status==false){
              res.status(400).send (`<h2>you have entered filename which is not exist in the assets/full folder</h2>`)
            }else{
                
                 const outpath=await imageProcessing(filename,fwidth, fheight )
                 const newFileStatus= await fileCheck(outpath)
                 if(newFileStatus){
                    res.status(200).sendFile(outpath)
                 }
                 
                
            }
        }


        // const outpath: string = path.resolve(`.`, `assets`, `thumb`, `${filename}-${fwidth}-${fheight}.jpg`)

        
      
      


  

  
  

// const filesnames: string[]=[]
//     fs.readdir(path.resolve(".","assets","full"),async(err,files)=>{
        
       
//         files.forEach((file)=>filesnames.push(path.basename(file)))
//     }
//     )
//     const filewithext:string=filename+".jpg"

//     console.log(filewithext)
   
//    if(!filesnames.includes(filewithext)){
//        res.status(400).send (`<h2>you have entered filename which is not exist in the assets/full folder</h2>`)
//    }
 
    }
)
export default images;