import React from 'react';
import ReactDOMServer from 'react-dom/server'
import App from './clientapps/app';
import express from 'express';
import path from 'path'

const app = express();
const port = 3100;

const handler = (req,res,next)=>{
    res.status(200);
    const _appData = ReactDOMServer.renderToString(<App/>);
    const html = `
    <html>
     <head>
      <title>SSR Demo</title>
     </head>
     <body> 
      <div id='appRoot'>${_appData}</div>
      <script src='/client.bundle.js'></script>
     </body>
    </html>
    `;
    res.send(html);
    //next();
}
app.use(express.static(path.join(__dirname, '/public')));
app.get("/", handler);

app.listen(port, ()=>{
    console.log(`express server started at ${port}`)
});

