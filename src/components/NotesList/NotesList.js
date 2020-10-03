import React from "react";
import { Link } from "react-router-dom";
import NotefulContext from "../../NotefulContext";
import "./NotesList.css";

export default class NotesList extends React.Component {
  static contextType = NotefulContext;
  render() {
    return (
      <section className="notes">
        <p>Notes</p>
        <ul className="NotesList">
          {this.context.notes.map((note) => (
            <div className="note">
              <li key={note.id}>
                <Link to={{ pathname: `/note/${note.id}` }}>{note.name} </Link>
              </li>
              <p>{note.modified}</p>
            </div>
          ))}
        </ul>
      </section>
    );
  }
}
