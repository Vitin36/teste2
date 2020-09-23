import styled from 'styled-components'
import { Link } from 'react-scroll'

export const StyledLink = styled(Link)`
    width: 100%;
    max-width: 432px;
    z-index: 100;
`

export const StyledButton = styled.button`
    width: 100%;
    max-width: 432px;
    font-family: gothamBold;
    font-size: 20px;
    text-transform: uppercase;
    line-height: 27px;
    border: ${({ secondary }) => `1px solid ${secondary ? '#ffffff' : '#3F8DDD'}`};
    background-color: ${({ secondary }) => `${secondary ? 'transparent' : '#3F8DDD'}`};
    display: ${({fixed}) => `${fixed ? `none` : `block`}`};
    visibility: ${({fixed}) => `${fixed ? `hidden` : `visible`}`};
    color: #ffffff;
    padding: 0.8em 1em;
    transition: ease-in 300ms;
    z-index: 100;

    & :hover{
        border: ${({ secondary }) => `1px solid ${secondary ? '#ffffff' : '#34B5D9'}`};
        background-color: ${({ secondary }) => `${secondary ? '#ffffff' : '#45BBDE'}`};
        color: ${({ secondary }) => `${ secondary ? '#3E8DDD' : '#ffffff' }`};
        outline: none;
        cursor: pointer;
        ${({fixed}) => `${fixed ? `transform: none` : `translateY(-5px)`};`}
    }

    & :focus{
        transform: translateY(-5px);
        border: ${({ secondary }) => `1px solid ${secondary ? '#ffffff' : '#34B5D9'}`};
        background-color: ${({ secondary }) => `${secondary ? '#ffffff' : '#45BBDE'}`};
        color: ${({ secondary }) => `${ secondary ? '#3E8DDD' : '#ffffff' }`};
        outline: none;
        ${({fixed}) => `${fixed ? `transform: none` : `translateY(-5px)`};`}
    }

    & :active{
        transform: translateY(-5px);
        border: ${({ secondary }) => `1px solid ${secondary ? '#ffffff' : '#34B5D9'}`};
        background-color: ${({ secondary }) => `${secondary ? '#ffffff' : '#45BBDE'}`};
        color: ${({ secondary }) => `${ secondary ? '#3E8DDD' : '#ffffff' }`};
        outline: none;
        ${({fixed}) => `${fixed ? `transform: none` : `translateY(-5px)`};`}
    }

    @media(max-width: 991px){
        font-size: 16px;
        line-height: 21px;
    }

    @media(max-width: 767px){
    ${({fixed}) => `${fixed ? `
            display: block;
            visibility: visible;
            width: 100vw;
            position: fixed;
            bottom: -2px;
    ` : ``}`}
    }
`