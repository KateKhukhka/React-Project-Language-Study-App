import Wordcard from "./cardItem";
import { useState, useContext } from "react";
import "./css/carousel.css";

//import { DataContext } from "./context";

import { WordsContext } from "../App";

//function CardContent(props)
function CardContent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  //const cardData = props.cardData;

  const { words } = useContext(WordsContext);

  //счет при нажатии на кнопку просмотра перевода
  const [wordCount, setWordCount] = useState(0);
  const countProgress = () => {
    setWordCount(wordCount + 1);
  };

  //перелистывание карточек при нажатии правой кнопки
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === words.length - 1 ? 0 : prevIndex + 1));
  };
  //перелистывание карточек при нажатии левой кнопки
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? words.length - 1 : prevIndex - 1));
  };

  return (
    <main>
      <div className="counter">Progress: {wordCount} words</div>
      <div className="carousel_wrapper">
        <button className="carousel_button prev" onClick={prevSlide}>
          &#10094;
        </button>
        {words.map((word, index) => {
          return (
            <div key={word.id} className={index === currentIndex ? "carousel_slide active_slide" : "carousel_slide"}>
              <Wordcard
                currentWord={currentIndex}
                index={index}
                name={word.english}
                transcription={word.transcription}
                translation={word.russian}
                theme={word.tags}
                handleChangeProgress={countProgress}
              />
            </div>
          );
        })}

        <button className="carousel_button next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </main>
  );
}
export default CardContent;
