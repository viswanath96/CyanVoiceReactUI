import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import ObserverWrapper from '@emarketeross/simple-react-intersection-observer'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

const theme = createMuiTheme({
    palette: [
       {
        mainGradient: "#f4ff81",
      },
      {
        mainGradient: "#f48fb1",
      },
      {
        mainGradient: "#c5cae9",
      },
      {
        mainGradient: "#b2dfdb",
      },
      {
        mainGradient: "#b2ebf2",
      },
    ],
  });

function FeatureCard({content}) {
    
    const classes = useStyles();



    return (
        <Grid item xs={12} sm={6}>
        <Box height="100%" m={1} p={2} style={{ background: theme.palette[content.cardPalette].mainGradient }} borderRadius={16} boxShadow={2} >
            <Box m={2}>
                <Typography align="center" variant="h5">{content.h5}</Typography>
            </Box>
            <Box mt={2}>
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
        </Box>
      </Grid>            
    )
}

export default FeatureCard
