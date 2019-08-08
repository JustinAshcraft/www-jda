import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


class CryptoTicker extends React.Component {
    state = {
        isLoading: true,
        crypto: [],
        error: null
    };

    useStyles = makeStyles(theme => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          height: 140,
          width: 100,
          padding: 15
        },
        control: {
          padding: theme.spacing(2),
        }
    }));

    fetchCryptoPrices() {
        fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=3`)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    crypto: data,
                    isLoading: false,
                })
            )
            .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
        this.fetchCryptoPrices();
    }

    render() {
        
        const { isLoading, crypto, error } = this.state;
        const classes = this.useStyles;
        return (
            <Container maxWidth="md">
                <h1>Crypto Ticker</h1>
                {error ? <p>{error.message}</p> : null}
                <Grid container className={classes.root} spacing={2} padding={10}>
                    <Grid item>
                    {!isLoading ? (
                        crypto.map(crypto => {
                            const { id, name, symbol, price_usd, percent_change_24h } = crypto;
                            return (
                                <Paper key={id} className={classes.paper}>
                                    <p>{name} ({symbol})</p>
                                    <p>Current price: {price_usd}</p>
                                    <p>Percent change 24hrs: {percent_change_24h}</p>
                                    <hr />
                                </Paper>
                            );
                        })
                    ) : (
                            <h3>Loading...</h3>
                        )}
                    </Grid>
                </Grid>
            </Container>
        );
    }

}

export default CryptoTicker
