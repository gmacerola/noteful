import React from "react";
import { NavLink, Link } from "react-router-dom";
import NotefulContext from "../../NotefulContext";
import CreateFolder from "../CreateFolder/CreateFolder";
import "./FoldersSidebar.css";

export default class FoldersSidebar extends React.Component {
  static contextType = NotefulContext;
  render() {
    return (
      <section className="folders">
        <p>Folders</p>
        <ul className="FolderList">
          {this.context.folders.map((folder) => (
            <li key={folder.id}>
              <NavLink to={{ pathname: `/folder/${folder.id}` }}>
                <button>{folder.name}</button>
              </NavLink>
            </li>
          ))}

          <Link to="/">
            <button>Home</button>
          </Link>
        </ul>
        <CreateFolder />
      </section>
    );
  }
}
