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
            return {
                mal: true,
                erro: 'Hubo un error en la query'
            }
        }

        if (res.result.length === 0) {
            return {
                mal: true,
                err: 'No hay resultados'
            }
        }

        const objetoSolo = res.result[0]
        const obj = new this()
        this.columns.forEach((col) => {
            obj[col] = objetoSolo[col]
        })

        return {
            mal: false,
            result: obj
        }
    }

    static async FindOneBy (column, value) {

    }
    static async FindAllBy (column, value) {

    }
    static async FindAll () {
        const consulta = `
        SELECT * FROM ${this.tabla}
        `
        const res = await this.Query(consulta, {
            type: QueryTypes.SELECT
        })

        if (res.mal) {
            return {
                mal: true,
                error: "Hubo un error en la query"
            }
        }

        const resultado_final = res.result.map((item) => {
            const obj = new this()

            this.columns.forEach((col) => {
                obj[col] = item[col]
            })

            return obj
        })

        return {
            mal: false,
            result: resultado_final
        }
    }



}






