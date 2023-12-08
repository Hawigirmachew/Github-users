import { alertReducer } from "./AlertReducer";
import { createContext, useReducer } from "react";

const AlertContext = createContext();


export const AlertProvider = ({children})=>{

    const intailState = null
    
    const [state,dispatch ] = useReducer(alertReducer, intailState)

    const setAlert = (msg, type) =>{
        dispatch({
            type:'Set_Alert',
            payload:{msg, type}
        })

        setTimeout(()=> dispatch({
            type:'Remove_Alert'
        }),5000)
    }
    
    return(<AlertContext.Provider
       value = {{alert:state, setAlert}}
    >{children}</AlertContext.Provider>)
}
export default AlertContext