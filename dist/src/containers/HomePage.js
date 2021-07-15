import React, { useEffect, useRef } from "react";
import SwiperCore, {
  HashNavigation,
  Scrollbar,
  Mousewheel,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import gsap from "gsap";

import home from "../images/home.jpg";
import logo from "../images/logo.jpg";

import "swiper/swiper.min.css";

SwiperCore.use([HashNavigation, Scrollbar, Mousewheel, Pagination]);

const data = [
  "Front-End Developer",
  "Back-End Developer",
  "Full-Stack Developer",
  "UI/UX Designer",
];

function HomePage({ setHash }) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        mousewheel={true}
        direction="vertical"
        hashNavigation={{
          watchState: true,
          replaceState: true,
        }}
        speed={1000}
        scrollbar={{
          draggable: true,
        }}
        onSwiper={() => alert("Swiper")}
        onSlideChangeTransitionStart={(e) => {
          gsap.to(e.slides[e.previousIndex], 1, {
            opacity: 0,
          });
          gsap.fromTo(
            e.slides[e.snapIndex],
            1,
            {
              opacity: 0,
              x: -500,
            },
            {
              opacity: 1,
              x: 0,
            }
          );
          setHash("#next");
        }}
        onSlideChangeTransitionEnd={(event, e) => {
          setHash(window.location.hash);
        }}
        pagination={{ clickable: true }}
        className="swiper"
      >
        <SwiperSlide data-hash="home" className="slide">
          <img src={home} alt="Homepage_Image" className="home_image" />
          <section className="home_content">
            <img src={logo} alt="My Logo" className="image_logo" />
            <h1 className="text">
              Hi, My name is Lucas Petricek and I am :{" "}
              <span style={{ color: "lightblue" }}>
                Fullstack Web Developer
              </span>
            </h1>
          </section>
        </SwiperSlide>
        <SwiperSlide data-hash="about-me" className="slide">
          About Me
        </SwiperSlide>
        <SwiperSlide data-hash="projects" className="slide">
          Projects
        </SwiperSlide>
        <SwiperSlide data-hash="technologies" className="slide">
          NewsLetter
        </SwiperSlide>
        <SwiperSlide data-hash="contacts" className="slide">
          Contacts
          <section className="copyright"> © Copyright 2021</section>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default HomePage;
