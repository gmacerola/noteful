import React from "react";
import "./Main.css";

import Folders from "../Folders/Folders";
import Notes from "../Notes/Notes";

export default function Main(props) {
  return (
    <div>
      <aside>
        <Folders {...props} />
      </aside>
      <Notes {...props} />
    </div>
  );
}
