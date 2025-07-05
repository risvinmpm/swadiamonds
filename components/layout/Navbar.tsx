import Image from 'next/image'
import React from 'react'
import logo from '../../public/logo.svg'
import banner from '../../public/Burjuman_banner_1.jpg'

const Navbar = () => {
  return (
    <section className='relative bg-[#00464d]'>
      <div className='main-padding flex justify-between py-2'>
        <Image src={logo} width={80} height={50} alt='' />
        <Image src={banner} width={430} height={200} alt='' />
      </div>
    </section>
  )
}

export default Navbar