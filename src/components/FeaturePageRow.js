import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import FeatureCard from './FeatureCard';

function FeaturePageRow() {
    return (
        <React.Fragment>
            <CssBaseline />
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <FeatureCard/>
                    </Grid>
                </Container>
        </React.Fragment>
    )
}

export default FeaturePageRow
