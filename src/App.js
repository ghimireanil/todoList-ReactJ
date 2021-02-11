import React from 'react';
import Todo from './components/Todo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoadMore from './components/LoadMore';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/' exact component={Todo} />
          <Route path='/todos' exact component={Todo} />
          <Route path='/todos/:id' component={LoadMore} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
