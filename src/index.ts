import dotenv from "dotenv";
import express, {Request} from "express";
import path from "path";
import * as bodyParser from "body-parser";
import {appRoutes} from "./route";
import {check, validationResult} from "express-validator/check";
import {Response} from "express-serve-static-core";

// initialize configuration
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Configure Express to use EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// define a route handler for the default home page
app.get("/", (req, res) => {
    // res.send("Hello worlddd!");
    res.render("index");
});

function vtest(req, res) {
    return [
        check("username").isEmail().withMessage("email id not valid")
    ];
}

app.post("/vtest", vtest, (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    // res.send("Hello worlddd!");
    res.send({message: "hey"});
});

appRoutes.forEach((route) => {
    const action = new route.action();
    app[route.method](
        route.path,
        (request: Request, response: Response, next: any) => {
            action.initialize(request, response, next);
        },
        action.validate(),
        async (request: Request, response: Response, next: any) => {
            return await action.getResponse(request, response, next);
        }
    );
});

// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
