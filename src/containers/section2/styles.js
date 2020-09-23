import styled from 'styled-components'

export const Section = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 6em 3em;
    min-height: 45vh;
    background-color: #F1F7FC;

    @media(max-width: 991px){ 
        padding: 6em 2em;
    }
`

export const Container = styled.div `
    width: 70%;
    display: flex;
    flex-direction: column;
    align-self: center;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    @media(max-width: 1650px){ 
        width: 90%;
    }

    @media(max-width: 991px){ 
        width: 100%;
    }
`

export const Message = styled.h1 `
    text-align: center;
    font-size: 30px;
    line-height: 42px;
    font-family: gothamMedium;
    color: #000000;
    margin-bottom: 26px;
    z-index: 10;
    max-width: 900px;
    & > span {
        color: #3E8DDD;
    }

    @media(max-width: 991px){
        font-size: 18px;
        line-height: 25.2px;
    }
`

export const SubMessage = styled.p `
    text-align: center;
    font-size: 12px;
    line-height: 22,4px;
    font-family: gothamBook;
    color: #000000;
    z-index: 10;

    @media(max-width: 991px){
        font-size: 9px;
        line-height: 19.6px;
    }
`