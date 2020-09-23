import React, { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import { Section, Container, Row, MiniTitle, Title, Text, MiniText, Machine, Divisor, Icon, IconBox } from './styles'
import Button from 'components/button'

import machine from 'assets/images/section5/machine.svg'
import machineSmall from 'assets/images/section5/machine-small.svg'
import divisor from 'assets/images/section5/divisor.svg'
import atendimento from 'assets/images/section5/atendimento.svg'
import fone from 'assets/images/section5/fone.svg'
import globo from 'assets/images/section5/globo.svg'
import { useWindowSize } from 'hooks/useWindowSize'


function Section5() {

    const [machineImage, setMachineImage] = useState(machine)
    const size = useWindowSize()
    const intl = useIntl()
    const format = {
        bold: chunks => <strong>{chunks}</strong>,
        blue: chunks => <span>{chunks}</span>
    }

    useEffect(() => {
        size.width > 991 ? setMachineImage(machine) : setMachineImage(machineSmall)
    }, [size])

    return (
        <Section>
            {size.width <= 991 ? <Machine src={machineImage} alt="Machine" /> : <></>}
            <Container marginBottom>
                <Row alignItems="flex-start" justifyContent="flex-start">
                    <MiniTitle>
                        {intl.formatMessage({ id: 'section5.mini.title' })}
                    </MiniTitle>
                </Row>
                <Divisor src={divisor} alt="Divisor" />
                <Row alignItems="flex-start" justifyContent="flex-start">
                    <div>
                        <Title>
                            {intl.formatMessage({ id: 'section5.title.1' }, format)}
                        </Title>
                        <Text style={{ marginBottom: '48px' }}>
                            {intl.formatMessage({ id: 'section5.text.1' }, format)}
                        </Text>
                        <Text>
                            {intl.formatMessage({ id: 'section5.text.2' }, format)}
                        </Text>
                    </div>
                    {size.width > 991 ? (
                        <Container>
                            <MiniText>
                                {intl.formatMessage({ id: 'section5.text.3' }, format)}
                            </MiniText>
                            <Button text={intl.formatMessage({ id: 'button.modernize' })} />
                        </Container>
                    ) : (<></>)}

                </Row>
            </Container>
            {size.width <= 991 ? (
                <Container id="adjustContainer" justifyContent="flex-start" alignItems="flex-start" fullMargin="56px 0!important">
                    <MiniText>
                        {intl.formatMessage({ id: 'section5.text.3' }, format)}
                    </MiniText>
                    <Button text={intl.formatMessage({ id: 'button.modernize' })} />
                </Container>
            ) : <> </>}
            {size.width > 991 ? <Machine src={machineImage} alt="Machine" /> : <></>}
            <Container >
                <Row alignItems="flex-start" justifyContent="flex-start">
                    <MiniTitle>
                        {intl.formatMessage({ id: 'section5.mini.title' })}
                    </MiniTitle>
                </Row>
                {size.width > 991 ? (

                    <Row alignItems="flex-start" justifyContent="flex-start">
                        <Container width="35%" alignItems="flex-start" justifyContent="flex-start">
                            <Title>
                                {intl.formatMessage({ id: 'section5.title.2' }, format)}
                            </Title>
                            <Text style={{ marginBottom: '48px' }}>
                                {intl.formatMessage({ id: 'section5.text.4' }, format)}
                            </Text>
                        </Container>
                        <Container width="65%">
                            <Row justifyContent="space-around">
                                <IconBox>
                                    <Icon src={fone} alt="fone" />
                                    <p>
                                        {intl.formatMessage({ id: 'section5.text.5' }, format)}
                                    </p>
                                </IconBox>
                                <IconBox border>
                                    <Icon src={globo} alt="globo" />
                                    <p>
                                        {intl.formatMessage({ id: 'section5.text.6' }, format)}
                                    </p>
                                </IconBox>
                                <IconBox>
                                    <Icon src={atendimento} alt="atendimento" />
                                    <p>
                                        {intl.formatMessage({ id: 'section5.text.7' }, format)}
                                    </p>
                                </IconBox>
                            </Row>
                        </Container>
                    </Row>
                ) : (
                        <Container alignItems="flex-start" justifyContent="flex-start">
                            <Container alignItems="flex-start" justifyContent="flex-start">
                                <Title>
                                    {intl.formatMessage({ id: 'section5.title.2' }, format)}
                                </Title>
                                <Text style={{ marginBottom: '48px' }}>
                                    {intl.formatMessage({ id: 'section5.text.4' }, format)}
                                </Text>
                            </Container>
                            <Container alignItems="flex-start" justifyContent="flex-start">
                                <IconBox>
                                    <Icon src={fone} alt="fone" />
                                    <p>
                                        {intl.formatMessage({ id: 'section5.text.5' }, format)}
                                    </p>
                                </IconBox>
                                <IconBox >
                                    <Icon src={globo} alt="globo" />
                                    <p>
                                        {intl.formatMessage({ id: 'section5.text.6' }, format)}
                                    </p>
                                </IconBox>
                                <IconBox>
                                    <Icon src={atendimento} alt="atendimento" />
                                    <p>
                                        {intl.formatMessage({ id: 'section5.text.7' }, format)}
                                    </p>
                                </IconBox>
                            </Container>
                        </Container>
                    )}
                <Row>
                    <Button text={intl.formatMessage({ id: 'button.suport' })} />
                </Row>
            </Container>
        </Section>
    )
}

export default Section5
