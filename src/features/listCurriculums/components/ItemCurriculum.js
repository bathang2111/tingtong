import React from "react";
import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useHistory } from "react-router-dom";

ItemCurriculum.propTypes = {};
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function ItemCurriculum({ link, name }) {
  const history = useHistory();
  return (
    <ListItem button onClick={() => history.replace(link)}>
      <ListItemText primary={name} />
    </ListItem>
  );
}

export default ItemCurriculum;
