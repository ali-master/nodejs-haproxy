const express = require('express');
const os = require("os");

const { PORT } = process.env;
const hostname = os.hostname();

const app = express();

let visits = 0;
app.get('/', (req, res) => {
    res.send(`
<html>
    <body>
        <h1>Nodejs Container: ${hostname}</h1>
        <p>Total container visits: ${visits}</p>
    </body>
</html>`);
    visits += 1;
});

app.listen(PORT, () => {
    console.log(`Server running at http://${hostname}:${PORT}`);
});
