import React from 'react';
import {motion} from "framer-motion";

const Variants={
   default: { width: 0},
   active: {width: "calc(100% - 0.75rem)"},
};

const HandelTabButton = ({active,selectTab,children}) => {
    const ButtonClasses = active ? 'text-white' : 'text-[#ADB7BE]' ;

  return (
     <button onClick={selectTab} >
        <p className={`mr-3 font-semibold hover:text-white ${ButtonClasses}`}>
            {children}
        </p>
        <motion.div animate={active ? "active" : "default"} variants={Variants} className='h-1 bg-primary-500 mt-2 mr-3'></motion.div>
     </button>
  )
}

export default HandelTabButton;

