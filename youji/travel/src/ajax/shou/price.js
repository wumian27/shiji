import axios from 'axios'
const local = 'http://localhost:3001';
export const priceAjax = function(url,start){ 
    return new Promise(resolve=>{
        axios.post(local+url,{start}).then(res=>{  
            if(res.data.code){
                  resolve(res.data)
            }else{
                resolve(0)
            }
            
        })
    })
   
}