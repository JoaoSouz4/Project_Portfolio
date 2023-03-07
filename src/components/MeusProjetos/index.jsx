import './styles.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { CardProjects } from '../CardProjects';

export const MeusProjetos = () => {
    return (
        <section className='section-myprojects'>
            <h1>Meus Projetos</h1>
            <div className="slider">
                <CardProjects
                    title = "Meu Repositório Criativo"
                />
                <CardProjects
                    title = "Clima Agora"
                />
                <CardProjects
                    title = "Templo dos Conselhos"
                />
                <CardProjects
                    title = "Gerador de Senhas"
                />
            </div>
        </section>
    )
}