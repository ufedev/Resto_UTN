import { Sequelize } from "sequelize"

export const conn = new Sequelize(
    "resto_utn",
    "root",
    "aezakmi",
    {
        dialect: "mysql",
        logging: false
    }
)




