import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import App from "./App";

import { NotesContext } from "../src/contexts/NotesContext";

const RootComponent = () => {
  const [notes, setNotes] = useState([])
  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      <App />
    </NotesContext.Provider>
  );
};

ReactDOM.render(<RootComponent />, document.getElementById("root"));
