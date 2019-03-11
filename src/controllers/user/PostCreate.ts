import {BaseAction} from "../BaseAction";
import {check} from "express-validator/check";

export class PostCreate extends BaseAction {
    public async authorize() {
        return true;
    }

    public validate() {
        return [
            check("username").isEmail()
        ];
    }

    public async execute() {
        console.log("3");
        return this.response.send({message: "hey"});
    }
}
