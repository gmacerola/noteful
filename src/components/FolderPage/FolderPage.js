import React from "react";
import NotefulContext from "../../NotefulContext";
import FoldersSidebar from "../FoldersSidebar/FoldersSidebar";
import FolderNotes from "../FolderNotes/FolderNotes";
import "./FolderPage.css";

export default class FolderPage extends React.Component {
  static contextType = NotefulContext;
  render() {
    return (
      <div>
        <FoldersSidebar />
        <FolderNotes folderid={this.props.match.params.folderid} />
      </div>
    );
  }
}
