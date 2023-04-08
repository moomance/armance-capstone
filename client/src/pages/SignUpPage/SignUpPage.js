import "./SignUpPage.scss";
import { Link } from "react-router-dom";
// photo
import signup from "../../assets/images/signup.png";

export default function SignUpPage() {
  return (
    <div className="signup">
      <img className="signup__image" src={signup} alt="signup" />
      <div className="signup__hero">
        <h2 className="signup__content">
          Unlock unforgettable
          <br />
          experiences abroad
        </h2>
        <h5 className="signup__content">
          Connect authentically with vibrant
          <br />
          communities of like-minded
          <br /> individuals
        </h5>
      </div>
      <div className="signup__buttons">
        <button className="login">Login</button>
        <Link to="/form" className="signup__button">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
