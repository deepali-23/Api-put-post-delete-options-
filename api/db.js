const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://deeps:deeps@cluster0.wyqhk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
  )
  .then(() => console.log("connection successful "))
  .catch((err) => console.log(err));
