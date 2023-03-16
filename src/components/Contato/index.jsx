import './styles.css';

export const Contato = () => {
    return (
        <section className='section-apresentation' id='contato'>

            <form action="" className='form-to-contact'>
                <h1>Vamos trabalhar <strong>juntos!</strong></h1>
                <input type="email"  placeholder='Digite seu melhor email' id='input-email'/>
                <textarea name="" id="input-text-area" cols="30" rows="5" placeholder='Mande me uma mensagem...'></textarea>
                <button className='contact-button'>Enviar</button>
            </form>
        </section>
    )
}