// ./src/index.js

// importing the dependencies
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const fs = require('fs');
const util = require('util');
const log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});
const log_stdout = process.stdout;

console.log = function(d) { //
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};

// defining the Express app
const app = express();

// defining an array to work as the database (temporary solution)
const ads = [
  {title: 'Hello, world (again)!'}
];

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(express.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all ads
app.get('/', (req, res) => {
  console.log("Get request here");
  res.json({
      success: true,
      title: "Backend is running..."
  })
});

app.post('/', (req, res) => {
  const {cnt1, cnt2, row, index, title} = req.body;
  console.log('cnt1 ---->', cnt1);
  console.log('cnt2 ---->', cnt2);
  console.log('row ---->', row);
  console.log('index ---->', index);
  console.log('title ---->', title);
  res.json({
      success: true,
  });
});

// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001');
});