const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const books = require('./routes/api/books');

const app = express();

//Bodyparser middleware
app.use(bodyParser.json());

//db config
const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose
 .connect(db)
 .then(() => console.log("mongoDB CONNECTE NOW!!"))
 .catch(err => console.log(err));

//use ports
app.use('/api/books', books);
 // app.use('/api/books', require('./routes/api/books'));

//Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
// set static folder
app.use(express.static('client/build'));
app.get('*', (req, res) => {
 res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
});
}

 //variable holding port process.env.port to deploy to heroku easier
const port = process.env.PORT || 5000;
 
 //server listening
app.listen(port, () => console.log(`SERVER LISTENING ON ${port}`));