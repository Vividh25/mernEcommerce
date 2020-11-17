const express = require("express");
const env = require("dotenv");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//routes
const userRoutes = require("./routes/adminRoutes/user");
const adminRoutes = require("./routes/adminRoutes/adminRoute");
const categoryRoutes = require("./routes/categoryRoutes");

//environment variables
env.config();

//mongodb connection
mongoose
    .connect(
        // "mongodb+srv://admin:3QZHcHU9Y4dp7f9Y@cluster0.2z2cp.mongodb.net/ecommerce?retryWrites=true&w=majority",
        `mongodb+srv://admin:${process.env.MONGO_DB_PASSWORD}@cluster0.2z2cp.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        }
    )
    .then(() => {
        console.log("Database Connected");
    });

//Middlewares
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());
app.use("/api", userRoutes);
app.use("/api", adminRoutes);
app.use("/api", categoryRoutes);

//Listner
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
});
