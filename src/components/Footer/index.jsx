import './styles.css';
import { AiOutlineInstagram, AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

export const Footer = () => {
    return(
        <footer>

           <label>Desenvolvido por João Souza</label>
           <label>0/03/2023</label>

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