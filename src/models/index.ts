import * as fs from "fs";
import * as path from "path";
import {Sequelize} from "sequelize";
import config from "../config/config";
console.log(config);
const basename = path.basename(__filename);

const db: any = {};
const sequelize = new Sequelize({
    database: config.development.database,
    username: config.development.username,
    password: config.development.password,
    dialect: "mysql"
});

fs
    .readdirSync(__dirname)
    .filter((file) => {
        return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
    })
    .forEach((file) => {
        const model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
