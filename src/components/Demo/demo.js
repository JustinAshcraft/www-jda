import React, { useState } from 'react';

function Demo() {
    //const [count, setCount] = useState(0)
    const [cryptoList, getCrypto] = useState(0)

    function createNode(element) {
        return document.createElement(element); // Create the type of element you pass in the parameters
      }

    function getCryptoData() {
        fetch('https://api.coinmarketcap.com/v1/ticker/?limit=3')
        .then((resp) => resp.json())
        .then(function(data){
            const wanted=['ethereum','bitcoin']
            const filtered=data.filter(currency=>{
                //const cryptoData = wanted.includes(currency.id)

                return wanted.includes(currency.id).map(function(wanted){
                    let span = createNode('span');
                        span.innerHTML = `${wanted.name}`
                })
            });
            console.log();
        }).catch(err=>alert('error'));
    }

    return (
        <div>
            {/* <p>You clicked {count} times</p>        */}
            {/* <button onClick={() => setCount(count + 1)}>Click me</button> */}
            <button onClick={() => getCryptoData()}>Click from crypto</button>
            <span></span>
        </div>
    );
}

export default Demo