import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notesData from "../notesData";

function App() {
  return (
    <div>
      <Header />
      {notesData.map((noteItem) => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
