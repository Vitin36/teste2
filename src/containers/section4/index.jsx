import React, { useEffect } from 'react'
import { Section, Container, BlankRow, Row, Title } from './styles'
import Typed from 'typed.js'
import { useIntl, FormattedMessage } from 'react-intl'


function Section4() {
    const intl = useIntl()
    const messages = [
        intl.formatMessage({ id: 'section4.message.1' }),
        intl.formatMessage({ id: 'section4.message.2' }),
        intl.formatMessage({ id: 'section4.message.3' }),
        intl.formatMessage({ id: 'section4.message.4' }),
        intl.formatMessage({ id: 'section4.message.5' }),
        intl.formatMessage({ id: 'section4.message.6' }),
    ]

    useEffect(() => {
        const typed = new Typed('#typed', {
            strings: messages,
            typeSpeed: 55,
            cursorChar: "_",
            onComplete: () => { typed.reset() }
        })
    }, [])

    return (
        <Section>
            <Container>
                <BlankRow />
                <Row>
                    <Title>
                        <FormattedMessage id="section4.title"></FormattedMessage>
                        <span id="typed"></span>
                    </Title>
                </Row>
            </Container>
        </Section>
    )
}

export default Section4
