import React from 'react';
import {Typography} from '@mui/material';
import {css} from '@emotion/react';
import {themeCustom} from "@/styles/theme";

const renderTextTitleReview = (title: string) => {
    return (
        <Typography variant="h4" css={styles.textTitleReviews}>
            {title}
        </Typography>
    );
}

const styles = {
    textTitleReviews: css({
        fontWeight: 600, // Increased weight for better emphasis
        marginBottom: 24,
        paddingLeft: '1em',
        textAlign: 'left',
        color: '#333', // Darker color for better contrast
        letterSpacing: '0.5px',
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
        [themeCustom.breakpoints.down('md')]: {
            paddingLeft: 0,
            textAlign: 'center',
        },
        [themeCustom.breakpoints.down('sm')]: {
            fontSize: '1.8rem',
        },
    }),
};

export default renderTextTitleReview;
