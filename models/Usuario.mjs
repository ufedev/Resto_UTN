import { Base } from './Base.mjs'
import bcrypt from 'bcrypt'

export class Usuario extends Base {
    static tabla = "usuarios"
    static columns = ["id", "nombre_completo", 'dni', "password", "tel", "rol_id", 'estado']

    constructor (nombre, apellido, dni, password, tel, rol_id) {
        super()
        this.nombre_completo = `${apellido}, ${nombre}`
        this.dni = dni
        this.password = password
        this.tel = tel
        this.rol_id = rol_id
        this.estado = 1
    }

    async HashPassword () {
        const rondas = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, rondas)
    }

    async ComparePassword (password) {

        return await bcrypt.compare(password, this.pasword)

    }

}

// lkasjdflkasjfaiweqoijt5468765498749834{}+|{+!@#{}|
