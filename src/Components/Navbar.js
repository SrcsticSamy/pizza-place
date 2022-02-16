import { useState } from 'react'
import { Link } from 'react-router-dom';

import { motion, AnimatePresence } from 'framer-motion';

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoPizzaOutline } from "react-icons/io5";

function Navbar() {

    const [open, setOpen] = useState(false)

    const navVariants = {
        whileTap: {
            scale:0.9,
            transition:{duration: 0.35}
        }
    }

  return (
    <nav className='absolute w-full text-light bg-dark
    md:px-20 py-1 flex md:flex-row flex-col md:justify-between justify-center items-center z-50'>

        <div className='md:w-max md:block w-full flex justify-between px-7 py-3'>
            <span className='text-2xl font-extrabold '> <IoPizzaOutline className='inline text-primary text-4xl'/>KrustyKrab</span>

            <motion.button whileTap={{scale: 0.9, rotate: 45}} whileHover={{scale:1.1}} onClick={()=>setOpen(!open)} 
            className='p-2 ring-2 ring-primary md:hidden w-fit ml-auto mr-0'>{open? <AiOutlineClose/> : <AiOutlineMenu/>}</motion.button>
        </div>

        
        <div className='hidden w-80 flex-row justify-evenly gap-6 text-center md:flex font-bold'>
        <Link to="/"><motion.button variants={navVariants} whileTap="whileTap" className="font-bold text-primary" >Home</motion.button></Link>
            
            <motion.button variants={navVariants} whileTap="whileTap" className=" hover:text-primary"><Link to="/menu">Menu</Link></motion.button>
            <motion.button variants={navVariants} whileTap="whileTap" className="hover:text-primary" ><Link to="/gallery">Gallery</Link></motion.button>
        </div>

        
        <AnimatePresence>
            {open && 
            <motion.div 
            key="menu"
            exit={{x: -1000}}
            initial={{x: -1000}}
            animate={{x: [-1000, 0]}}
            transition={{duration:0.25}}
            className='flex flex-col justify-center text-center text-light gap-10 md:hidden text-5xl h-full py-12 w-full px-10 border-b-2 border-primary'>

                <motion.button variants={navVariants} whileTap="whileTap" className="font-bold text-primary" >Home</motion.button>
                <motion.button variants={navVariants} whileTap="whileTap" >Menu</motion.button>
                <motion.button variants={navVariants} whileTap="whileTap" >Gallery</motion.button>

            </motion.div>
            }
        </AnimatePresence>


    </nav>
  )
}

export default Navbar