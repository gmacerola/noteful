import React from "react";
import { Link } from "react-router-dom";
import NotefulContext from "../../NotefulContext";

export default class FolderNotes extends React.Component {
  static contextType = NotefulContext;

  render() {
    const notes = this.context.notes.filter(
      (note) => note.id === this.props.match.params.noteid
    );
    console.log(notes);
    return (
      <div className="FoldersNotes">
        <p>Notes</p>
        <ul className="NotesList">
          {notes.map((note) => (
            <div className="note">
              <li key={note.id}>
                <Link to={{ pathname: `/note/${note.id}` }}>{note.name} </Link>
              </li>
              <p>{note.modified}</p>
              <p>{note.content}</p>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
