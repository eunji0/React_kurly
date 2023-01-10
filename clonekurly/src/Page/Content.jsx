import React from "react";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { ReactComponent as Nextbtn } from "../svg/Nextbtn.svg";
import { ReactComponent as NBtn } from "../svg/NBtn.svg";


export default function Content() {

    //호버
    const [isboxHovering, setIsboxHovering] = useState(0);

    const images = useRef([{ src: "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/129f346e-53a2-4251-bad4-d69e6dfdd048.jpg" }, { src: "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/95790893-7e17-4f0b-9357-41d573702055.jpg" }, { src: "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/9492f171-f3a2-4769-b74a-3944983419a1.jpg" }]);

    const imagesHow = useRef([{ src: "https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=400/shop/data/goods/1625031532799l0.jpg" }, { src: "https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=400/shop/data/goods/1599129076892l0.jpg" }, { src: "https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=400/shop/data/goods/1454075986307l0.jpg" }, { src: "	https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=400/shop/data/goods/1577081789558l0.jpg" }, { src: "https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=400/shop/data/goods/1655803237641l0.jpg" }])

    const [current, setCurrent] = useState(0);
    const [currentHow, setCurrentHow] = useState(0);

    const [style, setStyle] = useState({
        marginLeft: `-${current}00%`
    });

    const [styleHow, setStyleHow] = useState({
        marginLeft: `-${currentHow * 2}00%`
    });

    const imgSize = useRef(images.current.length);
    const imgSizeHow = useRef(imagesHow.current.length);

    const moveSlide = (i) => {
        let nextIndex = current + i;

        if (nextIndex < 0) nextIndex = imgSize.current - 1;
        else if (nextIndex >= imgSize.current) nextIndex = 0;

        setCurrent(nextIndex);
    };

    // const moveSlideHow = (i) => {
    //     let nextIndex = currentHow + i;

    //     if (nextIndex < 0) nextIndex = imgSizeHow.current - 1;
    //     else if (nextIndex >= imgSizeHow.currentHow) nextIndex = 0;

    //     setCurrentHow(nextIndex);
    // };


    useEffect(() => {
        setStyle({ marginLeft: `-${current}00%` });
    }, [current]);

    useEffect(() => {
        setStyleHow({ marginLeft: `-${currentHow}00%` });
    }, [currentHow]);



    const Window = styled.div`
        background: coral;
        width: 1519px;
        height: 370px;
        overflow: hidden;
    `


    const Flexbox = styled.div`
    display: flex;
    `

    const FlexHow = styled.div`
        width: 1050px;
        overflow: hidden;
    `

    const InnerImg = styled.div`
    width: 1519.2px;
min-width: 1050px;
height: 370px;
object-fit: cover;
background-position: 50% 50%;
background-size:cover;
background-repeat: no-repeat;
flex: none;
`

    const InnerImgHow = styled.div`
    width: 249px;
height: 320px;
object-fit: cover;
background-position: 50% 50%;
background-size:cover;
background-repeat: no-repeat;
flex: none;
margin-right: 18px;
`

    const PreSliderBtn = styled.div`
display: flex;
justify-content: flex-end;
position: absolute;
top: 50px;
width: 52px;
height: 52px;
top: 300px;
transform: rotate(180deg);
margin-left: 100px;
`

    const NextSliderBtn = styled.div`
cursor: pointer;
position: absolute;
top: 300px;
width: 52px;
height: 52px;
left: 1300px;
`
    const Countdiv = styled.div`
    position: relative;
    color: rgb(255, 255, 255);
    background: rgba(0, 0, 0, 0.15);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 55px;
    height: 23px;
    left: 1120px;
    bottom: 45px;
    line-height: 23px;
    font-size: 14px;
    font-weight: 400;
    border-radius: 12px;
`

    const TitleDiv = styled.div`
    height: 100%;
    margin-bottom: 30px;
`

    const InnerDiv = styled.div`
    width: 1050px;
    margin: 0px auto;
    padding: 40px 0px;
`

    const HowDiv = styled.div`
        margin-bottom: 27px;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
`

    const HowSpan = styled.span`
    position: relative;
    display: flex;
    padding: 8px 0px 8px 8px;
    color: rgb(51, 51, 51);
    font-size: 28px;
    line-height: 1.15;
    letter-spacing: -0.26px;
    font-weight: 500;
    `

    const Nbtn = styled.div`
    transform: translate(50%, -50%) rotate(180deg);
    position: absolute;
    border: 0px;
    outline: 0px;
    width: 60px;
    height: 60px;
    `

    return (
        <div>
            <TitleDiv>
                <div className="bannerinner">
                    <Window className="window" onMouseOver={() => setIsboxHovering(1)} onMouseOut={() => setIsboxHovering(0)}>
                        <Flexbox className="flexbox" style={style}>
                            {images.current.map((img, i) => (
                                <InnerImg
                                    key={i}
                                    className="img"
                                    style={{ backgroundImage: `url(${img.src})` }}
                                ></InnerImg>
                            ))}
                        </Flexbox>
                    </Window>
                    <Countdiv>{current + 1} / 3</Countdiv>
                    {
                        isboxHovering ? <div>
                            <PreSliderBtn className="btn" onClick={() => { moveSlide(-1); }}><Nextbtn /></PreSliderBtn>
                            <NextSliderBtn className="btn" onClick={() => { moveSlide(1); }}><Nextbtn /></NextSliderBtn>
                        </div> : <div></div>
                    }

                </div>

            </TitleDiv>
            <TitleDiv>
                <InnerDiv>
                    <HowDiv>
                        <HowSpan>이 상품 어때요?</HowSpan>
                    </HowDiv>
                    <FlexHow>
                    <Flexbox className="flexbox" style={styleHow}>
                        {imagesHow.current.map((img, i) => (
                            <InnerImgHow
                                key={i}
                                className="img"
                                style={{ backgroundImage: `url(${img.src})` }}
                            ></InnerImgHow>
                        ))}
                    </Flexbox>
                    </FlexHow>
                    <Nbtn><NBtn/></Nbtn>
                </InnerDiv>
            </TitleDiv>
        </div>
    );
}

