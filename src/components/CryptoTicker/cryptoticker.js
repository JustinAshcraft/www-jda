import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = {
    root: {
        flexGrow: 1,
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 20
    },
    paper: {
        height: 175,
        width: 175,
        padding: 5
    },
    h2: {
        textAlign: 'center',
        fontSize: 30,
        margin: 1
    },
    name: {
        fontSize: 12,
        paddingLeft: 2
    },
    price: {
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center'
    },
    change: {
        textAlign: 'center'
    }
}

class CryptoTicker extends React.Component {
    state = {
        isLoading: true,
        crypto: [],
        error: null
    };

    fetchCryptoPrices() {
        fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`)
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
        //const { textStyle, h1, containerStyle, paper } = styles;
        const { isLoading, crypto, error } = this.state;
        return (
            <Container maxWidth="md" style={styles.root} spacing={2}>
                
                <h1 align='center' style={styles.textStyle}>Cryptocurrencies</h1>
                <h3>Top 10 by Market Cap.</h3>
                {error ? <p>{error.message}</p> : null}

                <Grid container justify="center" spacing={2}>
                    {!isLoading ? (
                        crypto.map(crypto => {
                            const { id, name, symbol, price_usd, percent_change_24h } = crypto;
                            return (

                                <Grid key={id} item >
                                    <Paper style={styles.paper}>
                                        <Typography variant="h4" color="inherit">{symbol}</Typography>
                                        <Typography style={styles.name} variant="subtitle1" color="inherit">{name}</Typography>
                                        <Typography style={styles.price} variant="h6" color="inherit">$ {price_usd}</Typography>
                                        <Typography style={styles.change} variant="h4" color="inherit">{percent_change_24h} %</Typography>
                                    </Paper>
                                </Grid>
                            );
                        })
                    ) : (
                            <h3>Loading...</h3>
                        )}
                </Grid>
            </Container>
        );
    }

}

export default CryptoTicker
