import React from 'react';
import {Typography, Card, CardContent, CardHeader} from '@mui/material';
import {css} from '@emotion/react';
import {Review} from "@/domain";
import {themeCustom} from "@/styles/theme";
import IconButton from "@mui/material/IconButton";
import {ArrowForward} from "@mui/icons-material";
import EditIcon from "@/components/Icon/edit";

type RenderCardViewProps = {
    review: Review;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    setDetailReview: React.Dispatch<React.SetStateAction<Review | null>>
    setEditModal: React.Dispatch<React.SetStateAction<boolean>>
    key: string
}

const RenderCardReview: React.FC<RenderCardViewProps> = ({
                                                             review, setDetailReview, key,
                                                             setEditModal, setOpenModal
                                                         }) => {
    return (
        <Card css={styles.cardContainer}
              key={key}
        >
            <CardHeader
                title={`${review.title}`}
                titleTypographyProps={{variant: 'h6', fontWeight: 'bold'}}
                subheader={`${review.user?.name || "Anonymous"}`}
                subheaderTypographyProps={{variant: 'subtitle1', fontWeight: 400}}
            />
            <CardContent>

                <Typography variant="body1" color="textSecondary" css={styles.cardBody}>
                    {review.body?.length > 180 ? `${review.body.slice(0, 180)}...` : review.body}
                </Typography>

                <IconButton css={styles.editButton}
                            onClick={() => {
                                setDetailReview(review)
                                setTimeout(() =>
                                        setEditModal(true)
                                    , 100)
                            }}
                >
                    <EditIcon/>
                </IconButton>


                <IconButton css={styles.arrowButton} onClick={() => {
                    setDetailReview(review)
                    setOpenModal(true)
                }}>
                    <ArrowForward/>
                </IconButton>
            </CardContent>
        </Card>
    );
}

const styles = {
    cardContainer: css({
        position: 'relative',
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
    cardBody: css({
        width: '90%'
    }),
    cardContent: css({
        flexGrow: 1,
    }),
    editButton: css({
        position: 'absolute',
        right: 16,
        top: 16
    }),
    arrowButton: css({
        position: 'absolute',
        right: 16,
        bottom: 16
    }),
};

export default RenderCardReview