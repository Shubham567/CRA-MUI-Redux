import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import Page from '../lib/layouts/Page';

export default function Home() {

    const appDetails = useSelector((state) => state.AppReducer);
    

    return (
        <React.Fragment>
            <Page>
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item>
                        <Typography variant="h1" align="center">
                            Welcome to {appDetails?.pageTitle}
                        </Typography>
                        <Typography variant="h2" align="center">
                            Quickly Kick Start your Redux CRA app with React Router and Material UI
                        </Typography>
                    </Grid>
                </Grid>
            </Page>
        </React.Fragment>
    )
}
