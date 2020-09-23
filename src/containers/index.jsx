import React, { useState } from 'react'
import { useIntl, FormattedMessage } from 'react-intl'
import { Hexagonos, PredioHexagonos, Container, Modal, StyledHeader, ThankYouSection, HexagonosThankYou, TitleThankYou, SubTitleThankYou, TextThankYou } from './styles'
import Button from './../components/button'
import Section1 from './section1'
import Section2 from './section2'
import Section3 from './section3'
import Section4 from './section4'
import Section5 from './section5'
import Section6 from './section6'
import Section7 from './section7'
import Section8 from './section8'
import 'react-pure-modal/dist/react-pure-modal.min.css'
import './../assets/style.css'

import hexagonos from './../assets/images/hexagonos.svg'
import predioHexagonos from './../assets/images/predio-hexagonos.svg'

import { ModalContext, FormContext } from './context'



function App() {
    const intl = useIntl()
    const [context, setContext] = useState(false)
    const [formContext, setFormContext] = useState(null)

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sended = urlParams.get("aliId")

    if (!sended) {
        const interval = setInterval(() => {
            const form = document.getElementById("mktoForm_2583")
            if (!formContext && form) {
                setFormContext(form)
                clearInterval(interval)
            }
        }, 250)

        const interval2 = setInterval(() => {
            const card = document.getElementById("card")
            if (formContext && card) {
                card.appendChild(formContext)
                clearInterval(interval2)
            }
        }, 250)

        const interval3 = setInterval(() => {
            const modal = document.getElementById("modal")
            if (formContext && modal) {
                modal.appendChild(formContext)
                clearInterval(interval3)
            }
        }, 250)


    }

    const toggleModal = () => { setContext(!context) }

    return (
        <ModalContext.Provider value={[context, setContext]}>
            <FormContext.Provider value={[formContext, setFormContext]}>
                {sended ? <ThankYou />
                    : (
                        <Container>
                            <Section1 />
                            <Section2 />
                            <Container>
                                <Section3 />
                                <Section4 />
                                <PredioHexagonos src={predioHexagonos} alt="predioHexagonos" draggable="false" />
                            </Container>
                            <Section5 />
                            <Section6 />
                            <Section7 />
                            <Section8 />
                            <Hexagonos src={hexagonos} alt="hexagonos" draggable="false" />
                            <Button text={intl.formatMessage({ id: 'button.cotacao' })} fixed />
                            <Modal isOpen={context} onClose={toggleModal} portal={true} >
                                <div id="modal"></div>
                            </Modal>
                            <div style={{ display: 'none', visibility: 'hidden' }}>
                                <form id="mktoForm_2583" >
                                    <StyledHeader>
                                        <FormattedMessage id="section1.form.title" values={{ bold: chunks => <strong>{chunks}</strong> }} />
                                    </StyledHeader>
                                </form>
                            </div>
                        </Container>
                    )
                }

                <script src="//app-ab27.marketo.com/js/forms2/js/forms2.min.js"></script>
                <script>MktoForms2.loadForm("//app-ab27.marketo.com", "183-WCT-620", 2583);</script>
            </FormContext.Provider>
        </ModalContext.Provider>
    )
}

function ThankYou() {

    return (
        <ThankYouSection>
            <div>
                <HexagonosThankYou src={hexagonos} alt="hexagonos" />
                <TitleThankYou>
                    <FormattedMessage id="thankyou.thanks" />
                </TitleThankYou>
                <SubTitleThankYou>
                    <FormattedMessage id="thankyou.subtitle" />
                </SubTitleThankYou>
                <TextThankYou>
                    <FormattedMessage id="thankyou.message" />
                </TextThankYou>
            </div>
        </ThankYouSection>
    )
}

export default App
