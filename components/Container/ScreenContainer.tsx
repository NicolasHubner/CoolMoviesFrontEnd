import React from "react";
import {Container} from "@mui/material";
import {css} from "@emotion/react";

type ScreenContainer = {
    children: React.ReactNode
}

export const ScreenContainer: React.FC<ScreenContainer> = ({children}) => {
    return (
        <Container
            maxWidth={'lg'}
            disableGutters
            css={style.root}>
            {children}
        </Container>
    )
}

const style = {
    root: css({
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 48,
    })
}