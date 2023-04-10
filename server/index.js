const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { PORT } = process.env;

const hobbiesRoutes = require("./routes/hobbiesRoutes");
const groupsRoutes = require("./routes/groupsRoutes");
const userHobbiesRoutes = require("./routes/userHobbiesRoutes");
const userGroupsRoutes = require("./routes/userGroupsRoutes");

// using cors and json middleware
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

// generic get

app.use("/api/hobbies", hobbiesRoutes);
app.use("/api/user_hobbies/", userHobbiesRoutes);
app.use("/api/groups", groupsRoutes);
app.use("/api/user_groups", userGroupsRoutes);

// listening
app.listen(PORT || 8000, () => {
  console.log(`are YOU listening on port ${PORT}?`);
});
