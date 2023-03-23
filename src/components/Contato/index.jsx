import './styles.css';
import { FiAlertCircle } from 'react-icons/fi'
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contato = () => {
    const [nameUser, setNameUser] = useState("");
    const [email, setEmail] = useState("");
    const [bodyEmail, setBodyEmail] = useState("");

    const erroMsg = useRef();
    const sucessMsg = useRef();

    function sendEmail(e){
        e.preventDefault();
        if( nameUser == "" || email == "" || bodyEmail == ""){
            erroMsg.current.style.display = "flex";
            erroMsg.current.style.animationName = "begin";
            setTimeout(()=>{
                erroMsg.current.style.animationName = "end";
                erroMsg.current.style.display = "none"; 
            }, 1500);
            return;
        }
        const templateParms = {
            from_name: nameUser,
            message: bodyEmail,
            email: email
        }
        emailjs.send("service_mo7xqg2", "template_8ou0i8e", templateParms, "xBipNAtv2aDq2yX9p")
        .then((resp)=>{
            sucessMsg.current.style.display = "flex";
            setBodyEmail("");
            setEmail("");
            setNameUser("");
        });
    }

    return (
        <section className='form section-contact' id='contato'>

        <div className = "erro-msg" ref = {erroMsg}>
            <FiAlertCircle/>
            Por favor, preencha todos os campos para continuar.
        </div>

        <div className="sucess-msg" ref = {sucessMsg}>
            <h3>Obrigado pela iniciativa!</h3>
            <p>Irei entrar em contato o mais rápido possível! Aproveite para conhecer mais meus projetos aqui no site.</p>
            <button onClick = {()=> sucessMsg.current.style.display = "none"}>Fechar</button>
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