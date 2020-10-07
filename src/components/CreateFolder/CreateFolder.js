import React from "react";

import NotefulContext from "../../NotefulContext";

export default class CreateFolder extends React.Component {
  static contextType = NotefulContext;
  render() {
    return (
      <form onSubmit={(e) => this.context.createFolder(e)}>
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
