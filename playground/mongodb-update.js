// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if (err) {
    console.log('Unable to connect to mongodb server')
  }
  console.log('connected to mongodb server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b45118f7ddd06411473e0b4')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b40bc394a2cf110f4d3de2a')
  }, {
    $set: {
      name: 'Rangga'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })

  // db.close()
})
