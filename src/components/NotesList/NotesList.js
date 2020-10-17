import React from "react";
import { Link } from "react-router-dom";
import NotefulContext from "../../NotefulContext";
import "./NotesList.css";

export default class NotesList extends React.Component {
  static contextType = NotefulContext;
  render() {
    return (
      <div>
        <section className="notes">
          <p>Notes</p>
          <ul className="NotesList">
            {this.context.notes.map((note) => (
              <div key={note.id} className="note">
                <li>
                  <Link to={{ pathname: `/note/${note.id}` }}>
                    {note.name}{" "}
                  </Link>
                </li>
                <p>{Date(note.modified).toLocaleString()}</p>
              </div>
            ))}
          </ul>
        </section>
        <Link to="/createnote">
          <button className="createNote">Create Note</button>
        </Link>
      </div>
    );
  }
}
