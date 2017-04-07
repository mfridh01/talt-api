const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TaltApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server');

  db.collection('Uthyrningar').findOneAndUpdate({
    _id: new ObjectID('58e80ac1daffcd9e1bf5c130')
  }, {
    $set: {
      slap: false
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
   
  // db.close();
});
