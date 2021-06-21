import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

ContainerPackage.propTypes = {
    
};

function ContainerPackage({packages, onSelect}) {
    return (
        <div>
            {packages && packages.map((item, index) => {
                return <Grid xs={12} md={3}>
                    
                </Grid>
            })}
        </div>
    );
}

export default ContainerPackage;