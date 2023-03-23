import './styles.css';
import { AiOutlineInstagram, AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { LogoComponent } from '../LogoComponent';

export const Footer = () => {
    return(
        <footer>
           <LogoComponent sizeLogo = "2.3rem" sizeSlogan = "1.2rem"/>
           <label className='credits'>Desenvolvido por João Souza</label>
           <label>Março de 2023</label>

           <div className='my-social-midias'>
                <AiFillGithub className='icon-social-media'></AiFillGithub>
                <AiFillLinkedin className='icon-social-media'></AiFillLinkedin>
                <AiOutlineInstagram className='icon-social-media'></AiOutlineInstagram>
                <AiOutlineMail className='icon-social-media'></AiOutlineMail>
           </div>

           <div className="my-location">
            
           </div>
        </footer>
    )
}