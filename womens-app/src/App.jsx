import Header from "./components/Header/Header.jsx";
import Countdown from "./components/Countdown/Countdown.jsx";
import ReactCountdown from "react-countdown";
import DonationButton from "./components/Donation/DonationButton.jsx";
import ImageCards from "./components/ImageCards/ImageCards.jsx";
import Footer from "./components/Footer/Footer.jsx";
import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { useState } from "react";

function App() {
  //1. Only call hooks inside the Component Functions
  //2. Only call hooks on the top level
  const [selectedPage, setSelectedPage] = useState("initial State"); // returns an array of exactly 2 elements it is destructed
  //selectedPage is current data (initil val)

  function handleSelectedPage(selectedButton) {
    setSelectedPage(selectedButton);
    console.log(setSelectedPage);
  }

  return (
    <>
      <main>
        <Header></Header>
        <Countdown></Countdown>
        <DonationButton></DonationButton>
        <br></br>
        <hr></hr>
        <ImageCards></ImageCards>
        <Footer></Footer>
      </main>
    </>
  );
}

export default App;
