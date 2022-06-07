const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const MongoConnect = (callback) => {

  MongoClient
  .connect('mongodb+srv://ram:EKqXIWAN0mCtjEG3@cluster0.hijce.mongodb.net/?retryWrites=true&w=majority')
  .then(client => {
    console.log('Connected!');
    _db = client.db();
    callback();
  })
  .catch(err => {
    console.log(err);
    throw err;
  });

};

const getDb = () => {
  if(_db) {
    return _db;
  } 
  throw 'No Database Found!';
};


exports.MongoConnect = MongoConnect;
exports.getDb = getDb;
