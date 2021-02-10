const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {MongoClient.connect('mongodb+srv://Chicago01:Chicago2@cluster0.5acga.mongodb.net/shop?retryWrites=true&w=majority')
  .then(client => {
    console.log('Connected!');
    _db = client.db();//you can pass a parameter in client.db to connect to different db
    callback();
  })
  .catch(err => {
    console.log(err);
    throw (err);
  });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;