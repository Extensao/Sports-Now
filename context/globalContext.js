import { createContext, useEffect, useState } from "react";
import { auth } from "../config/firebase";

const GlobalProvider = createContext({});

const GlobalContext = ({children}) => {

    //State para o itens do evento
    const [darkMode,setDarkMode] = useState(false);

    const handlerDarkMode = () => setDarkMode(!darkMode);

    const [menu,setMenu] = useState(false);

    const handlerMenu = () => setMenu(!menu);

    let values = {
       darkMode,
       handlerDarkMode,
       menu,
       handlerMenu
    }

    return (
        <GlobalProvider.Provider value={values}>
            {children}
        </GlobalProvider.Provider>
    );
}


export {GlobalProvider,GlobalContext}