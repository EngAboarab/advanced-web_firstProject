import {existsSync} from 'fs'

export const fileCheck=async(filePath:string):Promise<boolean>=>{
   
   try{
    const status = await existsSync(filePath)
    return status
   }catch(err){
        return false;
}
}

export default fileCheck