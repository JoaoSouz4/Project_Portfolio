import './styles.css';
import { useRef } from 'react';
import { QuemSou } from '../../components/QuemSou';
import { MinhasStacks } from '../../components/MinhasStacks';
import { MeusProjetos } from '../../components/MeusProjetos';
import { Contato } from '../../components/Contato';
import { LogoComponent } from '../../components/LogoComponent';
import { Header } from '../../components/Header';
import { Fade } from 'react-awesome-reveal'


export const Home = () => {

    return(
        <>
        <Header ></Header>
        <main>
            <section className="banner">
                <Fade direction = 'up'>
                    <div className='welcome'>
                        <h1>Bem vindo!</h1>
                        <p>Convido você a conhecer meus trabalhos e minhas habilidades neste portfólio dedicado a compartilhar meus feitos na programação.  </p>
                        <button>Navegar</button>
                    </div>
                    <div className="logo-banner">
                        <LogoComponent sizeLogo = "3.4rem" sizeSlogan = "2.3rem"/>
                    </div>
                </Fade>
            </section>

            
            <QuemSou></QuemSou>
            <MinhasStacks></MinhasStacks>
            <MeusProjetos></MeusProjetos>
            <Contato></Contato>
        </main>
        </>
    )
}