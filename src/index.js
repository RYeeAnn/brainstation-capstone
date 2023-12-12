// index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import AuthConfig from './authConfig';

const root = ReactDOM.createRoot(document.getElementById('root'));
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID


root.render(
  <React.StrictMode>
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri="https://cruisin.netlify.app"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);



//old code
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

