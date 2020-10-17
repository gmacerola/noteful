import React from "react";
import NotefulContext from "../../NotefulContext";
import FolderNotes from "../FolderNotes/FolderNotes";
import "./FolderPage.css";
import PropTypes from "prop-types";

export default class Folder extends React.Component {
  static contextType = NotefulContext;
  static defaultProps = {
    match: { params: { folderid: "0" } },
  };
  static propTypes = {
    match: PropTypes.object.isRequired,
  };
  render() {
    return (
      <div>
        <FolderNotes folderid={this.props.match.params.folderid} />
      </div>
    );
  }
}
