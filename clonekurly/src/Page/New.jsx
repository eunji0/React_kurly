import React from "react";
import styled from "styled-components";
import { newdummy } from "../newdummy";

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

const InnerMenu = styled.div`
    display: flex;
    justify-content: space-between;
`

const Countmenu = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: rgb(51, 51, 51);
`

const HowCount = styled.div`
    display: flex;
    flex-direction: row;
`

const Counttxt = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: 5px;
    font-size: 14px;
    color: rgb(153, 153, 153);
    cursor: pointer;
    &:hover {
        color: #222;
    }
`

const QuestionMark = styled.span`
    background-image: url("data:image/svg+xml,%3Csvg width='14' height='20' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M6.9932 0.700195C8.73506 0.700195 10.3116 1.40557 11.4528 2.54565C12.5943 3.68594 13.3002 5.26111 13.3002 7.0002C13.3002 8.73928 12.5943 10.3145 11.4528 11.4547C10.3116 12.5948 8.73506 13.3002 6.9932 13.3002C5.25512 13.3002 3.68233 12.595 2.54387 11.4554C1.40457 10.315 0.700195 8.73952 0.700195 7.0002C0.700195 5.26087 1.40457 3.68541 2.54387 2.54497C3.68233 1.40537 5.25512 0.700195 6.9932 0.700195Z' stroke='%23ccc' stroke-width='1.4'%3E%3C/path%3E%3Cpath d='M4.5 5.21081H5.77027C5.81351 4.55135 6.26216 4.12973 6.95946 4.12973C7.64054 4.12973 8.09459 4.53514 8.09459 5.0973C8.09459 5.58784 7.90383 5.86944 7.35576 6.22524L7.1973 6.32432C6.45135 6.76216 6.13784 7.24865 6.18649 8.05946L6.19189 8.42703H7.44595V8.11892C7.44595 7.58378 7.64595 7.30811 8.35405 6.89189C9.08919 6.45405 9.5 5.87568 9.5 5.04865C9.5 3.85405 8.51081 3 7.02973 3C5.42432 3 4.54324 3.92973 4.5 5.21081ZM6.87838 11.0054C6.33784 11.0054 5.98108 10.6649 5.98108 10.1459C5.98108 9.62162 6.33784 9.28108 6.87838 9.28108C7.42973 9.28108 7.77568 9.62162 7.77568 10.1459C7.77568 10.6649 7.42973 11.0054 6.87838 11.0054Z' fill='%23ccc'%3E%3C/path%3E%3C/svg%3E");
    width: 14px;
    height: 20px;
    margin-left: 3px;
`

const GridSet = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 249px);
    gap: 31px 18px;
    width: 100%;
    margin-top: 20px;
`

const Layeritem = styled.div`
    display: flex;
    flex-direction: column;
    height: 538px;
    color: rgb(51, 51, 51);
    cursor: pointer;
`

const Lyrimg = styled.div`
        overflow: hidden;
    position: relative;
    background-color: rgb(245, 245, 245);
    width: 249px;
    height: 320px;
`

const Detailimg = styled.img`
    width: 100%;
    height: 100%;
`

const Txtdev = styled.div`
    padding: 14px 10px 0px 0px;
`

const Txtnow = styled.span`
    padding-bottom: 2px;
    font-size: 14px;
    color: rgb(153, 153, 153);
    line-height: 19px;
    letter-spacing: -0.5px;
`

const Txtname = styled.span`
        max-height: 58px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: normal;
    display: -webkit-box;
    overflow: hidden;
`

const Txtdetail = styled.span`
        padding-top: 4px;
    font-size: 12px;
    color: rgb(153, 153, 153);
    line-height: 18px;
    letter-spacing: normal;
    display: -webkit-box;
    overflow: hidden;
    word-break: break-all;
    white-space: normal;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`

const Txtprice = styled.div`
        font-weight: 800;
    font-size: 16px;
    line-height: 24px;
    white-space: nowrap;
    letter-spacing: -0.5px;
    padding-top: 8px;
    color: rgb(51, 51, 51);
`

export default function New() {
    return (
        <div>
            <All>
                <Container>
                    <Banner>
                        <Bannerimg alt="" src="https://collection-image.kurly.com/product-collections/2451/sNzW2Z2kJPIMWnOvw29EpKDlQxcSvWrvoSHwNnw4.png" />
                    </Banner>
                    <NewitemTxt>신상품</NewitemTxt>
                    <NewContain>
                        <Filter>
                            <FilterReset>
                                <FilterTxt>필터</FilterTxt>
                                <Reset><span><ResetImg /></span><ResetTxt>초기화</ResetTxt></Reset>
                            </FilterReset>
                            <div></div>
                        </Filter>
                        <Inner>
                            <InnerMenu>
                                <Countmenu>총 116건</Countmenu>
                                <HowCount>
                                    <Counttxt>추천순<QuestionMark /></Counttxt>
                                    <Counttxt>|</Counttxt>
                                    <Counttxt>신상품순</Counttxt>
                                    <Counttxt>|</Counttxt>
                                    <Counttxt>판매량순</Counttxt>
                                    <Counttxt>|</Counttxt>
                                    <Counttxt>혜택순</Counttxt>
                                    <Counttxt>|</Counttxt>
                                    <Counttxt>낮은 가격순</Counttxt>
                                    <Counttxt>|</Counttxt>
                                    <Counttxt>높은 가격순</Counttxt>
                                </HowCount>
                            </InnerMenu>
                            <GridSet>
                                {
                                    newdummy.results.map((item) => {
                                        return (
                                            <Layeritem>
                                                <Lyrimg><Detailimg alt="" src={item.img} /></Lyrimg>
                                                <Txtdev>
                                                    <Txtnow>샛별배송</Txtnow>
                                                    <Txtname>{item.product_name}</Txtname>
                                                    <Txtdetail>{item.product_detail}</Txtdetail>
                                                    <Txtprice>{item.price}원</Txtprice>
                                                </Txtdev>
                                            </Layeritem>
                                        )
                                    })
                                }
                            </GridSet>
                        </Inner>
                    </NewContain>
                </Container>
                <StickyBanner>
                    <SBanner>
                        <ImgBnr>
                            <Bnrimg alt="" src="https://res.kurly.com/main/banners/deliveryInfo.png" />
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