import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Home from './pages';
import DraftEditor from './components/Draft';

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <DraftEditor />
  </React.StrictMode>,
  document.getElementById('root')
);
