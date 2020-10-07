import React from "react";
import NotefulContext from "../../NotefulContext";
import FolderNotes from "../FolderNotes/FolderNotes";
import "./FolderPage.css";

export default class Folder extends React.Component {
  static contextType = NotefulContext;
  render() {
    return (
      <div>
        <FolderNotes folderid={this.props.match.params.folderid} />
      </div>
    );
  }
}
