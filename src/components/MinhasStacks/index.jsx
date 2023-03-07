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
                     onSlideChange={() => console.log('oi')}
                       
                  >
                    <SwiperSlide className = "react">
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
                    <h4>Title Stack</h4>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quisquam asperiores, perferendis ad laboriosam officia vitae. Eveniet neque recusandae ea nisi alias quis, natus quisquam hic ipsum nam quod reiciendis!</span>
                </div>
                {console.log(slide)}
            </div>
        </section>
        </>
    )
}