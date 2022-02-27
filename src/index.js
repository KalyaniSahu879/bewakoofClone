const express = require("express");
const connect = require("./configs/db");
const menController = require("./controllers/men.controller");
const womenController = require("./controllers/women.controller");
const accessoriesController = require("./controllers/accessoriescurdcontroller");
const {
  register,
  login,
  newToken,
  login_mobile,
} = require("./controllers/auth.controller");
const productController = require("./controllers/product.controller");
const userController = require("./controllers/user.controller");
const passport = require("./configs/google-oauth");
const addresscontroler = require("./controllers/address.controller");
const mencontroller = require("./controllers/men.controller");
const cors = require("cors");
const app = express();
app.use(cors());
let ejs = require("ejs");
const allproductscontroller = require("./controllers/allproductcontroller.js");

app.use(express.json());
// app.use("/men", menController);
// app.use("/women", womenController);

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/register", register);
app.post("/login", login_mobile);
app.post("/login/password", login);
app.use("/users", userController);
app.use("/product", productController);

app.use("/localhost:2345/address", addresscontroler);
app.use("/men", menController);
app.use("/women", womenController);
app.use("/all_prdt_byid", allproductscontroller);

app.use("/accessories", accessoriesController);
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/google/failure",
  }),
  (req, res) => {
    const { user } = req;
    const token = newToken(user);

    return res.send({ user, token });
  }
);

app.get("", async (req, res) => {
  try {
    return res.send("Your server is live on Heroku");
  } catch (err) {
    return res.send(err.message);
  }
});

const port = process.env.PORT || 5500;

app.listen(port, async () => {
  try {
    await connect();
    console.log("listening on port 2345");
  } catch (err) {
    console.log(err.message);
  }
});
