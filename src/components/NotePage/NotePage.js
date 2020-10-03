import React from "react";
import NotefulContext from "../../NotefulContext";
import FoldersSidebar from "../FoldersSidebar/FoldersSidebar";
import Note from "../Note/Note";

export default class NotePage extends React.Component {
  static contextType = NotefulContext;
  render() {
    return (
      <div>
        <FoldersSidebar />
        <Note noteid={this.props.match.params.noteid} />
      </div>
    );
  }
}
