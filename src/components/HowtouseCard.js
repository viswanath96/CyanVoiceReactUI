import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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


function HowtouseCard({...content}) {

    return (
            <Box m={1}  width="90%" >
              <Card style={{ background: theme.palette[content.content.cardPalette].mainGradient }} >
                <CardContent>
                    <Typography variant="h5" component="h2">
                    {content.content.feature}        
                    </Typography>
                    <Typography variant="body2" component="p">
              <ol>
                {content.content.featuretext.map( (a,i) => {
                    return(
                        <React.Fragment>
                            <Box m={1} >
                                <li>{a.line}</li>
                            </Box>
                            <Grid item xs={12} sm={12}>
                            <Card>
                                <CardActionArea width="1000" >
                            <ObserverWrapper>
                                    <CardMedia
                                    component="video"                                    
                                    alt="Contemplative Reptile"
                                    image={a.video}
                                    title="Contemplative Reptile"
                                    controls
                                    autoPlay  
                                    loop 
                                    />
                            </ObserverWrapper>
                                </CardActionArea>
                            </Card>

                            </Grid>
                        </React.Fragment>
                    );
                })}
                </ol>
                </Typography>
                </CardContent>
              </Card>
            </Box>
    )
}

export default HowtouseCard
