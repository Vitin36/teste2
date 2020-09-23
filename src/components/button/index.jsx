import React, { useContext } from 'react'
import { StyledButton, StyledLink } from './styles'
import { useWindowSize } from './../../hooks/useWindowSize'
import { ModalContext } from './../../containers/context'

function Button({ text, secondary = false, fixed = false }) {
    const size = useWindowSize()
    const [context, setContext] = useContext(ModalContext)
    
    const onClick = () => {
        setContext(!context)
    }

    if (size.width <= 991) {
        return (
            <StyledButton secondary={secondary} onClick={onClick} fixed={fixed}>
                {text}
            </StyledButton>
        )
    }
    else {
        return (
            <StyledLink to="mktoForm_2583"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-150}
                duration={1000}
                isDynamic={true}
            >
                <StyledButton secondary={secondary} fixed={fixed}>
                    {text}
                </StyledButton>
            </StyledLink >
        )
    }


}

export default Button
