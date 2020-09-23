import styled from 'styled-components'
import PureModal from 'react-pure-modal'
import background from 'assets/images/section1/background.svg'

export const ThankYouSection = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #000000;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & div {
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
`

export const ThankYouSectionWrapper = styled.div`
    width: 100%;
    overflow: hidden;
`


export const HexagonosThankYou = styled.img`
    max-width: 400px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 0;

    @media(max-width: 1366px){
        display: none;
        visibility: hidden;
    }
`

export const Container = styled.div`
    position: relative;
    overflow-x: hidden;
`

export const Hexagonos = styled.img`
    max-width: 100%;
    position: absolute;
    right: -155px;
    top: 100px;
    z-index: 0;

    @media(max-width: 1366px){
        display: none;
        visibility: hidden;
    }
`

export const PredioHexagonos = styled.img`
    max-width: 750px;
    position: absolute;
    left: -80px;
    bottom: 0px;
    z-index: 0;

    @media(max-width: 1366px){
        max-width: 540px;
    }

    @media(max-width: 1200px){
        max-width: 440px;
    }

    @media(max-width: 991px){
        width: 340px;
    }

    @media(max-width: 375px){
        width: 240px;
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

export const TitleThankYou = styled.h1`
    color: #3E8DDD;
    font-family: gothamMedium;
    font-size: 36px;
    line-height: 50.4px;
    text-transform: uppercase;
    max-width: 650px;
    margin-bottom: 36px;
`
export const SubTitleThankYou = styled.h2`
    color: #ffffff;
    font-family: gothamMedium;
    font-size: 26px;
    line-height: 39px;
    max-width: 650px;
    margin-bottom: 24px;
`
export const TextThankYou = styled.h3`
    color: #ffffff;
    font-family: gothamLight;
    font-size: 22px;
    line-height: 33px;
    max-width: 650px;
`