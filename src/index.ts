import dotenv from "dotenv";
import express from "express";
import path from "path";

// initialize configuration
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

// Configure Express to use EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// define a route handler for the default home page
app.get("/", (req, res) => {
    // res.send("Hello worlddd!");
    res.render("index");
});

// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
