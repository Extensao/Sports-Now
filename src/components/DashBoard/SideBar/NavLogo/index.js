import Image from 'next/image'
import React from 'react'
import Logo from '../../../../public/logo.png';

const NavLogo = () => {
  return (
    <Image
      src={Logo}
      width={'50px'}
      height={'50px'}
      alt={'Imagem'}
      style={{
        borderRadius:'50%'
      }}
      />
  )
}

export default NavLogo