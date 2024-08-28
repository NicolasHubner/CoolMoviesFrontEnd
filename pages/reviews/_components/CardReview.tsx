import React from 'react';
import {Typography, Card, CardContent, CardHeader} from '@mui/material';
import {css} from '@emotion/react';
import {Review} from "@/domain";
import {themeCustom} from "@/styles/theme";

const renderCardReview = (review: Review) => {
    return (
        <Card css={styles.cardContainer}>
            <CardHeader
                title={review.user?.name || "Anonymous"}
                titleTypographyProps={{variant: 'h6', fontWeight: 'bold'}}
                subheader={`Title: ${review.title}`}
                subheaderTypographyProps={{variant: 'subtitle1', fontWeight: 400}}
            />
            <CardContent>
                <Typography variant="body1" color="textSecondary">
                    {review.body}
                </Typography>
            </CardContent>
        </Card>
    );
}

const styles = {
    cardContainer: css({
        marginBottom: 24,
        borderWidth: 1,
        borderColor: "darkgray",
        borderRadius: 12,
        padding: 16,
        width: '45%',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease-in-out',
        ':hover': {
            transform: 'scale(1.02)',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
        },
        [themeCustom.breakpoints.down('md')]: {
            width: '80%',
        }
    }),
};

export default renderCardReview