import { Container} from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Auth from './Components/Auth/Auth';

function App() {
  const user = JSON.parse(localStorage.getItem('profile'));
  
  return (
    
    <BrowserRouter>
      <Container maxWidth="xl">
      <Navbar />
        <Switch>
          <Route exact path="/auth" component={() => (!user ? <Auth /> : <Redirect to="/" />)}></Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
