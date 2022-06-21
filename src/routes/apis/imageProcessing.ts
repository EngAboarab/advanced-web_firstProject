import path from 'path'
import sharp from 'sharp'
import fileCheck from '../fileCheck'

 const  imageProcessing= async(filename: string,fwidth: string, fheight: string) :Promise<string>=>{
   
  

        const fullfilepath: string = path.resolve(`.`, `assets`, `full`, `${filename}.jpg`)

        console.log()
        const outpath: string = path.resolve(`.`, `assets`, `thumb`, `${filename}-${fwidth}-${fheight}.jpg`)
        // const height=parseInt(fheight)
        // const width=parseInt(fwidth)
        //check if the file exist at first
        if ( await fileCheck(outpath)) {
            console.log(`the file already exist:${outpath}`)
            // add the file to the cache
            // res.sendFile(outpath)
           return outpath

        } else {
            await sharp(fullfilepath)
                .resize(parseInt(fwidth), parseInt(fheight))
                .toFile(outpath)
                .then(() => {
                 
                    console.log(`processing done`)
                 
                })
                return outpath
        }

     
   




  
}
export default imageProcessing