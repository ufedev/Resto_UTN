import { Sequelize } from "sequelize"

export const conn = new Sequelize(
    "resto_utn",
    "root",
    "123456",
    {
        dialect: "mysql",
        logging: false
    }
)




