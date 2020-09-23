import React, { useContext, useEffect } from 'react'
import {
    Section,
    LenovoMicrosoft,
    Container,
    ContainerLeft,
    ContainerRight,
    Card,
    ThinkAgile,
    Title,
    SubTitle,
    Text,
} from './styles'
import { useWindowSize } from 'hooks/useWindowSize'
import { FormattedMessage } from 'react-intl'
import { ModalContext } from './../context'

import lenovoMicrosoft from 'assets/images/section1/lenovo-microsoft.svg'
import thinkAgile from 'assets/images/section1/think-agile.svg'


function Section1() {

    const size = useWindowSize()
    const [context, setContext] = useContext(ModalContext)

    useEffect(() => {
        size.width <= 991 ? setContext(context) : setContext(false)
    }, [size])

    return (
        <Section>
            <LenovoMicrosoft src={lenovoMicrosoft} alt="Lenovo - Microsoft" draggable="false" />
            <Container>
                <ContainerLeft>
                    <ThinkAgile src={thinkAgile} alt="Think Agile" draggable="false" />
                    <Title><FormattedMessage id="section1.title" /></Title>
                    <SubTitle><FormattedMessage id="section1.subtitle" /></SubTitle>
                    <Text>
                        <FormattedMessage id="section1.text" values={{ bold: chunks => <strong>{chunks}</strong> }} />
                    </Text>
                </ContainerLeft>
                <ContainerRight >
                    <Card id="card">

                    </Card>
                </ContainerRight>
            </Container>
        </Section>

    )
}

export default Section1
