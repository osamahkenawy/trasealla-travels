import React, { useEffect, useMemo } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Slider from 'react-slick';
import { useLanguage } from '../../contexts/LanguageContext';

const Heroanner1 = () => {
    const { t, locale } = useLanguage();

    // Memoize heroContent to update when locale changes
    const heroContent = useMemo(() => [
        {img:'/assets/img/trasealla-main-three.jpg'},
        {img:'/assets/img/trasealla-main.jpg'},
         {img:'/assets/img/trasealla-main-two.jpg'},
    ], []);

    useEffect(() => {
        loadBackgroudImages();
        console.log('🎨 Hero Banner - Locale:', locale);
        console.log('🎨 Hero Banner - Translation test:', t('hero.title'));
    }, [locale, t]);

    const settings = {
        dots: false,
        infinite: true,
        fade: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        rtl: locale === 'ar', // Enable RTL for Arabic
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 1,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };  


    return (
        <>
        <style>{`
            ${locale === 'ar' ? `
                /* RTL Styles for Arabic */
                .hero-section[dir="rtl"] * {
                    direction: rtl;
                    text-align: right;
                }
                
                .hero-section[dir="rtl"] .hero-content {
                    text-align: right !important;
                }
                
                .hero-section[dir="rtl"] .sub-title,
                .hero-section[dir="rtl"] h1 {
                    text-align: right !important;
                }
                
                .hero-section[dir="rtl"] .booking-list-area {
                    flex-direction: row-reverse;
                }
                
                .hero-section[dir="rtl"] .booking-list {
                    text-align: right !important;
                }
                
                .hero-section[dir="rtl"] .booking-list .content {
                    text-align: right !important;
                }
                
                .hero-section[dir="rtl"] .booking-list h6 {
                    text-align: right !important;
                }
                
                .hero-section[dir="rtl"] .counter-items {
                    display: flex;
                    flex-direction: row-reverse;
                }
                
                .hero-section[dir="rtl"] .counter-text {
                    text-align: right !important;
                }
                
                .hero-section[dir="rtl"] .counter-text p {
                    text-align: right !important;
                }
                
                .hero-section[dir="rtl"] .slick-slider,
                .hero-section[dir="rtl"] .slick-list,
                .hero-section[dir="rtl"] .slick-track {
                    direction: rtl !important;
                }
                
                .hero-section[dir="rtl"] .theme-btn {
                    text-align: center;
                }
            ` : ''}
        `}</style>
        <section className="hero-section" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <div className="swiper hero-slider">
            <div className="swiper-wrapper">
            <Slider key={locale} {...settings}>
            {heroContent.map((item, i) => (
                <div key={i} className="swiper-slide">
                    <div className="hero-1">
                        <div className="hero-bg bg-cover" data-background={item.img}></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10">
                                    <div className="hero-content">
                                        <div className="sub-title">
                                        {t('hero.subtitle')}
                                        </div>
                                        <h1>
                                        {t('hero.title')}
                                        </h1>
                                        <div className="booking-list-area">
                                            <div className="booking-list">
                                                <div className="icon">
                                                    <img src="/assets/img/hero/icon-1.png" alt="img" />
                                                </div>
                                                <div className="content">
                                                    <h6>{t('hero.location')}</h6>
                                                    <div className="form">
                                                        <select className="single-select w-100">
                                                            <option>Australia</option>
                                                            <option>India</option>
                                                            <option>Italy</option>
                                                            <option>Japan</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="booking-list">
                                                <div className="icon">
                                                    <img src="/assets/img/hero/icon-2.png" alt="img" />
                                                </div>
                                                <div className="content">
                                                    <h6>{t('hero.activitiesType')}</h6>
                                                    <div className="form">
                                                        <select className="single-select w-100">
                                                            <option>{t('hero.activitiesType')}</option>
                                                            <option> Adventure 02</option>
                                                            <option>Adventure 03</option>
                                                            <option> Adventure 04</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="booking-list">
                                                <div className="icon">
                                                    <img src="/assets/img/hero/icon-3.png" alt="img" />
                                                </div>
                                                <div className="content">
                                                    <h6>{t('hero.activateDay')}</h6>
                                                    <div className="form-clt">
                                                        <input type="date" id="date1" name="date1" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="booking-list">
                                                <div className="icon">
                                                    <img src="/assets/img/hero/icon-3.png" alt="img" />
                                                </div>
                                                <div className="content">
                                                    <h6>{t('hero.traveler')}</h6>
                                                    <div className="form">
                                                        <select className="single-select w-100">
                                                            <option>01</option>
                                                            <option>02</option>
                                                            <option>03</option>
                                                            <option>04</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="theme-btn" type="submit">{t('common.search')}</button>
                                        </div>
                                    </div>
                                    <div className="counter-area">
                                        <div className="counter-items">
                                            <div className="counter-text">
                                                <h2><span className="count">20.5</span>k</h2>
                                                <p>{t('hero.featuredProjects')}</p>
                                            </div>
                                            <div className="counter-text">
                                                <h2><span className="count">100.5</span>k</h2>
                                                <p>{t('hero.luxuryHouses')}</p>
                                            </div>
                                            <div className="counter-text">
                                                <h2><span className="count">150.5</span>k</h2>
                                                <p>{t('hero.satisfiedClients')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
                 </Slider>

            </div>
        </div>
    </section>
    </>
    );
};

export default Heroanner1;