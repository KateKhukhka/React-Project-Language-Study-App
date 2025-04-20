import AddNewWordForm from "./addWordForm";
import AddedWordForm from "./savedWordForm";
import "./css/words_table.css";

import React, { useState } from "react";

function WordsTable() {
  const [addedWord, setAddedWord] = useState(false);
  const handleChange = () => {
    setAddedWord(!addedWord);
  };

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
          <AddNewWordForm handleChange={handleChange} />
          {addedWord ? <AddedWordForm /> : <div></div>}
        </table>
      </form>
    </>
  );
}

export default WordsTable;
