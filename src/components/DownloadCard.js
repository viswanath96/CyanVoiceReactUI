import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { connect } from "react-redux";
import * as actions from '../Data/Action/ApplicationAction';
import ObserverWrapper from '@emarketeross/simple-react-intersection-observer'


const theme = createMuiTheme({
  palette: [
     {
      mainGradient: "#c6ffb8",
    },
    {
      mainGradient: "#d1d7ff",
    },
  ],
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

const buttonstyle1 = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  borderRadius: 50,
  border: 0,
  color: 'white',
  height: 48,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  margin:"10px",
  fontSize:"large"
};

function handleDownloadNowClick(param){
  window.open(param);
}


 function DownloadCard({content,...props}) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6}>
    <Box height="100%" p={1}  bgcolor="background.paper" boxShadow={2} borderRadius={16} style={{ background: theme.palette[content.cardPalette].mainGradient }} >
        <Box m={2}>
            <Typography align="center" variant="h3">{content.h5}</Typography>
        </Box>
        <Box m={2} p={2} >
          <Typography align="center" variant="body2" color="textSecondary" component="p">
              {content.body2}
          </Typography>              
        </Box>
        <Box>
            <Grid container direction="column" justify="space-evenly" alignItems="center">
              <ObserverWrapper>
                <Avatar alt="Remy Sharp" src={content.avatarimage} className={classes.large} />
                </ObserverWrapper>
            </Grid>
        </Box>
        <Box p={2}>
            <Typography variant="body1">
                {content.subtitle1}
            </Typography>
        </Box>
        <Box bgcolor="grey.300" mb={0} >
            <Card>
                <CardActionArea>
                  <ObserverWrapper>
                    <CardMedia component="img" alt="Contemplative Reptile" height="140" image={content.image} title="Contemplative Reptile" />
                    </ObserverWrapper>
                </CardActionArea>
            </Card>
        </Box>
        <Box mt={2} >
                <Grid
                  container
                  direction="column"
                  justify="space-evenly"
                  alignItems="center"
                >
                      <Button size="large" style={buttonstyle1} onClick={ () => props.downloadButtonclick(content.downloadLink)} >
                          Download Now!
                      </Button>                  
                </Grid>
            </Box>
    </Box>
  </Grid>            
  );
}

const mapActionToProps = {
  downloadButtonclick : actions.DownloadButtonClick
}

const mapStateToProps = state =>{

}

export default connect(mapStateToProps,mapActionToProps) (DownloadCard)