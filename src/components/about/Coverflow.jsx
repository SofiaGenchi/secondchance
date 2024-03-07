import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';

export default function Coverflow() {
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            'background-image':
              'url(src/assets/pexels-ksenia-chernaya-3965545.jpg)',
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Nuestro Objetivo:
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Darle una segunda oportunidad a tu ropa.
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>Somos una empresa dedicada a darles segundas oportunidades a las prendas que tengas abandonadas en tu casa.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="subtitle" data-swiper-parallax="-200">
            Alguien mas la puede estar necesitando.
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>Quizas alguien mas necesite o busque eso que ya dejaste de usar.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="subtitle" data-swiper-parallax="-200">
            Contactanos!
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>Contactate con nosotros, evaluaremos el estado de tu prenda, acordararemos el destino que quieras darle (venta o donacion) y nosotros le buscaremos su segunda oportunidad.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
