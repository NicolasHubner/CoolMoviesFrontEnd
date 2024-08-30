import React, {useCallback, useEffect, useState} from "react";
import {Button, Icon, Modal, TextField, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {css} from "@emotion/react";
import {Rating} from '@mui/material';
import {themeCustom} from "@/styles/theme";
import IconButton from "@mui/material/IconButton";
import {Close} from "@mui/icons-material";
import {Review} from "@/domain";
import {ReviewEditOrAdd} from "@/pages/reviews";


type AddEditModalProps = {
    open: boolean;
    handleClose: () => void;
    dispatch: any;
    review: Review | null;
    movieId: string;
    handleAddReview?: ({
                           userName,
                           title,
                           body,
                           rating,
                           movieId
                       }: {
        userName: string
        title: string
        body: string
        rating: number
        movieId: string
    }) => void;
    handleEditReview?: (review: Review) => void;
    reviewEditOrAdd: ReviewEditOrAdd
    setReviewEditOrAdd: React.Dispatch<React.SetStateAction<ReviewEditOrAdd>>
};


export const AddEditModal: React.FC<AddEditModalProps> = ({
                                                              open,
                                                              handleClose,
                                                              review,
                                                              movieId,
                                                              handleAddReview,
                                                              handleEditReview,
                                                              reviewEditOrAdd,
                                                              setReviewEditOrAdd
                                                          }) => {


    useEffect(() => {
        if (review) {
            setReviewEditOrAdd((prevState => ({
                    title: review.title,
                    body: review.body,
                    userName: prevState.userName,
                    rating: review.rating
                }))
            );
        }
    }, [review]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!review) {
            handleAddReview && handleAddReview({
                userName: reviewEditOrAdd.userName,
                title: reviewEditOrAdd.title,
                body: reviewEditOrAdd.body,
                rating: reviewEditOrAdd.rating,
                movieId: movieId
            });
        }

        handleEditReview && handleEditReview({
            title: reviewEditOrAdd.title,
            body: reviewEditOrAdd.body,
            rating: reviewEditOrAdd.rating,
        });

    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box css={styles.modalContainer}>
                <Box sx={{flexDirection: 'row', alignItems: 'center', display: 'flex'}}>

                    <Typography id="modal-title" variant="h4" css={styles.modalTitle}>
                        {review ? 'Edit Review' : 'Create a new Review'}
                    </Typography>

                    <IconButton css={styles.closeIcon}>
                        <Close onClick={handleClose} fontSize={'large'}/>
                    </IconButton>
                </Box>

                <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    {!review && (
                        <>
                            <TextField
                                label="User Name"
                                variant="outlined"
                                fullWidth
                                css={styles.input}
                                value={reviewEditOrAdd.userName}
                                onChange={(e) => setReviewEditOrAdd({...reviewEditOrAdd, userName: e.target.value})}
                            />
                        </>

                    )}

                    <Rating name="simple-controlled" value={reviewEditOrAdd.rating}
                            css={styles.ratingStyle}
                            onChange={(event, newValue) => {
                                setReviewEditOrAdd({...reviewEditOrAdd, rating: newValue ?? 0});
                            }}
                    />

                    <TextField
                        label="Title"
                        variant="outlined"
                        fullWidth
                        css={styles.input}
                        value={reviewEditOrAdd.title}
                        onChange={(e) => setReviewEditOrAdd({...reviewEditOrAdd, title: e.target.value})}
                    />
                    <TextField
                        label="Body"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={8}
                        css={styles.input}
                        value={reviewEditOrAdd.body}
                        onChange={(e) => setReviewEditOrAdd({...reviewEditOrAdd, body: e.target.value})}
                    />

                    <Button type="submit" variant="contained" color="primary" css={styles.submitButton}>
                        {review ? 'Update' : 'Create'}
                    </Button>
                </form>
            </Box>
        </Modal>
    );
};

const styles = {
    modalContainer: css(
        {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            backgroundColor: '#fff',
            borderRadius: 8,
            boxShadow: '0 3px 10px rgba(0,0,0,0.2)',
            padding: 24,
            [themeCustom.breakpoints.down('sm')]: {
                width: '90%',
            }
        }
    ),
    modalTitle: css(
        {
            marginBottom: 16,
        }
    ),
    closeIcon: css(
        {
            position: 'absolute',
            top: 16,
            right: 16,
        }
    ),
    ratingStyle: css(
        {
            marginBottom: 16,
        }
    ),
    input: css(
        {
            marginBottom: 16,
        }
    ),
    submitButton: css(
        {
            marginTop: 16,
        }
    ),
};
