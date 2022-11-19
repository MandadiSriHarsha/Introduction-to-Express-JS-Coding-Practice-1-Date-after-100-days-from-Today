const express = require("express");
const addDays = require("date-fns/addDays");
const app = express();
app.listen(3000);
module.exports = app.get("/", (request, response) => {
  const newDate = addDays(new Date(), 100);
  const result = `${newDate.getDate()}/${
    newDate.getMonth() + 1
  }/${newDate.getFullYear()}`;
  response.send(result);
});
