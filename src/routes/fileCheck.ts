import {existsSync} from 'fs'

export const fileCheck=(filePath:string):boolean=>{
    if(existsSync(filePath)){
        return true;
       
    }else{
        return false;
}
}

export default fileCheck