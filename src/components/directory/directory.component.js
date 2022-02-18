import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.css";

const Directory = (props) => (
  <div className="directory-menu">
    {props.sections.map(({ id, ...state }) => (
      <MenuItem key={id} {...state} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
