import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Section, Container, Message, SubMessage } from './styles'

function Section2() {
    return (
        <Section>
            <Container>
                <Message>
                    <FormattedMessage id="section2.text" values={{ blue: chunks => <span>{chunks}</span> }} />
                </Message>
                <SubMessage>
                    <FormattedMessage id="section2.subtext" />
                </SubMessage>
            </Container>
        </Section>
    )
}

export default Section2
