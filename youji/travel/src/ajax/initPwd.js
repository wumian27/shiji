import axios from 'axios'
const local = 'http://localhost:3001';
export const initPwd = function(url,telephone,pwd){  
    return new Promise(resolve=>{
        axios.post(local+url,{telephone,pwd}).then(res=>{
            if(res.data.code){
                  resolve(1)
            }else{
                resolve(0)
            }
            
        })
    })
   
}