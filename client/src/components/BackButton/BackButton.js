import "./BackButton.scss";

function Previous(path) {
  window.history.back(path);
}

export default function BackButton() {
  return (
    <div className="button__back" onClick={() => Previous(-1)}>
      Back
    </div>
  );
}
