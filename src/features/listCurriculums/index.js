import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import ContainerCurriculums from './components/ContainerCurriculums';

index.propTypes = {

};

function index(props) {



    const getCurriculums  = () => {

    }

    return (
        <div>
            <Grid>
                <Grid item xs={12} md={3}>
                    <ContainerCurriculums></ContainerCurriculums>
                </Grid>

                <Grid item xs={12} md={9}>

                </Grid>
            </Grid>
        </div>
    );
}

export default index;