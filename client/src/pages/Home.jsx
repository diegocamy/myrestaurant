import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import styled from "styled-components";

import BigSlide from "../components/BigSlide";

import pizza from "../assets/slides/pizza.jpg";
import burger from "../assets/slides/burger.jpg";
import dessert from "../assets/slides/dessert.jpg";

import "swiper/swiper.scss";

SwiperCore.use([Autoplay, Pagination]);

const HomePage = styled.div``;

const Home = () => {
  return (
    <HomePage>
      <Swiper
        spaceBetween={0}
        effect="fade"
        speed={400}
        loop
        slidesPerView={1}
        autoplay={Autoplay}
        preloadImages
      >
        <SwiperSlide>
          <BigSlide
            backgroundImage={burger}
            color="white"
            header="Variedad de Hamburguesas"
            paragraph="Muchos sabores para elegir, ¿cuál vas a probar hoy?"
            buttonText="Ver Hamburguesas"
            buttonColor="yellow"
            buttonTextColor="black"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BigSlide
            backgroundImage={pizza}
            color="white"
            header="Las mejores Pizzas!"
            paragraph="Pedí cualquier una de nuestras pizzas y disfrutala sin moverte de casa"
            buttonText="Ver Pizzas"
            buttonColor="red"
            buttonTextColor="white"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BigSlide
            backgroundImage={dessert}
            color="white"
            header="Antojos dulces?"
            paragraph="Descubrí la dulzura y el sabor de nuestros postres"
            buttonText="Ver Postres"
            buttonColor="violet"
            buttonTextColor="white"
          />
        </SwiperSlide>
      </Swiper>
      HOME PAGE BRO
    </HomePage>
  );
};

export default Home;
