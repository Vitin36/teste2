import styled from 'styled-components'

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 5em;
    position: relative;
    background-color: #C4C4C4;
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

    @media(max-width: 1366px){ 
        width: 90%;
    }

    @media(max-width: 991px){ 
        width: 100%;
    }
`

export const Text = styled.p`
    font-family: gothamLight;
    font-size: 12px;
    line-height: 24px;
    color: #000000;
    text-align: center;

    @media(max-width: 991px){ 
        font-size: 10px;
        line-height: 15px;
    }
`