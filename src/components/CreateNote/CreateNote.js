import React from "react";
import "./CreateNote.css";

import NotefulContext from "../../NotefulContext";

export default class CreateNote extends React.Component {
  static contextType = NotefulContext;
  render() {
    return (
      <div className="createNoteForm">
        <form
          onSubmit={(e) => {
            this.context.createNote(e, this.props.history);
          }}
        >
          <input
            type="text"
            value={this.context.newNote.name}
            placeholder="Name"
            onChange={(e) =>
              this.context.setNewNoteName(e, this.context.newNote)
            }
          />
          <input
            type="text"
            value={this.context.newNote.content}
            placeholder="Content"
            onChange={(f) =>
              this.context.setNewNoteContent(f, this.context.newNote)
            }
          />
          <select
            value={this.context.newNote.folderId}
            onChange={(g) =>
              this.context.setNewNoteFolderId(g, this.context.newNote)
            }
          >
            <option value="None">Select</option>
            {this.context.folders.map((folder) => (
              <option key={folder.id} value={folder.id}>
                {folder.name}
              </option>
            ))}
          </select>
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}
