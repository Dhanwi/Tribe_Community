import React from "react";
import HeroFinance from "./heroFinance"; // Ensure this is the correct import path
import Footer from "../footer/Footer";
import SuccessStories from "./SuccessStories";
import Schemes from "./Schemes";
import Faq from "./Faq";
import Microloans from "./Microloans";
import Contact from "./Contact";
import FinancialLiteracy from "./FinancialLiteracy";
import Chat from "./Chat";
import Developers from "./Developers";

const FinancialSolutions = () => {
  return (
    <>
      <HeroFinance /> 
      <SuccessStories />
      <Schemes />
      <Microloans />
      <FinancialLiteracy />
      <Faq />
      <Contact />
      <Footer />
      <Chat />
      <Developers/>
    </>
  );
};

export default FinancialSolutions;
