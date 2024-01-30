import React from 'react';
import NavigationLinks from './NavigationLinks';

const MenuOverlay = ({links}) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
        {
            links.map((link,index) => (
                <li key={index}><NavigationLinks href={link.path} title={link.title} /></li>
                
            ))
        }
    </ul>
  )
}

export default MenuOverlay
