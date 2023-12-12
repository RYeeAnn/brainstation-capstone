// authConfig.js

const AuthConfig = {
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientId: process.env.REACTAPP_AUTH0_CLIENT_ID,
    redirectUri: "https://cruisin.netlify.app",
    googleClientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    githubClientId: process.env.REACT_APP_GITHUB_CLIENT_ID,
  };
  
  export default AuthConfig;
  