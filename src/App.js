import React from "react";
import { Route, Link } from "react-router-dom";
import NotefulContext from "./NotefulContext";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import FolderPage from "./components/FolderPage/FolderPage";
import NotePage from "./components/NotePage/NotePage";

export default class App extends React.Component {
  state = {
    notes: [],
    folders: [],
    FolderContent: [],
    // deleteNote: (id) => {
    //   let newNotes = this.state.notes.filter(id !== e.target.value);
    //   this.setState({ notes: newNotes });
    // },
    error: null,
  };

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
        <div className="App2">
          <header className="Header">
            <Link to="/">
              <h1>Noteful</h1>
            </Link>
          </header>
          <main>
            <Route exact path="/" component={HomePage} />
            <Route path="/folder/:folderid" component={FolderPage} />
            <Route path="/note/:noteid" component={NotePage} />
          </main>
        </div>
      </NotefulContext.Provider>
    );
  }
}

/**
 * index -> import App -> render to the DOM
 * App -> manage state -> render based on routes -> pass down props
 * Folders -> list out folders
 * Notes -> list out notes (all or by folder)
 * Note -> details of a single Note
 * CreateFolder -> form for creating new folders
 * CreateNote -> form for creating new notes
 */
