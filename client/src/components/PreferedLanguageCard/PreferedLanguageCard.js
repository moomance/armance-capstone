export default function PreferedLanguageCard({ language }) {
  return (
    <div className="card__profile">
      <div className="icon">{language.icon}</div>
      <h6 className="name">{language.language}</h6>
    </div>
  );
}
