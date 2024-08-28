import React from "react";
import {Typography} from "@mui/material";
import {css} from "@emotion/react";
import {themeCustom} from "@/styles/theme";

type TextWithSubtitle = {
    Title: string;
    Subtitle?: string;
}

export const TextWithSubtitle: React.FC<TextWithSubtitle> = ({Title, Subtitle}) => {
    return (
        <>
            <Typography variant={'h1'} css={styles.heading}>
                {Title}
            </Typography>

            {Subtitle && (
                <Typography variant={'subtitle1'} css={styles.subtitle}>
                    {Subtitle}
                </Typography>
            )}
        </>
    )
}

const styles = {
    heading: css({marginTop: 16, fontSize: '2.75rem', textAlign: 'center'}),
    subtitle: css({
        fontWeight: 300,
        textAlign: 'center',
        maxWidth: 600,
        margin: '24px 0',
        color: 'rgba(0, 0, 0, 0.6)',
        [themeCustom.breakpoints.down('md')]: {
            lineHeight: 1.5,
            maxWidth: '80%',
        }
    }),
}