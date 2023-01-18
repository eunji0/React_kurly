import React from "react";
import { ReactComponent as Logo } from "../svg/Logo.svg";
import { ReactComponent as New } from "../svg/New.svg";
import { ReactComponent as Search } from "../svg/Search.svg";
import { ReactComponent as Menu } from "../svg/Menu.svg";
import { ReactComponent as MenuClick } from "../svg/MenuClick.svg";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import {useState, useEffect} from "react";

const StyledSearch = styled.button`
  background-color: transparent;
  border: none;
  padding-top: 5px;
`;

const MainTop = styled.div`
    height: 156px;
    width: 100%;
    box-shadow: 0 3px 4px 0 rgb(0 0 0 / 7%);
`

const Topinner = styled.div`
    width: 1050px;
    height: 100%;
    margin: 0 auto;
    margin-left: 234.6px;
    margin-right: 234.6px;
    position: relative;
`

const Topin1 = styled.div`
    height: 100px;
`

const Topin11 = styled.div`
    display: flex;
    justify-content: flex-end;
`

const Signbox = styled.div`
    height: 35px;
    font-size: 11px;
    display: flex;
    align-items: center;
`

const Bar = styled.span`
    margin-right: 8px;
    color: rgb(217, 217, 217);
`

const Client = styled.span`
    color: #333333;
    margin-right: 5px;
    font-weight: 600;
    cursor: pointer;
`

const DownImg = styled.img`
    width: 8px;
    height: 5px;
`

const Topin12 =styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 1px;
    height: 63px;
    align-items: center;
`

const Tin12l =styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: flex-start;
`

const Tin121c = styled.div`
    font-weight: 500;
    color: #5f0080;
    margin-left: 20px;
    font-size: 18px;
    margin-right: 7px;
    line-height: 1.33;
    cursor: pointer;
`

const Tin121r =styled.div`
    color: #b5b5b5;
    font-weight: 500;
    font-size: 18px;
    &:hover {
        color:#5f0080;
    }
`

const Newdiv = styled.div`
    margin-bottom: 20px;
    margin-left: 2px;
`

const Tin12c = styled.div`
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 400px;
    height: 48px;
    padding-left: 14px;
    border: solid 1px #5f0080;
    border-radius: 6px;
    background-color: #fff;
    box-shadow: inset 0 0 0 1px #f7f7f7;
    position: relative;
    left: 50px;
`

const Serchinput = styled.input`
    width: 300px;
    background-color: inherit;
    border: none;
    outline: none;
    font-size: 16px;
    letter-spacing: -0.33px;
`

const Menutxt = styled.div`
    font-size: 15px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -0.3px;
    color: #4C4C4C;
    display: flex;
    align-items: flex-end;
    cursor: pointer;
    /* &:hover {
        color:#5f0080 !important;
    } */
`

const Txtunder = styled.span`
    height: 20px;
    &:hover {
        color:#5f0080 !important;
         border-bottom: 1px solid #5f0080 !important;
    }
`

const Guideline = styled.div`
    height: 32px;
    padding: 6px 16px;
    border-radius: 18px;
    border: 1px solid #eee;
    color: #666;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: -0.32px;
`

const Guidetxt =styled.span`
    font-weight: 600;
    color: #5f0080;
`

const Guidetxt2 =styled.span`
    color: rgb(102, 102, 102);
    font-size: 13px;
    line-height: 16px;
    letter-spacing: -0.32px;
`

const Category = styled.div`
    display: flex;
    flex-direction: row;
    
`

const Tin121la = styled.div`
     display: flex;
    flex-direction: row;
    position: absolute;
    right: -25px;
    top: 50px;
`

const AddressImg = styled.div`
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 36H0V0h36z'/%3E%3Cg transform='translate(8.7 6)' stroke='%23333' stroke-linejoin='round' stroke-width='1.7'%3E%3Cpath d='M9.306 24S0 16.544 0 9.306a9.306 9.306 0 0 1 18.612 0C18.612 16.544 9.306 24 9.306 24z' stroke-linecap='round'/%3E%3Ccircle stroke-linecap='square' cx='9.212' cy='9.123' r='2.784'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    width: 36px;
    height: 36px;
    &:hover {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 36H0V0h36z'/%3E%3Cg transform='translate(8.7 6)' stroke='%235f0080' stroke-linejoin='round' stroke-width='1.7'%3E%3Cpath d='M9.306 24S0 16.544 0 9.306a9.306 9.306 0 0 1 18.612 0C18.612 16.544 9.306 24 9.306 24z' stroke-linecap='round'/%3E%3Ccircle stroke-linecap='square' cx='9.212' cy='9.123' r='2.784'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }
`

