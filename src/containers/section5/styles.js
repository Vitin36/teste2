import styled from 'styled-components'

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 8em 5em;
    background-color: #ffffff;
    position: relative;    
    
    @media(max-width: 991px){ 
        padding: 6em 2em;
    }

    & #adjustContainer {
        @media(max-width: 768px){
            margin-top: 170px!important;
            margin-bottom: 72px!important;
        }
    
        @media(max-width: 414px){
            margin-top: 100px!important;
        }
    
        @media(max-width: 375px){
            margin-top: 100px!important;
        }
    }
`

export const Container = styled.div` 
    width: ${({ width }) => `${width ? width : '80%'}!important`};
    margin-bottom: ${({ marginBottom }) => `${marginBottom ? '280px' : '0'}`};
    align-items: ${({ alignItems }) => `${alignItems ? alignItems : 'center'}`};
    justify-content: ${({ justifyContent }) => `${justifyContent ? justifyContent : 'center'}`};
    display: flex;
    flex-direction: column;
    align-self: center;
    position: relative;
    z-index: 100;

    @media(max-width: 1650px){ 
        width: ${({ width }) => `${width ? width : '90%'}!important`};
    }

    @media(max-width: 991px){ 
        width: ${({ width }) => `${width ? width : '100%'}!important`};
    }

    @media(max-width: 991px){ 
        margin-bottom: ${({ marginBottom }) => `${marginBottom ? '0px' : '0'}`};
    }


    ${({ fullMargin }) => `${fullMargin ? `margin: ${fullMargin};` : ''}`}

`
export const Row = styled.div`
    width: 100%;
    display: flex;
    height: min-height;
    position: relative;

    @media(min-width: 992px){
        & > div {
            width: 50%;
        }
    }


    ${({ flexDirection, alignItems, justifyContent }) => `
        flex-direction: ${flexDirection ? flexDirection : 'row'};
        align-items: ${alignItems ? alignItems : 'center'};
        justify-content: ${justifyContent ? justifyContent : 'center'};
    `}
`

export const MiniTitle = styled.h3`
    font-family: gothamBook;
    font-size: 14px;
    line-height: 21px;
    text-transform: uppercase;
    margin-bottom: 48px;

    @media(max-width: 991px){
        font-size: 12px;
        line-height: 21px;
    }
`

export const Title = styled.h1`
    font-family: gothamMedium;
    font-size: 36px;
    line-height: 50,4px;
    color: #3E8DDD;
    margin-bottom: 48px;

    @media(max-width: 991px){
        font-size: 20px;
        line-height: 28px;
    }
`

export const Text = styled.p`
    font-family: gothamBook;
    font-size: 22px;
    line-height: 33px;
    color: #000000;
    max-width: 300px;

    @media(max-width: 991px){
        font-size: 14px;
        line-height: 19.6px;
    }

    & strong{
        font-family: gothamBold;
    }

    & span{
        color: #3E8DDD;
        font-family: gothamBold;
    }
`

export const MiniText = styled.p`
    font-family: gothamBook;
    font-size: 18px;
    line-height: 27px;
    color: #000000;
    margin-bottom: 48px;
    max-width: 450px;
    margin-top: -35px;
    z-index: 10;

    @media(max-width: 991px){
        font-size: 14px;
        line-height: 19.6px;
        margin-top: 0;
    }

    & strong{
        font-family: gothamBold;
    }

    & span{
        color: #3E8DDD;
        font-family: gothamBold;
    }
`

export const Divisor = styled.img`
    width: 105%;
    position: absolute;
    right: 0;
    top: 30px;
    z-index: 3;
    display: none;
    visibility: hidden;

    @media(max-width: 1500px){
        width: 100%;
        right: 60px;
    }

    @media(max-width: 1200px){
        width: 100%;
        right: 60px;
        top: 60px;
    }

    @media(min-width: 1200px){
        display: block;
        visibility: visible;
    }
`

export const Machine = styled.img`
    max-width: 1000px;
    position: absolute;
    right: 0;
    top: 100px;
    z-index: 1;


    @media(max-width: 1366px){
        right: -75px;
        top: 150px;
    }

    @media(max-width: 1200px){
        right: -155px;
        top: 150px;
    }

    @media(max-width: 991px){
        display: none;
        visibility: hidden;
    }


    @media(max-width: 768px){
        display: block;
        visibility: visible;
        width: 100%;
        top: -7px;
        right: 0;
    }

    @media(max-width: 414px){
        display: block;
        visibility: visible;
        width: 100%;
        top: 190px;
        right: 0;
    }

    @media(max-width: 375px){
        display: block;
        visibility: visible;
        width: 100%;
        top: 225px;
        right: 0;
    }


    @media(max-width: 320px){
        display: block;
        visibility: visible;
        width: 100%;
        top: 290px;
        right: 0;
    }

`

export const Icon = styled.img`
    max-width: 100%;
`

export const IconBox = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5em;
    ${({border}) => `${border ? 'border-right: 1px solid #EDEDF2;' : ''}`}
    ${({border}) => `${border ? 'border-left: 1px solid #EDEDF2;' : ''}`}

    @media(max-width: 991px){
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        & :last-of-type{
            margin-bottom: 36px;
        }
    }

    & p {
        padding: 0.5em;
        margin-top: 36px;
        text-align: center;
        font-family: gothamBook;
        font-size: 18px;
        line-height: 27px;
        & strong {
            font-family: gothamBold;
        }

        @media(max-width: 991px){
            font-size: 14px;
            line-height: 19.6px;
            margin-left: 16px;
            margin-top: 0;
        }
    }

`