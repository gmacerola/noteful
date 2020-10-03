import React from "react";

import FoldersSidebar from "../FoldersSidebar/FoldersSidebar";
import NotesList from "../NotesList/NotesList";

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <FoldersSidebar />
        <NotesList />
      </div>
    );
  }
}
