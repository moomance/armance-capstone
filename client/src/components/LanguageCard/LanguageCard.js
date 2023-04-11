export default function LocationCard({ language, Click, isActive }) {
  return (
    <div
      id={language.id}
      className={isActive === language.id ? "card card__active" : "card"}
      onClick={() => Click(language)}
    >
      <div className="icon">{language.icon}</div>
      <h6 className="name">{language.language}</h6>
    </div>
  );
}
