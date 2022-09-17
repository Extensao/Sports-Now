import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { createContext, useEffect, useState } from "react";
import { mask, unMask } from 'remask';
import { GetPerfil } from "../utils/database/perfil/get";

const GlobalProvider = createContext({});

const GlobalContext = ({children}) => {


    const [data,setData] = useState([]);

    const [darkMode,setDarkMode] = useState(false);

    const handlerDarkMode = () => setDarkMode(!darkMode);

    const [menu,setMenu] = useState(false);

    const handlerMenu = () => setMenu(!menu);

    const [login,setLogin] = useState({});


    // State para Perfil

    const [nome,setNome] = useState("");

    const [sobreNome,setSobreNome] = useState("");

    const [email,setEmail] = useState("");

    const [telefone,setTelefone] = useState("");

    const onChangeTelefone = (e)=>{
        const originalValue = unMask(e.target.value);
        const maskValue = mask(originalValue,[
            "(99)-99999-9999"
        ])
        setTelefone(maskValue);
     }

    useEffect(()=>{
        onAuthStateChanged(auth,(at) =>{
            setLogin(at)
        })
    });

    const handlerScrollTop = () =>{
    if(window.innerHeight > 30)
        window.scroll({
            top: 0,
            behavior:'smooth'
        })
    }

    useEffect(()=>{
        GetPerfil(setData);
    },[])

    console.log(data);
    
    let values = {
       darkMode,
       handlerDarkMode,
       menu,
       login,
       handlerScrollTop,
       handlerMenu,
       setNome,
       setSobreNome,
       setEmail,
       onChangeTelefone,
       nome,
       sobreNome,
       email,
       telefone
    }

    return (
        <GlobalProvider.Provider value={values}>
            {children}
        </GlobalProvider.Provider>
    );
}


export {GlobalProvider,GlobalContext}