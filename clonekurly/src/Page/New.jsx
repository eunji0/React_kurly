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

const NewContain = styled.div`
    position: relative;
    display: flex;
    width: 1050px;
    margin-top: 50px;
    margin-bottom: 75px;
`

const Filter = styled.div`
    position: sticky;
    width: 220px;
    flex-shrink: 0;
    height: 100%;
    max-height: calc(100vh - 120px);
    top: 80px;
    margin-right: 47px;
    border-bottom: 1px solid rgb(238, 238, 238);
    overflow: hidden scroll;
`

const Inner = styled.div`
    width: 100%;
`

const FilterReset = styled.div`
        position: sticky;
    top: 0px;
    display: flex;
    z-index: 20;
    background-color: rgb(255, 255, 255);
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid rgb(238, 238, 238);
    line-height: 20px;
`

const ResetImg = styled.div`
    background-image: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.78 3.96303C12.504 2.16973 10.4086 1 8.04 1C4.15192 1 1 4.15192 1 8.04C1 11.9281 4.15192 15.08 8.04 15.08C11.9281 15.08 15.08 11.9281 15.08 8.04' stroke='%23ddd' stroke-width='1.6' stroke-linecap='square' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M14.4933 1L14.4933 4.52H10.9733' stroke='%23ddd' stroke-width='1.6' stroke-linecap='square' stroke-linejoin='round'%3E%3C/path%3E%3C/svg%3E");
    width: 12px;
    height: 12px;
`

const Reset = styled.button`
        display: flex;
    -webkit-box-align: center;
    align-items: center;
    pointer-events: none;
    border: none;
    background-color: #fff;
`

const ResetTxt = styled.span`
        margin-left: 5px;
    font-weight: 500;
    color: rgb(221, 221, 221);
`

const FilterTxt = styled.div`
        font-weight: 500;
    font-size: 15px;
    color: rgb(51, 51, 51);
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
                    <NewContain>
                        <Filter>
                            <FilterReset>
                                <FilterTxt>필터</FilterTxt>
                                <Reset><span><ResetImg/></span><ResetTxt>초기화</ResetTxt></Reset>
                            </FilterReset>
                            <div></div>
                        </Filter>
                        <Inner></Inner>
                    </NewContain>
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