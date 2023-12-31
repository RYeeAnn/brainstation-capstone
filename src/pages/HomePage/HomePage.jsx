import React from "react";
import { slide as Menu } from 'react-burger-menu';
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import "./HomePage.scss";
import { Link } from "react-router-dom";
import repair from "../../assets/repair.jpg";
import gtr from "../../assets/purplegtr.jpg";
import speedometer from "../../assets/speedo.jpg";
import tools from "../../assets/tools.jpg";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "../../components/Header/Header";
import useWindowWidth from "../../Hooks/useWindowWidth";

function HomePage() {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } = useAuth0();
  const windowWidth = useWindowWidth();

  return (
    <>
      <section className="homePage">
      {windowWidth <= 768 ? (
          <HeaderComponent />
        ) : (
          <Header />
        )}
        <div className="loginoutButton">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              {isAuthenticated ? (
                <>
                  {user?.picture && <img className="profileImg" src={user.picture} alt={user?.name} />}
                  <p>Hello, {user.name}!</p>
                  <button className="logoutButton" onClick={() => logout({ returnTo: window.location.origin })}>
                    Logout
                  </button>
                  {/* <Link to='/ProfileEditPage'>Edit Profile</Link> */}
                </>
              ) : (
                <button className="loginButton" onClick={() => loginWithRedirect()}>
                  Login
                </button>
              )}
            </>
          )}
        </div>
        <div className="homePage__hero">
          <div className="homePage__heroText">
            <h1 className="homePage__title">
              Cruisin'
            </h1>
            <p>Ever faced a frustrating issue and wondered how to fix it? Welcome
            to Cruisin, where you can find the answers to your questions.
            </p>
          </div>
        </div>
      </section>

      <section className="homePage__main">
        <div className="homePage__card">
          <div className="homePage__imgContainer">
            <Link to='/warningLightsPage'><img src={speedometer} alt="Speedometer" className="homePage__img" /></Link>
          </div>
          <div className="homePage__cardText">
            <h3>Warning Lights</h3>
            <p>Discover the meaning behind various warning lights on your dashboard.</p>
          </div>
        </div>
        <div className="homePage__card">
          <div className="homePage__imgContainer">
            <Link to='/maintenancePage'><img src={repair} alt="Engine" className="homePage__img" /></Link>
          </div>
          <div className="homePage__cardText">
            <h3>Maintenance</h3>
            <p>Learn about essential car maintenance to keep your vehicle running smoothly.</p>
          </div>
        </div>
        <div className="homePage__card">
          <div className="homePage__imgContainer">
            <Link to='/troubleshootPage'><img src={gtr} alt="GTR" className="homePage__img" /></Link>
          </div>
          <div className="homePage__cardText">
            <h3>Troubleshoot</h3>
            <p>Explore troubleshooting guides for common car problems.</p>
          </div>
        </div>
        <div className="homePage__card">
          <div className="homePage__imgContainer">
            <Link to='/ChatBotPage'><img src={tools} alt="Tools" className="homePage__img" /></Link>
          </div>
          <div className="homePage__cardText">
            <h3>ChatBot</h3>
            <p>Ask me questions!</p>
          </div>
        </div>
      </section>

      <section className="homePage__contact">
      </section>

      <section>
        <FooterComponent />
      </section>
    </>
  );
}

export default HomePage;
