import React from "react";
import { NavLink } from "react-router-dom";
import "./Folders.css";

export default function Folders(props) {
  return (
    <section className="folders">
      <p>Folders</p>
      <ul className="FolderList">
        {props.folders.map((folder) => (
          <li key={folder.id}>
            <NavLink to={{ pathname: `/folder/${folder.id}` }}>
              {folder.name}
            </NavLink>
          </li>
        ))}
        <li>
          {console.log(props.history.goBack)}
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
      </ul>
    </section>
  );
}
