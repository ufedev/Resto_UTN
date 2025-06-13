import { Base } from './Base.mjs'

/**
 * @example
 * 
 * const rol = new Rol('none',"none")
 * 
 */
export class Rol extends Base {
    static tabla = "roles"
    static columns = [
        "id", "nombre", 'descripcion', "creado_en", "actualizado_en"
    ]

    constructor (nombre, descripcion) { // palabra reservada
        super()
        this.nombre = nombre
        this.descripcion = descripcion

    }

}