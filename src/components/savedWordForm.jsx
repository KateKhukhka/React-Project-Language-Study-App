//import { useState } from "react";

function AddedWordForm(props) {
  const { english, transcription, russian, tags, clickDelete } = props;

  //const [editValue, setEditValue] = useState(false);
  //const handleEditChange = setEditValue(!editValue);
  // onClick={handleEditChange}
  //редактирование не реализовано до конца

  return (
    <tr>
      <td className="form_text-english added_word">{english}</td>
      <td className="form_text-transcription added_word">{transcription}</td>
      <td className="form_text-russian added_word">{russian}</td>
      <td className="form_text-tags added_word">{tags}</td>
      <td>
        <button className="btn_word_edit" type="button">
          Edit
        </button>
        <button className="btn_word_del" type="button" onClick={clickDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}
export default AddedWordForm;
