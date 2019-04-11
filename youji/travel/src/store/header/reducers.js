const defaultState = {
    activeObject : {
        shou:true,
        target:false,
        strategy:false,
        airport:false,
        center:false,
        login:false
    }
}
export default (state = defaultState,action)=>{
      switch(action.type){
          case "change_flag":{
              let newState = {...state}
            let obj = {
                shou:false,
                target:false,
                strategy:false,
                airport:false,
                center:false,
                login:false
             }
             obj[action.num]=true;
             newState.activeObject = obj;
              return newState;
          }
          default : return state;
      }
}