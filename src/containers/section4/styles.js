import styled from 'styled-components'

export const Section = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 6em 3em;
    background-color: #3E8DDD;
    min-height: 50vh;
    
    @media(max-width: 991px){ 
        padding: 6em 2em;
    }
`

export const Container = styled.div `
    width: 70%;
    display: flex;
    flex-direction: row;
    align-self: center;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    @media(max-width: 1650px){ 
        width: 90%;
    }

    @media(max-width: 991px){ 
        width: 100%;
        padding: 6em 0;
    }

    @media(max-width: 375px){
        padding: 1em 0;
    }
`

export const BlankRow = styled.div `
    width: 15%;

    @media(max-width: 991px){
        width: 0%;
    }
`

export const Row = styled.div `
    width: 65%;
    z-index: 10;

    @media(max-width: 991px){
        width: 100%;
    }
`

export const Title = styled.h1 `
    font-size: 39px;
    font-family: gothamBook;
    line-height: 55px;
    text-align: center;
    color: #ffffff;
    & span {
        font-family: gothamBold;
        color: #000000;
    }

    @media(max-width: 991px){
        font-size: 16px;
        line-height: 28px;
    }
`