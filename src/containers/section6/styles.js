import styled from 'styled-components'
// import background from 'assets/images/section6/background.png'
// import backgroundCortado from 'assets/images/section6/background-cortado.png'
// import backgroundExtraSmall from 'assets/images/section6/background-extra-small.png'

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 5em;
    position: relative;
    background-image: url("http://pages.lenovo.com/rs/183-WCT-620/images/background.png");
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 500px;

    @media(max-width: 1366px){
        background-image: url("https://pages.lenovo.com/rs/183-WCT-620/images/background-cortado.png");
        min-height: auto;
    }

    @media(max-width: 991px){ 
        padding: 6em 2em;
        background-image: url("https://pages.lenovo.com/rs/183-WCT-620/images/background-extra-small.png");
    }
`

export const Container = styled.div` 
    width: ${({ width }) => `${width ? width : '80%'}`};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;

    @media(max-width: 1650px){
        width: ${({ width }) => `${width ? width : '90%'}`};
    }

    @media(max-width: 991px){ 
        width: ${({ width }) => `${width ? width : '100%'}!important`};
    }
`


export const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: flex-start;
    position: relative;
`

export const EmptyColumn = styled.div`
    width: 50%;

    @media(max-width: 991px){ 
        width: 0%;
    }
`

export const Column = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: flex-end;

    @media(max-width: 991px){ 
        width: 100%;
        align-items: center;
        justify-content: center;
    }
`

export const Title = styled.h1`
    font-size: 36px;
    font-family: gothamMedium;
    line-height: 50.4px;
    color: #3E8DDD;
    margin-bottom: 32px;
    max-width: 432px;


    @media(max-width: 991px){ 
        font-size: 20px;
        line-height: 28px;
    }
`
export const Text = styled.h2`
    font-size: 22px;
    font-family: gothamBook;
    line-height: 33px;
    color: #ffffff;
    max-width: 432px;
    margin-bottom: 48px;

    & strong{
        font-family: gothamBold;
    }

    @media(max-width: 991px){ 
        font-size: 14px;
        line-height: 19.6px;
    }
`