import Wordcard from "./cardItem";
import { useState } from "react";
import "./css/carousel.css";
import { observer } from "mobx-react-lite";
import WordsStore from "../stores/WordsStore";

const CardContent = observer(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const store = WordsStore;
  const words = store.words;
  console.log(words);
  const [flipped, setFlipped] = useState(false);

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
    setCurrentIndex((prevIndex) => (prevIndex === words.length - 1 ? 0 : prevIndex + 1));
    setFlipped(false);
  };
  //перелистывание карточек при нажатии левой кнопки
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? words.length - 1 : prevIndex - 1));
    setFlipped(false);
  };

  return (
    <main>
      <div className="counter">Progress: {studiedWordsCount} words</div>
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
});

export default CardContent;
