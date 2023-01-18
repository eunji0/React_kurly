import React from "react";
import styled from "styled-components";

const All = styled.div`
    position: relative;
    margin-bottom: 80px;
`

const Container = styled.div`
    width: 1050px;
    margin: 0px auto;
`

const Banner = styled.div`
    text-align: center;
`

const Bannerimg = styled.img`
    width: 100%;
    vertical-align: top;
`

const NewitemTxt = styled.h3`
    margin-top: 50px;
    font-weight: 500;
    font-size: 28px;
    color: rgb(51, 51, 51);
    line-height: 35px;
    letter-spacing: -1px;
    text-align: center;   
`

const StickyBanner = styled.div`
    position: absolute;
    top: 70px;
    right: 20px;
    bottom: -93px;
    z-index: 1;
    margin-top: 93px;
`

const SBanner = styled.div`
    position: sticky;
    top: 50%;
    transform: translateY(-50%);
    width: 80px;
    font-size: 12px;
    line-height: 16px;
    color: rgb(51, 51, 51);
    letter-spacing: -0.3px;
`

const ImgBnr = styled.div`
    height: 120px;
    margin-bottom: 7px;
`

const BoxBnr = styled.div`
        width: 80px;
    border-width: 1px 1px 0px;
    border-top-style: solid;
    border-right-style: solid;
    border-left-style: solid;
    border-top-color: rgb(221, 221, 221);
    border-right-color: rgb(221, 221, 221);
    border-left-color: rgb(221, 221, 221);
    border-image: initial;
    border-bottom-style: initial;
    border-bottom-color: initial;
    background-color: rgb(255, 255, 255);
`

const Bnrimg = styled.img`
        box-sizing: border-box;
    display: inline-block;
    overflow: hidden;
    width: initial;
    height: initial;
    background: none;
    opacity: 1;
    border: 0px;
    margin: 0px;
    padding: 0px;
    position: relative;
    max-width: 100%;
`

const TxtLevel = styled.div`
    height: 29px;
    padding-top: 5px;
    text-align: center;
    border-bottom: 1px solid rgb(221, 221, 221);
`

const TxtRecipe = styled.div`
    height: 29px;
    padding-top: 5px;
    text-align: center;
    border-bottom: 1px solid rgb(221, 221, 221);
`

export default function New(){
    return(
        <div>
            <All>
                <Container>
                    <Banner>
                        <Bannerimg alt="" src="https://collection-image.kurly.com/product-collections/2451/sNzW2Z2kJPIMWnOvw29EpKDlQxcSvWrvoSHwNnw4.png"/>
                    </Banner>
                    <NewitemTxt>신상품</NewitemTxt>
                </Container>
                <StickyBanner>
                    <SBanner>
                        <ImgBnr>
                        <Bnrimg alt="" src="https://res.kurly.com/main/banners/deliveryInfo.png"/>
                        </ImgBnr>
                        <BoxBnr>
                            <TxtLevel>등급별 혜택</TxtLevel>
                            <TxtRecipe>레시피</TxtRecipe>
                        </BoxBnr>
                    </SBanner>
                </StickyBanner>
            </All>
        </div>
    )
}