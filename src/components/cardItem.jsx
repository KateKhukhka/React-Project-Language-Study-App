import React, { useState, useRef, useEffect } from "react";

function Wordcard(props) {
  const { name, transcription, translation, theme, handleChangeProgress } = props;

  //состояние для открытия перевода слова
  const [flipped, setFlipped] = useState(false);

  //открытие перевода при нажатии на кнопку
  const handleChange = React.useCallback(() => {
    setFlipped((prev) => !prev);
    handleChangeProgress();
  }, [handleChangeProgress]);

  //первая версия handleChange без useCallback:
  // const handleChange = () => {
  //    setFlipped(!flipped);
  //    handleChangeProgress();
  //  };

  //фокусировка на кнопке каждой карточки (версия вторая, но фокус не работает при перелистывании)
  const buttonRef = useRef();
  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [flipped]);

  //первая версия фокусировке на кнопке каждой карточки при рендере (некорректно, но работало):
  //  useEffect(() => {
  //    if (buttonRef.current) {
  //      buttonRef.current.focus();
  //    }
  //  });

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
