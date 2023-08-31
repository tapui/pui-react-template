import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import App0 from './hw0/App';
import App1 from './hw1/App';

function MainNav() {
  return (
    <nav>
      <ul>
        <li><a href="#/hw0">HW0 App</a></li>
        <li><a href="#/hw1">HW1 App</a></li>
        {/* ... add other HW app links */}
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainNav />} />
        <Route path="/hw0" element={<App0 />} />
        <Route path="/hw1" element={<App1 />} />
        {/* ... add other HW routes */}
      </Routes>
    </Router>
  );
}

export default App;
