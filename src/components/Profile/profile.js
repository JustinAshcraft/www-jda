import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';


import ProfileStyle from './profile.module.scss'

function Profile() {
    return <section>

        <Container maxWidth="md">
            <div className={ProfileStyle.profilePic}></div>
            <h1>Justin Ashcraft</h1>
            <h3>Full-stack Web Developer</h3>
            <p>
                I'm a technologist with ​over 15 years experience ​planning, designing and developing insurance and
                financial business solutions. I work with business partners and stakeholders to develop products and
                services to help people consume and digest complex data. I've traveled to India and trained dozens
                of programmers, learned to leverage new and emerging technologies and enjoy collaborating together
                to build solutions that are easy to understand and use.
            </p>
            <br />
        </Container>

    </section>
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Profile