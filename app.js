const express = require("express");
const passport = require("passport");
const authRoute = require("./routes/auth");
const deliveryRoute = require("./routes/DeliveryRoute");

const bodyParser = require("body-parser");

require("./db").connectToMongoDB(); // Connect to MongoDB
require("dotenv").config();
require("./authentication/auth");

const PORT = process.env.PORT;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", authRoute);
app.use(
  "/delivery",
  passport.authenticate("jwt", { session: false }),
  deliveryRoute
);

// Handle errors.
app.use(function (err, req, res, next) {
  console.log(err);
  res.status(err.status || 500);
  res.json({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
