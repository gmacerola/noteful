import React from "react";
import { Link } from "react-router-dom";
import NotefulContext from "../../NotefulContext";
import "./FolderNotes.css";
import PropTypes from "prop-types";

export default class FolderNotes extends React.Component {
  static contextType = NotefulContext;
  static defaultProps = {
    folderid: "0",
  };
  static propTypes = {
    folderid: PropTypes.string.isRequired,
  };

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
            <li key={note.id} className="note">
              <Link to={{ pathname: `/note/${note.id}` }}>{note.name} </Link>
              <p>{Date(note.modified).toLocaleString()}</p>
            </li>
          ))}
        </ul>
        <Link to="/createnote">
          <button className="createNote">Create Note</button>
        </Link>
      </div>
    );
  }
}
