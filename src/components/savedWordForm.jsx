import { useState } from "react";

function AddedWordForm(props) {
  const { english, transcription, russian, tags, clickDelete, words, setWords } = props;
  const [editRow, setEditRow] = useState(false);
  const [editValueEnglish, setEditValueEnglish] = useState(english);
  const [editValueTranscription, setEditValueTranscription] = useState(transcription);
  const [editValueRussian, setEditValueRussian] = useState(russian);
  const [editValueTags, setEditValueTags] = useState(tags);

  //  const [wordEdit, setWordEdit] = useState(words);

  //открытие режима редактирования при клике "edit"
  const clickEdit = () => {
    setEditRow(!editRow);
  };

  // сброс значений всех полей
  // const clickResetEdited = () => {
  //   setEditValueEnglish("");
  //   setEditValueRussian("");
  //   setEditValueTranscription("");
  //   setEditValueTags("");
  //  };

  //сброс режима редактирования
  const clickResetEdit = () => {
    setEditRow(!editRow);
  };

  //замена слова на отредактированное (в стадии разработки)
  const clickSaveEdited = (id) => {
    //const editWord = {
    //   id: id,
    //   english: editValueEnglish,
    //   transcription: editValueTranscription,
    //    russian: editValueRussian,
    //   tags: editValueTags,
    //  };
    //с помощью мар нужно перебрать ид в массиве и заменить значения на отредактированные (!!!!!!!!!)
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! часть в работе !!!!!!!!!!!!
    //  console.log(editWord);
    //console.log(id);
    //  setWords((words) => words.map((word) => (word.id === id ? { ...word, [field]: value } : word)));
    //console.log([field]);
    //    words.map((item) => {
    //      //if (item.id === item.id) {
    //     if (editValueEnglish) item.english.value = item.editValueEnglish.value;
    //      if (editValueTranscription) item.transcription.value = item.editValueTranscription.value;
    //     if (editValueRussian) item.russian.value = item.editValueRussian.value;
    //     if (editValueTags) item.tags.value = item.editValueTags.value;
    //  }
    //return
    //setWords(words);
    //   }
    // );
  };

  return !editRow ? (
    <tr>
      <td className="form_text-english added_word">{english}</td>
      <td className="form_text-transcription added_word">{transcription}</td>
      <td className="form_text-russian added_word">{russian}</td>
      <td className="form_text-tags added_word">{tags}</td>
      <td>
        <button className="btn_word_edit" type="button" onClick={clickEdit}>
          Edit
        </button>
        <button className="btn_word_del" type="button" onClick={clickDelete}>
          Delete
        </button>
      </td>
    </tr>
  ) : (
    <tr>
      <td>
        <input
          className={"form_input-english"}
          type="text"
          value={editValueEnglish}
          onChange={({ target: { value } }) => setEditValueEnglish(value, "english")}
          required
        />
      </td>
      <td>
        <input
          className={"form_input-transcription"}
          type="text"
          value={editValueTranscription}
          onChange={({ target: { value } }) => setEditValueTranscription(value)}
          required
        />
      </td>
      <td>
        <input
          className={"form_input-russian"}
          type="text"
          value={editValueRussian}
          onChange={({ target: { value } }) => setEditValueRussian(value)}
          required
        />
      </td>
      <td>
        <input
          className={"form_input-tags"}
          required
          type="text"
          value={editValueTags}
          onChange={({ target: { value } }) => setEditValueTags(value)}
        />
      </td>
      <td>
        <button
          type="button"
          className="btn_word_save"
          disabled={!english && !transcription && !russian && !tags}
          //onClick={clickSaveEdited}
          onClick={clickSaveEdited}
        >
          Save
        </button>
        <button
          className="btn_word_cancel"
          type="reset"
          disabled={!english && !transcription && !russian && !tags}
          onClick={clickResetEdit}
        >
          Cancel
        </button>
      </td>
    </tr>
  );
}
export default AddedWordForm;
