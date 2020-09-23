import styled from "styled-components"

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 8em 5em;
    background-color: #FFFFFF;
    
    @media(max-width: 991px){ 
        padding: 6em 0.5em;
        padding-bottom: 0;
    }
`

export const ButtonSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 6em 0;
    background-color: #FFFFFF;
    
    @media(max-width: 991px){ 
        padding: 0 2em;
        padding-bottom: 6em;
    }
`


export const Container = styled.div`
    ${({ marginTop }) => marginTop ? `margin-top: ${marginTop}px;` : ''}
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    z-index: 10;

    @media(max-width: 1650px){ 
        width: 90%;
    }

    @media(max-width: 991px){ 
        width: 100%;
    }
`

export const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-item: center;
    justify-content: center;

    ${({responsiveColumn}) => `${responsiveColumn ? `
        @media(max-width: 1365px){
            flex-direction: column;
            align-item: center;
            justify-content: center;

            & div.column{
                width: 100%!important;
                text-align: center!important;
            }

            & div.margin{
                margin: 36px 0;
            }
        }
    ` : ``}`}
`

export const TextColumn = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    align-item: center;
    justify-content: center;
`

export const CardColumn = styled.div`
    width: 75%;
`

export const ColumnText = styled.h3`
    font-family: gothamBook;
    font-size: 22px;
    line-height: 33px;
    color: #000000;
    
    & strong {
        font-family: gothamBold;
    }

    @media(max-width: 991px){
        font-size: 14px;
        line-height: 19.6px;
    }
`


export const MiniTitle = styled.p`
    font-family: gothamBook;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
    text-transform: uppercase;
    text-align: center;
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
    color: #3E8DDD;
    text-align: center;
    margin-bottom: 48px;

    @media(max-width: 991px){
        font-size: 20px;
        line-height: 28px;
    }
`