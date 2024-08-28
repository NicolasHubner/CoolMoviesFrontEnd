import React from "react";
import {Container} from "@mui/material";
import {css} from "@emotion/react";

type ScreenContainer = {
    children: React.ReactNode
}

export const ScreenContainer: React.FC<ScreenContainer> = ({children}) => {
    return (
        <Container sx={{marginTop: 12, display: 'flex', flexDirection: 'column', alignItems: 'center'}}
                   css={style.root}>
            {children}
        </Container>
    )
}

const style = {
    root: css({
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    })
}