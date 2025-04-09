function AddNewWordForm(props) {
  const { english, transcription, russian, tags, handleChange } = props;

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
          <button type="button" className="btn_word_save" onClick={handleChange}>
            Save
          </button>
          <button className="btn_word_cancel">Cancel</button>
        </td>
      </tr>
    </tbody>
  );
}

export default AddNewWordForm;
