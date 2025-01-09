import React from "react";
import Header from "./components/Header";
import MainVisual from "./components/MainVisual";
import About from "./components/About";
import Works from "./components/Works";
import News from "./components/News";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles.css";
import "./reset.css";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <MainVisual />
        <About />
        <Works />
        <News />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
