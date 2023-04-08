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

  // function handleAllClicks() {
  //   locationChange();
  //   activeCard();
  // }

  // const renderFlag = (codePoint) => {
  //   const flag = String.fromCodePoint(parseInt(codePoint.substring(2), 16));
  //   return <span>{flag}</span>;
  // };
  // console.log(renderFlag);

  // const codePoints = icon.split(" ");
  // const code = icon.replace(/ /g, "-");
  // const flag_icon = renderFlag(codePoints[0] + " " + codePoints[1], code);
  // const renderFlags = (codePoint, icon) => {
  //   const flag = String.fromCodePoint(parseInt(codePoint.substring(2), 16));
  //   return (
  //     <span>
  //       {flag} {code}
  //     </span>
  //   );
  // };
  // const renderFlag = (codePoint) => {
  //   const icon = String.fromCodePoint(parseInt(codePoint.substring(2), 16));
  //   return <span dangerouslySetInnerHTML={{ __html: icon }} />;
  // };

  return (
    <div
      id={l.id}
      // className={isActive === l.id ? "card card__active" : "card"}
      // onClick={() => toggle(l.id)}
      className="card"
      onClick={() => locationChange(l.id)}
    >
      <div className="icon">{l.icon}</div>
      <h6 className="name">{l.location}</h6>
    </div>
  );
}
