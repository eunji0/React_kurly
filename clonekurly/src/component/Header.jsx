import React from "react";
import { ReactComponent as Logo } from "../svg/Logo.svg";
import { ReactComponent as New } from "../svg/New.svg";
import { ReactComponent as Search } from "../svg/Search.svg";
import { ReactComponent as Address } from "../svg/Address.svg";
import { ReactComponent as Heart } from "../svg/Heart.svg";
import { ReactComponent as Cart } from "../svg/Cart.svg";
import { ReactComponent as Menu } from "../svg/Menu.svg";
import styled from "styled-components";
import { Link } from 'react-router-dom';

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
    margin-right: 10px;
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

export default function Header() {
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
                                <Serchinput placeholder="검색어를 입력해주세요. " className="searchinput"/>
                                <StyledSearch><Search /></StyledSearch>
                            </Tin12c>
                            <div>
                            <div className="tin12-la">
                                <div className="address mainicon"><Address/></div>
                                <div className="like mainicon"><Heart/></div>
                                <div className="cart mainicon"><Cart/></div>
                            </div>
                            </div>
                        </Topin12>
                    </Topin1>
                    <div className="top-in2">
                        <div className="topin2-inner">
                            <div className="category">
                                <div style={{marginRight: "14px"}}><Menu/></div>
                                <Menutxt className="menu-txt">카테고리</Menutxt>
                            </div>
                            <div className="menu">
                                <Menutxt className="menu-txt tt">신상품</Menutxt>
                                <Menutxt className="menu-txt tt">베스트</Menutxt>
                                <Menutxt className="menu-txt tt">알뜰쇼핑</Menutxt>
                                <Menutxt className="menu-txt tt">특가/혜택</Menutxt>
                            </div>
                            <div className="guide">
                                <Guideline className="guideline">
                                    <Guidetxt className="guidetxt">샛별・택배<Guidetxt2 className="guidetxt2">배송안내</Guidetxt2></Guidetxt>
                                </Guideline>
                            </div>
                        </div>
                    </div>
                </Topinner>
            </MainTop>
        </div>
    )
}