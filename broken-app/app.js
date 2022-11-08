const express = require('express');
const axios = require('axios');
const app = express();
const ExpressError = require("./expressError");

app.use(express.json());

app.post('/', async function(req, res, next) {
  try {
    devInfo = [];
    for (dev of req.body.developers){
      let resp = await axios.get(`https://api.github.com/users/${dev}`)
      devInfo.push({"bio": resp.data.bio, "name": resp.data.name})
    }
    return res.json(devInfo)
  } catch {
    next();
  }
});



app.use(function(req, res, next) {
  return new ExpressError("Not Found", 404);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err.message,
  });
});

app.listen(3000, function(){
  console.log("server starting on port 3000")
});
