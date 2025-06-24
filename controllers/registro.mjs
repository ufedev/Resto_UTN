import { input } from "../utils.mjs"
import { Usuario } from "../models/Usuario.mjs"

export async function registro () {

    while (true) {
        const dni = await input("Ingrese su DNI: ")
        // Hacer consulta a base de datos
        const existe = await Usuario.FindOneBy("dni", dni)
        // Comprobar que no exista el usuario
        if (existe.result) {
            console.log("el usuario ya esta registado.")
            await input("")
            break
        }
        const nombre = await input("Ingrese su nombre: ")
        const apellido = await input("Ingrese su appellido")
        const tel = await input("Ingrese su telefono: ")
        const password = await input("Ingrese su contraseña ")
        const rePassword = await input("Repita su contraseña ")

        if (password !== rePassword) {
            console.log("Las contraseñas no coinciden")
            await input("")
            continue
        }




    }
}
