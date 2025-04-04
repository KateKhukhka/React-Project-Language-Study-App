import AddNewWordForm from "./add_word_form";
import AddedWordForm from "./saved_word_form";
import "./css/words_table.css";

function WordsTable() {
  let tableItem;
  let addedWord = false;
  if (addedWord) {
    tableItem = <AddedWordForm />;
  } else {
    tableItem = <AddNewWordForm />;
  }
  return (
    <>
      <form className="add_word_form">
        <table>
          <caption>Words List</caption>
          <thead>
            <tr>
              <th>english</th>
              <th>transcription</th>
              <th>russian</th>
              <th>tag</th>
              <th></th>
            </tr>
          </thead>
          {tableItem}
        </table>
      </form>
    </>
  );
}

export default WordsTable;
