const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TaltApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server');

  db.collection('Uthyrningar').find().toArray().then((docs) => {
    console.log('Uthyrningar:');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch records.', err);
  });
  
  // db.close();
});
