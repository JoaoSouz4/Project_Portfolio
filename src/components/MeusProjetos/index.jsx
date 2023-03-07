import './styles.css';
import { CardProjects } from '../CardProjects';
import logo_RC from '../img/1.png';
import logo_CA from '../img/2.png';
import logo_TC from '../img/3.png';
import logo_GS from '../img/4.png';

export const MeusProjetos = () => {
    return (
        <section className='section-myprojects'>
            <h1>Meus Projetos</h1>
            <div className="slider">
                <CardProjects
                    title = "Meu Repositório Criativo"
                    img = {logo_RC}
                />
                <CardProjects
                    title = "Clima Agora"
                    img = {logo_CA}
                />
                <CardProjects
                    title = "Templo dos Conselhos"
                    img = {logo_TC}
                />
                <CardProjects
                    title = "Gerador de Senhas"
                    img = {logo_GS}
                />
            </div>
        </section>
    )
}