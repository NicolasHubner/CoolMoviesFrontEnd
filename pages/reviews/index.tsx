import {RootState, useAppDispatch, useAppSelector} from "@/store";
import {ScreenContainer} from "@/components/Container/ScreenContainer";
import {TextWithSubtitle} from "@/components/Texts/TextWithSubtitle";
import React from "react";
import {ReviewActions} from "@/redux";
import {css} from "@emotion/react";
import Box from "@mui/material/Box";
import {Review} from "@/domain";
import {themeCustom} from "@/styles/theme";
import {TitleReview, CardReview} from "./_components";

const Reviews = () => {
    const dispatch = useAppDispatch();


    const reviewState = useAppSelector((state: RootState) => state.reviews);

    React.useEffect(() => {
        dispatch(ReviewActions.fetchAllReviews())
        return () => dispatch(ReviewActions.clearAllReviews())

        //eslint-disable-next-line
    }, [])

    const groupedMovies = React.useMemo(() => {
        return reviewState.fetchData.reduce((acc: any, item: Review) => {
                if (!acc[item.movie?.title ?? '']) {
                    acc[item.movie?.title ?? ''] = []
                }

                acc[item.movie?.title ?? ''].push(item)

                return acc
            }
            , {})
    }, [reviewState.fetchData])

    return (
        <ScreenContainer>
            <TextWithSubtitle Title={'Reviews'}
                              Subtitle={'Here you can see all the reviews, add reviews, and update your reviews and from other people =)'}/>


            {Object.keys(groupedMovies).map((key: string) => {
                return (
                    <Box key={key} css={styles.ViewComponentContainerTitleReviews}>
                        {TitleReview(key)}
                        <Box css={styles.ViewComponentReviews}>
                            {groupedMovies[key].map((item: Review) => CardReview(item))}
                        </Box>
                    </Box>
                )
            })}

        </ScreenContainer>
    )
};

export default Reviews;

const styles = {
    dataInput: css({
        alignSelf: 'stretch',
        margin: '32px 0',
    }),
    textTitleReviews: css({
        fontWeight: 400, // Slightly increased weight for better readability
        marginBottom: 24, // Increased margin for better spacing
        paddingLeft: '1em', // Reduced padding for a more balanced look
        textAlign: 'left',
        color: '#333', // Added color for better contrast and visual appeal
        letterSpacing: '0.5px', // Slight letter spacing for improved readability
        [themeCustom.breakpoints.down('md')]: {
            paddingLeft: 0,
            textAlign: 'center',
        },
        [themeCustom.breakpoints.down('sm')]: {
            fontSize: '1.8rem', // Adjust font size on smaller screens for better fit
        },
    }),

    cardContainer: css({
        marginBottom: 24,
        borderWidth: 1,
        borderColor: "darkgray",
        borderRadius: 12,
        padding: 16,
        width: '45%',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease-in-out',
        ':hover': {
            transform: 'scale(1.02)',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
        },
        [themeCustom.breakpoints.down('md')]: {
            width: '80%',
        }
    }),

    RenderCardViewContainer: css({
        marginBottom: 24,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: "darkgray",
        borderRadius: 12,
        width: '45%',
        padding: 12,
        [themeCustom.breakpoints.down('md')]: {
            width: '80%',
        }
    }),

    // ADD Breakpoint to Tablet turn on a column and take the wrap
    ViewComponentReviews: css({
        display: 'flex',
        flexWrap: 'wrap',
        [themeCustom.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
        flexDirection: 'row',
        gap: 12,
        justifyContent: 'space-evenly'
    }),


    ViewComponentContainerTitleReviews: css({
        margin: '0 auto',
        alignSelf: 'center'
    })
}