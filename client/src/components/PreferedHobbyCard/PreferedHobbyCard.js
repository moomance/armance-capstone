export default function PreferedHobbyCard({ hobby }) {
  const renderIcon = (codePoint) => {
    const icon = String.fromCodePoint(parseInt(codePoint.substring(2), 16));
    return <span dangerouslySetInnerHTML={{ __html: icon }} />;
  };
  return (
    <div className="card__profile">
      <div className="icon">{renderIcon(hobby.icon)}</div>
      <h6 className="name">{hobby.name}</h6>
    </div>
  );
}
