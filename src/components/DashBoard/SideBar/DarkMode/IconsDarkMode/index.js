import React,{useContext} from 'react'
import {WiSolarEclipse} from 'react-icons/wi'
import { GlobalProvider } from '../../../../../../context/globalContext';
import {MdOutlineDarkMode} from 'react-icons/md'

const IconsDarkMode = () =>{

    const { 
        darkMode
      } = useContext(GlobalProvider);

    return(
        <>
        {
          darkMode ?
         <MdOutlineDarkMode/>
          :
          <WiSolarEclipse/>
        }
        </>
    )
}

export default IconsDarkMode;