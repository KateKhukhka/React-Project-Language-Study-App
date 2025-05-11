import { useState } from "react";
import cardData from "../cardData";
import AddedWordForm from "./savedWordForm";

function AddNewWordForm() {
  //массив слов
  const [words, setWords] = useState(cardData);

  //состояния в инпутах
  const [english, setEnglish] = useState("");
  const [transcription, setTranscription] = useState("");
  const [tags, setTags] = useState("");
  const [russian, setRussian] = useState("");

  //состояния ошибок при отсутствии текста в инпутах
  const [errorEnglish, setErrorEnglish] = useState(false);
  const [errorTranscription, setErrorTranscription] = useState(false);
  const [errorRussian, setErrorRussian] = useState(false);
  const [errorTags, setErrorTags] = useState(false);
  const [errorText, setErrorText] = useState("");

  //сохранение нового слова или ошибка при нажатии кнопки "save"
  const clickSave = () => {
    if (english !== "" && transcription !== "" && russian !== "" && tags !== "") {
      //создание id для новых слов
      const id = Date.now();

      //создание и добавление нового слова в массив
      const newWord = { id, english, transcription, russian, tags };
      setWords([newWord, ...words]);

      //очистка инпутов и сброс ошибок после сохранения нового слова
      setEnglish("");
      setTranscription("");
      setTags("");
      setRussian("");
      setErrorEnglish(false);
      setErrorTranscription(false);
      setErrorRussian(false);
      setErrorTags(false);
      setErrorText("");
    } else {
      //предупреждение о необходимости заполнить все поля при ошибке
      setErrorText("fill all required fields, please");

      //появление красного бордера у инпутов
      english !== "" ? setErrorEnglish(false) : setErrorEnglish(true);
      transcription !== "" ? setErrorTranscription(false) : setErrorTranscription(true);
      russian !== "" ? setErrorRussian(false) : setErrorRussian(true);
      tags !== "" ? setErrorTags(false) : setErrorTags(true);
    }
  };

  //сброс введенных значений во всех инпутах при нажатии кнопки "reset"
  const clickReset = () => {
    setEnglish("");
    setTranscription("");
    setTags("");
    setRussian("");
  };

  //проверка данных массива
  console.log(words);

  //удаление слова по id при нажатии кнопки "delete"
  const clickDelete = (id) => {
    const updatedWords = words.filter((item) => item.id !== id);
    setWords(updatedWords);
  };

  //редактирование слова
  const editWord = (id, field, e) => {
    setWords(
      words.map((item) => {
        if (item.id === id) {
          item[field] = e.target.value;
        }
        return item;
      })
    );
  };

  return (
    <tbody>
      <tr>
        <td>
          <input
            className={errorEnglish ? "form_input-error" : "form_input-english"}
            type="text"
            value={english}
            onChange={({ target: { value } }) => setEnglish(value)}
            required
          />
        </td>
        <td>
          <input
            className={errorTranscription ? "form_input-error" : "form_input-transcription"}
            type="text"
            value={transcription}
            onChange={({ target: { value } }) => setTranscription(value)}
            required
          />
        </td>
        <td>
          <input
            className={errorRussian ? "form_input-error" : "form_input-russian"}
            type="text"
            value={russian}
            onChange={({ target: { value } }) => setRussian(value)}
            required
          />
        </td>
        <td>
          <input
            className={errorTags ? "form_input-error" : "form_input-tags"}
            required
            type="text"
            value={tags}
            onChange={({ target: { value } }) => setTags(value)}
          />
        </td>
        <td>
          <button
            type="button"
            className="btn_word_save"
            disabled={!english && !transcription && !russian && !tags}
            onClick={clickSave}
          >
            Save
          </button>
          <button
            className="btn_word_cancel"
            type="reset"
            disabled={!english && !transcription && !russian && !tags}
            onClick={clickReset}
          >
            Cancel
          </button>
        </td>
      </tr>
      <tr>
        <td className="form_input-error-text">{errorText}</td>
      </tr>

      {words.map((item) => {
        return (
          <AddedWordForm
            key={item.id}
            id={item.id}
            english={item.english}
            transcription={item.transcription}
            russian={item.russian}
            tags={item.tags}
            clickDelete={() => clickDelete(item.id)}
            editWord={editWord}
          />
        );
      })}
    </tbody>
  );
}

export default AddNewWordForm;
