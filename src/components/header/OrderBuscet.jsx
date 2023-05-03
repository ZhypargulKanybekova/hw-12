import React from 'react'
import styled from 'styled-components'
import { ReactComponent as BasketIcon } from '../icons/Group.svg'

export const OrderBuscet = ({children}) => {
  return (
    <Button>
      <BasketIcon />
      <OrderedBucketYitle> {children} </OrderedBucketYitle>
      <OrderedBucketCount> 7</OrderedBucketCount>
      
    </Button>
  )
}

const Button = styled.button`
    width: 249px;
    height: 59px;
    background: #5A1F08;
    border-radius: 30px;
    display:flex;
    justify-content:center;
    align-items:center;
    border:none;
    cursor:pointer;

    &:hover{
        background-color: #4D1601
    }

`

const OrderedBucketYitle = styled.span`
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    margin-left:13px;

`

const OrderedBucketCount = styled.span`

left: 1237px;
top: 33px;
background: #8A2B06;
border-radius: 30px;
padding:4px 13px;
margin-left:10px;
color:white;

`

