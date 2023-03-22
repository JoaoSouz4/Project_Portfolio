import './styles.css';
import { Fade } from 'react-awesome-reveal';
import { useState } from 'react'

export const Contato = () => {
    const [nameUser, setNameUser] = useState();
    const [email, setEmail] = useState();
    const [bodyEmail, setBodyEmail] = useState();

    function sendEmail(e){
        e.preventDefautl();
        alert('envio teste')
    }

    return (
        <section className='form section-contact' id='contato'>
            <Fade direction = "up">
                <form className='form-to-contact'
                >
                    <h1>Vamos trabalhar <strong>juntos!</strong></h1>

                    <input type="text"
                           placeholder='Digite seu nome' 
                           id='input-name'
                           onChange={(e)=>{setNameUser(e.target.value)}}
                           value = {nameUser}
                           />

                    <input type="email"  
                           placeholder='Digite seu melhor email'
                           id='input-email'
                           onChange={(e)=>{setEmail(e.target.value)}}
                           value = {email}
                           />

                    <textarea name="" 
                              id="input-text-area" 
                              cols="30" rows="5" 
                              placeholder='Mande me uma mensagem...'
                              onChange={(e)=>{setBodyEmail(e.target.value)}}
                              value = {bodyEmail}
                            />
                    
                    <input type = "submit" className='contact-button' value='Enviar'/>
                </form>
            </Fade>
        </section>
)}