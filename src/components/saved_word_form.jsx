import EditWord from "./button_edit";
import DelWord from "./button_del";

function AddedWordForm(props) {
  const { english, transcription, russian, tags } = props;
  return (
    <tbody>
      <tr>
        <td className="form_text-english added_word">{english}world</td>
        <td className="form_text-transcription added_word">{transcription}[wз:ld]</td>
        <td className="form_text-russian added_word">{russian}мир</td>
        <td className="form_text-tags added_word">{tags}world</td>
        <td>
          <EditWord />
          <DelWord />
        </td>
      </tr>
    </tbody>
  );
}
export default AddedWordForm;
