const express = require("express");
const connect = require("./configs/db");
// const menController = require("./controllers/men.controller");
// const womenController = require("./controllers/women.controller");
// const accessoriesController = require("./controllers/accessories.controller");
const register = require("./controllers/auth.controller");
const userController = require("./controllers/user.controller");
const app = express();
app.use(express.json())
// app.use("/men", menController);
// app.use("/women", womenController);
// app.use("/accessories", accessoriesController);
app.use("/register", register);
// app.use("/login", login);
app.use("/user", userController);
app.listen(2345, async () => {
    try {
        await connect();
        console.log("listening on port 2345")
    }
    catch (err) {
        console.log(err.message);
    }
})