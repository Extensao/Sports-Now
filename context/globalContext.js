import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { createContext, useEffect, useState } from "react";

const GlobalProvider = createContext({});

const GlobalContext = ({children}) => {

    const [darkMode,setDarkMode] = useState(false);

    const handlerDarkMode = () => setDarkMode(!darkMode);

    const [menu,setMenu] = useState(false);

    const handlerMenu = () => setMenu(!menu);

    const [login,setLogin] = useState({});

    useEffect(()=>{
        onAuthStateChanged(auth,(at) =>{
            setLogin(at)
        })
    });

    let values = {
       darkMode,
       handlerDarkMode,
       menu,
       login,
       handlerMenu
    }

    return (
        <GlobalProvider.Provider value={values}>
            {children}
        </GlobalProvider.Provider>
    );
}


export {GlobalProvider,GlobalContext}