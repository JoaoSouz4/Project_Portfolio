import './styles.css';
import { DiReact, DiNodejsSmall, DiCss3, DiJavascript1, DiHtml5, DiMongodb} from 'react-icons/di';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef, useState } from 'react';

export const MinhasStacks = () => {

   const slide = useRef();
   const descArray = [
    {
        title: 'React Js',
        l1: 'Gerenciamento de estado',
        l2: 'Funções Hooks',
        l3: 'Criação de componentes funcionais/classe',
        l4: 'Implementação de libs externas'
    },
    {
        title: 'Node Js',
        l1: 'Criação de API REST com express',
        l2: 'Implementação de Módulos NPM',
        l3: 'Uso da arquitetura MVC',
        l4: 'Conecção com MongoDB',
    },
    {
        title: 'JavaScript',
        l1: 'Estrutura de Dados',
        l2: 'Orientação a Objeto',
        l3: 'Manipulação da DOM',
        l4: 'Consumo de API' 
    },
    {
        title: 'HTML5',
        l1: 'Elaboração de formulários',
        l2: 'Foco em construção do HTML semântica',
        l3: 'Estruturação de páginas web',
        l4: 'inserção de arquivos de mídia',
    },
    {
        title: 'CSS3',
        l1: 'Flex Box/ Grid Css',
        l2: 'Responsividade com media queries',
        l3: 'Pseudo-classes',
        l4: 'Animações com KeyFrames',
    },

    {
        title: 'MongoDB',
        l1: 'Criação de Banco de dados local/Nuvem',
        l2: 'implentação do CRUD em aplicação',
        l3: 'Embedded Documents',
        l4: 'Mongoose com Node',
    },

   ]
   const [ descStack, setDeskStack ] = useState(0);
    return (
        <>
        <section className='section-mystack'>

            <h1>Minhas Stacks</h1>

            <div className="sub-container">
                <div className="sliders-with-stacks">
                  <Swiper
                    ref={slide}
                     modules={[Navigation, Pagination, Scrollbar, A11y]}
                     navigation = {true}
                     pagination = {true}
                     spaceBetween={50}
                     slidesPerView={1}
                     onSlideChange={() => {setDeskStack(slide.current.swiper.activeIndex)}}
                       
                  >
                    <SwiperSlide className = "react" >
                        <DiReact className='icon-stack'/>

                    </SwiperSlide>
                    <SwiperSlide className='node'>
                        <DiNodejsSmall className='icon-stack'/>
                    </SwiperSlide>

                    <SwiperSlide className ='js'>
                        <DiJavascript1 className='icon-stack'/>
                    </SwiperSlide>

                    <SwiperSlide className='html'>
                        <DiHtml5 className='icon-stack'/>
                    </SwiperSlide>

                    <SwiperSlide className ='css'>
                        <DiCss3 className='icon-stack'/>
                    </SwiperSlide>

                    <SwiperSlide className='mongo'>
                        <DiMongodb className='icon-stack'/>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className='stack-description'>
                    <h4>{descArray[descStack].title}</h4>
                    <ul>
                        <li>{descArray[descStack].l1}</li>
                        <li>{descArray[descStack].l2}</li>
                        <li>{descArray[descStack].l3}</li>
                        <li>{descArray[descStack].l4}</li>
                    </ul>
                </div>
            </div>
        </section>
        </>
    )
}