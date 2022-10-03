import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { createContext, useEffect, useState } from "react";
import { mask, unMask } from 'remask';
import { toast } from 'react-toastify';
import { GetAllUser } from '../utils/database/get/user/all';
import { GetAllEventoAtivo } from '../utils/database/get/evento/all/ativo'
import { GetAllEventoDesativo } from "../utils/database/get/evento/all/desativo";
import { GetAllPermissao } from '../utils/database/get/permissao/all'
import { GetEventoAll } from "../utils/database/get/evento/all";

const GlobalProvider = createContext({});

const GlobalContext = ({ children }) => {


  const [dataUsers, setDataUsers] = useState([]);

  const [dataEventoAll, setDataEventoAll] = useState([]);

  const [dataEventoAtivo, setDataEventoAtivo] = useState([]);

  const [dataEventDesativado, setDataEventoDesativado] = useState([]);

  const [dataPermissoes, setDataPermissoes] = useState([]);

  const [darkMode, setDarkMode] = useState(false);

  const handlerDarkMode = () => setDarkMode(!darkMode);

  const [menu, setMenu] = useState(false);

  const handlerMenu = () => setMenu(!menu);

  const [login, setLogin] = useState({});


  const [searchUsers, setSearchUsers] = useState("");

  const [searchEventosAll, setSearchEventosAll] = useState("");

  const [searchEventosDesativadoAll, setSearchEventosDesativadoAll] = useState("");

  const [informacaoHidden, setInformacaoHidden] = useState();

  const [localidadeHidden, setLocalidadeHidden] = useState();

  const handlerInformacao = () => setInformacaoHidden(!informacaoHidden);

  const handlerLocalidade = () => setLocalidadeHidden(!localidadeHidden);

  const [activeForm, setActiveForm] = useState(false);

  const handlerActiveForm = () => setActiveForm(!activeForm);

  const [activeImg, setActiveImg] = useState(false);

  const handlerActiveImg = () => setActiveImg(!activeImg);

  const [activeEditeTitulo, setActiveEditeTitulo] = useState(false);

  const handlerActiveEditeTitulo = () => setActiveEditeTitulo(!activeEditeTitulo);

  const [activeEditeDescricao, setActiveEditeDescricao] = useState(false);

  const handlerActiveEditeDescricao = () => setActiveEditeDescricao(!activeEditeDescricao);

  const [activeEditeEndereco, setActiveEditeEndereco] = useState(false);

  const handlerActiveEditeEndereco = () => setActiveEditeEndereco(!activeEditeEndereco);

  const [activeEditeBairro, setActiveEditeBairro] = useState(false);

  const handlerActiveEditeBairro = () => setActiveEditeBairro(!activeEditeBairro);

  const [activeEditeLocalidade, setActiveEditeLocalidade] = useState(false);

  const handlerActiveEditeLocalidade = () => setActiveEditeLocalidade(!activeEditeLocalidade);

  const [informacaoOrganizadorAtivoViewHidden, setInformacaoOrganizadorAtivoViewHidden] = useState(false);

  const handlerInformacaoOrganizadorAtivoView = () => setInformacaoOrganizadorAtivoViewHidden(!informacaoOrganizadorAtivoViewHidden);


  const [informacaoEventoAtivoViewHidden, setInformacaoEventoAtivoViewHidden] = useState(false);

  const handlerInformacaoEventoAtivoView = () => setInformacaoEventoAtivoViewHidden(!informacaoEventoAtivoViewHidden);

  const [informacaoOrganizadorDesativoViewHidden, setInformacaoOrganizadorDesativoViewHidden] = useState(false);

  const handlerInformacaoOrganizadorDesativoView = () => setInformacaoOrganizadorDesativoViewHidden(!informacaoOrganizadorDesativoViewHidden);


  const [informacaoEventoDesativoViewHidden, setInformacaoEventoDesativoViewHidden] = useState(false);

  const handlerInformacaoEventoDesativoView = () => setInformacaoEventoDesativoViewHidden(!informacaoEventoDesativoViewHidden);


  // State para Perfil

  const [nickName, setNickName] = useState("");

  const onChangeNickName = (e) => {
    setNickName(e.target.value)
  }

  const [telefone, setTelefone] = useState("");

  const onChangeTelefone = (e) => {
    const originalValue = unMask(e.target.value);
    const maskValue = mask(originalValue, [
      "(99)-99999-9999"
    ])
    setTelefone(maskValue);
  }

  // State de paginação para Perfil

  const [itensPageUser, setItensPageUser] = useState(10);

  const [currentPageUser, setCurrentPageUser] = useState(0);

  const pagesUsers = Math.ceil(dataUsers.length / itensPageUser);
  const startIndexUsers = currentPageUser * itensPageUser;
  const endIndexUsers = startIndexUsers + itensPageUser;
  const currenItenUsers = dataUsers.slice(startIndexUsers, endIndexUsers);

  // State de paginação para Evento ativos

  const [itensPageEvento, setItensPageEvento] = useState(10);

  const [currentPageEvento, setCurrentPageEvento] = useState(0);


  const pagesEventos = Math.ceil(dataEventoAtivo.length / itensPageEvento);
  const startIndexEventos = currentPageEvento * itensPageEvento;
  const endIndexEventos = startIndexEventos + itensPageEvento;
  const currenItenEventos = dataEventoAtivo?.slice(startIndexEventos, endIndexEventos);


  // State de paginação para Evento desativados

  const [itensPageDesativadoEvento, setItensPageDesativadoEvento] = useState(10);

  const [currentPageDesativadoEvento, setCurrentPageDesativadoEvento] = useState(0);


  const pagesDesativadoEventos = Math.ceil(dataEventDesativado.length / itensPageDesativadoEvento);
  const startIndexDesativadoEventos = currentPageEvento * itensPageDesativadoEvento;
  const endIndexDesativadoEventos = startIndexDesativadoEventos + itensPageDesativadoEvento;
  const currenItenDesativadoEventos = dataEventDesativado?.slice(startIndexDesativadoEventos, endIndexDesativadoEventos);

  const [img, setImg] = useState({});

  const [titulo, setTitulo] = useState("");

  const onChangeTitulo = (e) => {
    setTitulo(e.target.value);
  }

  const [descricao, setDescricao] = useState("");

  const onChangeDescricao = (e) => {
    setDescricao(e.target.value);
  }

  const [logradouro, setLogradouro] = useState("");

  const onChangeLogradouro = (e) => {
    setLogradouro(e.target.value);
  }

  const [bairro, setBairro] = useState("");

  const onChangeBairro = (e) => {
    setBairro(e.target.value);
  }

  const [localidade, setLocalidade] = useState("");

  const onChangeLocalidade = (e) => {
    const originalValue = unMask(e.target.value);
    const maskValue = mask(originalValue, [
      "AA"
    ])
    setLocalidade(maskValue);
  }

  const limiteNumber = (e) => {
    if (
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
    ) {
      e.preventDefault()
    } else if (
      e.key == 32 ||
      e.keyCode == 8) {
    }
  }

  const capitaLizer = (str) => {
    const teste = str.toLowerCase().replace(/(?:^|\s)\S/g, (e) => {
      return e.toUpperCase()
    })

    return teste;
  }

  const onChangeSearch = (e) => {
    setSearchUsers(e.target.value)
  }

  const onChangeSearchEventoAll = (e) => {
    setSearchEventosAll(e.target.value)
  }

  const onChangeSearchEventoDesativadoAll = (e) => {
    setSearchEventosDesativadoAll(e.target.value)
  }
  useEffect(() => {
    onAuthStateChanged(auth, (at) => {
      setLogin(at);
    })
  });

  const handlerScrollTop = () => {
    if (window.innerHeight > 30)
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
  }

  const valideteFormPerfil = () => {

    if (nickName != "" &&
      telefone != "") {
      toast.success("Sucesso no seu cadastro!");
    }
    else if (nickName == "" &&
      telefone == "") {
      toast.warning("Preencha todos os campos!");
    }
    else if (nickName == "" && telefone == "") {
      toast.warning("Preencha o campos de sobre nickName e telefone");
    }
    else if (nickName == "") {
      toast.warning("Preencha o campo de nickName");
    }
    else if (telefone == "") {
      toast.warning("Preencha o campo de telefone");
    }
  }


  const valideteFormEvento = () => {
    if (img != "" && titulo == "" && descricao != "" && logradouro != "" && bairro != "" && localidade != "") {
      toast.warning("Preencha o campos de titulo");
    } else if (img != "" && descricao == "" && titulo != "" && logradouro != "" && bairro != "" && localidade != "") {
      toast.warning("Preencha o campos de descrição");
    } else if (img != "" && logradouro == "" && titulo != "" && descricao != "" && bairro != "" && localidade != "") {
      toast.warning("Preencha o campos de endereço");
    } else if (img != "" && bairro == "" && titulo != "" && descricao != "" && logradouro != "" && localidade != "") {
      toast.warning("Preencha o campos de bairro");
    } else if (img != "" && localidade == "" && titulo != "" && descricao != "" && logradouro != "" && bairro != "") {
      toast.warning("Preencha o campos de localidade");
    } else if (img != "" && titulo == "" && descricao == "" && logradouro == "" && bairro == "" && localidade == "") {
      toast.warning("Preencha o campos de titulo, descricao, endereço, bairro e  localidade");
    } else if (img != "" && titulo != "" && descricao == "" && logradouro == "" && bairro == "" && localidade == "") {
      toast.warning("Preencha o campos de descricao, endereço, bairro e  localidade");
    } else if (img != "" && titulo != "" && descricao != "" && logradouro == "" && bairro == "" && localidade == "") {
      toast.warning("Preencha o campos de endereço, bairro e  localidade");
    } else if (img != "" && titulo != "" && descricao != "" && logradouro != "" && bairro == "" && localidade == "") {
      toast.warning("Preencha o campos de bairro e  localidade");
    } else if (img != "" && titulo == "" && descricao == "" && logradouro != "" && bairro != "" && localidade != "") {
      toast.warning("Preencha o campos de titulo e descrição");
    } else if (img != "" && titulo == "" && descricao != "" && logradouro == "" && bairro != "" && localidade != "") {
      toast.warning("Preencha o campos de titulo e endereço");
    } else if (img != "" && titulo == "" && descricao != "" && logradouro != "" && bairro == "" && localidade != "") {
      toast.warning("Preencha o campos de titulo e bairro");
    } else if (img != "" && titulo == "" && descricao != "" && logradouro != "" && bairro != "" && localidade == "") {
      toast.warning("Preencha o campos de titulo e localidade");
    } else if (img != "" && titulo != "" && descricao == "" && logradouro == "" && bairro != "" && localidade != "") {
      toast.warning("Preencha o campos de descrição e endereço");
    } else if (img != "" && titulo != "" && descricao == "" && logradouro != "" && bairro == "" && localidade != "") {
      toast.warning("Preencha o campos de descrição e bairro");
    } else if (img != "" && titulo != "" && descricao == "" && logradouro != "" && bairro != "" && localidade == "") {
      toast.warning("Preencha o campos de descrição e localidade");
    } else if (img != "" && titulo != "" && descricao == "" && logradouro == "" && bairro == "" && localidade != "") {
      toast.warning("Preencha o campos de descrição, endereço e bairro");
    } else if (img != "" && titulo != "" && descricao != "" && logradouro != "" && bairro == "" && localidade != "") {
      toast.warning("Preencha o campos de bairro e localidade");
    } else if (img != "" && titulo == "" && descricao == "" && logradouro == "" && bairro == "" && localidade != "") {
      toast.warning("Preencha o campos de titulo, descrição, endereço e bairro");
    } else if (img != "" && titulo == "" && descricao == "" && logradouro == "" && bairro != "" && localidade != "") {
      toast.warning("Preencha o campos de titulo, descrição e endereço");
    } else if (img != "" && titulo != "" && descricao !== "" && logradouro == "" && bairro != "" && localidade == "") {
      toast.warning("Preencha o campos de endereço e localidade");
    } else if (img != "" && titulo != "" && descricao == "" && logradouro == "" && bairro != "" && localidade == "") {
      toast.warning("Preencha o campos de descrição, endereço e localidade");
    } else if (img != "" && titulo == "" && descricao == "" && logradouro == "" && bairro != "" && localidade == "") {
      toast.warning("Preencha o campos de titulo, descrição, endereço e localidade");
    } else if (img != "" && titulo != "" && descricao != "" && logradouro == "" && bairro == "" && localidade != "") {
      toast.warning("Preencha o campos de endereço e bairro");
    } else if (img != "" && titulo != "" && descricao == "" && logradouro != "" && bairro == "" && localidade == "") {
      toast.warning("Preencha o campos de descrição, bairro e localiadade");
    } else if (img != "" && titulo == "" && descricao != "" && logradouro == "" && bairro == "" && localidade != "") {
      toast.warning("Preencha o campos de titulo, endereço e bairro");
    } else if (img != "" && titulo == "" && descricao != "" && logradouro == "" && bairro != "" && localidade == "") {
      toast.warning("Preencha o campos de titulo, endereço e localidade");
    } else if (img != "" && titulo == "" && descricao != "" && logradouro != "" && bairro == "" && localidade == "") {
      toast.warning("Preencha o campos de titulo, bairro e localidade");
    } else if (titulo != "" && descricao != "" && logradouro != "" && bairro != "" && localidade != "" && img?.type != "image/png" && img?.type != "image/jpg") {
      toast.warning("Insira uma imagem valida que seja com extensão .png ou .jpg");
    } else {
      toast.success("Sucesso no seu cadastro de evento!");
    }
  }

  const valideteFormEventoEditar = () => {
    if (activeImg) {
        if (img?.type != "image/png" && img?.type != "image/jpg")
          toast.warning("Insira uma imagem valida que seja com extensão .png ou .jpg");
    } else {
      toast.success("Sucesso no seu cadastro de evento!");
    }
  }

  const [uId, setUid] = useState("");

  const [pUid, setPuId] = useState("");

  const [cardIdEvento, setCardIdEvento] = useState(0);


  useEffect(() => {
    GetAllUser(setDataUsers);
  }, [])

  useEffect(() => {
    GetEventoAll(setDataEventoAll)
  }, [])

  useEffect(() => {
    GetAllEventoAtivo(setDataEventoAtivo);
  }, [])

  useEffect(() => {
    GetAllEventoDesativo(setDataEventoDesativado);
  }, [])

  useEffect(() => {
    GetAllPermissao(setDataPermissoes);
  }, [])

  useEffect(() => {
    dataUsers?.map((u) => {
      if (u?.email == login?.email) {
        setUid(u?.id_user)
      }
    })
  })

  useEffect(() => {
    dataPermissoes?.map((u) => {
      setPuId(u?.id_user)
    })
  })

  let values = {
    darkMode,
    dataUsers,
    handlerDarkMode,
    menu,
    pagesEventos,
    pagesUsers,
    dataEventoAtivo,
    dataEventDesativado,
    pagesDesativadoEventos,
    setSearchUsers,
    onChangeSearch,
    setCurrentPageUser,
    setCurrentPageEvento,
    dataEventoAll,
    setCurrentPageDesativadoEvento,
    currentPageUser,
    currentPageEvento,
    currentPageDesativadoEvento,
    currenItenUsers,
    currenItenEventos,
    currenItenDesativadoEventos,
    login,
    uId,
    pUid,
    dataUsers,
    onChangeSearchEventoAll,
    onChangeSearchEventoDesativadoAll,
    handlerScrollTop,
    handlerMenu,
    capitaLizer,
    onChangeNickName,
    onChangeTelefone,
    setImg,
    onChangeTitulo,
    onChangeDescricao,
    onChangeLogradouro,
    handlerInformacaoOrganizadorDesativoView,
    handlerInformacaoEventoDesativoView,
    informacaoOrganizadorDesativoViewHidden,
    informacaoEventoDesativoViewHidden,
    handlerInformacaoEventoAtivoView,
    handlerInformacaoOrganizadorAtivoView,
    informacaoEventoAtivoViewHidden,
    informacaoOrganizadorAtivoViewHidden,
    onChangeBairro,
    onChangeLocalidade,
    logradouro,
    bairro,
    localidade,
    img,
    handlerActiveImg,
    activeImg,
    setCardIdEvento,
    cardIdEvento,
    titulo,
    descricao,
    nickName,
    telefone,
    valideteFormPerfil,
    handlerActiveEditeTitulo,
    handlerActiveEditeDescricao,
    handlerActiveEditeEndereco,
    handlerActiveEditeBairro,
    handlerActiveEditeLocalidade,
    valideteFormEventoEditar,
    activeEditeTitulo,
    activeEditeDescricao,
    activeEditeEndereco,
    activeEditeBairro,
    activeEditeLocalidade,
    limiteNumber,
    handlerInformacao,
    handlerActiveForm,
    handlerLocalidade,
    activeForm,
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


export { GlobalProvider, GlobalContext }