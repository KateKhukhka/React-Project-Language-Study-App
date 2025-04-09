import React, { useState } from "react";

function Wordcard(props) {
  const { name, transcription, translation, meaning, theme } = props;
  const [fliped, setFliped] = useState(false);
  const handleChange = () => {
    setFliped(!fliped);
  };
  return (
    <div className="card">
      <h3 className="card_name">{name}</h3>
      <p className="card_transcription">{transcription}</p>

      {fliped ? (
        <button onClick={handleChange} className="card_button_answer">
          <h3 className="card_translation">{translation}</h3>
          <p className="card_meaning">{meaning}</p>
          <p className="card_theme">#{theme}</p>
        </button>
      ) : (
        <button className="card_button" onClick={handleChange}>
          click me
        </button>
      )}
    </div>
  );
}

export default Wordcard;
