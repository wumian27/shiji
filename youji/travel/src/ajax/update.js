import axios from 'axios'
const local = 'http://localhost:3001';
export const update = function(url,telephone,pwd){  
    return new Promise(resolve=>{
        axios.get(local+url,{params:{telephone,pwd}}).then(res=>{
            if(res.data.code){
                  resolve(1)
            }else{
                resolve(0)
            }
            
        })
    })
   
}