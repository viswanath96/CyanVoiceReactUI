import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { Route } from 'react-router';
import AppHost from './AppHost';
import Downloads from './components/Page/Downloads';
import Faq from './components/Page/Faq';
import Features from './components/Page/Features';
import Home from './components/Page/Home';
import Security from './components/Page/Security';
import Test from './components/Page/Test';
import Howtouse from './components/Page/Howtouse';
import Singup from './components/Page/Singup';
import Success from './components/Page/Success';

const theme = createMuiTheme();

theme.typography.h1 = {
  fontSize: '2rem',
  '@media (min-width:600px)': {
    fontSize: '5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '6rem',
  },
};

theme.typography.h2 = {
  fontSize: '1.8rem',
  '@media (min-width:600px)': {
    fontSize: '3.3rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3.75rem',
  },
};

theme.typography.h3 = {
  fontSize: '1.5rem',
  '@media (min-width:600px)': {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};

theme.typography.h4 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.8rem',
  },
};

theme.typography.h5 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.4rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.4rem',
  },
};

theme.typography.h6 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.25rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.25rem',
  },
};


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <ThemeProvider theme={theme}>
      <AppHost>
              <Route exact path='/' component={Home} />
              <Route path='/features' component={Features} />
              <Route path='/downloads' component={Downloads} />
              <Route path='/security' component={Security} />
              <Route path='/howtouse' component={Howtouse} />
              <Route path='/faq' component={Faq} />
              <Route path='/test' component={Test} />
              <Route path='/signup' component={Singup} />
              <Route path='/success' component={Success} />
      </AppHost>
      </ThemeProvider>

    );
  }
}
