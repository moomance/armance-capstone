import backArrow from "../../assets/icons/BackArrow.png";
import "./BackArrow.scss";

export default function BackArrow() {
  function Previous(path) {
    window.history.back(path);
  }
  return (
    <img
      className="back-arrow"
      alt="backArrow"
      src={backArrow}
      onClick={() => Previous(-1)}
    />
  );
}
