const express = require('express');
const app = express();
const https = require('https');

app.get('/', (request, response) =>{
    https.get('https://insult.mattbas.org/api/insult', resp => {
       resp.on('data', chunk => {
            response.send(`
                <http>
                    <head><title>Oh Snap</title></head>
                    <body style="background-color: #EAE5E4;">
                        <h1><span style=color:red;">O</span>h <span style=color:red;">S</span>nap</h1>
                        <p style="font-size: 24px; color:purple; font-weight:bold">
                            ${chunk.toString()}!
                        </p>
                    </body>
                </http>
            `);
       });
    });
});

app.listen(process.env.PORT || 3000);   