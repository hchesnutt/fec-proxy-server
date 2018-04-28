const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors')

const app = express();
const PORT = process.env.port || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/:id', express.static((path.join(__dirname, '../client/dist'))));
app.use((req, res, next) => {
  console.log(`Serving ${req.method} request to ${req.url}`);
  next();
});

app.listen(PORT, () => console.log(`Proxy server listening at http://host:${PORT}`));
