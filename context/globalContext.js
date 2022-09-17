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

    
 const limiteNumber = (e) =>{
    if(
        e.key == '0' ||
        e.key == '1' ||
        e.key == '2' ||
        e.key == '3' ||
        e.key == '4' ||
        e.key == '5' ||
        e.key == '6' ||
        e.key == '7' ||
        e.key == '8' ||
        e.key == '9' ||
        e.keyCode == 226 ||
        e.keyCode == 193 ||
        e.keyCode == 191 ||
        e.keyCode == 188 ||
        e.keyCode == 221 ||
        e.keyCode == 220 ||
        e.keyCode == 187 ||
        e.keyCode == 109 ||
        e.keyCode == 189 ||
        e.keyCode == 48 ||
        e.keyCode == 106 ||
        e.keyCode == 107 ||
        e.keyCode == 111 ||
        e.keyCode == 49 ||
        e.keyCode == 50 ||
        e.keyCode == 51 ||
        e.keyCode == 52 ||
        e.keyCode == 53 ||
        e.keyCode == 54 ||
        e.keyCode == 55 ||
        e.keyCode == 56 ||
        e.keyCode == 57 ||
        e.keyCode == 58 ||
        e.keyCode == 59 ||
        e.keyCode == 60 ||
        e.keyCode == 192 
        ){
        e.preventDefault()
    }else if(
               e.key == 32 || 
               e.keyCode == 8){
    }
   }


    const capitaLizer  = (str)=>{
        const teste = str.toLowerCase().replace(/(?:^|\s)\S/g,(e)=>{
          return e.toUpperCase()
      })
    
      return teste;
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
       capitaLizer,
       setSobreNome,
       setEmail,
       onChangeTelefone,
       nome,
       sobreNome,
       email,
       telefone,
       valideteForm,
       limiteNumber
    }

    return (
        <GlobalProvider.Provider value={values}>
            {children}
        </GlobalProvider.Provider>
    );
}


export {GlobalProvider,GlobalContext}