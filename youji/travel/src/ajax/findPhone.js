import axios from 'axios'
const local = 'http://localhost:3001';
export const find = function(url,telephone){  
    return new Promise(resolve=>{
        axios.get(local+url,{params:{telephone}}).then(res=>{
            if(res.data.code){
                  resolve(1)
            }else{
                resolve(0)
            }
            
        })
    })
   
}