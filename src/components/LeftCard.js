import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import purple from '@material-ui/core/colors/purple';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import ObserverWrapper from '@emarketeross/simple-react-intersection-observer'

const theme = createMuiTheme({
    palette: [
       {
        mainGradient: "#f4ff81",
      },
      {
        mainGradient: "#fcaec9",
      },
      {
        mainGradient: "#d1d7ff",
      },
      {
        mainGradient: "#c7fffa",
      },
      {
        mainGradient: "#bff8ff",
      },
      {
        mainGradient: "#8acbff",
      },
      {
        mainGradient: "#a4ff8c",
      },
    ],
  });

function LeftCard({content}) {


    return (
        <Box p={2} m={1} style={{ background: theme.palette[content.cardPalette].mainGradient }} borderRadius={16} >
    <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
            <Typography gutterBottom variant="h3" component="h3">
            {content.h1}           
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {content.h6}
            </Typography>        
          </Grid>
        <Grid item xs={12} sm={6}>
            <Card>
                <CardActionArea>
                  <ObserverWrapper>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="400"
                    image={content.image}
                    title="Contemplative Reptile"
                />
                </ObserverWrapper>
              </CardActionArea>
            </Card>
        </Grid>
      </Grid>
      </Box>
    )
}

export default LeftCard
