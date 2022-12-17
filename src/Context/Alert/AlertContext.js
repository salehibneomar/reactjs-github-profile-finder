import { createContext, useState } from "react";

const AlertContext = createContext();

export const AlertProvider = (props) => {
    const [alert, setAlert] = useState(undefined);
    
    const setAlertHandler = (...args) => {

        if(args.length === 1){
            setAlert(undefined)
        }else{
            setAlert({
                type: args[0],
                msg: args[1],
            })
        }
    }

    return (<AlertContext.Provider value={{alert, setAlertHandler}}>
            {props.children}
    </AlertContext.Provider>)
}

export default AlertContext