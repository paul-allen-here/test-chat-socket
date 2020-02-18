import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Join from './Join'
import ChatRoom from './ChatRoom'

const App = () => (
  <Router>
    <div className = "row join-container">
      <h4 id = "header">Test-Chat-App</h4>
    </div>
    <Route path = '/' exact component = { Join } />
    <Route path = '/:room' component = { ChatRoom } />
  </Router>
);

export default App;