import {RootState, useAppDispatch, useAppSelector} from "@/store";
import {ScreenContainer} from "@/components/Container/ScreenContainer";
import {TextField, Typography, Zoom} from "@mui/material";
import {TextWithSubtitle} from "@/components/Texts/TextWithSubtitle";
import React from "react";

const Reviews = () => {
    const dispatch = useAppDispatch();

    const reviewState = useAppSelector((state: RootState) => state.reviews);

    React.useEffect(() => {
        if (dispatch) {
            dispatch(reviewState.fetchAllReviews)
        }
    }, [dispatch])


    return (
        <ScreenContainer>
            <TextWithSubtitle Title={'Reviews'}
                              Subtitle={'Here you can see all the reviews, add reviews, and update your reviews and from other people =)'}/>

            <Zoom in={Boolean(reviewState.fetchData.length > 0)} unmountOnExit mountOnEnter>
                <TextField
                    multiline
                    label={'Some Data'}
                    defaultValue={JSON.stringify(reviewState.fetchData, null, 2)}
                />
            </Zoom>
        </ScreenContainer>
    )
};

export default Reviews;