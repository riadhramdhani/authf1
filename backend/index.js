const express = require("express");
const connectdb = require("./config/connectiondb");
const router = require("./Routes/authRoutes");
require("dotenv").config();

const app = express();
const port = 5000;

//conect database
connectdb();

// routes
app.use(express.json());
app.use("/api/auth", require("./Routes/authRoutes"));

app.listen(port, () => console.log(`app running on port ${port}`));
