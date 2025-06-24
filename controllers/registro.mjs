import { input } from "../utils.mjs"
import { Usuario } from "../models/Usuario.mjs"
import { Rol } from "../models/Rol.mjs"

export async function registro () {

    while (true) {
        const hay_usuarios = await Usuario.FindAll()
        if (hay_usuarios.result.length === 0) {
            const rol_admin = new Rol("Admin", "Admin")
            const result = await rol_admin.Save()
            if (result.mal) {
                console.log('El rol ya existe')
            }
        }

        const dni = await input("Ingrese su DNI: ")
        // Hacer consulta a base de datos
        const existe = await Usuario.FindOneBy("dni", dni)
        // Comprobar que no exista el usuario
        if (!existe.mal) {
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

        let rol = 2

        if (hay_usuarios.result.length === 0) {
            const rol_admin = await Rol.FindOneBy("nombre", "Admin")
            console.log(rol_admin)
            if (rol_admin.result) {
                rol = rol_admin.result.id
            }
        }

        const nuevo_usuario = new Usuario(
            nombre,
            apellido,
            dni,
            password,
            tel,
            rol
        )
        await nuevo_usuario.HashPassword()
        const resultado = await nuevo_usuario.Save()
        console.log(resultado)
        if (resultado.mal) {

            console.log("Ocurrio un error")
            await input("")
        } else {
            await input("Usuario registrado")
            break
        }

    }
}
