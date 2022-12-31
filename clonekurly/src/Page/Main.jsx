import React from "react";
import { ReactComponent as Logo } from "../svg/Logo.svg";
import { ReactComponent as New } from "../svg/New.svg";
import { ReactComponent as Search } from "../svg/Search.svg";
import { ReactComponent as Address } from "../svg/Address.svg";
import { ReactComponent as Heart } from "../svg/Heart.svg";
import { ReactComponent as Cart } from "../svg/Cart.svg";
import { ReactComponent as Menu } from "../svg/Menu.svg";

export default function Main() {
    return (
        <div>
            <div className="mainTop">
                <div className="top-inner">
                    <div className="top-in1">
                        <div className="top-in11">
                            <div>
                                <div className="signbox">
                                    <span className="sign">회원가입</span>
                                    <span className="bar">|</span>
                                    <span className="login">로그인</span>
                                    <span className="bar">|</span>
                                    <span className="client">고객센터</span>
                                    <img alt="" className="down" src="https://res.kurly.com/pc/ico/1908/ico_down_16x10.png" />

                                </div>
                            </div>
                        </div>
                        <div className="top-in12">
                            <div className="tin12-l">
                                <div className="logo">
                                    <Logo />
                                </div>
                                <div className="tin12-1c">마켓컬리</div>
                                <span className="bar">|</span>
                                <div className="tin12-1r">뷰티컬리</div>
                                <div className="new">
                                <New />
                                </div>
                            </div>
                            <div className="tin12-c">
                                <input placeholder="검색어를 입력해주세요. " className="searchinput"/>
                                <div className="mainsearch"><Search /></div>
                            </div>
                            <div>
                            <div className="tin12-la">
                                <div className="address mainicon"><Address/></div>
                                <div className="like mainicon"><Heart/></div>
                                <div className="cart mainicon"><Cart/></div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="top-in2">
                        <div className="topin2-inner">
                            <div className="category">
                                <div style={{marginRight: "14px"}}><Menu/></div>
                                <div className="menu-txt">카테고리</div>
                            </div>
                            <div className="menu">
                                <div className="menu-txt tt">신상품</div>
                                <div className="menu-txt tt">베스트</div>
                                <div className="menu-txt tt">알뜰쇼핑</div>
                                <div className="menu-txt tt">특가/혜택</div>
                            </div>
                            <div className="guide">
                                <div className="guideline">
                                    <span className="guidetxt">샛별・택배<span className="guidetxt2">배송안내</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}