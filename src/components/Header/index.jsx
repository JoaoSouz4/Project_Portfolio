
import './styles.css';
import { BiMenu } from 'react-icons/bi'
import { useRef, useState } from 'react';
import { AiFillHome, AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { BsStack } from 'react-icons/bs';
import { SiAboutdotme } from 'react-icons/si'
import { RiContactsLine } from 'react-icons/ri'
import { MdNavigateBefore } from 'react-icons/md'

import { LogoComponent } from '../LogoComponent';


export const Header = () => {

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
               <a href="#" className = "current-page">Home</a>
               <a href="#">Quem sou</a>
               <a href="#">Stacks</a>
               <a href="#">Meus projetos</a>
               <a href="#">Contato</a>
            </ul>
        </nav>

        <nav className="nav-list-mobile" ref = {mobileNav}>
               <ul>
                  <a href="#">
                     <AiFillHome className='icon-nav'/>
                     Home
                  </a>

                  <a href="#">
                     <SiAboutdotme className='icon-nav'/>
                     Quem sou
                  </a>

                  <a href="#">
                     <BsStack className='icon-nav' />
                     Stacks
                  </a>

                  <a href="#">
                     <AiOutlineFundProjectionScreen className='icon-nav'/>
                     Meus projetos
                  </a>

                  <a href="#">
                     <RiContactsLine className='icon-nav'/>
                     Contato
                  </a>
               </ul>
        </nav>
     </header>
    )
}