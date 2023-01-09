import React from "react";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { ReactComponent as Nextbtn } from "../svg/Nextbtn.svg";


export default function Content() {

     //호버
     const [isboxHovering, setIsboxHovering] = useState(0);

    const images = useRef([{ src: "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/129f346e-53a2-4251-bad4-d69e6dfdd048.jpg" }, { src: "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/95790893-7e17-4f0b-9357-41d573702055.jpg" }, { src: "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/9492f171-f3a2-4769-b74a-3944983419a1.jpg" }]);

    const [current, setCurrent] = useState(0);
    const [style, setStyle] = useState({
        marginLeft: `-${current}00%`
    });
    const imgSize = useRef(images.current.length);

    const moveSlide = (i) => {
        let nextIndex = current + i;

        if (nextIndex < 0) nextIndex = imgSize.current - 1;
        else if (nextIndex >= imgSize.current) nextIndex = 0;

        setCurrent(nextIndex);
    };

    console.log(current)

    useEffect(() => {
        setStyle({ marginLeft: `-${current}00%` });
    }, [current]);

    const Window = styled.div`
background: coral;
width: 1519px;
height: 370px;

overflow: hidden;
`

const Flexbox = styled.div`
display: flex;
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

const PreSliderBtn = styled.div`
display: flex;
justify-content: flex-end;
bottom: 230px;
position: relative;
width: 52px;
height: 52px;
transform: rotate(180deg);
margin-left: 100px;
`

const NextSliderBtn = styled.div`
cursor: pointer;
position: relative;
bottom: 275px;
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

    return (
        <div>
            <div className="mainBanner">
                <div className="bannerinner">
                    <Window className="window"  onMouseOver={() => setIsboxHovering(1)} onMouseOut={() => setIsboxHovering(0)}>
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
                    <Countdiv>{current+1} / 3</Countdiv>
                    {
                        isboxHovering ? <div>
                            <PreSliderBtn className="btn" onClick={() => { moveSlide(-1); }}><Nextbtn/></PreSliderBtn>
                    <NextSliderBtn className="btn" onClick={() => { moveSlide(1); }}><Nextbtn/></NextSliderBtn>
                        </div>:<div></div>
                    }
                    
                </div>

            </div>
        </div>
    );
}

