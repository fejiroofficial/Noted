import React from 'react'
import Hero from './components/hero'
import Image from 'next/image'
import logo from '../app/assets/svg/logo.svg'
import Container from './components/container'

export default function Home() {
  return (
    <div className='bg-black px-6 md:px-16 py-3 md:py-8 '>
              <Image src={logo} alt='logo' />
      <Hero />
      <Container />
    
    </div>
  )
}

