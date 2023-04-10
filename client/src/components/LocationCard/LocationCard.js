// stylesheet
import "./LocationCard.scss";

export default function LocationCard({
  location,
  setLocation,
  id,
  city,
  icon,

  l,
  toggle,
  isActive,
  setIsActive,
}) {
  function locationChange(e) {
    setLocation({ city, id, icon });
  }

  // const activeCard = (id) => {
  //   setIsActive(id);
  // };

  return (
    <div
      id={l.id}
      className={location === l.id ? "card card__active" : "card"}
      onClick={() => locationChange(l.id)}
    >
      <div className="icon">{l.icon}</div>
      <h6 className="name">{l.location}</h6>
    </div>
  );
}
