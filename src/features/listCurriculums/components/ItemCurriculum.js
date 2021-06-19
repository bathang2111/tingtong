import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';

ItemCurriculum.propTypes = {

};
function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

function ItemCurriculum({ link, name }) {
    return <ListItemLink href={link}>
        <ListItemText primary={name} />
    </ListItemLink>
}

export default ItemCurriculum;