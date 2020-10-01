import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import STORE from "./dummy-store";

import Folders from "./components/Folders/Folders";
import Notes from "./components/Notes/Notes";
import Main from "./components/Main/Main";

class App extends Component {
  state = {
    ...STORE,
    error: null,
  };

  render() {
    return (
      <div className="App">
        <header className="Header">
          <Link to="/">
            <h1>Noteful</h1>
          </Link>
        </header>

        <main className="content">
          <Route
            exact
            path="/"
            render={(rprops) => (
              <Main
                {...rprops}
                folders={this.state.folders}
                notes={this.state.notes}
              />
            )}
          />
          <Route
            path="/folder/:folderid"
            render={(rprops) => (
              <div>
                <Folders {...rprops} folders={this.state.folders} />
                <Notes
                  {...rprops}
                  notes={
                    rprops.match.params.folderid
                      ? this.state.notes.filter(
                          (n) => n.folderId === rprops.match.params.folderid
                        )
                      : this.state.notes
                  }
                />
              </div>
            )}
          />
          <Route
            path="note/:noteid"
            render={(rprops) => (
              <div>
                <Folders {...rprops} folders={this.state.folders} />
                <Notes
                  {...rprops}
                  notes={
                    rprops.match.params.noteid
                      ? this.state.notes.filter(
                          (n) => n.noteid === rprops.match.params.noteid
                        )
                      : this.state.notes
                  }
                />
              </div>
            )}
          />
        </main>
      </div>
    );
  }
}

export default App;

/**
 * index -> import App -> render to the DOM
 * App -> manage state -> render based on routes -> pass down props
 * Folders -> list out folders
 * Notes -> list out notes (all or by folder)
 * Note -> details of a single Note
 * CreateFolder -> form for creating new folders
 * CreateNote -> form for creating new notes
 */

/*<Route
            path="/folder/:folderid"*/
