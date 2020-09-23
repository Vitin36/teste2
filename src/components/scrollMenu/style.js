import styled from 'styled-components'

export const Box = styled.div`
    @media(min-width: 1366px){

        & div.box {

            min-height: 200px;
            width: 100%;
            overflow-x: scroll;
            overflow-y: hidden;
            white-space: nowrap;
            visibility: hidden;
            transition: 250ms ease-in;
    
            & ::-webkit-scrollbar {
                height: 5px;
                border-radius: 10px;
                width: 20px;
            }
            
            & ::-webkit-scrollbar-track {
                background: #CCD3D9; 
            }
    
            & ::-webkit-scrollbar-thumb {
                background: #3f8ddda1; 
            }
            
            & ::-webkit-scrollbar-thumb:hover {
                background: #3F8DDD; 
            }
    
        }
    
        & .canOverflow {
            & :hover{
                visibility: visible;
            }
        }

    }
`

export const BoxContent = styled.div`
    @media(min-width: 1366px){
        visibility: visible;
        width: 100%;
        margin-left: 20px;
    }

    @media(max-width: 1365px){
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
`

export const Card = styled.div`
    width: 180px;
    height: 180px;
    border: 1px solid #CCD3D9;
    margin: 1em 1.5em;
    padding: 3em 1em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    transition: 250ms ease-in;

    & :hover{
        border: 1px solid #3F8DDD;
        & h3{
            color: #3F8DDD;
        }
    }

    @media(min-width: 1366px){
        display: inline-block;
        vertical-align: middle;
    }

    @media(max-width: 1366px){
        width: 150px;
        height: 150px;
        padding: auto;
        vertical-align: middle;
    }
`

export const CardText = styled.h3`
    font-family: gothamBook;
    font-size: 18px;
    line-height: 27px;
    color: #000000;
    text-align: center;
    transition: 250ms ease-in;

    & strong {
        font-family: gothamBold;
    }

    @media(max-width: 1366px){
        font-size: 16px;
    }

    @media(max-width: 991px){
        font-size: 14px;
        line-height: 19.6px;
    }
`