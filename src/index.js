const express = require("express");
const sequelize = require("./configs/DB");
require("./models");
const app = express();
require("dotenv").config();

const UserRoutes = require("./routes/UserRoutes");
const PostRoutes = require("./routes/PostRoutes");

const PORT = process.env.PORT;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/users", UserRoutes);
app.use("/posts", PostRoutes);

sequelize.sync().then(() => {
  console.log("database connection and synsced");
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});
