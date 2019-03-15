import {BaseAction} from "../BaseAction";
import models from "../../models";

export class GetList extends BaseAction {
    test: any;

    public async authorize() {
        this.test = "hello";
        return true;
    }

    public async execute() {
        console.log("3");
        const users = await models.User.findAll();
        /*const test1 = await models.User.findAll();
        const test2 = await models.User.findAll();
        const test3 = await models.User.findAll();
        const test4 = await models.User.findAll();
        const test5 = await models.User.findAll();
        const test6 = await models.User.findAll();
        const test7 = await models.User.findAll();*/
        return this.response.send(users);
        return this.response.send({message: this.test});
    }
}
