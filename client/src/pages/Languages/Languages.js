import LanguageCard from "../../components/LanguageCard/LanguageCard";

//components

let languages = [
  {
    id: 1,
    language: "English",
    icon: "🇺🇸",
  },
  {
    id: 3,
    language: "Spanish",
    icon: "🇪🇸",
  },
  {
    id: 2,
    language: "French",
    icon: "🇫🇷",
  },
];

export default function Languages({
  name,
  location,
  hobbies,
  toPage,
  langues,
  setLangues,
  Submit,
}) {
  const SelectLanguages = (langue) => {
    if (langues.includes(langue)) {
      setLangues(langues.filter((language) => language !== langue.id));
    } else {
      setLangues([...langues, langue]);
    }
  };

  return (
    <>
      <h1>What are your preferred languages of communication? </h1>
      <div className="card__container">
        {languages.map((language) => {
          return (
            <LanguageCard
              language={language}
              key={language.id}
              Click={SelectLanguages}
            />
          );
        })}
      </div>
    </>
  );
}
