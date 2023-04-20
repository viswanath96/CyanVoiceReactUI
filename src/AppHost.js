import React from 'react';
import Container from '@material-ui/core/Container';
import FooterTwoLayout from './components/Layout/FooterTwoLayout';
import HeaderLayout from './components/Layout/HeaderLayout';
import NavigationLayout from './components/Layout/NavigationLayout';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
       home:{
        mainGradient: "linear-gradient(90deg, rgba(250,250,250,1) 0%, rgba(0,255,255,1) 50%, rgba(250,250,250,1) 100%)",
        
      }
    }
  });
  

function AppHost(props) {
    return (
        <div>
            <HeaderLayout/>
            <NavigationLayout/>
            <Container  >
            <div>
                {props.children}
            </div>
            </Container>
            <FooterTwoLayout/>
        </div>
    )
}

export default AppHost
