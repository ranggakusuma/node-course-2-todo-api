// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if (err) {
    console.log('Unable to connect to mongodb server')
  }
  console.log('connected to mongodb server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // })

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // })

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // })

  //#challange
  // db.collection('Users').deleteMany({name: 'Rangga'}).then((result) => {
  //   console.log(result);
  // })

  //#challange
  db.collection('Users').findOneAndDelete({_id: new ObjectID('5b437f4d493679152854f6cc')}).then((result) => {
    console.log(result);
  })

  // db.close()
})
