const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://taha123:taha123@cluster1.zjerujj.mongodb.net/';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('MongoDB database connection established successfully');
});
