import Wordcard from "./cardItem";
import { useState } from "react";
import "./css/carousel.css";

function CardContent(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardData = props.cardData;

  const [flipped, setFlipped] = useState(false);

  //счет при нажатии на кнопку просмотра перевода
  //const [wordCount, setWordCount] = useState(0);
  //const countProgress = () => {
  //  setWordCount(wordCount + 1);
  // };

  //создание сета изученных слов, счет при нажатии на кнопку просмотра перевода
  const [studiedWords, setStudiedWords] = useState(new Set());
  const studiedProgress = (id) => {
    setStudiedWords((prev) => {
      const newSet = new Set(prev);
      newSet.add(id);
      return newSet;
    });
  };

  const studiedWordsCount = studiedWords.size;
  //перелистывание карточек при нажатии правой кнопки
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cardData.length - 1 ? 0 : prevIndex + 1));
    setFlipped(false);
  };
  //перелистывание карточек при нажатии левой кнопки
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cardData.length - 1 : prevIndex - 1));
    setFlipped(false);
  };

  return (
    <main>
      <div className="counter">Progress: {studiedWordsCount} words</div>
      <div className="carousel_wrapper">
        <button className="carousel_button prev" onClick={prevSlide}>
          &#10094;
        </button>

        {cardData.map((word, index) => {
          return (
            <div key={word.id} className={index === currentIndex ? "carousel_slide active_slide" : "carousel_slide"}>
              <Wordcard
                currentWord={currentIndex}
                index={index}
                name={word.english}
                transcription={word.transcription}
                translation={word.russian}
                theme={word.tags}
                handleChangeProgress={studiedProgress}
                flipped={flipped}
                setFlipped={setFlipped}
                id={word.id}
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
