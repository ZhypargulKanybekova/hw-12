import React from "react";
import { Icons } from "../UI/Icons";
import { menu } from "./MealsItem";
import styled from "styled-components";
import {Button} from "../UI/Button"

export const Meals = () => {
  return (
    <MainBlock>
    <Continer>
      {menu.map((el) => {
        return (
          <>
            <Ul>
              <FirstBlock>
                <TitleProduct>{el.title}</TitleProduct>
                <InfoProduct>{el.info} </InfoProduct>
                <PriceProduct> ${el.price} </PriceProduct>
              </FirstBlock>
              <SecondBlock>
                <ThirdBlock>
                <AmountProduct>Amount</AmountProduct>
                <Input type="number"/>
                </ThirdBlock>
                <Buttons> <Icons/> Add</Buttons>
              </SecondBlock>
              
            </Ul>
            <Line></Line>
            </>
        
        );
      })}
    </Continer>
    </MainBlock>
  );
};

const Ul = styled.ul`
    
    display:flex;
    justify-content:space-between;
    padding:0 70px;
    height:130px;
    border:solid 0 0 1px 0;
    
    
`
const Continer = styled.div`
position:absolute;
top:670px;
left:300px;
height: 564px;
width: 1040px;
background: #FFFFFF;
border-radius: 16px;


`
const FirstBlock = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    margin-top:40px;
    
`
const SecondBlock = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:40px;
    
    
    gap:12px;
`
const ThirdBlock =styled.div`
    display:flex;
    align-items:center;
    gap:20px;
    margin-bottom:0px;
   
`
const MainBlock = styled.div`
    width:100%;
    height:800px;
    background-color:#383838f9;
    margin-top:-7px;
    
`
const Input = styled.input`
    width:50px;
    height:32px;
`
const PriceProduct = styled.h3`
 font-size: 20px;
 line-height: 30px;
 color: #AD5502;
`
const TitleProduct = styled.h3`
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #222222;
`
const InfoProduct = styled.p`
    font-style: italic;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #222222;
`
const AmountProduct = styled.p`
font-weight: 600;
font-size: 18px;
line-height: 27px;
color: #222222;
`
const Line = styled.span`
display:flex;
width: 959px;
height: 0px;
margin-left:40px;
border: 1px solid #D6D6D6;
box-shadow: 0px 6px 12px rgba(36, 36, 36, 0.08);
`
const Buttons = styled(Button)`
  width: 99px;
  height: 41px;
  background: #8a2b06;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 24px 10px 16px;
  border-radius: 20px;
  font-size: 17px;
  border:none;
  margin-left:50px;
`;

