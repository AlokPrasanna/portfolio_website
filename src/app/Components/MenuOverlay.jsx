import React from 'react';
import NavigationLinks from './NavigationLinks';

const MenuOverlay = ({links}) => {

  const ScrollToSection = (id) => {
    const Element = document.getElementById(id);
    if(Element){
        Element.scrollIntoView({behavior:"smooth"});
    }
}
 return (
    <ul className='flex flex-col py-4 items-center'>
        {
            links.map((link,index) => (
                <li key={index} onClick={() => ScrollToSection(link.id)}><NavigationLinks title={link.title} /></li>
                
            ))
        }
    </ul>
  )
}

export default MenuOverlay
