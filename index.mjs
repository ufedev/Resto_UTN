import { input } from "./utils.mjs"


while (true) {
    console.clear()
    console.log(`
    Seleccione una opción:
        1- Iniciar Sesión
        2- Registrarse
        3- Salir

    `)
    const opcion = await input(":")

    switch (opcion) {
        case "1":
            console.clear()
            console.log("Opcion1")
            await input("")
            break
        case "2":
            console.clear()
            console.log("Opcion2")
            await input("")
            break
        case "3":
            console.clear()
            console.log("Ha salido del programa")
            process.exit(0)
        default:
            console.log("La opción seleccionada no existe")
            await input("")
            break

    }

}









