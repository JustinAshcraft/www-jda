import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 340,
    width: 640,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function Skills() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  return <section>

    <Container className="skills" maxWidth="md">
      <h1>Skills</h1>
      <Paper>
        <div>
          <i className="fab fa-html5 fa-w-12 fa-5x">
            <div>
              <Typography variant="subtitle2" color="inherit">
                HTML5
                  </Typography>
            </div>
          </i>
          <i className="fab fa-js fa-w-12 fa-5x"><div>
            <Typography variant="subtitle2" color="inherit">
              JavaScript
          </Typography>
          </div></i>
          <i className="fab fa-css3-alt fa-w-12 fa-5x">
            <div>
              <Typography variant="subtitle2" color="inherit">
                CSS3
                  </Typography>
            </div>
          </i>
        </div>
        <div>

          <i className="fab fa-angular fa-w-12 fa-5x">
            <div>
              <Typography variant="subtitle2" color="inherit">
                Angular
                  </Typography>
            </div>
          </i>
          <i className="fab fa-react fa-w-12 fa-5x"><div>
            <Typography variant="subtitle2" color="inherit">
              React
          </Typography>
          </div></i>
          <i className="fab fa-aws fa-w-12 fa-5x"><div>
            <Typography variant="subtitle2" color="inherit">
              AWS
          </Typography>
          </div></i>
        </div>
      </Paper>
    </Container>
    <Container maxWidth="md"><h1>Projects</h1>
      <Grid container className={classes.root} spacing={3}>
        <Grid item >
          <Grid container justify="center" spacing={spacing}>
            <Grid item>
              <Paper  >
                <h3>Retirement Plan Enroll​ment Micro-sites</h3>
                This project helped aliviate millions of dollars the business spent creating custom printed retirement participant booklets. 
                The Angular single-page application queries a REST API and returns secific plan details. Using this data the application then 
                calls a back-end Adobe Experience Manager content repository and dynamically generates content specific to the customer.<br />

                <i className="fab fa-angular fa-w-12 fa-2x">
                  <div>
                    <Typography variant="subtitle2" color="inherit">
                      Angular
                  </Typography>
                  </div>
                </i>
              </Paper>
              
            </Grid>
            <Grid item>
              <Paper><h3>Building Better Portfolios</h3>Angular 4+ single page application that compared index funds with American Funds allowing Advisors to compare past performance. Specifically build for iPad and offline capabilities.</Paper>
            </Grid>
            <Grid item>
              <Paper><h3>Transaction Auto Agreements</h3>Angular application to allowed shareholders to create automated purchase agreements at a scheduled time periods.</Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>

  </section>
}

Skills.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Skills