import './styles.css';
import { CardProjects } from '../CardProjects';
import logo_RC from '../img/1.png';
import logo_CA from '../img/2.png';
import logo_TC from '../img/3.png';
import logo_GS from '../img/4.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const MeusProjetos = () => {
    return (
        <section className='section-myprojects' id='meus-projetos'> 
                <h1 className='title-section'><AiOutlineFundProjectionScreen/>Meus Projetos</h1>
                <div className="container-slider-projects">
                        <Swiper
                            className='swiper-projects'
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            navigation = {true}
                            spaceBetween={50}
                            slidesPerView={1}
                        >
                            <SwiperSlide>
                                <CardProjects img = {logo_RC} description = "Web site construido em React com propósito de ser meu site pessoal de divulgação do meu trabalho como ilustrador além de compartihar algumas curtas composições músicais"
                                              url = "https://repositorio-criativo.vercel.app/"
                                              urlGit = "https://github.com/JoaoSouz4/frontend_rc"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CardProjects img = {logo_CA} description = "Aplicação capaz de consumir uma Api que retona dados climáticos com base em uma região do mundo determinada pelo usuário em uma interface simples, agradável e animada."
                                              url = "https://joaosouz4.github.io/ProjectWeather/"
                                              urlGit = "https://github.com/JoaoSouz4/ProjectWeather"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CardProjects img = {logo_TC} description = "Sistema feito com base em uma API que retona um conselho aleatório, o usuário pode buscar mensagens e salvar no local storage, gerenciando em outra página."
                                              url = "https://templo-conselhos.vercel.app/"
                                              urlGit = "https://github.com/JoaoSouz4/TemploConselhos"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CardProjects img = {logo_GS} description = "Simples gerador de senhas aleatórias com base em parâmetros estabelecidos pelo usuário, o mesmo pode copiar a senha criada e usar para fins prórios."
                                               url = "https://gerador-de-senhas-iota.vercel.app/"
                                               urlGit = "https://github.com/JoaoSouz4/GeradorDeSenhas"
                                />
                            </SwiperSlide>
                        </Swiper>
                </div>
        </section>
    )
}