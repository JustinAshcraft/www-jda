import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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
  }
}));

function Skills() {
  const [spacing] = React.useState(2);
  const classes = useStyles();

  return <section>

    <Container className="skills" maxWidth="md">
      <h1>Skills</h1>

      <Paper>
        <Grid container className={classes.root} spacing={3}>
          <Grid container justify="center" spacing={spacing}>
            <Grid item><i className="fab fa-html5 fa-w-12 fa-5x">
              <div>
                <Typography variant="subtitle2" color="inherit">
                  HTML5
                  </Typography>
              </div>
            </i></Grid>
            <Grid item><i className="fab fa-js fa-w-12 fa-5x"><div>
              <Typography variant="subtitle2" color="inherit">
                JavaScript
          </Typography>
            </div></i></Grid>
            <Grid item><i className="fab fa-css3-alt fa-w-12 fa-5x">
              <div>
                <Typography variant="subtitle2" color="inherit">
                  CSS3
                  </Typography>
              </div>
            </i></Grid>
            <Grid item><i className="fab fa-angular fa-w-12 fa-5x">
              <div>
                <Typography variant="subtitle2" color="inherit">
                  Angular
                  </Typography>
              </div>
            </i></Grid>
            <Grid item><i className="fab fa-react fa-w-12 fa-5x">
              <div>
                <Typography variant="subtitle2" color="inherit">
                  React
                  </Typography>
              </div>
            </i></Grid>
            <Grid item><i className="fab fa-aws fa-w-12 fa-5x">
              <div>
                <Typography variant="subtitle2" color="inherit">
                  AWS
                  </Typography>
              </div>
            </i></Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>

  </section>
}

export default Skills