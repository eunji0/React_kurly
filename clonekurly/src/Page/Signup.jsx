import React from "react";
import styled from "styled-components";
import { useState } from "react";
import RadioGroup from "../component/RadioGroup";
import Radio from "../component/Radio";

export default function Signup() {

    const BackSign = styled.div`
    margin-top: 50px;
    margin-bottom: 60px;
    width: 100%;
    `

    const Txtsign = styled.div`
    margin-bottom: 50px;
    font-size: 28px;
    line-height: 35px;
    font-weight: 500;
    text-align: center;
    letter-spacing: -1px;
    color: rgb(51, 51, 51);
    `

    const Innerbox = styled.div`
        width: 640px;
    margin: 0px auto;
    `

    const Necinput =styled.div`
        position: relative;
        padding-bottom: 10px;
        border-bottom: ${(props)=>props.borderBottom || "2px solid rgb(51, 51, 51)"};
        font-size: 12px;
        color: rgb(102, 102, 102);
        line-height: 17px;
        text-align: ${(props)=> props.textAlign || "right"};
        bottom: ${(props)=> props.bottom || "0px"};
    `

    const Inputbox = styled.div`
        display: inline-flex;
        width: 100%;
        padding: ${(props)=> props.padding || "10px 20px"};
    `

    const Boxtxtid = styled.div`
        width: 139px;
        padding-top: 12px;
        font-weight: 500;
        font-size: 14px;
        color: rgb(51, 51, 51);
        line-height: 20px;
    `

    const Boxinput = styled.div`
        flex: 1 1 0%;
    `

    const Innerboxinput = styled.input`
    width: 100%;
    height: 48px;
    padding: 0 11px 1px 15px;
    border-radius: 4px;
    border: 1px solid #ddd;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #333;
    outline: none;
    box-sizing: border-box;
    `

    const Addressbtn = styled.button`
        width: 100%;
    height: 48px;
    padding: 0 11px 1px 15px;
    border-radius: 4px;
    border: 1px solid rgb(95, 0, 128); 
    background-color: #fff;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: rgb(95, 0, 128);
    outline: none;
    box-sizing: border-box;
    `

    const BoxDup = styled.button`
    width: ${(props)=> props.width || "120px"};
    margin-left: 8px;
    height: 48px;
    border-radius: 3px;
    display: block;
    padding: 0px 10px;
    text-align: center;
    overflow: hidden;
    height: 46px;
    color: ${(props) => props.color ||  "rgb(95, 0, 128)"};
    background-color: ${(props) => props.backgroundColor || "rgb(255, 255, 255)"};
    border: ${(props) => props.border || "1px solid rgb(95, 0, 128)"};
    font-weight: 500;
    font-size: 14px;
    `

    const Emptydup = styled.div`
        width: 120px;
    margin-left: 8px;
    height: 44px;
    `

    const Divbirth =styled.div`
    height: 44px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    border: 1px solid rgb(204, 204, 204);
    border-radius: 3px;
    padding: 0px 15px;
    `

    const Inputbirth = styled.input`
    text-align: center;
    font-size: 14px;
    border: none;
    width: 100%;
    height: 40px;
    padding: 0px 11px 1px 15px;
    border-radius: 4px;
    font-weight: 400;
    line-height: 38px;
    color: rgb(51, 51, 51);
    outline: none;
    box-sizing: border-box;
    `

    const Divcircle =styled.div`
    display: flex;
    padding: 8px 0px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    `

    const Divcircle2 =  styled.div`
    align-items: flex-start;
    flex-direction: column;
    padding-top: 12px;
    display: flex;
    padding: 8px 0px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    `


    return (
        <div>
            <BackSign>
                <Txtsign>회원가입</Txtsign>
                <Innerbox>
                    <Necinput> <span style={{color:"rgb(238, 106, 123)"}}>*</span>필수입력사항</Necinput>
                    <div>
                        <Inputbox>
                        <Boxtxtid>아이디<span style={{color:"rgb(238, 106, 123)"}}>*</span></Boxtxtid>
                        <Boxinput><Innerboxinput placeholder="아이디를 입력해주세요"></Innerboxinput></Boxinput>
                        <BoxDup>중복확인</BoxDup>
                        </Inputbox>
                        <Inputbox>
                        <Boxtxtid>비밀번호<span style={{color:"rgb(238, 106, 123)"}}>*</span></Boxtxtid>
                        <Boxinput><Innerboxinput placeholder="비밀번호를 입력해주세요"></Innerboxinput></Boxinput>
                        <Emptydup/>
                        </Inputbox>
                        <Inputbox>
                        <Boxtxtid>비밀번호 확인<span style={{color:"rgb(238, 106, 123)"}}>*</span></Boxtxtid>
                        <Boxinput><Innerboxinput placeholder="비밀번호를 한번 더 입력해주세요"></Innerboxinput></Boxinput>
                        <Emptydup/>
                        </Inputbox>
                        <Inputbox>
                        <Boxtxtid>이름<span style={{color:"rgb(238, 106, 123)"}}>*</span></Boxtxtid>
                        <Boxinput><Innerboxinput placeholder="이름을 입력해주세요"></Innerboxinput></Boxinput>
                        <Emptydup/>
                        </Inputbox>
                        <Inputbox>
                        <Boxtxtid>이메일<span style={{color:"rgb(238, 106, 123)"}}>*</span></Boxtxtid>
                        <Boxinput><Innerboxinput placeholder="예: marketkurly@kurly.com"></Innerboxinput></Boxinput>
                        <BoxDup>중복확인</BoxDup>
                        </Inputbox>
                        <Inputbox>
                        <Boxtxtid>휴대폰<span style={{color:"rgb(238, 106, 123)"}}>*</span></Boxtxtid>
                        <Boxinput><Innerboxinput placeholder="숫자만 입력해주세요"></Innerboxinput></Boxinput>
                        <BoxDup border="1px solid rgb(221, 221, 221)" color="rgb(221, 221, 221)">인증번호 받기</BoxDup>
                        </Inputbox>
                        <Inputbox>
                        <Boxtxtid>주소<span style={{color:"rgb(238, 106, 123)"}}>*</span></Boxtxtid>
                        <Boxinput>
                            <div style={{display:"flex", flexDirection:"column"}}>
                            <div style={{height:"48px"}}>
                            <Addressbtn>주소 검색</Addressbtn>
                            <img style={{position:"relative", left:"110px", bottom:"35px"}} alt="" src="https://res.kurly.com/pc/service/cart/2007/ico_search.svg"/>
                            </div>
                            <div>
                            <Necinput borderBottom="none" textAlign="center" style={{marginRight:"80px", top:"8px"}}>배송지에 따라 상품 정보가 달라질 수 있습니다.</Necinput>
                            </div>
                            </div>
                        </Boxinput>
                        <Emptydup/>
                        </Inputbox>
                        <Inputbox>
                        <Boxtxtid>성별</Boxtxtid>
                            <Boxinput>
                                <RadioGroup>
                                    <Radio name="contact" value="MAIL" defaultChecked>
                                        남자
                                    </Radio>
                                    <Radio name="contact" value="FEMAIL">
                                        여자
                                    </Radio>
                                    <Radio name="contact" value="NONE">
                                        선택 없음
                                    </Radio>
                                </RadioGroup>
                            </Boxinput>
                        <Emptydup/>
                        </Inputbox>
                        <Inputbox>
                        <Boxtxtid>생년월일</Boxtxtid>
                        <Boxinput>
                            <Divbirth>
                                <div>
                                    <div style={{position:"relative", height:"40px"}}>
                                        <Inputbirth placeholder="YYYY"></Inputbirth>
                                    </div>
                                </div>
                                <span style={{color:"rgb(204, 204, 204)"}}>/</span>
                                <div><div style={{position:"relative", height:"40px"}}>
                                        <Inputbirth placeholder="MM"></Inputbirth>
                                    </div></div>
                                <span style={{color:"rgb(204, 204, 204)"}}>/</span>
                                <div><div style={{position:"relative", height:"40px"}}>
                                        <Inputbirth placeholder="DD"></Inputbirth>
                                    </div></div>
                            </Divbirth>
                        </Boxinput>
                        <Emptydup/>
                        </Inputbox>
                        <Inputbox>
                        <Boxtxtid>추가입력 사항</Boxtxtid>
                            <Boxinput>
                                <RadioGroup>
                                    <Radio name="contact" value="freindid" defaultChecked>
                                        친구초대 추천인 아이디
                                    </Radio>
                                    <Radio name="contact" value="eventName">
                                        참여 이벤트명
                                    </Radio>
                                </RadioGroup>
                            </Boxinput>
                        <Emptydup/>
                        </Inputbox>
                    </div>
                </Innerbox>
                {/* <div style={{width:"640px",padding:"10px 0px", borderBottom:"1px solid rgb(51, 51, 51)"}}></div> */}
                <Innerbox style={{padding:"10px 0px", borderBottom:"1px solid rgb(51, 51, 51)"}}></Innerbox>
                <Innerbox>
                    <Inputbox padding="10px 0px 10px 20px">
                    <Boxtxtid>이용약관동의<span style={{color:"rgb(238, 106, 123)"}}>*</span></Boxtxtid>
                    <Boxinput>
                        <Divcircle2></Divcircle2>
                        <Divcircle></Divcircle>
                        <Divcircle></Divcircle>
                        <Divcircle></Divcircle>
                        <Divcircle></Divcircle>
                        <Divcircle></Divcircle>
                    </Boxinput>
                    </Inputbox>
                </Innerbox>
            </BackSign>
        </div>
    );
}