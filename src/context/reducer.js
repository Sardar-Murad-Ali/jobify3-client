import { DISPLAY_ALERT } from "./actions"
import { CLEAR_ALERT } from "./actions"

const reducer =(state,action)=>{
//   throw new Error (`no such action :${action.type}`)
  if(action.type===DISPLAY_ALERT){
      return{
          ...state,
          showAlert:true,
          alertText:"Please Provide All The Fields!",
          alertType:"danger"
      }
  }
  if(action.type===CLEAR_ALERT){
      return{
          ...state,
          showAlert:false,
          alertText:"",
          alertType:""
      }
  }
}

export default reducer