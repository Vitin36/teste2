import React from 'react'
import { Section, Container, Title, Text, Row, Column, EmptyColumn } from './styles'
import { FormattedMessage, useIntl } from 'react-intl'
import Button from './../../components/button'


function Section6() {
    const intl = useIntl()

    return (
        <Section>
            <Container>
                <Row>
                    <EmptyColumn />
                    <Column>
                        <Title>
                            <FormattedMessage id="section6.title" />
                        </Title>
                        <Text>
                            <FormattedMessage id="section6.text" values={{ bold: chunks => <strong>{chunks}</strong> }}/>
                        </Text>
                        <Button text={intl.formatMessage({id: 'button.know'})}/>
                    </Column>
                </Row>
            </Container>
        </Section>
    )
}

export default Section6
