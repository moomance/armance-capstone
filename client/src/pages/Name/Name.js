// stylesheet
import "./Name.scss";

//components

export default function Name({ toPage, name, setName }) {
  console.log(name);
  function nameChange(e, str) {
    const updatedName = e.target.value;
    const userName =
      updatedName[0].toUpperCase() + updatedName.slice(1).toLowerCase();
    setName(userName);
  }
  return (
    <>
      <h1>What's your name?</h1>

      <div className="form__name">
        <textarea
          id="name"
          onChange={nameChange}
          htmlFor="name"
          placeholder="Enter your name"
          className="input"
        ></textarea>
      </div>
      <div onClick={() => toPage("Location")} className="button__continue">
        Continue
      </div>
    </>
  );
}
