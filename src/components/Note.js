import React from "react";

if (process.env.NODE_ENV !== "production") {
  console.warn("Note component is being rendered");
}

function Note() {
  return <div className="note">
    <h1>Title</h1>
    <p>This is a note.</p>
  </div>
}

export default Note;