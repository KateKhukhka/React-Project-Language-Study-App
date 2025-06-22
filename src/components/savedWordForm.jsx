import { useState } from "react";

function AddedWordForm(props) {
  const { id, english, transcription, russian, tags, tags_json, clickDelete, editWord } = props;

  //состояние режима редактирования
  const [editRow, setEditRow] = useState(false);

  //открытие режима редактирования при клике "edit"
  const clickEdit = () => {
    setEditRow(!editRow);
  };

  //сброс режима редактирования и сохранение в таблицу при отсутствии пустых полей (клик "save")
  //также сюда можно добавить доп проверки на корректность заполнения полей,
  //а также выводить разные уведомления в зависимости от характера ошибки
  const clickEditedSave = () => {
    if (
      english !== "" &&
      transcription !== "" &&
      russian !== "" &&
      tags !== "" &&
      english.match(/[a-z]/i) &&
      russian.match(/[а-я]/i) &&
      tags.match(/[a-z]/i)
    ) {
      setEditRow(!editRow);
      //изменение отредактированного слова на сервере
      fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/update`, {
        method: "POST",
        body: JSON.stringify({
          id: id,
          english: english,
          transcription: transcription,
          russian: russian,
          tags: tags,
          tags_json: tags_json,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log({ id: id, english: english, transcription: transcription, russian: russian, tags: tags });
        });
    } else {
      alert("fill all required fields and check that all information is correct, please");
    }
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
          value={english}
          onChange={(e) => editWord(id, "english", e)}
          required
        />
      </td>
      <td>
        <input
          className={"form_input-transcription"}
          type="text"
          value={transcription}
          onChange={(e) => editWord(id, "transcription", e)}
          required
        />
      </td>
      <td>
        <input
          className={"form_input-russian"}
          type="text"
          value={russian}
          onChange={(e) => editWord(id, "russian", e)}
          required
        />
      </td>
      <td>
        <input
          className={"form_input-tags"}
          required
          type="text"
          value={tags}
          onChange={(e) => editWord(id, "tags", e)}
        />
      </td>
      <td>
        <button
          type="button"
          className="btn_word_save"
          disabled={!english && !transcription && !russian && !tags}
          onClick={clickEditedSave}
        >
          Save
        </button>
        <button className="btn_word_del" type="button" onClick={clickDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}
export default AddedWordForm;
