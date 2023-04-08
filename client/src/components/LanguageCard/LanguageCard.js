export default function LocationCard({ language, Click }) {
  return (
    <div id={language.id} className="card" onClick={() => Click(language)}>
      <div className="icon">{language.icon}</div>
      <h6 className="name">{language.language}</h6>
    </div>
  );
}
