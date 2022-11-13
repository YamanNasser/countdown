import React from "react";
import LogoWithAnimation from "./components/LogoComponent/LogoWithAnimation";
import SideContent from "./components/SideComponent/SideContent";
import MainContent from "./components/MainComponent/MainContent";
import Counterdown from "./components/CounterdownComponent/Counterdown";
import "./App.scss";

function App() {
  return (
    <>
      <section className="header-container">
        <div className="content">
          <LogoWithAnimation />
        </div>
      </section>

      <section className="home-container">
        <div>
          <div className="main-content">
            <MainContent />
          </div>
        </div>
        <SideContent />
      </section>

      <section className="footer-container">
        <div>
          <Counterdown id="0" initialMinute={5} initialSeconds={0} />
        </div>
        <div>
          <Counterdown id="1" initialMinute={2} initialSeconds={3} />
        </div>
        <div>
          <Counterdown id="2" initialMinute={0} initialSeconds={30} />
        </div>
      </section>
    </>
  );
}

export default App;
