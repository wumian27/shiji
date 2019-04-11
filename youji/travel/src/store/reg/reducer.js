const defaultState={
    phone:'',
    telephone:'',
    pwd:'',
    toggle:{
        init:true,
        password:false,
        succ:false
    }
}
export default (state = defaultState,action)=>{
    switch(action.type){
        case 'reg_info':{
          let newState = {...state};
          newState.phone='';
          newState.telephone = action.phone;
          newState.toggle.init = false;
          newState.toggle.password = true;
          return newState;
        }
        case 'init_password':{
          let newState = {...state};
          // 发送ajax
          newState.toggle.password = false;
          newState.toggle.succ = true;
          return newState;
        }
        case 'pwd_succ':{
          let newState = {...state};
          newState.toggle.init = true;
          newState.toggle.succ = false;
          return newState;
        }
        default:return state;
        }
  
}