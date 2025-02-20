import "./Navigation.css";
export default function Navigation() {
  function handleHomeClick() {
    console.log("Hello Home");
  }
  function handleDonationClick() {
    console.log("Hello Donation");
  }
  function handleContactClick() {
    console.log("Hello Contact");
  }
  return (
    <nav role="navigation">
      <ul>
        <li>
          <a onClick={handleHomeClick}>Home</a>
        </li>
        <li>
          <a onClick={handleDonationClick}>Make A Donation</a>
        </li>
        <li>
          <a onClick={handleContactClick}>Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}
