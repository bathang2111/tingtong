import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

Background.propTypes = {

};

function Background(props) {
    return (
        <div className="background">
            <div id="rect1"></div>
            <div id="rect2"></div>
            <div id="rect3"></div>
            <div id="rect4"></div>
        </div>
    );
}

export default Background;