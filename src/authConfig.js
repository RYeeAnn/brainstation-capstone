// authConfig.js

const AuthConfig = {
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientId: process.env.REACTAPP_AUTH0_CLIENT_ID,
    redirectUri: "http://localhost:3000/"
  };
  
  export default AuthConfig;
  