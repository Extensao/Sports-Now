import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { createContext, useEffect, useState } from "react";
import { mask, unMask } from 'remask';
import { toast } from 'react-toastify';
import { InclusaoIdUser, UpdatePermissao } from "../utils/database/put/permissao/inclusaoIdUser";
import { GetAllUser } from '../utils/database/get/user/all';
import { GetAllEvento } from '../utils/database/get/evento/all'
import { GetAllPermissao } from '../utils/database/get/permissao/all'
import { AtivoLoginUser } from "../utils/database/put/statusLoginUser/ativarLoginUser";

const GlobalProvider = createContext({});

const GlobalContext = ({children}) => {


    const [dataUsers,setDataUsers] = useState([]);

    const [dataEventos,setDataEventos] = useState([]);

    const [dataPermissoes,setDataPermissoes] = useState([]);
    
    const [capCep,setCapCep] = useState([]);

    const [darkMode,setDarkMode] = useState(false);

    const handlerDarkMode = () => setDarkMode(!darkMode);

    const [menu,setMenu] = useState(false);

    const handlerMenu = () => setMenu(!menu);

    const [login,setLogin] = useState({});


    const [searchUsers,setSearchUsers] = useState("");

    const [informacaoHidden,setInformacaoHidden] = useState();

    const [localidadeHidden,setLocalidadeHidden] = useState();

    const handlerInformacao = () => setInformacaoHidden(!informacaoHidden);

    const handlerLocalidade = () => setLocalidadeHidden(!localidadeHidden);

    // State para Perfil

    const [nickName,setNickName] = useState("");

    const onChangeNickName = (e) =>{
      setNickName(e.target.value)
    }

    const [telefone,setTelefone] = useState("");

    const onChangeTelefone = (e)=>{
      const originalValue = unMask(e.target.value);
      const maskValue = mask(originalValue,[
          "(99)-99999-9999"
      ])
      setTelefone(maskValue);
   }

    // State de paginação para Perfil

    const [itensPage,setItensPage] = useState(8);

     const [currentPage,setCurrentPage] = useState(0);

      const pagesUsers = Math.ceil(dataUsers.length / itensPage);
      const startIndexUsers = currentPage * itensPage;
      const endIndexUsers = startIndexUsers + itensPage;
      const currenItenUsers = dataUsers.slice(startIndexUsers,endIndexUsers);
    

      const [img,setImg] = useState({});


      const [titulo,setTitulo] = useState("");

      const onChangeTitulo = (e) =>{
        setTitulo(e.target.value);
      }
      
      const [descricao,setDescricao] = useState("");

      const onChangeDescricao = (e) =>{
        setDescricao(e.target.value);
      }


      const [logradouro,setLogradouro] = useState("");

      const onChangeLogradouro = (e) =>{
        setLogradouro(e.target.value);
      }

      const [bairro,setBairro] = useState("");

      const onChangeBairro = (e) =>{
        setBairro(e.target.value);
      }

      const [localidade,setLocalidade] = useState("");

      const onChangeLocalidade = (e) =>{
        setLocalidade(e.target.value);
      }

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

    const valideteFormPerfil = ()=>{

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


  const valideteFormEvento = () =>{
    if(img != "" && titulo == "" && descricao != "" && logradouro != "" && bairro != "" && localidade != ""){
      toast.warning("Preencha o campos de titulo");
    }else if(img != "" &&  descricao == "" && titulo != "" && logradouro != "" && bairro != "" && localidade != ""){
      toast.warning("Preencha o campos de descrição");
    }else if(img != "" &&  logradouro == "" && titulo != "" && descricao != "" && bairro != "" && localidade != ""){
      toast.warning("Preencha o campos de endereço");
    }else if(img != "" && bairro == ""  && titulo != "" && descricao != "" && logradouro != "" && localidade != ""){
      toast.warning("Preencha o campos de bairro");
    }else if(img != "" &&  localidade == "" && titulo != "" && descricao != "" && logradouro != "" && bairro != ""){
      toast.warning("Preencha o campos de localidade");
    }else if(img != "" && titulo == "" && descricao == "" && logradouro == "" && bairro == "" && localidade == ""){
      toast.warning("Preencha o campos de titulo, descricao, endereço, bairro e  localidade");
    }else if(img != "" && titulo != "" && descricao == "" && logradouro == "" && bairro == "" && localidade == ""){
      toast.warning("Preencha o campos de descricao, endereço, bairro e  localidade");
    }else if(img != "" && titulo != "" && descricao != "" && logradouro == "" && bairro == "" && localidade == ""){
      toast.warning("Preencha o campos de endereço, bairro e  localidade");
    }else if(img != "" && titulo != "" && descricao != "" && logradouro != "" && bairro == "" && localidade == ""){
      toast.warning("Preencha o campos de bairro e  localidade");
    }else if(img != "" && titulo == "" && descricao == "" && logradouro != "" && bairro != "" && localidade != ""){
      toast.warning("Preencha o campos de titulo e descrição");
    }else if(img != "" && titulo == "" && descricao != "" && logradouro == "" && bairro != "" && localidade != ""){
      toast.warning("Preencha o campos de titulo e endereço");
    }else if(img != "" && titulo == "" && descricao != "" && logradouro != "" && bairro == "" && localidade != ""){
      toast.warning("Preencha o campos de titulo e bairro");
    }else if(img != "" && titulo == "" && descricao != "" && logradouro != "" && bairro != "" && localidade == ""){
      toast.warning("Preencha o campos de titulo e localidade");
    }else if(img != "" && titulo != "" && descricao == "" && logradouro == "" && bairro != "" && localidade != ""){
      toast.warning("Preencha o campos de descrição e endereço");
    }else if(img != "" && titulo != "" && descricao == "" && logradouro != "" && bairro == "" && localidade != ""){
      toast.warning("Preencha o campos de descrição e bairro");
    }else if(img != "" && titulo != "" && descricao == "" && logradouro != "" && bairro != "" && localidade == ""){
      toast.warning("Preencha o campos de descrição e localidade");
    }else if(img != "" && titulo != "" && descricao == "" && logradouro == "" && bairro == "" && localidade != ""){
      toast.warning("Preencha o campos de descrição, endereço e bairro");
    }else if(img != "" && titulo != "" && descricao != "" && logradouro != "" && bairro == "" && localidade != ""){
      toast.warning("Preencha o campos de bairro e localidade");
    }else if(img != "" && titulo == "" && descricao == "" && logradouro == "" && bairro == "" && localidade != ""){
      toast.warning("Preencha o campos de titulo, descrição, endereço e bairro");
    }else if(img != "" && titulo == "" && descricao == "" && logradouro == "" && bairro != "" && localidade != ""){
      toast.warning("Preencha o campos de titulo, descrição e endereço");
    }else if(img != "" && titulo != "" && descricao !== "" && logradouro == "" && bairro != "" && localidade == ""){
      toast.warning("Preencha o campos de endereço e localidade");
    }else if(img != "" && titulo != "" && descricao == "" && logradouro == "" && bairro != "" && localidade == ""){
      toast.warning("Preencha o campos de decrição, endereço e localidade");
    }else if(img != "" && titulo == "" && descricao == "" && logradouro == "" && bairro != "" && localidade == ""){
      toast.warning("Preencha o campos de titulo, decrição, endereço e localidade");
    }else if(img != "" && titulo != "" && descricao != "" && logradouro == "" && bairro == "" && localidade != ""){
      toast.warning("Preencha o campos de endereço e bairro");
    }else if(img != "" && titulo != "" && descricao == "" && logradouro != "" && bairro == "" && localidade == ""){
      toast.warning("Preencha o campos de descrição, bairro e localiadade");
    }else if(img != "" && titulo == "" && descricao != "" && logradouro == "" && bairro == "" && localidade != ""){
      toast.warning("Preencha o campos de titulo, endereço e bairro");
    }else if(img != "" && titulo == "" && descricao != "" && logradouro == "" && bairro != "" && localidade == ""){
      toast.warning("Preencha o campos de titulo, endereço e localidade");
    }else if(img != "" && titulo == "" && descricao != "" && logradouro != "" && bairro == "" && localidade == ""){
      toast.warning("Preencha o campos de titulo, bairro e localidade");
    }else if(titulo != "" && descricao != "" && logradouro != "" && bairro != "" && localidade != "" && img.type != "image/png" && img.type != "image/jpg"){
      toast.warning("Insira uma imagem valida que seja com extensão .png ou .jpg");
    }
    else {
      toast.success("Sucesso no seu cadastro!");
    }
  }

  
  // const validarSearchCep = () =>{
  //   if(img.type !== "image/png" || img.type !== "image/jpg" ){
  //     toast.warning("Insirá uma imagem valida do tipo .png ou .jpg");
  //   }
  // }

  const [uId,setUid] = useState("");
  
  const [pUid,setPuId] = useState("");

  
  useEffect(()=>{
    GetAllUser(setDataUsers);
  },[])

    useEffect(()=>{
      GetAllEvento(setDataEventos);
  },[])


  useEffect(()=>{
    GetAllPermissao(setDataPermissoes);
  },[])

  useEffect(()=>{
    dataUsers.map((u)=>{
      if(u.email == login?.email){
        setUid(u?.id_user)
      }
    })
  })

  useEffect(()=>{
    dataPermissoes.map((u)=>{
        setPuId(u?.id_user)
    })
  })


  

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
       uId,
       pUid,
       dataUsers,
       handlerScrollTop,
       handlerMenu,
       capitaLizer,
       onChangeNickName,
       onChangeTelefone,
       setImg,
       onChangeTitulo,
       onChangeDescricao,
       onChangeLogradouro,
       onChangeBairro,
       onChangeLocalidade,
       logradouro,
       bairro,
       localidade,
       img,
       titulo,
       descricao,
       nickName,
       telefone,
       valideteFormPerfil,
       limiteNumber,
       handlerInformacao,
       handlerLocalidade,
       informacaoHidden,
       localidadeHidden,
       valideteFormEvento
    }

    return (
        <GlobalProvider.Provider value={values}>
            {children}
        </GlobalProvider.Provider>
    );
}


export {GlobalProvider,GlobalContext}