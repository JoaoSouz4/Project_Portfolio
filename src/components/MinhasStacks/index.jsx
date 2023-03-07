import './styles.css';
import { DiReact, DiNodejsSmall, DiCss3, DiJavascript1, DiHtml5} from 'react-icons/di';
import { AiOutlineArrowLeft } from 'react-icons/ai'

export const MinhasStacks = () => {
    return (
        <section className='section-mystack'>
            
            <AiOutlineArrowLeft className='arrow-nav' id='arrow-left'/>

            <h1>Minhas Stacks</h1>

            <div>
                <DiReact/>
                <DiNodejsSmall/>
                <DiCss3/>
                <DiJavascript1/>
                <DiHtml5/>
            </div>

            <AiOutlineArrowLeft className='arrow-nav' id='arrow-rigth'/>
        </section>
    )
}