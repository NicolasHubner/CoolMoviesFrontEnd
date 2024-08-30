import React from 'react';
import {Button, Typography} from '@mui/material';
import {css} from '@emotion/react';
import {themeCustom} from "@/styles/theme";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import {AddBox} from "@mui/icons-material";
import {DefaultButton} from "@/components/Buttons/DefaultButton";

const renderTextTitleReview = (title: string, onClick = () => {
}) => {
    return (
        <Box css={styles.ContainerTitle}>
            <Typography variant="h4" css={styles.textTitleReviews}>
                {title}
            </Typography>

            <DefaultButton
                onClick={onClick}
                icon={<AddBox/>}
            >
                Add Review
            </DefaultButton>

        </Box>

    );
}

const styles = {
    ContainerTitle: css({
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '4em',
        paddingRight: '4em',
        [themeCustom.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '2em',
        }
    }),
    textTitleReviews: css({
        fontWeight: 600, // Increased weight for better emphasis
        marginBottom: '1em',
        marginTop: '1em',
        textAlign: 'left',
        color: '#333', // Darker color for better contrast
        letterSpacing: '0.5px',
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
        [themeCustom.breakpoints.down('md')]: {
            textAlign: 'center',
            marginBottom: '0.5em'
        },
        [themeCustom.breakpoints.down('sm')]: {
            fontSize: '1.8rem',
        },
    }),
};

export default renderTextTitleReview;
