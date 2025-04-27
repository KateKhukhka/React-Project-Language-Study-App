import React, { useState } from "react";

function Wordcard(props) {
  const { name, transcription, translation, theme } = props;
  const [flipped, setFlipped] = useState(false);
  const handleChange = () => {
    setFlipped(!flipped);
  };
  return (
    <div className="card">
      <h3 className="card_name">{name}</h3>
      <p className="card_transcription">{transcription}</p>

      {flipped ? (
        <button onClick={handleChange} className="card_button_answer">
          <div>
            <h3 className="card_translation">{translation}</h3>
            <p className="card_theme">#{theme}</p>
          </div>
        </button>
      ) : (
        <button className="card_button" onClick={handleChange}>
          click me
        </button>
      )}
    </div>
  );
}

Wordcard.defaultProps = {
  name: "word",
  transcription: "[wɜːd]",
  translation: "слово",
  theme: "",
};

export default Wordcard;
