import React, { useState, useRef, useEffect } from "react";

function Wordcard(props) {
  const { name, transcription, translation, theme, handleChangeProgress } = props;

  const [flipped, setFlipped] = useState(false);

  const handleChange = () => {
    setFlipped(!flipped);
    handleChangeProgress();
  };

  const buttonRef = useRef();
  useEffect(() => {
    buttonRef.current.focus();
  }, []);

  return (
    <div className="card">
      {flipped ? (
        <div onClick={handleChange} className="card_answer">
          <h3 className="card_name">{name}</h3>
          <p className="card_transcription">{transcription}</p>
          <h3 className="card_translation">{translation}</h3>
          <p className="card_theme">#{theme}</p>
        </div>
      ) : (
        <div>
          <h3 className="card_name">{name}</h3>
          <p className="card_transcription">{transcription}</p>
          <button ref={buttonRef} className="card_button" onClick={handleChange}>
            click me
          </button>
        </div>
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
