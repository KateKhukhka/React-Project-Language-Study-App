import SaveNewWord from "./button_save";
import CancelNewWord from "./button_cancel";

function AddNewWordForm(props) {
  const { english, transcription, russian, tags } = props;
  return (
    <tbody>
      <tr>
        <td>
          <input className="form_input-english" value={english} />
        </td>
        <td>
          <input className="form_input- transcription " value={transcription} />
        </td>
        <td>
          <input className="form_input-russian" value={russian} />
        </td>
        <td>
          <input className="form_input-tags" value={tags} />
        </td>
        <td>
          <SaveNewWord />
          <CancelNewWord />
        </td>
      </tr>
    </tbody>
  );
}

export default AddNewWordForm;
