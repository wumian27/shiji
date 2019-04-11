import axios from 'axios'
const local = 'http://localhost:3001';
export const shouAjax = function(url,country){ 
    return new Promise(resolve=>{
        axios.post(local+url,{country}).then(res=>{  
            if(res.data.code){
                  resolve(res.data)
            }else{
                resolve(0)
            }
            
        })
    })
   
}