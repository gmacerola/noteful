import React from "react";
import { Link } from "react-router-dom";
import "./Notes.css";

export default function Notes(props) {
  return (
    <section className="notes">
      <p>Notes</p>
      <ul className="NotesList">
        {props.notes.map((note) => (
          <div className="note">
            <li key={note.id}>
              <Link to={{ pathname: `/note/${note.id}` }}>{note.name} </Link>
            </li>
            <p>{note.content}</p>
            <p>{note.modified}</p>
          </div>
        ))}
      </ul>
    </section>
  );
}
