import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ItemCurriculum from './ItemCurriculum';

ContainerCurriculums.propTypes = {

};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

function ContainerCurriculums({ curriculums }) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                {curriculums && curriculums.map(item => {
                    return <ItemCurriculum link={ } name={item.title}></ItemCurriculum>
                })}
            </List>
        </div>
    );
}

export default ContainerCurriculums;