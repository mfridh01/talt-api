const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TaltApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server');

  db.collection('Uthyrningar').findOneAndDelete({slap: false}).then((result) => {
    console.log(result);
  });
   
  // db.close();
});
