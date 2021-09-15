const Schema = require('mongoose').Schema;

const userSchema = new Schema({
  name: String,
  phonenumber:String,
  email: {
    type : String,
    required: true,
    unique : true
  
  },
  password: String,
  noOfOrders: { type: Number, "default": 0 },
  password: { type: String, required: true, "default": "Helloworld123#"}
});

module.exports = userSchema;