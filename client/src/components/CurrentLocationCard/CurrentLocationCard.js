export default function CurrentLocationCard({ location }) {
  return (
    <div className="card__profile">
      <div className="icon">{location.icon}</div>
      <h6 className="name">{location.city}</h6>
    </div>
  );
}
