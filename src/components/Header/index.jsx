
import './styles.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Header = () => {
    
    return(
     <header>
        <div className = "logo-container">
            João Souza
        </div>

        <nav className='nav-list'>
            <ul>
               <a href="#">Home</a>
               <a href="#">Quem sou</a>
               <a href="#">Meus projetos</a>
               <a href="#">Contato</a>
            </ul>
        </nav>
     </header>
    )
}