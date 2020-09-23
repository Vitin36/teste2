import styled from 'styled-components'
import background from 'assets/images/section1/background.svg'
import PureModal from 'react-pure-modal'

export const Section = styled.div `
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #000000;
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    padding: 6em 2em;
    align-items: center;
    justify-content: center;
    position: relative;

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
    z-index: 10;

    @media(max-width: 1650px){ 
        width: 90%;
    }


    @media(max-width: 991px){ 
        width: 100%;
    }
`

export const ContainerLeft = styled.div `
    width: 50%;
    height: min-content;
    padding: 0 2em;

    @media(max-width: 991px){ 
        width: 100%;
    } 
`

export const Title = styled.h1 `
    font-size: 34px;
    font-family: gothamMedium;
    line-height: 53px;
    color: #3E8DDD;
    margin-bottom: 12px;


    @media(max-width: 991px){
        font-size: 27px;
        line-height: 36px;
    }
`

export const SubTitle = styled.h2 `
    font-size: 28px;
    font-family: gothamMedium;
    line-height: 53px;
    color: #ffffff;
    margin-bottom: 48px;

    @media(max-width: 991px){
        font-size: 23px;
        line-height: 31px;
    }
`

export const Text = styled.p `
    font-size: 18px;
    font-family: gothamMedium;
    line-height: 27px;
    color: #ffffff;

    & strong{
        font-family: gothamBold;
    }

    @media(max-width: 991px){
        font-size: 14px;
        line-height: 19.6px;
    }
`

export const ContainerRight = styled.div `
    width: 50%;
    font-family: gothamBold;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    height: min-content;

    @media(max-width: 991px){ 
        display: none;
        visibility: hidden;
    } 
`

export const Card = styled.div `
    background-color: #ffffff;

    & > form {
        width: auto!important;
        padding: 4em!important;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-itens: center;

        & > h1 {
            text-align: center;
            min-width: 120px;
            font-size: 18px;
            line-height: 27px;
            margin-bottom: 1em;
            font-family: gothamBook;
            & > strong {
                font-family: gothamBold;
            }
        }

    }

`

export const LenovoMicrosoft = styled.img `
    max-width: 100%;
    width: min-content;
    position: absolute;
    top: 2em;
    left: 2em;
`

export const ThinkAgile = styled.img `
    max-width: 100%;
    margin-bottom: 76px;
    
    @media(max-width: 991px){
        display: none;
        visibility: hidden;
    }
`


export const Modal = styled(PureModal)`
    & form {
        width: auto!important;
        padding: 1em!important;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-itens: center;

        & select {
            padding: 1em!important;
        }
    }
`

export const StyledHeader = styled.h1`
    text-align: center;
    min-width: 120px;
    font-size: 12px;
    line-height: 27px;
    margin-bottom: 1em;
    font-family: gothamBook;
    & > strong {
        font-family: gothamBold;
    }
`