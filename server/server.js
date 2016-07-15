const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '../client/public'));

// app.get('/', function(req, res) {
//   res.status(200).json({ message: 'Hello Vivacious Salt!' });
//   res.send
// })

app.listen(port, function() {
  console.log('Listening on port', port);
})