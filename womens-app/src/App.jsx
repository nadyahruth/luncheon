import Header from "./components/Header/Header.jsx";
import Countdown from "./components/Countdown.jsx";
import DonationButton from "./components/Donation/DonationButton.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <main>
        <Header></Header>
        <Countdown></Countdown>
        <DonationButton></DonationButton>
        <br></br>
        <hr></hr>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
