import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { connect } from 'react-redux';
import LeftCard from '../LeftCard';
import RightCard from '../RightCard';
import Downloads from './Downloads';
import Animation1 from '../CustomAnimations/Animation1/animation1';
import HomePageAni1 from '../HomePageAni1';
import ObserverWrapper from '@emarketeross/simple-react-intersection-observer'
import HowtouseNavigator from '../HowtouseNavigartor';




 function Home({...props}) {

  return (
    <React.Fragment>
      <CssBaseline />
        <Box p={2} >
      <Grid   direction="column" container spacing={3}>
        <Grid item xs>
          <Typography align="center" component="div" variant="h1">
            Cyan Voice
          </Typography>
        </Grid>
        <HomePageAni1/>
        <HowtouseNavigator/>
        <Downloads/>
        {props.HomepageContent.map( (c,i) => {
          const content = (i % 2 == 0)?
          <LeftCard content={c}/>:
          <RightCard content={c} />;
          return(content);
        })}
        </Grid>
        </Box>
    </React.Fragment>
  );
}

const mapStateToProps = state =>({
  HomepageContent : state.HomepageContent
})

export default connect(mapStateToProps) (Home)