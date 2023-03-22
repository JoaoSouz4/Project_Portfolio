import './styles.css';
import { Fade } from 'react-awesome-reveal'
import  photo  from '../img/photo.jpeg'

export const QuemSou = () => {
    return (
        <section className='section-apresentation'  id = 'quem-sou'>
            <Fade>
                <div className="box-text">
                    <h1 className = 'title-section'>Quem Sou?</h1>
                    <div className="paragraphs">
                        <p>
                            Me chamo João Souza, moro na cidade de Porto-Velho(RO) tenho 20 anos e sou desenvolvedor <strong>front-end</strong> web.
                            Estudo programação ha um ano e meio, elaborando aplicações cada vez mais
                            complexas no decorrer do meu aprendizado.
                        </p>
                        <p>
                            Faço <strong>Sistemas de Informação</strong> remotamente na instuição Estácio.
                        </p>
                        <p>
                           Estou em busca de oportunidades para aplicar tudo que venho aprendendo, e aprender ainda mais
                           em <strong>entregar soluções</strong> com a programação.
                        </p>
                    </div>
                </div>
                <img className = "my-photo" src= {photo}></img>
            </Fade>
        </section>
    )
}