import {Sequelize} from "sequelize"

export const sequelize = new Sequelize({
    dialect:'postgres',
    host: 'localhost',
    port:5432,
    database:'yuriruiflix_development',
    username:'postgres',
    password:"yuriruiadmin",
    define:{
        underscored: true
    }
})