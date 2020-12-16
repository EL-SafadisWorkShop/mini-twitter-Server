const express = require("express");
const cors = require("cors");
const users = require("./routes/users");
const posts = require("./routes/posts");
const connect = require("./config/DB");
const dotenv = require("dotenv");
const PORT = process.env.PORT || "4000";
dotenv.config({ path: "./config/config.env" });
connect();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/users", users);
app.use("/api/posts", posts);

app.listen(PORT, () => {
  console.log(`server successfully running on PORT ${PORT}`);
});
