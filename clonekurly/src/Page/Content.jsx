import React from "react";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { ReactComponent as Nextbtn } from "../svg/Nextbtn.svg";
import { ReactComponent as NBtn } from "../svg/NBtn.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const TitleDiv = styled.div`
    width: 1519.2px;
    height: 370px;
    overflow: hidden;
`
const Bannerimg = styled.div`
    height: 370px;
    z-index: 0;
    object-fit: cover;
background-position: 50% 50%;
background-size:cover;
background-repeat: no-repeat;
flex: none;
`

const Howimg = styled.div`
width: 249px;
height: 320px;
object-fit: cover;
background-position: 50% 50%;
background-size:cover;
background-repeat: no-repeat;
flex: none; 
`
const Prevbtn = styled.div`
    border: none;
    background-color: none;
    transform: translate(50%, -50%) rotate(180deg);
    position: relative;
    left: 55px !important;
    top:50px !important;
`

const Nexbtn = styled.div`
    border: none;
    background-color: none;
`

const CountBox = styled.div`
    color: rgb(255, 255, 255);
    background: rgba(0, 0, 0, 0.15);
    z-index: 10;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 55px;
    height: 23px;
    line-height: 23px;
    font-size: 14px;
    font-weight: 400;
    border-radius: 12px;
    position: absolute;
    top: 480px;
    left: 1100px;
    `

const HowDiv = styled.div`
        width: 1050px;
        margin: 0px auto;
        padding: ${(props)=> props.padding || "40px 0px"};
    `

const HowTitle = styled.div`
            margin-bottom: 27px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(51, 51, 51);
    font-size: 28px;
    line-height: 1.15;
    letter-spacing: -0.26px;
    font-weight: 500;
    margin-top: 50px;
    `

    const HowPrebtn = styled.div`
        position: relative;
        right: 90px;
    `

    const HowNexbtn = styled.div`
        transform: translate(50%, -50%) rotate(180deg);
        position: absolute;
        left: 105px;
    `

    const Bnrimg = styled.img`
        width: 1050px;
        height: 140px;
    `

export default function Content() {
    //호버
    const [isboxHovering, setIsboxHovering] = useState(0);
    //페이지수
    const [current, setCurrent] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: (
            <div>
                {
                    isboxHovering ? <Prevbtn type="button">
                        <Nextbtn />
                    </Prevbtn>
                        : <div></div>
                }

            </div>
        ),
        nextArrow: (
            <div>
                {
                    isboxHovering ? <Nexbtn type="button">
                        <Nextbtn />
                    </Nexbtn>
                        : <div></div>
                }

            </div>
        )
    };

    const Howsettings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: (
            <div>
                <HowPrebtn><NBtn/></HowPrebtn>
            </div>
        ),
        nextArrow: (
            <div>
            <HowNexbtn>
                <NBtn/>
            </HowNexbtn>
            </div>
        )
    };

    return (
        <div>
            <TitleDiv onMouseOver={() => setIsboxHovering(1)} onMouseOut={() => setIsboxHovering(0)}>
                <Slider {...settings}>
                    <div>
                        <Bannerimg style={{ backgroundImage: `url(https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/129f346e-53a2-4251-bad4-d69e6dfdd048.jpg)` }} />
                    </div>
                    <div>
                        <Bannerimg style={{ backgroundImage: `url(https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/95790893-7e17-4f0b-9357-41d573702055.jpg)` }} />
                    </div>
                    <div>
                        <Bannerimg style={{ backgroundImage: `url(https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/9492f171-f3a2-4769-b74a-3944983419a1.jpg)` }} />
                    </div>
                </Slider>
                <CountBox>{current + 1} / 3</CountBox>
            </TitleDiv>
            <div>
                <HowDiv>
                    <HowTitle>이 상품 어때요?</HowTitle>
                    <HowDiv padding="0px">
                        <Slider {...Howsettings}>
                            <div>
                                <Howimg style={{ backgroundImage: `url(https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=400/shop/data/goods/1625031532799l0.jpg)` }} />
                            </div>
                            <div>
                                <Howimg style={{ backgroundImage: `url(https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=400/shop/data/goods/1599129076892l0.jpg)` }} />
                            </div>
                            <div>
                                <Howimg style={{ backgroundImage: `url(https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=400/shop/data/goods/1454075986307l0.jpg)` }} />
                            </div>
                            <div>
                                <Howimg style={{ backgroundImage: `url(https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=400/shop/data/goods/1577081789558l0.jpg)` }} />
                            </div>
                            <div>
                                <Howimg style={{ backgroundImage: `url(https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=400/shop/data/goods/1577081789558l0.jpg)` }} />
                            </div>
                            <div>
                                <Howimg style={{ backgroundImage: `url(https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=400/shop/data/goods/1655803237641l0.jpg)` }} />
                            </div>
                        </Slider>
                    </HowDiv>
                </HowDiv>
            </div>
            <div>
                <HowDiv>
                    <Link to="/"><Bnrimg alt="" src="https://product-image.kurly.com/banner/random-band/pc/img/fd93ed9c-0710-49d5-a1e4-51f4f7604f24.jpg"/></Link>
                </HowDiv>
            </div>

        </div>
    );
}

