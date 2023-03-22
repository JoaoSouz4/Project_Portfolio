import './styles.css';
import { DiReact, DiNodejsSmall, DiCss3, DiJavascript1, DiHtml5, DiMongodb} from 'react-icons/di';
import { BsStack } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef, useState } from 'react';
import { descArray } from '../../utils/descArray';

export const MinhasStacks = () => {

   const slide = useRef();
   const [ descStack, setDeskStack ] = useState(0);

    return (
            <section className='section-mystack' id = "minhas-stacks">
                <h1><BsStack/>Minhas Stacks</h1>

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
                            <ul className = 'list-desc'>
                                {descArray[descStack].listSkill.map( list =>  {
                                    return <li>{list}</li>
                                })}
                            </ul>
                        </div>
                     </div>
            </section>
    )
}