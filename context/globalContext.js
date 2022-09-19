import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { createContext, useEffect, useState } from "react";
import { mask, unMask } from 'remask';
import { toast } from 'react-toastify';
import { GetEvento } from "../utils/database/get/evento";
import { GetUser } from "../utils/database/get/user";

const GlobalProvider = createContext({});

const GlobalContext = ({children}) => {


    const [dataUsers,setDataUsers] = useState([]);

    const [dataEventos,setDataEventos] = useState([]);

    const [darkMode,setDarkMode] = useState(false);

    const handlerDarkMode = () => setDarkMode(!darkMode);

    const [menu,setMenu] = useState(false);

    const handlerMenu = () => setMenu(!menu);

    const [login,setLogin] = useState({});


    const [searchUsers,setSearchUsers] = useState("");

    // State para Perfil

    const [nickName,setNickName] = useState("");

    const [telefone,setTelefone] = useState("");

    const [itensPage,setItensPage] = useState(8);

     const [currentPage,setCurrentPage] = useState(0);


      const pagesUsers = Math.ceil(dataUsers.length / itensPage);
      const startIndexUsers = currentPage * itensPage;
      const endIndexUsers = startIndexUsers + itensPage;
      const currenItenUsers = dataUsers.slice(startIndexUsers,endIndexUsers);
     

      console.log(currenItenUsers)
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

     const onChangeSearch = (e)=>{
       setSearchUsers(e.target.value)
     }

    useEffect(()=>{
        onAuthStateChanged(auth,(at) =>{
            setLogin(at);
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

        if ( nickName != "" && 
             telefone != "")
          {
           toast.success("Sucesso no seu cadastro!");
          }  
          else if( nickName == "" && 
                  telefone == "")
          {
            toast.warning("Preencha todos os campos!");
          } 
          else if (nickName == "" && telefone == "")
          {
            toast.warning("Preencha o campos de sobre nickName e telefone");
          }
          else if (nickName == "")
          {
            toast.warning("Preencha o campo de nickName");
          }
          else if (telefone == "")
          {
            toast.warning("Preencha o campo de telefone");
          } 
  }

  useEffect(()=>{
    GetUser(setDataUsers);
  },[])

    useEffect(()=>{
      GetEvento(setDataEventos);
  },[])

    let values = {
       darkMode,
       dataUsers,
       handlerDarkMode,
       menu,
       pagesUsers,
       setSearchUsers,
       onChangeSearch,
       currenItenUsers,
       currentPage,
       login,
       dataUsers,
       handlerScrollTop,
       handlerMenu,
       capitaLizer,
       setNickName,
       onChangeTelefone,
       nickName,
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