const HeartImg = styled.div`
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36'%3E%3Cpath d='M28.927 8.893a6.46 6.46 0 0 0-9.139 0l-1.829 1.828-1.827-1.828a6.462 6.462 0 1 0-9.14 9.138L8.82 19.86l8.432 8.434a1 1 0 0 0 1.414 0l8.433-8.434h0l1.828-1.828a6.46 6.46 0 0 0 0-9.138z' stroke='%23333' stroke-width='1.7' fill='none' fill-rule='evenodd' stroke-linecap='round'/%3E%3C/svg%3E");
    width: 36px;
    height: 36px;
    &:hover{
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36'%3E%3Cpath d='M28.927 8.893a6.46 6.46 0 0 0-9.139 0l-1.829 1.828-1.827-1.828a6.462 6.462 0 1 0-9.14 9.138L8.82 19.86l8.432 8.434a1 1 0 0 0 1.414 0l8.433-8.434h0l1.828-1.828a6.46 6.46 0 0 0 0-9.138z' stroke='%235f0080' stroke-width='1.7' fill='none' fill-rule='evenodd' stroke-linecap='round'/%3E%3C/svg%3E");
    }
`

const CartImg = styled.div`
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 36H0V0h36z'/%3E%3Cg transform='translate(5.164 6.547)' stroke='%23333' stroke-linecap='square' stroke-linejoin='round' stroke-width='1.7'%3E%3Cpath d='m25.68 3.66-2.72 11.57H7.37L4.66 3.66z'/%3E%3Ccircle cx='20.52' cy='20.78' r='2.14'/%3E%3Ccircle cx='9.81' cy='20.78' r='2.14'/%3E%3Cpath d='M0 0h3.8l1.76 7.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    width: 36px;
    height: 36px;
    &:hover{
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 36H0V0h36z'/%3E%3Cg transform='translate(5.164 6.547)' stroke='%235f0080' stroke-linecap='square' stroke-linejoin='round' stroke-width='1.7'%3E%3Cpath d='m25.68 3.66-2.72 11.57H7.37L4.66 3.66z'/%3E%3Ccircle cx='20.52' cy='20.78' r='2.14'/%3E%3Ccircle cx='9.81' cy='20.78' r='2.14'/%3E%3Cpath d='M0 0h3.8l1.76 7.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }
`

const Topin2 = styled.div`
    height: 56px;
    position: fixed;
    left: 0px;
    min-width: 1050px;
    letter-spacing: -0.3px;
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 7%) 0px 3px 4px 0px;
    width: 100%;
    z-index: 1;
`

const FakeBox = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding-left: 14px;
    border-radius: 6px;
    box-shadow: rgb(247 247 247) 0px 0px 0px 1px inset;
    position: fixed;
    z-index: 102;
    top: 10px;
    width: 242px;
    height: 36px;
    border: none;
    background-color: rgb(247, 247, 247);
    margin-left: 120px;
    left: 50%;
`

const HeaderMenu = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
`

const Fakesearch = styled.input`
    width: 193px;
    padding-right: 22px;
    font-weight: 400;
    font-size: 12px;
    color: rgb(51, 51, 51);
    line-height: 18px;
    background-color: inherit;
    border: none;
    outline: none;
    letter-spacing: -0.33px;
`

const FakeSearchimg = styled.div`
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M24 24H6V6h18z'/%3E%3Cpath d='M22.5 22.5h-15v-15h15z'/%3E%3Cg stroke='%23333' stroke-linecap='square' stroke-linejoin='round' stroke-width='1.6'%3E%3Cpath d='M18.825 13.352c0 1.725-.75 3.225-1.95 4.2-.975.825-2.175 1.275-3.525 1.275a5.457 5.457 0 0 1-5.475-5.475 5.457 5.457 0 0 1 5.475-5.475c3-.075 5.475 2.4 5.475 5.475zM21.375 21.375l-3.75-3.75'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    width: 30px;
    height: 30px;
    border: none;
`

