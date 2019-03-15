import {Sequelize} from "sequelize";

export default (sequelize: Sequelize, dataTypes: any) => {
    const User = sequelize.define("User", {
        firstName: dataTypes.STRING,
    }, {});

    /*User.associate = (models) => {
        // associations can be defined here
    };*/

    return User;
};
