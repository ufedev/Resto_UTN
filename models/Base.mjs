import { conn } from '../config/db.mjs'
import { QueryTypes } from 'sequelize'

export class Base {

    static tabla = "BASE"
    static columns = []

    static async Query (stmt, options = {}) {
        try {
            const result = await conn.query(stmt, options)
            return {
                mal: false,
                result: result
            }
        } catch (err) {
            return {
                mal: true,
                err: err
            }
        }
    }

    static async FindOneById (id) {
        const consulta = `
        SELECT * FROM ${this.tabla} WHERE id=${id} LIMIT 1
        `
        const res = await this.Query(consulta, {
            type: QueryTypes.SELECT
        })

        if (res.mal) {
            return "Hubo un error"
        }

        const objetoSolo = res.result[0]
        const obj = new this()
        this.columns.forEach((col) => {
            obj[col] = objetoSolo[col]
        })

        return obj
    }

}


class Roles extends Base {
    static tabla = "roles"
    static columns = ["id", 'nombre', 'descripcion', 'creado_en', 'actualizado_en']
}



// const res = await Roles.FindOneById(3)
// console.log(res)




