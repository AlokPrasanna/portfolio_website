"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import NavigationLinks from './NavigationLinks';
import {Bars3Icon , XMarkIcon} from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';

const NavLinks = [
    {
        title:"About",
        id:"about"
    },
    {
        title:"Projects",
        id:"projects"
    },
    {
        title:"Contact",
        id:"contact"
    }
]

const NavigationBar = () => {
    const [NavBarOpen,setNavBarOpen] = useState(false);

    const ScrollToSection = (id) => {
        const Element = document.getElementById(id);
        if(Element){
            Element.scrollIntoView({behavior:"smooth"});
        }
        setNavBarOpen(false);
    }
    
  return (
    <nav className='fixed mx-auto border border-[#33353F] top-0 right-0 left-0 z-10 bg-[#121212] bg-opacity-100 '>
      <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto p-4'>
        <Link href={"/"} className=' text-2xl md:text-4xl text-white font-semibold'><span className='p-1 mr-1 rounded-md bg-primary-500'>aL</span>oK</Link>
        <div className='mobile-menu block md:hidden'>
            {
                !NavBarOpen ? (
                    <button onClick={() => setNavBarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                        <Bars3Icon className='h-5 w-5' />
                    </button>
                ) : (
                    <button onClick={() => setNavBarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                        <XMarkIcon className='h-5 w-5' />
                    </button>
                )
            }
        </div>
        <div className='menu hidden md:block md:w-auto' id="navbar">
            <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                {NavLinks.map((link,index) => (
                    <li key={index}><div className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer " onClick={() => ScrollToSection(link.id)}>{link.title}</div></li>
                ))}
            </ul>
        </div>
      </div>
      {NavBarOpen ? <MenuOverlay links={NavLinks} /> : null }
    </nav>
  )
}

export default NavigationBar;
