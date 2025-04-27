import { useState, useEffect } from "react";
import cardData from "../cardData";
import AddedWordForm from "./savedWordForm";

function AddNewWordForm() {
  const [words, setWords] = useState([]);
  const [english, setEnglish] = useState("");
  const [transcription, setTranscription] = useState("");
  const [tags, setTags] = useState("");
  const [russian, setRussian] = useState("");
  //generateId () => {id}
  const clickSave = () => {
    setWords([{ english, transcription, russian, tags }, ...words]);
  };
  const clickReset = () => {
    setEnglish("");
    setTranscription("");
    setTags("");
    setRussian("");
  };

  useEffect(() => {
    setWords(cardData);
  }, []);

  console.log(words);

  return (
    <tbody>
      <tr>
        <td>
          <input
            className="form_input-english"
            type="text"
            value={english}
            onChange={({ target: { value } }) => setEnglish(value)}
          />
        </td>
        <td>
          <input
            className="form_input- transcription"
            type="text"
            value={transcription}
            onChange={({ target: { value } }) => setTranscription(value)}
          />
        </td>
        <td>
          <input
            className="form_input-russian"
            type="text"
            value={russian}
            onChange={({ target: { value } }) => setRussian(value)}
          />
        </td>
        <td>
          <input
            className="form_input-tags"
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

      {words.map((item) => {
        return (
          <AddedWordForm
            key={item.id}
            english={item.english}
            transcription={item.transcription}
            russian={item.russian}
            tags={item.tags}
          />
        );
      })}
    </tbody>
  );
}

export default AddNewWordForm;
