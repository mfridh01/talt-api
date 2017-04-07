const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TaltApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server');

  // Insert new doc into Users (name, age, location);
  //  db.collection('Users').insertOne({
  //  name: 'Mikael',
  //  age: 34,
  //  location: 'Sweden'
  // }, (err, result) => {
  //  if (err) {
  //    return console.log('Unable to insert user.', err);
  //  }
  //
  //  console.log(JSON.stringify(result.ops, undefined, 2));
  //  });
  
  db.close();
});
