import {RiDashboardFill} from 'react-icons/ri';
import {HiDocumentSearch} from 'react-icons/hi';
import {IoIosCreate} from 'react-icons/io';
import {VscLayersDot,VscLayers} from 'react-icons/vsc';

const link = [
    {
     id:1,
     name:'Home',
     icon: <RiDashboardFill></RiDashboardFill>,
     href:"/",
     mt:'1rem'
    },
    {
        id:2,
        name:'Quem Somos',
        icon: <IoIosCreate></IoIosCreate>,
        href:"/quemSomos",
        ml:"1.5rem",
        my:'1rem'
    },
    {
        id:3,
        name:'Serviços',
        icon: <VscLayers></VscLayers>,
        href:"/servicos",
        ml:"3rem"
    }
]


export {link}