import React from "react";
import styled from "styled-components";

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
        padding-bottom: 10px;
        border-bottom: 2px solid rgb(51, 51, 51);
        font-size: 12px;
        color: rgb(102, 102, 102);
        line-height: 17px;
        text-align: right;
    `

    const Inputbox = styled.div`
        display: inline-flex;
        width: 100%;
        padding: 10px 20px;
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
    const BoxDup = styled.button`
        width: 120px;
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
                    </div>
                </Innerbox>
            </BackSign>
        </div>
    );
}