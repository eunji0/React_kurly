import React from "react";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { ReactComponent as Nextbtn } from "../svg/Nextbtn.svg";
import { ReactComponent as NBtn } from "../svg/NBtn.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TitleDiv = styled.div`
    width: 1519.2px;
    height: 370px;
    overflow: hidden;
`
const Bannerimg =styled.div`
    height: 370px;
    z-index: 0;
    object-fit: cover;
background-position: 50% 50%;
background-size:cover;
background-repeat: no-repeat;
flex: none;
`
export default function Content(){
    const settings = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: (
        <div>
            <button type="button">
                <Nextbtn/>
            </button>
        </div>
      ),
      nextArrow: (
        <div>
            <button type="button">
                <Nextbtn/>
            </button>
        </div>
    ),

    };

    return (
        <TitleDiv>
            <Slider {...settings}>
          <div>
            <Bannerimg style={{ backgroundImage: `url(https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/129f346e-53a2-4251-bad4-d69e6dfdd048.jpg)` }}/>
          </div>
          <div>
          <Bannerimg style={{ backgroundImage: `url(https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/95790893-7e17-4f0b-9357-41d573702055.jpg)` }}/>
          </div>
          <div>
          <Bannerimg style={{ backgroundImage: `url(https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/9492f171-f3a2-4769-b74a-3944983419a1.jpg)` }}/>
          </div>
        </Slider>
        </TitleDiv>
    );
}

