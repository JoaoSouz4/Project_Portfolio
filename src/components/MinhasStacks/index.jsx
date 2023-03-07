import './styles.css';
import { useRef } from 'react';
import { DiReact, DiNodejsSmall, DiCss3, DiJavascript1, DiHtml5} from 'react-icons/di';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { CardStack } from '../CardStack';


export const MinhasStacks = () => {
    const slider = useRef();
    return (
        <>
        <h1>Minhas Stacks</h1>
        <section className='section-mystack'>

            <div className='slider'>
             <AiOutlineArrowLeft className='arrow-nav' id='arrow-left'/>
                <div className="stack-slider" ref = {slider}>
                    <CardStack/>
                    <CardStack/>
                    <CardStack/>
                    <CardStack/>
                    <CardStack/>
                    <CardStack/>
                </div>
                <AiOutlineArrowLeft
                    className='arrow-nav' 
                    id='arrow-rigth'
                    // onClick={()=>{slider.current.style.transform = "translateX(300px)"}}
                    />
            </div>

            <div className='stack-description'>

                <h4>Title Stack</h4>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque harum asperiores 
                    voluptatibus non placeat quidem provident minus quisquam sint 
                    consequuntur? Harum, soluta quisquam. Fugit, eius. Expedita illum dicta voluptatem illo.
                </span>
            </div>
        </section>
        </>
    )
}