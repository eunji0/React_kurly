import React from "react";
import Slider from "react-slick";
import { bannerdummy } from "../bannerdummy";
import styled from "styled-components";

export default function Content() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <div className="mainBanner">
                <div className="bannerinner">
                    <Slider {...settings}>
                        {/* {
                            bannerdummy.results.map(item => (
                                <img src={item.img} />
                            ))
                        } */}
                        <div>1</div>
                        <div>1</div>
                        <div>1</div>
                        <div>1</div>
                    </Slider>
                </div>

            </div>
        </div>
    );
}