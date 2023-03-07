import './styles.css';
import { DiReact, DiNodejsSmall, DiCss3, DiJavascript1, DiHtml5, DiMongodb} from 'react-icons/di';

import { CardStack } from '../CardStack';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const MinhasStacks = () => {

    return (
        <>
        <section className='section-mystack'>

            <h1>Minhas Stacks</h1>

            <div className="sub-container">
                <div className="sliders-with-stacks">
                  <Swiper
                     modules={[Navigation, Pagination, Scrollbar, A11y]}
                     navigation = {true}
                     pagination = {true}
                     spaceBetween={50}
                     slidesPerView={1}
                  >
                    <SwiperSlide>
                        <DiReact className='icon-stack'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DiNodejsSmall className='icon-stack'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DiJavascript1 className='icon-stack'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DiHtml5 className='icon-stack'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DiCss3 className='icon-stack'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DiMongodb className='icon-stack'/>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className='stack-description'>
                    <h4>Title Stack</h4>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque harum asperiores
                        voluptatibus non placeat quidem provident minus quisquam sint
                        consequuntur? Harum, soluta quisquam. Fugit, eius. Expedita illum dicta voluptatem illo.
                    </span>
                </div>
            </div>
        </section>
        </>
    )
}