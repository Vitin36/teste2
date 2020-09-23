import React from 'react'
import { Section, Container, Text } from './styles'
import { FormattedMessage } from 'react-intl'

function Section8() {
    return (
        <Section>
            <Container>
                <Text>
                    <FormattedMessage id="section8.text" values={{ link: chunks => <a href="www.lenovo.com">www.lenovo.com</a> }}  />
                </Text>
            </Container>
        </Section>
    )
}

export default Section8
