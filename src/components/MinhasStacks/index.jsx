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
import { Fade } from 'react-awesome-reveal';

export const MinhasStacks = () => {

   const slide = useRef();
   const [ descStack, setDeskStack ] = useState(0);

    return (
            <section className='section-mystack' id = "minhas-stacks">
                <h1 className = "title-section"><BsStack/>Minhas Stacks</h1>

                <div className="sub-container">
                    <div className="sliders-with-stacks">
                        <Swiper
                            className = 'swiper-stack'
                            ref={slide}
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            navigation = {true}
                            pagination = {true}
                            spaceBetween={50}
                            slidesPerView={1}
                            onSlideChange={() => {setDeskStack(slide.current.swiper.activeIndex)}}
                        >
                        <SwiperSlide className = "stack-item" >
                            <DiReact className='icon-stack'/>
                        </SwiperSlide>

                        <SwiperSlide className='stackitem'>
                            <DiNodejsSmall className='icon-stack'/>
                        </SwiperSlide>

                        <SwiperSlide className ='stack-item'>
                            <DiJavascript1 className='icon-stack'/>
                        </SwiperSlide>

                        <SwiperSlide className='stack-item'>
                            <DiHtml5 className='icon-stack'/>
                        </SwiperSlide>

                        <SwiperSlide className ='stack-item'>
                            <DiCss3 className='icon-stack'/>
                        </SwiperSlide>

                        <SwiperSlide className='stack-item'>
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