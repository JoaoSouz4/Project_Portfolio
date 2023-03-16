import './styles.css';
import { useRef } from 'react';
import { QuemSou } from '../../components/QuemSou';
import { MinhasStacks } from '../../components/MinhasStacks';
import { MeusProjetos } from '../../components/MeusProjetos';
import { Contato } from '../../components/Contato';
import { LogoComponent } from '../../components/LogoComponent';
import { Header } from '../../components/Header';

export const Home = () => {

    return(
        <>
        <Header ></Header>
        <main>
            <section className="banner">
                <div className='welcome'>
                    <h1>Bem vindo</h1>
                    <p>Convido você a conhecer meus trabalhos e minhas habilidades neste portfólio dedicado a compartilhar meus feitos na programação.  </p>
                    <button>Navegar</button>
                </div>
                <div className="logo-banner">
                    <LogoComponent sizeLogo = "2.3rem" sizeSlogan = "1.2rem"/>
                </div>
            </section>

            <QuemSou></QuemSou>
            <MinhasStacks></MinhasStacks>
            <MeusProjetos></MeusProjetos>
            <Contato></Contato>
        </main>
        </>
    )
}