export default function Header() {
    //호버
    const [isboxHovering, setIsboxHovering] = useState(0);

    //스크롤
    const [scrollPosition, setScrollPosition] = useState(0);

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });

    return (
        <div>
            <MainTop className="mainTop">
                <Topinner className="top-inner">
                    <Topin1 className="top-in1">
                        <Topin11 className="top-in11">
                            <div>
                                <Signbox className="signbox">
                                    <Link to="/signup" className="sign">회원가입</Link>
                                    <Bar className="bar">|</Bar>
                                    <Link to="/login" className="login">로그인</Link>
                                    <Bar className="bar">|</Bar>
                                    <Client className="client">고객센터</Client>
                                    <DownImg alt="" className="down" src="https://res.kurly.com/pc/ico/1908/ico_down_16x10.png" />

                                </Signbox>
                            </div>
                        </Topin11>
                        <Topin12 className="top-in12">
                            <Tin12l className="tin12-l">
                                <Link to="/" className="logo">
                                    <Logo />
                                </Link>
                                <Tin121c className="tin12-1c">마켓컬리</Tin121c>
                                <Bar className="bar">|</Bar>
                                <Tin121r className="tin12-1r">뷰티컬리</Tin121r>
                                <Newdiv className="new">
                                <New />
                                </Newdiv>
                            </Tin12l>
                            <Tin12c className="tin12-c">
                                <Serchinput placeholder="검색어를 입력해주세요." className="searchinput"/>
                                <StyledSearch><Search /></StyledSearch>
                            </Tin12c>
                            <div>
                            <Tin121la className="tin12-la">
                                <AddressImg className="address mainicon"></AddressImg>
                                <HeartImg className="like mainicon"></HeartImg>
                                <CartImg className="cart mainicon"></CartImg>
                            </Tin121la>
                            </div>
                        </Topin12>
                    </Topin1>
                    <Topin2 className="top-in2" aria-hidden={scrollPosition < 20 ? "true" : "false"} style={{top: scrollPosition < 20 ? "100px": "0px"}}>
                        <div className="topin2-inner">
                            <Category className="category" onMouseOver={() => setIsboxHovering(1)} onMouseOut={() => setIsboxHovering(0)}>
                                <div style={{marginRight:"14px", marginTop:"3px"}}>{isboxHovering ? <MenuClick/> : <Menu/>}</div>
                                <Menutxt className="menu-txt">카테고리</Menutxt>
                            </Category>
                            <HeaderMenu className="menu" style={{right: scrollPosition < 20 ? "0px":"105px"}}>
                                <Link to="/new"><Menutxt className="menu-txt tt" style={{width: scrollPosition <20 ? "150px":"120px"}}><Txtunder>신상품</Txtunder></Menutxt></Link>
                                <Menutxt className="menu-txt tt" style={{width: scrollPosition <20 ? "150px":"120px"}}><Txtunder>베스트</Txtunder></Menutxt>
                                <Menutxt className="menu-txt tt" style={{width: scrollPosition <20 ? "150px":"120px"}}><Txtunder>알뜰쇼핑</Txtunder></Menutxt>
                                <Menutxt className="menu-txt tt" style={{width: scrollPosition <20 ? "150px":"120px"}}><Txtunder>특가/혜택</Txtunder></Menutxt>
                                {
                                    scrollPosition <20 ? "":<FakeBox><Fakesearch placeholder="검색어를 입력해주세요"></Fakesearch>
                                    <StyledSearch style={{paddingRight:"5px !important"}}><FakeSearchimg/></StyledSearch>
                                    </FakeBox>
                                }
                            </HeaderMenu>
                            <div className="guide">
                                <Guideline className="guideline">
                                    <Guidetxt className="guidetxt">샛별・택배<Guidetxt2 className="guidetxt2">배송안내</Guidetxt2></Guidetxt>
                                </Guideline>
                            </div>
                        </div>
                    </Topin2>
                </Topinner>
            </MainTop>
        </div>
    )
}