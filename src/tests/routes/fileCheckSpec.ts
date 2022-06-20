import path from "path"
import fileCheck from '../../routes/fileCheck'


//the middleware spec
describe('the functionality of filecheck function',()=>{
    const randomfilePath=path.join(__dirname,`..`,`..`,`..`,`assets`,`full`,`random.jpg`)
    it(`the file check hast to return false for non-existing files`,()=>{
        
        expect (fileCheck(randomfilePath)).toBeFalse()
    })

 
})
