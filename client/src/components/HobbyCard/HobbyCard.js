// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./HobbyCard.scss";

export default function HobbyCard({ h, hobbies, handleClick }) {
  const renderIcon = (codePoint) => {
    const icon = String.fromCodePoint(parseInt(codePoint.substring(2), 16));
    return <span dangerouslySetInnerHTML={{ __html: icon }} />;
  };

  return (
    <div
      className={hobbies.includes(h.id) ? "card card__active" : "card"}
      onClick={() => {
        handleClick(h);
      }}
    >
      <div className="icon">{renderIcon(h.icon)}</div>
      <h6 className="name">{h.hobby}</h6>
    </div>
  );
}
