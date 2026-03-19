"use client"
import React, { useEffect, useState } from 'react'

import { useSession, signIn } from 'next-auth/react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const { data: session } = useSession();

  useEffect(() => {
    const onScroll = () => setScrolled(window.pageYOffset > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navClasses = `fixed border transition-all duration-300 border-transparent top-0 left-0 right-0 z-50 flex justify-between items-center px-20 py-2 ${
    scrolled ? 'bg-black/0 border-none' : 'bg-black/50 border-b-white/20 backdrop-blur-sm'
  }`

  const boxClasses = `transition-all duration-300 flex gap-3 h-10 rounded-md cursor-pointer border items-center justify-evenly px-4 ${
    scrolled ? 'border-white/20 bg-black/50 backdrop-blur-sm' : 'border-transparent bg-black/0'
  }`

  return (
    <nav className={navClasses}>
      <div className={`${boxClasses} w-50`}>
        <span className='text-2xl font-semibold text-white'>Cooked</span>
      </div>
      <ul className={`${boxClasses} w-40 text-white`}>
        <li onClick={() => !session && signIn("spotify")}>
          <span>{session ? session.user.name : 'Login'}</span>
        </li>
        <div className='h-[65%] bg-white/20 w-px'></div>
        <li>
          <a href="https://github.com/noobcodercloud/cooked" target="_blank">Github</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar