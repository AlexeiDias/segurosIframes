import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import  home  from './pages/home'
import NavigationBar from './components/NavigationBar'


function App() {
  return (
    <>
    <NavigationBar />
    
    <Router>
      <Switch>
        <Route exact path="/" component={home} />
       

      </Switch>
    </Router>
   
    </>

  );
}

export default App;
