import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import App from "./App";

import { NotesContext } from "../src/contexts/NotesContext";

const RootComponent = () => {
  const [notes, setNotes] = useState([])
  const [selectedNote, setSelectedNote] = useState()

  return (
    <NotesContext.Provider value={{ notes, setNotes, selectedNote, setSelectedNote }}>
      <App />
    </NotesContext.Provider>
  );
};

ReactDOM.render(<RootComponent />, document.getElementById("root"));
