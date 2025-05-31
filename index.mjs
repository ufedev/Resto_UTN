import fs from 'fs' // filesystem

const archvios = fs.readdirSync("./migraciones")

archvios.forEach((ar) => {
    if (ar.startsWith('r')) {
        console.log(ar)
    }
})

