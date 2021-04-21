import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './i18n'

import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={(<div>Loading...</div>)}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

