import './styles.css';
import { useRef } from 'react';
import { QuemSou } from '../../components/QuemSou';
import { MinhasStacks } from '../../components/MinhasStacks';
import { MeusProjetos } from '../../components/MeusProjetos';
import { Contato } from '../../components/Contato';

export const Home = () => {

    const quemSou = useRef();
    return(
        <main>
            <section className="banner">
                <div className='left'>
                    <h1>Bem vindo</h1>
                    <p>Convido você a conhecer meus trabalhos e minhas habilidades neste portfólio dedicado a compartilhar meus feitos na programação.  </p>
                    <button onClick={()=>{console.log(quemSou)}}>Navegar</button>
                </div>

                <div className='img'>
                </div>
            </section>

            <QuemSou ref = {quemSou}></QuemSou>
            <MinhasStacks></MinhasStacks>
            <MeusProjetos></MeusProjetos>
            <Contato></Contato>
        </main>
    )
}