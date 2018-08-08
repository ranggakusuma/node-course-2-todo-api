const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

// Todo.remove({}).then((result) => {
//   console.log(result);
// })

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

Todo.findOneAndRemove({_id: '5b5a217387b1363da4f2fd9b'}).then((todo) => {
  
})

Todo.findByIdAndRemove('5b5a217387b1363da4f2fd9b').then((todo) => {
  console.log(todo);
})
