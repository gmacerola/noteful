import React from "react";
import "./AddFolder.css";

import NotefulContext from "../../NotefulContext";

export default class AddFolder extends React.Component {
  static contextType = NotefulContext;
  render() {
    return (
      <form className="addFolder" onSubmit={(e) => this.context.addFolder(e)}>
        <input
          type="text"
          value={this.context.newFolder}
          placeholder="New Folder"
          onChange={(e) => this.context.setNewFolder(e)}
        />
        <input type="submit" value="Add" />
      </form>
    );
  }
}
