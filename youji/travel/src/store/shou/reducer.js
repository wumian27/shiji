const defaultState = {
    coutry:[],
    wai:[],
    price:[]
}

export default (state = defaultState,action)=>{
     switch(action.type){
        case "shou_contry":{
            const newState = {...state};
            newState.coutry = action.data
            return newState;
        }
        case "shou_hai":{
            const newState = {...state};
            newState.wai = action.data
            return newState;
        }
        case "shou_price" :{
            const newState = {...state};
            newState.price = action.data
            return newState;
        }
         


        default:return state;
     }
}