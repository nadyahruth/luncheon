import "./Header.css";
import Navigation from "../Navigation/Naviagation.jsx";
import womensImg from "/src/assets/womens-img.png";
export default function Header() {
  return (
    <header>
      <div className="banner">
        <img
          src={womensImg}
          className="womens-img"
          alt="Diverse Women Silhouette"
        ></img>
        {/* <Navigation></Navigation> */}

        <h1 className="header-text">1st Annual Womens Luncheon</h1>
      </div>
    </header>
  );
}
