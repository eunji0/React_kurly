import React from "react";
import styled from "styled-components";

export default function Login() {

    const Backlogin = styled.div`
        margin-top: 90px;
        margin-bottom: 60px;
        width: 100%;
    `

    const Centerlogin = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 340px;
        height: 100%;
        margin: 0 auto;
    `

    const Txtlogin = styled.div`
        font-weight: 800;
        font-size: 20px;
        line-height: 20px;
        text-align: center;
    `

    const Inputbox = styled.div`
        margin-top: ${(props)=>props.marginTop};
        width: 340px;
    `

    const Inputid =styled.input`
        height: 54px;
        width: 100%;
        padding: 0px 11px 1px 15px;
        border-radius: 4px;
        border: 1px solid rgb(221, 221, 221);
        font-weight: 500;
        line-height: 1.5;
        color: rgb(51, 51, 51);
        outline: none;
        box-sizing: border-box;
        font-size: 14px;
    `
        const Inputpassword =styled.input`
        height: 54px;
        width: 100%;
        padding: 0px 11px 1px 15px;
        border-radius: 4px;
        border: 1px solid rgb(221, 221, 221);
        font-weight: 500;
        line-height: 1.5;
        color: rgb(51, 51, 51);
        outline: none;
        box-sizing: border-box;
        font-size: 14px;
        margin-top: 10px;
    `

    const Findbox = styled.div`
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin-top: 10px;
        font-size: 13px;
        flex-direction: row;
        color: rgb(51, 51, 51);
        cursor: pointer;
    `

    const Btnlogin = styled.button`
        width: 100%;
        height: 54px;
        padding: 0px 10px;
        text-align: center;
        overflow: hidden;
        border-radius: 3px;
        color: rgb(255, 255, 255);
        background-color: rgb(95, 0, 128);
        border: ${(props)=>props.border};
        color: ${(props) => props.color};
        background: ${(props) => props.background};
        margin-top: 10px;
        display: inline-block;
    font-size: 16px;
    font-weight: 500;
    `

    return (
        <div>
            <Backlogin>
                <Centerlogin>
                    <Txtlogin>?????????</Txtlogin>
                    <Inputbox marginTop="30px">
                    <Inputid placeholder="???????????? ??????????????????"></Inputid>
                    <Inputpassword type="password" placeholder="??????????????? ??????????????????"></Inputpassword>
                    </Inputbox>
                    <Findbox>
                        <div style={{marginRight:"5px"}}>????????? ??????</div>
                        <div style={{marginRight:"5px"}}>|</div>
                        <div>???????????? ??????</div>
                    </Findbox>
                    <Inputbox marginTop="20px">
                    <Btnlogin background="rgb(95, 0, 128)" color="#fff">?????????</Btnlogin>
                    <Btnlogin background="#fff" color="rgb(95, 0, 128)" border="1px solid rgb(95, 0, 128)">????????????</Btnlogin>
                    </Inputbox>
                </Centerlogin>
            </Backlogin>
        </div>
    );
}