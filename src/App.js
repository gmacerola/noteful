import React from "react";
import { Route, Link } from "react-router-dom";
import NotefulContext from "./NotefulContext";
import "./App.css";
import NotesList from "./components/NotesList/NotesList";
import FolderPage from "./components/FolderPage/FolderPage";
import Note from "./components/Note/Note";
import FoldersSidebar from "./components/FoldersSidebar/FoldersSidebar";
import CreateNote from "./components/CreateNote/CreateNote";

import ErrorPage from "./ErrorBoundary";
import AddFolder from "./components/AddFolder/AddFolder";

export default class App2 extends React.Component {
  state = {
    notes: [],
    folders: [],
    newFolder: "",
    setNewFolder: (e) => this.setState({ newFolder: e.target.value }),
    addFolder: (e) => {
      e.preventDefault();
      if (this.state.newFolder === "") {
        this.state.setError("💥 Folder Name Required! 💥");
      } else {
        this.state.setError(null);
        const newFolder = {
          id: String(this.state.folders.length),
          name: this.state.newFolder,
        };
        fetch("http://localhost:9090/folders", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(newFolder),
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error("Something went wrong");
            }
          })
          // .then((res) => res.json())
          .then((res) => {
            this.setState({
              folders: [...this.state.folders, newFolder],
              newFolder: "",
            });
          })
          .catch((error) => {
            this.state.setError(error);
          });
      }
    },
    newNote: {
      name: "",
      content: "",
      folderId: "",
      modified: "",
    },
    setNewNoteName: (e, oldNote) =>
      this.setState({ newNote: { ...oldNote, name: e.target.value } }),
    setNewNoteContent: (f, oldNote) =>
      this.setState({ newNote: { ...oldNote, content: f.target.value } }),
    setNewNoteFolderId: (g, oldNote) =>
      this.setState({ newNote: { ...oldNote, folderId: g.target.value } }),
    createNote: (e, history) => {
      e.preventDefault();
      if (
        this.state.newNote.name === "" ||
        this.state.newNote.content === "" ||
        this.state.newNote.folderId === ""
      ) {
        this.state.setError("💥 Name, Content, Folder Required! 💥");
      } else {
        this.state.setError(null);
        const newNote = {
          name: this.state.newNote.name,
          content: this.state.newNote.content,
          folderId: this.state.newNote.folderId,
          modified: new Date(),
        };
        fetch("http://localhost:9090/notes", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(newNote),
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error("Something went wrong");
            }
          })
          .then((res) => {
            this.setState(
              {
                notes: [...this.state.notes, res],
                newNote: {
                  name: "",
                  content: "",
                  folderId: "",
                  modified: "",
                },
              },
              () => history.push("/")
            );
          })
          .catch((error) => {
            this.state.setError(error);
          });
      }
    },
    error: null,
    setError: (error) => this.setState({ error }),
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
            <ErrorPage>
              {this.state.error && (
                <p className="error-message">
                  {typeof this.state.error === "string"
                    ? this.state.error
                    : "Something went wrong"}
                </p>
              )}
              <Route exact path="/" component={NotesList} />
              <Route path="/" component={FoldersSidebar} />
              <Route path="/folder/:folderid" component={FolderPage} />
              <Route path="/note/:noteid" component={Note} />
              <Route path="/createnote" component={CreateNote} />
              <Route path="/addfolder" component={AddFolder} />
            </ErrorPage>
          </main>
        </div>
      </NotefulContext.Provider>
    );
  }
}
