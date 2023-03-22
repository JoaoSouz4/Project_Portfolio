import './styles.css';
import { Fade } from 'react-awesome-reveal'

export const Contato = () => {
    return (
        <section className='section-apresentation' id='contato'>

            <Fade direction = "up">
                <form action="" className='form-to-contact'>
                    <h1>Vamos trabalhar <strong>juntos!</strong></h1>
                    <input type="email"  placeholder='Digite seu melhor email' id='input-email'/>
                    <textarea name="" id="input-text-area" cols="30" rows="5" placeholder='Mande me uma mensagem...'></textarea>
                    <button className='contact-button'>Enviar</button>
                </form>
            </Fade>
        </section>
)}