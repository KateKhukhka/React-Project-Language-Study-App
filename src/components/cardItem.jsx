import React, { useRef, useEffect } from "react";

function Wordcard(props) {
  const {
    name = "not found",
    transcription = "[not found]",
    translation = "не найден",
    theme = "",
    handleChangeProgress,
    currentWord,
    flipped,
    setFlipped,
    id,
  } = props;

  //открытие перевода при нажатии на кнопку
  const handleChange = React.useCallback(() => {
    setFlipped((prev) => !prev);
    if (!flipped) {
      handleChangeProgress(id);
    }
  }, [id, flipped, setFlipped, handleChangeProgress]);

  //первая версия handleChange без useCallback:
  // const handleChange = () => {
  //    setFlipped(!flipped);
  //    handleChangeProgress();
  //  };

  //фокусировка на кнопке каждой карточки
  const buttonRef = useRef();
  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [currentWord, flipped]);

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

export default Wordcard;
