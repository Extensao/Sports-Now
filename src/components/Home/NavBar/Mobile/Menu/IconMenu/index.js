import React, { useContext } from 'react'
import { GlobalProvider } from '../../../../../../../context/globalContext';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdClose} from 'react-icons/md'

const IconMenu = () => {

    const { 
        menu
      } = useContext(GlobalProvider);

  return (
    <>
    {
        menu
        ?
        <MdClose/>
        :
        <GiHamburgerMenu/>
    }
    </>
  )
}

export default IconMenu