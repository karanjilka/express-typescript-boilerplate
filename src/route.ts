import {GetList} from "./controllers/user/GetList";
import {PostCreate} from "./controllers/user/PostCreate";

export interface IAppRoutes {
    action: any;
    method: string;
    path: string;
}

export const appRoutes: IAppRoutes[] = [
    {method: "get", path: "/users", action: GetList},
    {method: "post", path: "/users", action: PostCreate},
];
