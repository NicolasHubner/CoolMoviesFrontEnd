import {css} from '@emotion/react';
import {
    Button,
    Paper,
    TextField,
    Tooltip,
    Typography,
    Zoom,
} from '@mui/material';
import type {NextPage} from 'next';
import {RootState, useAppDispatch, useAppSelector} from "@/store";
import {MovieActions, ReviewActions} from "@/redux";
import {ScreenContainer} from "@/components";
import {TextWithSubtitle} from "@/components/Texts/TextWithSubtitle";

const primary = '#1976d2';

const Home: NextPage = () => {
    const dispatch = useAppDispatch();

    const movieState = useAppSelector((state: RootState) => state.movies);

    return (
        <ScreenContainer>
            <div css={styles.body}>
                <TextWithSubtitle Title={'EcoPortal Coolmovies Test'}
                                  Subtitle={`Thank you for taking the time to take our test. We really appreciate it. 
        All the information on what is required can be found in the README at the root of this repo. 
        Please don't spend ages on this and just get through as much of it as you can. 
        Good luck! 😄`}/>

                <div css={styles.mainControls}>
                    <Tooltip
                        title={`Side Effect Count from Epic (Gets run on odd values): ${movieState.sideEffectCount}`}
                        arrow
                    >
                        <Button
                            variant={'contained'}
                            onClick={() => dispatch(MovieActions.increment())}
                        >
                            {`Redux Increment: ${movieState.value}`}
                        </Button>
                    </Tooltip>
                    <Button
                        variant={'outlined'}
                        onClick={() => {
                            dispatch(
                                movieState.fetchData
                                    ? MovieActions.clearData()
                                    : MovieActions.fetchMovies()
                            )
                        }
                        }
                    >
                        {movieState.fetchData ? 'Hide some data' : 'Fetch some data'}
                    </Button>
                </div>

                <Zoom in={Boolean(movieState.fetchData)} unmountOnExit mountOnEnter>
                    <TextField
                        css={styles.dataInput}
                        multiline
                        label={'Some Data'}
                        defaultValue={JSON.stringify(movieState.fetchData, null, 2)}
                    />
                </Zoom>
            </div>
        </ScreenContainer>

    );
};

const styles = {
    body: css({
        alignSelf: 'stretch',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }),
    heading: css({marginTop: 16, fontSize: '2.75rem', textAlign: 'center'}),
    subtitle: css({
        fontWeight: 300,
        textAlign: 'center',
        maxWidth: 600,
        margin: '24px 0',
        color: 'rgba(0, 0, 0, 0.6)',
    }),
    mainControls: css({
        display: 'flex',
        alignItems: 'center',
        button: {marginRight: 16},
    }),
    dataInput: css({
        alignSelf: 'stretch',
        margin: '32px 0',
    }),
};

export default Home;
