const mongoose = require("mongoose");

//our schema........

const myschema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

const schema = mongoose.model("schema", myschema);
module.exports = schema;
