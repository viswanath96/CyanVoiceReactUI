import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Animation1 from './CustomAnimations/Animation1/animation1';


export default function HomePageAni1() {
    return (
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
        >
          <Grid item ></Grid>
          <Grid item >
            <Typography align="center" variant="h4">
              <Animation1/>
            </Typography>
          </Grid>
          <Grid item ></Grid>
        </Grid>
    )
}
