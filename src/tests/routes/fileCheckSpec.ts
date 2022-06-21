import path from "path"
import fileCheck from '../../routes/fileCheck'


//the middleware spec

    const randomfilePath:string=path.resolve(`.`,`assets`,`full`,`random.jpg`)
    
    it(`the file check hast to return false for non-existing files`,async()=>{
                const status:boolean = await fileCheck(randomfilePath)
        expect ( status).toBeFalse()
    })

 

