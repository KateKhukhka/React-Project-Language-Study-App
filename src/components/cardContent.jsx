import Wordcard from "./cardItem";
import { useState } from "react";
import "./css/carousel.css";

function CardContent(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardData = props.cardData;

  //счет при нажатии на кнопку просмотра перевода
  const [wordCount, setWordCount] = useState(0);
  const countProgress = () => {
    setWordCount(wordCount + 1);
  };

  //перелистывание карточек при нажатии правой кнопки
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cardData.length - 1 ? 0 : prevIndex + 1));
    
  };
  //перелистывание карточек при нажатии левой кнопки
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cardData.length - 1 : prevIndex - 1));
  };

  return (
    <main>
      <div className="counter">Progress: {wordCount} words</div>
      <div className="carousel_wrapper">
        <button className="carousel_button prev" onClick={prevSlide}>
          &#10094;
        </button>

        {cardData.map((item, index) => {
          return (
            <div key={item.id} className={index === currentIndex ? "carousel_slide active_slide" : "carousel_slide"}>
              <Wordcard
                index={index}
                name={item.english}
                transcription={item.transcription}
                translation={item.russian}
                theme={item.tags}
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
