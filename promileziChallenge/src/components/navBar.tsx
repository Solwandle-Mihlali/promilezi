import "../App.css";
import { images } from "../assets/images";

function NavBar() {
  const navItems = ["HOME", "ABOUT", "SOLUTIONS", "CONTACT"];

  return (
    <nav className="navCont">
      <div className="logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul>
        {navItems?.map((value, index) => {
          return <li key={index.toString()}>{value}</li>;
        })}
      </ul>
      <span id="reqDemoBtn">
        <button>REQUEST A DEMO</button>
      </span>
    </nav>
  );
}

export default NavBar;
