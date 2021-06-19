import React from 'react';
import PropTypes from 'prop-types';

ContainerCourse.propTypes = {

};

function ContainerCourse({ courses }) {
    return (
        <div>
            <Grid item container
                direction="row"
                justify="start"
                alignItems="center">
                {courses && courses.map(item => {
                    return <Grid row xs={6} md={3}>
                        <ItemCourse course={item}>
                        </ItemCourse>
                    </Grid>
                })}
            </Grid>
            
            
        </div>

    );
}

export default ContainerCourse;