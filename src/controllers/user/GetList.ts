import {BaseAction} from "../BaseAction";

export class GetList extends BaseAction {
    test: any;

    public async authorize() {
        this.test = "hello";
        return true;
    }

    public async execute() {
        console.log("3");
        return this.response.send({message: this.test});
    }
}
