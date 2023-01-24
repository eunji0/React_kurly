import React from "react";
import styled from "styled-components";

const FooterAll = styled.div`
    padding-top: 30px;
    border-top: 1px solid rgb(247, 247, 247);
`

const TopAll = styled.div`
    width: 1050px;
    margin: 0px auto;
`

const BottomAll = styled.div`
    padding: 20px 0px 30px;
    font-size: 10px;
    line-height: 15px;
    text-align: center;
    background-color: rgb(247, 247, 247);
    color: rgb(153, 153, 153);
`

const TopS = styled.div`
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    padding-bottom: 30px;
`

const TxttopA = styled.h2`
    padding-bottom: 17px;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
`

const TxtAa = styled.div`
        display: block;
    padding-bottom: 20px;
    font-size: 28px;
    line-height: 40px;
    font-weight: 700px;
`

const TxtTb = styled.span`
    margin-left: 8px;
    font-weight: normal;
    font-size: 16px;
`

export default function Footer(){
    return(
        <div>
            <FooterAll>
                <TopAll>
                    <TopS>
                        <div>
                            <TxttopA>고객행복센터</TxttopA>
                            <TxtAa>1644-1107<TxtTb>월~토요일 오전 7시 - 오후 6시</TxtTb></TxtAa>
                        </div>
                        <div></div>
                    </TopS>
                </TopAll>
                <BottomAll>
                컬리에서 판매되는 상품 중에는 컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.<br/>마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.
                <div style={{display:"block", paddingTop:"7px"}}>© KURLY CORP. ALL RIGHTS RESERVED</div>
                </BottomAll>
            </FooterAll>
        </div>

    )
}