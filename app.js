const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
//const users = require('./routes/users')
//const posts = require('./routes/posts')
const PORT = process.env.PORT || "4000";

const app = express();
app.use(cors("/"));
//app.use('/api/users', users)
//app.use('/api/posts', posts)

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`server successfully running on PORT ${PORT}`);
});

/*
 */
