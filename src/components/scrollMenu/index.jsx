import React from 'react'
import { Box, BoxContent, Card, CardText } from './style'
import { FormattedMessage } from 'react-intl'

function ScrollMenu({ items, canOverflow = false }) {

    return (
        <Box>
            <div className={canOverflow ? "box canOverflow" : "box"}>
                <BoxContent>
                    {items.map((item, key) => {
                        return (
                            <Card key={key}>
                                <CardText>
                                    <FormattedMessage id={item} />
                                </CardText>
                            </Card>
                        )
                    })}
                </BoxContent>
            </div>
        </Box>
    )
}

export default ScrollMenu
