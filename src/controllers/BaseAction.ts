import {Request} from "express";
import {Response} from "express-serve-static-core";
import {validationResult} from "express-validator/check";

export class BaseAction {
    request: Request;
    response: Response;

    public initialize(request: Request, response: Response, next: any) {
        this.request = request;
        this.response = response;
        next();
    }

    public async authorize(): Promise<boolean> {
        return true;
    }

    public validate() {
        return [];
    }

    public async execute(): Promise<any> {
    }

    public async getResponse(request: Request, response: Response, next: any) {
        // update local vars
        this.request = request;

        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return this.response.status(422).json({ errors: errors.array() });
        }

        const isAuthorise = await this.authorize();

        if (!isAuthorise) {
            return this.response.status(401).send("Unauthorized");
        }

        return await this.execute();
    }
}
