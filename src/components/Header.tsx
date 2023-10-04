"use client"
import { FC, useEffect, useState } from 'react'
import NavLink from './NavLink'
import { cn } from '@/lib/utils'

interface HeaderProps {
  
}

const Header: FC<HeaderProps> = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  useEffect(() => {
    // @ts-ignore
    const body:HTMLBodyElement = document.querySelector("body");
    if (isMenuOpen) {
      body?.classList.add("is-menu-open");
    } else {
      body?.classList.remove("is-menu-open");
    }
  }, [isMenuOpen]);

  return (
    <header className="absolute inset-x-0 top-0 px-6 z-50">
      <div className="max-w-[724px] mx-auto">
        <div className="flex justify-end lg:hidden py-5">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={cn("burger-menu-btn", {"active": isMenuOpen})}>
            <span></span>
          </button>
        </div>
        <div className={cn("invisible opacity-0 transition-all duration-300 ease-out fixed inset-0 p-8 pt-12 bg-gray-900 lg:visible lg:opacity-100 lg:bg-transparent lg:static lg:p-0 lg:py-5 lg:flex lg:justify-between lg:items-center", {"visible opacity-100": isMenuOpen})}>
          <ul className="lg:flex lg:gap-8">
            <li>
              <NavLink 
                onClick={() => setIsMenuOpen(false)}
                className="text-base lg:text-[13px] py-2 lg:py-0"
                href="#"
              >Store</NavLink>
            </li>
            <li>
              <NavLink 
                onClick={() => setIsMenuOpen(false)}
                className="text-base lg:text-[13px] py-2 lg:py-0"
                href="#"
              >Developer</NavLink>
            </li>
            <li>
              <NavLink 
                onClick={() => setIsMenuOpen(false)}
                className="text-base lg:text-[13px] py-2 lg:py-0"
                href="#"
                badge="New" badgeStyle="relative border border-[#2BAFFF] rounded-2xl text-[#2BAFFF] px-2">Teams</NavLink>
            </li>
            <li>
              <NavLink 
                onClick={() => setIsMenuOpen(false)}
                className="text-base lg:text-[13px] py-2 lg:py-0"
                href="#"
              >Pricing</NavLink>
            </li>
            <li>
              <NavLink 
                onClick={() => setIsMenuOpen(false)}
                className="text-base lg:text-[13px] py-2 lg:py-0"
                href="#"
              >Blog</NavLink>
            </li>
          </ul>
          <ul className="lg:flex lg:gap-8 lg:items-center">
            <li>
              <NavLink 
                onClick={() => setIsMenuOpen(false)}
                className="text-base lg:text-[13px] py-2 lg:py-0"
                href="#"
              >Login</NavLink>
            </li>
            <li>
              <NavLink 
                onClick={() => setIsMenuOpen(false)}
                className="text-base lg:text-[13px] py-2 lg:bg-white/[.05] lg:py-2 lg:px-4 lg:rounded-md lg:hover:bg-white/20"
                href="#"
              >Download</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header