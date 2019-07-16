import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';


import ProfileStyle from './profile.module.scss'

function Profile() {
    return <section>

        <Container>
                <div className={ProfileStyle.profilePic}></div>
                <h1>Justin Ashcraft</h1>
                <h3>Full-stack web developer</h3>
        </Container>

    </section>
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Profile