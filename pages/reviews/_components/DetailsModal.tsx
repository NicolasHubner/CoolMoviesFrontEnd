import React from 'react';
import {Modal, Box, Typography, Button} from '@mui/material';
import {css} from '@emotion/react';
import {Review} from "@/domain";

type DetailsModalProps = {
    open: boolean;
    handleClose: () => void;
    review: Review | null;
};


const DetailsModal: React.FC<DetailsModalProps> = ({open, handleClose, review}) => {
    if (!review) return null; // Ensure review is not null before rendering

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box css={styles.modalContainer}>
                <Typography id="modal-title" variant="h4" css={styles.modalTitle}>
                    {review.title}
                </Typography>
                <Typography id="modal-description" variant="subtitle1">
                    User: {review.user?.name}
                </Typography>
                <Typography variant="body1" css={styles.modalBody}>
                    {review.body}
                </Typography>
                <Button onClick={handleClose} variant="contained" color="primary">
                    Close
                </Button>
            </Box>
        </Modal>
    );
};

const styles = {
    modalContainer: css({
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: '#fff',
        borderRadius: 8,
        boxShadow: '0 3px 10px rgba(0,0,0,0.2)',
        padding: 24,
    }),
    modalTitle: css({
        marginBottom: 16,
    }),
    modalBody: css({
        marginTop: 12,
        marginBottom: 24,
    }),
};

export default DetailsModal;
