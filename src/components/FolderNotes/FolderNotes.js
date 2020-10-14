import React from "react";
import { Link } from "react-router-dom";
import NotefulContext from "../../NotefulContext";
import "./FolderNotes.css";

export default class FolderNotes extends React.Component {
  static contextType = NotefulContext;

  render() {
    console.log(this.props.folderid);
    const filteredNotes = this.context.notes.filter(
      (note) => note.folderId === this.props.folderid
    );
    console.log(this.props, filteredNotes);
    return (
      <div className="FoldersNotes">
        <p>Notes</p>
        <ul className="NotesList">
          {filteredNotes.map((note) => (
            <div className="note">
              <li key={note.id}>
                <Link to={{ pathname: `/note/${note.id}` }}>{note.name} </Link>
              </li>
              <p>{note.modified}</p>
            </div>
          ))}
        </ul>
        <Link to="/createnote">
          <button className="createNote">Create Note</button>
        </Link>
      </div>
    );
  }
}
