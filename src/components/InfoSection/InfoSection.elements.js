import styled from 'styled-components';

export const InfoSec = styled.div`
    color: #fff;
    padding: 100px 0;
    background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};
`
export const InfoRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({ imgStart })=> (imgStart ? 'row-reverse' : 'row')};

`

export const InfoColumn = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width: 768px){
       max-width : 100%;
       flex-basis: 100%;
       display: flex;
       justify-content: center;
    }
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    text-decoration: none;

    @media screen and (max-width: 768px){
        padding-bottom: 65px;
        text-decoration: none;
    }
`

export const TopLine = styled.div`
    color: ${({lightTopLine}) => (lightTopLine ? "#A9B3C1" : "#4B59F7")};
    font-size: 18px;
    line-height: 16px;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    color: ${({lightText}) => (lightText ? "#F7F8FA" : "#1C2237")};
    font-size: 48px;
    line-height: 1.1;
    margin-bottom: 24px;
`

export const SubTitle = styled.h1`
    color: ${({lightTextDesc}) => (lightTextDesc ? "#A9B3C1" : "#1C2237")};
    max-width: 440px;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 35px;
`

export const ImgWrapper = styled.div`
    justify-content: ${({start}) => (start ? "flex-start" : "flex-end")};
    max-width: 555px;
    display: flex;
`
export const Img = styled.img`
    max-width: 100%;
    vertical-align: middle;
    border: 0;
    display: inline-block;
    max-height: 500px;
    padding-right: 0;
`