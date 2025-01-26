/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Hero from "./components/Hero";
import ServiceCardGrid from "./components/ServiceCard";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import FeatureBanner from "./components/FeatureBanner";
import ContactForm from "./components/ContactForm";
import MainContent from "./components/MainContent";
import ChatModal from "./components/ChatModal";
import IntroSection from "./components/IntroSection"

const App = () => {

  return (
    <div className='root'>
      <NavBar />
      <Hero />
      <MainContent>
        <br />
        <FeatureBanner />
        <ServiceCardGrid />
        <IntroSection />
        <ContactForm />
      </MainContent>
      <Footer />
      <ChatModal />
    </div>
  );
};

export default App;
