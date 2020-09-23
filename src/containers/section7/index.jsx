import React, { useState, useEffect } from 'react'
import { Section, Container, MiniTitle, Title, Text, Homem } from './styles'
import { FormattedMessage, useIntl } from 'react-intl'
import Button from 'components/button'

import homem from 'assets/images/section7/homem.svg'
import homemSmall from 'assets/images/section7/homem-small.svg'
import { useWindowSize } from 'hooks/useWindowSize'

function Section7() {
    const intl = useIntl()
    const size = useWindowSize()
    const [homemImg, setHomemImg] = useState(homem)

    useEffect(() => {
        size.width > 991 ? setHomemImg(homem) : setHomemImg(homemSmall)
    }, [size])

    return (
        <Section>
            <Container>
                <MiniTitle>
                    <FormattedMessage id="section7.mini.title" />
                </MiniTitle>
                <Title>
                    <FormattedMessage id="section7.title" />
                </Title>
                <Text>
                    <FormattedMessage id="section7.text" values={{ bold: chunks => <strong>{chunks}</strong> }} />
                </Text>
                <Button
                    secondary={true}
                    text={intl.formatMessage({ id: 'button.prepare' })} />
            </Container>
            <Homem src={homemImg} alt="Homem" />
        </Section>
    )
}

export default Section7
