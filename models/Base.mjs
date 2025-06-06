import { conn } from '../config/db.mjs'
import { QueryTypes } from 'sequelize'

export class Base {

    static tabla = "BASE"
    static columns = []

    constructor () {

    }

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
        const consulta = `
        SELECT * FROM ${this.tabla} 
        WHERE ${column}="${value}" 
        LIMIT 1
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

        if (res.result.length === 0) {
            return {
                mal: true,
                error: 'No hay resultados'
            }
        }

        const resultado = res.result[0]
        const obj = new this()
        this.columns.forEach((col) => {
            obj[col] = resultado[col]
        })

        return {
            mal: false,
            result: obj
        }

    }
    static async FindAllBy (column, value) {
        const consulta = `
        SELECT * FROM ${this.tabla}
        WHERE ${column} = "${value}"
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

    async Insert () {
        const values = []
        const cols = []

        this.constructor.columns.forEach(col => {
            if (col === 'id' || col === 'creado_en' || col === 'actualizado_en') return

            values.push(this[col])
            cols.push(col)
        })

        const consulta = `
        INSERT INTO ${this.constructor.tabla} (${cols.join(',')})
        VALUES ("${values.join('","')}")
        `

        const res = await this.constructor.Query(consulta, {
            type: QueryTypes.INSERT
        })

        if (res.mal) {
            return {
                mal: true,
                error: res.err
            }
        }

        return {
            mal: false,
            fin: "Insertado correctamente"
        }

    }

    async


}


class Roles extends Base {
    static tabla = 'roles'
    static columns = ['id', 'nombre', 'descripcion', 'creado_en', 'actualizado_en']

    constructor (nombre, descripcion) {
        super()
        this.nombre = nombre
        this.descripcion = descripcion
    }

}



const nuevo_rol = new Roles('CAJERO', 'Cobrador sincronico')

const estado = await nuevo_rol.Insert()


console.log(estado)

const roles = await Roles.FindAll()

console.log(roles)