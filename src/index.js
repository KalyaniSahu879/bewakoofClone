const express = require("express");
const connect = require("./configs/db");
const menController = require("./controllers/men.controller");
const womenController = require("./controllers/women.controller");
// const accessoriesController = require("./controllers/accessories.controller");
const { register, login, newToken } = require("./controllers/auth.controller");
const productController = require("./controllers/product.controller");
const userController = require("./controllers/user.controller");
const passport = require("./configs/google-oauth");
const addresscontroler = require("./controllers/address.controller");
const mencontroller = require("./controllers/men.controller");
const app = express();

app.use(express.json());
// app.use("/men", menController);
// app.use("/women", womenController);

app.use("/register", register);

app.use("/login", login);
app.use("/users", userController);
app.use("/product", productController);
app.use("/address", addresscontroler);
app.use("/men", menController);
app.use("/women", womenController);
// app.use("/accessories", accessoriescontroller);
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
app.listen(2345, async () => {
  try {
    await connect();
    console.log("listening on port 2345");
  } catch (err) {
    console.log(err.message);
  }
});
