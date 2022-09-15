import {RiDashboardFill} from 'react-icons/ri';
import {IoIosCreate} from 'react-icons/io';
import {VscLayersDot,VscLayers} from 'react-icons/vsc';

const link = [
    {
     id:1,
     name:'DashBoard',
     icon: <RiDashboardFill></RiDashboardFill>,
     href:"/dashboard",
     mt:"1rem"
    },
    
    {
        id:2,
        name:'Criar Evento',
        icon: <IoIosCreate></IoIosCreate>,
        href:"/dashboard/criarEvento",
        my:"1rem"
    },
    {
        id:3,
        name:'Acompanhar Evento',
        icon: <VscLayers></VscLayers>,
        href:"/dashboard/acompanharEvento",
        my:"1rem"
    },
    {
        id:4,
        name:'Eventos Desativados',
        icon: <VscLayersDot></VscLayersDot>,
        href:"/dashboard/eventosDesativados",
    }
]


export {link}