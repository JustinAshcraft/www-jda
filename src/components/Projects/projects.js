import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
//import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import img_cg_rpenroll from '../../images/RPEnroll_1024x768.jpg';
import img_cg_buildingportfolios from '../../images/AdvisorSite_1024x768.jpg';
import img_cg_autoagreements from '../../images/AutoTrans_1024x1045.jpg';
import img_4wp_config from '../../images/4wp_configurator.png';
import img_shutterfly_unitedhealth from '../../images/Shutterfly_UnitedHealth.png';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 340,
        width: 340,
    },
    control: {
        padding: theme.spacing(2),
    },
    cardGrid: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    card: {
        height: '10',
        width: '10',
        display: 'flex',
        flexDirection: 'column',
        padding: '10'
    },
    cardMedia: {
        paddingTop: '76.25%', // 16:9
        //backgroundSize: 'auto'
    },
    cardContent: {
        flexGrow: 1,
    },
}));

//import ProjectsStyle from './projects.module.scss'

function Projects() {
    const classes = useStyles();
    return <section>
        <CssBaseline />
        <Container maxWidth="md" className={classes.cardGrid}>
        <h1>Projects</h1>
            <Card className={classes.card}>

                <CardMedia
                    className={classes.cardMedia}
                    image={img_4wp_config}
                    title="Image title"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Publicis Sapient - Polaris Inc, FourWheelParts.com
                                            </Typography>
                    <Typography>
                        Angular SPA to view and purchase 4 wheel parts for off-road enthusiasts. Product included 3D rendering of products along with agumented reality of products on 3D vehicle.                                           </Typography>
                </CardContent>
            </Card>
        </Container>

        <Container maxWidth="md" className={classes.cardGrid}>
            <Card className={classes.card}>

                <CardMedia
                    className={classes.cardMedia}
                    image={img_shutterfly_unitedhealth}
                    title="Image title"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Shutterfly - UnitedHealth Document Procurement
                                            </Typography>
                    <Typography>
                        This product was developed by Shutterfly Inc. in conjunction with their customer UnitedHealth to allow for the easy ordering, 
                        customization and management of product and services print materials                                            </Typography>
                </CardContent>
            </Card>
        </Container>

        <Container maxWidth="md" className={classes.cardGrid}>
            <Card className={classes.card}>

                <CardMedia
                    className={classes.cardMedia}
                    image={img_cg_rpenroll}
                    title="Image title"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Retirement Plan Enroll​ment Micro-sites
                                            </Typography>
                    <Typography>
                        This project helped aliviate millions of dollars the business spent creating custom printed retirement participant booklets.
                        The Angular single-page application queries a REST API and returns secific plan details. Using this data the application then
                        calls a back-end Adobe Experience Manager content repository and dynamically generates content specific to the customer.
                                            </Typography>
                </CardContent>
            </Card>
        </Container>

        <Container maxWidth="md" className={classes.cardGrid}>
            <Card className={classes.card}>

                <CardMedia
                    className={classes.cardMedia}
                    image={img_cg_buildingportfolios}
                    title="Image title"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Building Better Portfolios
                                            </Typography>
                    <Typography>
                        Angular 4+ single page application that compared index funds with American Funds
                    allowing Advisors to compare past performance. Specifically build for iPad and offline capabilities.
                                            </Typography>
                </CardContent>
            </Card>
        </Container>

        <Container maxWidth="md" className={classes.cardGrid}>
            <Card className={classes.card}>

                <CardMedia
                    className={classes.cardMedia}
                    image={img_cg_autoagreements}
                    title="Image title"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Transaction Auto Agreements
                                            </Typography>
                    <Typography>
                        Angular application to allowed shareholders to create automated purchase agreements at a scheduled time periods.
                                            </Typography>
                </CardContent>
            </Card>
        </Container>

    </section>
}

export default Projects