import styled from 'styled-components'

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 5em;
    position: relative;
    background-color: #3E8DDD;
    min-height: 70vh;
    overflow: hidden;
        
    @media(max-width: 991px){ 
        padding: 6em 2em;
    }
`

export const Container = styled.div` 
    width: 70%;
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    z-index: 10;

    @media(max-width: 1366px){ 
        width: 90%;
    }

    @media(max-width: 991px){ 
        width: 100%;
    }

    @media(max-width: 414px){ 
        padding-right: 125px;
    }

    @media(max-width: 375px){ 
        padding-right: 125px;
    }
`


export const MiniTitle = styled.h3`
    font-family: gothamBook;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
    margin-bottom: 48px;


    @media(max-width: 991px){ 
        font-size: 12px;
        line-height: 21px;
    }
`

export const Title = styled.h1`
    font-family: gothamMedium;
    font-size: 36px;
    line-height: 50.4px;
    color: #ffffff;
    margin-bottom: 32px;


    @media(max-width: 991px){ 
        font-size: 20px;
        line-height: 28px;
    }
`

export const Text = styled.p`
    font-family: gothamBook;
    font-size: 26px;
    line-height: 39px;
    color: #ffffff;
    margin-bottom: 64px;

    & strong{
        font-family: gothamBold;
    }


    @media(max-width: 991px){ 
        font-size: 14px;
        line-height: 19.6px;
    }
`

export const Homem = styled.img`
    width: 700px;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 1;


    @media(max-width: 1200px){
        right: -200px;
    }


    @media(max-width: 992px){ 
        right: -300px;
    }

    @media(max-width: 991px){ 
        right: 0px;
        width: 276px;
    }

    @media(max-width: 375px){ 
        right: 0px;
        width: 176px;
    }

`