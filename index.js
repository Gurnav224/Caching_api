const express = require("express");
const dbConnect = require("./config/dbConnect");
const cacheRouter = require('./routes/cacheItem.routes');
const morgan = require('morgan')

const app = express();

dbConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));


app.get("/", (req, res) => {
  res.json({ message: "Caching API is running" });
});

app.use('/api', cacheRouter);



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
