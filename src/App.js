import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import CreateQuizScreen from './screens/CreateQuizScreen';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/create" component={CreateQuizScreen} />
      </Switch>
    </Router>
  );
}

export default App;
