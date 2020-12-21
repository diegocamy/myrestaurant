import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import ingredients from "../assets/backgrounds/ingredients.jpg";
import TestimonialCard from "./TestimonialCard";

SwiperCore.use([Autoplay]);

const BackgroundArea = styled.div`
  height: 450px;
  background-image: url(${ingredients});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 4;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  position: relative;
  z-index: 5;
  text-align: center;

  h3 {
    font-size: 3rem;
    color: white;
    margin-bottom: 25px;
  }
`;

const Testimonials = () => {
  return (
    <BackgroundArea>
      <div className="overlay" />
      <Container>
        <h3>Testimonios de clientes</h3>
        <Swiper
          effect="slide"
          speed={1200}
          loop
          slidesPerView={3}
          autoplay
          preloadImages
        >
          <SwiperSlide>
            <TestimonialCard stars={5} />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard stars={4.5} />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard stars={3.5} />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard stars={4} />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard stars={5} />
          </SwiperSlide>
        </Swiper>
      </Container>
    </BackgroundArea>
  );
};

export default Testimonials;
