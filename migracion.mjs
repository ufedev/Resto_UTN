import fs from 'fs' // filesystem
import { Sequelize } from 'sequelize' // para manejar la base de datos
const conn = new Sequelize(
    "resto_utn",
    'root',
    'aezakmi',
    {
        dialect: 'mysql',
        logging: true
    }
)

const archvios = fs.readdirSync("./migraciones")

archvios.forEach((ar) => {
    if (ar.endsWith('.sql')) {

        fs.readFile(`./migraciones/${ar}`, async (er, data) => {
            if (er) return
            await conn.query(data.toString())
        })

        // await conn.query(content)


    }
})

