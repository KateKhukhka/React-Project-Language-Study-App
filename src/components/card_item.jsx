import FlipButton from "./button_flip";

function Wordcard(props) {
  return (
    <div className="card">
      <div className="card_front">
        <h3 className="card_name">{props.name}</h3>
        <FlipButton />
      </div>
      <div className="card_back">
        <p className="card_meaning">{props.meaning}</p>
        <p className="card_transcription">{props.transcription}</p>
        <p className="card_translation">{props.translation}</p>
        <p className="card_theme">{props.theme}</p>
      </div>
    </div>
  );
}
export default Wordcard;
