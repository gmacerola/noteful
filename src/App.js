import React from "react";
import { Route, Link } from "react-router-dom";
import NotefulContext from "./NotefulContext";
import "./App.css";
import NotesList from "./components/NotesList/NotesList";
import FolderPage from "./components/FolderPage/FolderPage";
import Note from "./components/Note/Note";
import FoldersSidebar from "./components/FoldersSidebar/FoldersSidebar";
import CreateNote from "./components/CreateNote/CreateNote";

export default class App2 extends React.Component {
  state = {
    notes: [],
    folders: [],
    newFolder: "",
    setNewFolder: (e) => this.setState({ newFolder: e.target.value }),
    createFolder: (e) => {
      e.preventDefault();
      const newFolder = {
        id: String(this.state.folders.length),
        name: this.state.newFolder,
      };
      fetch("http://localhost:9090/folders", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newFolder),
      })
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            folders: [...this.state.folders, newFolder],
            newFolder: "",
          });
        });
    },
    newNote: {
      name: "",
      content: "",
      folderId: "",
    },
    // setNewNote: (e, f, g) =>
    //   this.setState({
    //     newNote: {
    //       name: e.target.value,
    //       content: f.target.value,
    //       folderId: g.target.value
    //     }
    //   }),
    setNewNoteName: (e, oldNote) =>
      this.setState({ newNote: { ...oldNote, name: e.target.value } }),
    setNewNoteContent: (f, oldNote) =>
      this.setState({ newNote: { ...oldNote, content: f.target.value } }),
    setNewNoteFolderId: (g, oldNote) =>
      this.setState({ newNote: { ...oldNote, folderId: g.target.value } }),
    createNote: (e) => {
      e.preventDefault();
      const newNote = {
        name: this.state.newNote.name,
        content: this.state.newNote.content,
        folderId: this.state.newNote.folderId,
      };
      fetch("http://localhost:9090/notes", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newNote),
      })
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            notes: [...this.state.notes, newNote],
            newNote: [{ name: "" }, { content: "" }, { folderId: "" }],
          });
        });
    },
    error: null,
  };

  // deleteNote: (id) => {
  //   let newNotes = this.state.notes.filter(id !== e.target.value);
  //   this.setState({ notes: newNotes });
  // }

  componentDidMount() {
    fetch("http://localhost:9090/folders", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then((folders) => this.setState({ folders }))
      .catch((error) => this.setState({ error }));
    fetch("http://localhost:9090/notes", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then((notes) => this.setState({ notes }))
      .catch((error) => this.setState({ error }));
  }

  render() {
    return (
      <NotefulContext.Provider value={this.state}>
        <div className="App">
          <header className="Header">
            <Link to="/">
              <h1>Noteful</h1>
            </Link>
          </header>
          <main>
            <Route exact path="/" component={NotesList} />
            <Route path="/" component={FoldersSidebar} />
            <Route path="/folder/:folderid" component={FolderPage} />
            <Route path="/note/:noteid" component={Note} />
            <Route path="/createnote" component={CreateNote} />
          </main>
        </div>
      </NotefulContext.Provider>
    );
  }
}
