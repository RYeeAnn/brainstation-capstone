// authConfig.js

const AuthConfig = {
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
    redirectUri: "https://cruisin.netlify.app",
  };
  
  export default AuthConfig;
  