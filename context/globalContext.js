import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { createContext, useEffect, useState } from "react";
import { mask, unMask } from 'remask';
import { GetPerfil } from "../utils/database/perfil/get";
import { toast } from 'react-toastify';

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

    const onChangeNome = (e)=>{
        const originalValue = unMask(e.target.value);
        const maskValue = mask(originalValue,[
             'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
        ])
        setNome(maskValue);
     }

     const onChangeSobreNome = (e)=>{
        const originalValue = unMask(e.target.value);
        const maskValue = mask(originalValue,[
             'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
        ])
        setSobreNome(maskValue);
     }

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

    const valideteForm = ()=>{

        if ( nome != "" && 
             sobreNome != "" && 
             email != "" && 
             telefone != "")
          {
           toast.success("Sucesso no seu cadastro!");
          }  
          else if( nome == "" && 
                  sobreNome == "" && 
                  email == "" && 
                  telefone == "")
          {
            toast.warning("Preencha todos os campos!");
          } 
          else if (sobreNome == "" && email == "" && telefone == "" && nome != "")
          {
            toast.warning("Preencha o campos de sobre nome, email e telefone");
          }
          else if (email == "" && telefone == "" && nome != "" && sobreNome != "" )
          {
            toast.warning("Preencha o campos de email e telefone");
          }
          else if (nome == "" && sobreNome == "" && email != "" && telefone != "")
          {
            toast.warning("Preencha o campos de nome e sobre nome");
          }
          else if (nome == "" && sobreNome == "" && email == "" && telefone != "")
          {
            toast.warning("Preencha o campos de nome, sobre nome e email");
          }
          else if (sobreNome == "" && email == "" && telefone != "" && nome != "")
          {
            toast.warning("Preencha o campos de sobre nome e email");
          }
          else if (email == "" && telefone == "" && nome != "" && sobreNome != "")
          {
            toast.warning("Preencha o campos de email e telefone");
          }
          else if (nome == "" && sobreNome == "" && telefone == "" && email != "")
          {
            toast.warning("Preencha o campos de nome, sobre nome e telefone");
          }
          else if (nome == "" && telefone == "" && sobreNome != "" && email != "")
          {
            toast.warning("Preencha o campos de nome e telefone");
          }
          else if (nome == "" && email == "" && telefone == "" && sobreNome != "")
          {
            toast.warning("Preencha o campos de nome, email e telefone");
          }
          else if (nome == "")
          {
            toast.warning("Preencha o campo de nome");
          }
          else if(sobreNome == "")
          {
            toast.warning("Preencha o campo de sobre nome");
          }
          else if (email == "")
          {
            toast.warning("Preencha o campo de email");
          }
          else if (telefone == "")
          {
            toast.warning("Preencha o campo de telefone");
          } 
}
    useEffect(()=>{
        GetPerfil(setData);
    },[])



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
       onChangeNome,
       sobreNome,
       onChangeSobreNome,
       email,
       telefone,
       valideteForm
    }

    return (
        <GlobalProvider.Provider value={values}>
            {children}
        </GlobalProvider.Provider>
    );
}


export {GlobalProvider,GlobalContext}