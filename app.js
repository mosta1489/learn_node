const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const bodyParserMD = bodyParser();

const about = require("./about");
app.use("/about", about);

// app.use(
//   (req, res, next) => {
//     console.log("middleware 1");
//     next();
//   },
//   (req, res, next) => {
//     console.log("middleware 2");
//   }
// );

// app.use((req, res, next) => {
//   switch (req.url) {
//     case "/":
//       res.send("home page");
//       break;
//     case "/about":
//       res.send("about page");
//       break;
//     default:
//       res.send("error 404 not found");
//   }
// });

app.get("/", (req, res, next) => {
  res.send("this is main page");
});

app.post("/", bodyParserMD, (req, res, next) => {
  data = req.body;
  data["new"] = "new data from server";
  console.log(data);
  res.json(data);
});

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
