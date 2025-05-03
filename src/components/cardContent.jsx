import Wordcard from "./cardItem";
import { useState } from "react";
import "./css/carousel.css";

function CardContent(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardData = props.cardData;

  const [wordCount, setWordCount] = useState(0);
  const countProgress = () => {
    setWordCount(wordCount + 1);
  };

  function nextSlide() {
    setCurrentIndex((prevIndex) => (prevIndex === cardData.length - 1 ? 0 : prevIndex + 1));
  }

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
            <div className={index === currentIndex ? "carousel_slide active_slide" : "carousel_slide"}>
              <Wordcard
                index={index}
                key={item.id}
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
