import "./Header.css";
import Navigation from "../Navigation/Naviagation.jsx";
export default function Header() {
  return (
    <header>
      <div className="banner">
        <img src="/src/assets/womens-img.png" className="womens-img"></img>
        <Navigation></Navigation>
        <div className="border">
          <h1 className="header-text">1st Annual Womens Luncheon</h1>
        </div>
      </div>
    </header>
  );
}
