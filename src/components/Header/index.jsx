
import './styles.css';
import { BiMenu } from 'react-icons/bi'
import { useRef, useState } from 'react';
import { AiFillHome, AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { BsStack } from 'react-icons/bs';
import { SiAboutdotme } from 'react-icons/si'
import { RiContactsLine } from 'react-icons/ri'
import { MdNavigateBefore } from 'react-icons/md'

import { LogoComponent } from '../LogoComponent';


export const Header = (props) => {

   const [menu, setMenu] = useState(false);
   const mobileNav = useRef();

   const handleClick = async() => {
      if(menu) {
          mobileNav.current.style.animationName = "close"
         await setMenu(false);
         
         return;
      }
      if(!menu){
         mobileNav.current.style.animationName = "open"
         await setMenu(true)
         
         return
      }
   }

   const handleClose = () => {
      mobileNav.current.style.animationName = "close"
      setMenu(false);
   }
    return(
     <header>
        <div className = "logo-container">
         <div className='icon-menu-mobile'>
            {menu && <MdNavigateBefore onClick={handleClick}/>}
            {!menu && <BiMenu onClick={handleClick}/>}
         </div>
          <LogoComponent sizeLogo = "1rem" sizeSlogan = "0.7rem"/>
        </div>

        <nav className='nav-list'>
            <ul>
               <a href="#" >Home</a>
               <a href="#quem-sou">Quem sou</a>
               <a href="#minhas-stacks">Stacks</a>
               <a href="#meus-projetos">Meus projetos</a>
               <a href="#contato">Contato</a>
            </ul>
        </nav>

        <nav className="nav-list-mobile" ref = {mobileNav}>
               <ul>
                  <a href="#" onClick={handleClose}>
                     <AiFillHome className='icon-nav'/>
                     Home
                  </a>

                  <a href="#quem-sou" onClick={handleClose}>
                     <SiAboutdotme className='icon-nav'/>
                     Quem sou
                  </a>

                  <a href="#minhas-stacks" onClick={handleClose}>
                     <BsStack className='icon-nav' />
                     Stacks
                  </a>

                  <a href="#meus-projetos" onClick={handleClose}>
                     <AiOutlineFundProjectionScreen className='icon-nav'/>
                     Meus projetos
                  </a>

                  <a href="#contato" onClick={handleClose}>
                     <RiContactsLine className='icon-nav'/>
                     Contato
                  </a>
               </ul>
        </nav>
     </header>
    )
}