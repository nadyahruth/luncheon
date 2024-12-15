import Header from "./components/Header/Header.jsx";
import Navigation from "./components/Navigation/Naviagation.jsx";
import Countdown from "./components/Countdown.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <main>
        <Header></Header>
        <Countdown></Countdown>
      </main>
    </>
  );
}

export default App;
