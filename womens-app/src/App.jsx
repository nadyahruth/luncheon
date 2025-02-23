import Header from "./components/Header/Header.jsx";
import Countdown from "./components/Countdown/Countdown.jsx";
import DonationButton from "./components/Donation/DonationButton.jsx";
import ImageCards from "./components/ImageCards/ImageCards.jsx";
import Footer from "./components/Footer/Footer.jsx";
import React, { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [array, setArray] = useState([]);
  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api");
    setArray(response.data.fruits);
    // console.log(response.data.fruits);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <main>
        <Header></Header>
        <Countdown></Countdown>
        <br></br>
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
