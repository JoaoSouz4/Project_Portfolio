import './styles.css';
import { FiAlertCircle } from 'react-icons/fi'
import { useState, useRef } from 'react'

export const Contato = () => {
    const [nameUser, setNameUser] = useState("");
    const [email, setEmail] = useState("");
    const [bodyEmail, setBodyEmail] = useState("");

    const erroMsg = useRef();

    function sendEmail(e){
        e.preventDefault();
        if( nameUser == "" || email == "" || bodyEmail == ""){
            erroMsg.current.style.display = "flex";
            erroMsg.current.style.animationName = "begin";
            setTimeout(()=>{
                erroMsg.current.style.animationName = "end";
                erroMsg.current.style.display = "none"; 
            }, 1500)
        }
    }

    return (
        <section className='form section-contact' id='contato'>

        <div className = "erro-msg" ref = {erroMsg}>
            <FiAlertCircle/>
            Por favor, preencha todos os campos para continuar.
        </div>
            
                <form className='form-to-contact'
                      onSubmit={sendEmail}
                >
                    <h1 className = 'title-section'>Vamos trabalhar <strong>juntos!</strong></h1>

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
                    
                    <button type = "submit"
                            className='contact-button' 
                            onClick={sendEmail}
                    >
                    Enviar
                    </button>
                </form>
            
        </section>
)}