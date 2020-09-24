import React, { useState } from 'react'
import { useIntl, FormattedMessage } from 'react-intl'
import { Hexagonos, PredioHexagonos, Container, Modal, StyledHeader, ThankYouSection, HexagonosThankYou, TitleThankYou, SubTitleThankYou, TextThankYou, ThankYouSectionWrapper } from './styles'
import Button from 'components/button'
import Section1 from 'containers/section1'
import Section2 from 'containers/section2'
import Section3 from 'containers/section3'
import Section4 from 'containers/section4'
import Section5 from 'containers/section5'
import Section6 from 'containers/section6'
import Section7 from 'containers/section7'
import Section8 from 'containers/section8'
import 'react-pure-modal/dist/react-pure-modal.min.css'
import 'assets/style.css'

// import hexagonos from 'assets/images/hexagonos.svg'
// import predioHexagonos from 'assets/images/predio-hexagonos.svg'

import { ModalContext, FormContext } from './context'


function App() {
    const intl = useIntl()
    const [context, setContext] = useState(false)
    const [formContext, setFormContext] = useState(null)

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sended = urlParams.get("aliId")

    const interval = setInterval(() => {
        const label = document.getElementById("Lbllvo_isoptinemailsent")
        const checkBox = document.getElementById("lvo_isoptinemailsent")
        if (label && checkBox) {
            clearInterval(interval)
            label.insertBefore(checkBox, label.firstChild)
        }
    }, 1000)

    if (!sended) {
        const interval = setInterval(() => {
            const form = document.getElementById("mktoForm_2828")
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
                                <PredioHexagonos src="https://pages.lenovo.com/rs/183-WCT-620/images/predio-hexagonos.png" alt="predioHexagonos" draggable="false" />
                            </Container>
                            <Section5 />
                            <Section6 />
                            <Section7 />
                            <Section8 />
                            <Hexagonos src="https://pages.lenovo.com/rs/183-WCT-620/images/hexagonos.png" alt="hexagonos" draggable="false" />
                            <Button text={intl.formatMessage({ id: 'button.send' })} fixed />
                            <Modal isOpen={context} onClose={toggleModal} portal={true} >
                                <div id="modal"></div>
                            </Modal>
                            <div style={{ display: 'none', visibility: 'hidden' }}>
                                <form id="mktoForm_2828">
                                    {/* <form id="mktoForm_2828" > */}
                                    <StyledHeader>
                                        <FormattedMessage id="section1.form.title" values={{ bold: chunks => <strong>{chunks}</strong> }} />
                                    </StyledHeader>
                                </form>
                            </div>
                        </Container>
                    )
                }

            </FormContext.Provider>
        </ModalContext.Provider>
    )
}

function ThankYou() {

    return (
        <ThankYouSectionWrapper>
            <ThankYouSection>
                <div>
                <HexagonosThankYou src="https://pages.lenovo.com/rs/183-WCT-620/images/hexagonos.png" alt="hexagonos" />
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
            <Section8 />
        </ThankYouSectionWrapper>

    )
}

export default App
