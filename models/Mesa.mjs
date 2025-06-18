import {Base} from "./Base.mjs"

export class Mesa extends Base{
    static tabla="mesas"
    static columns=["id","mozo_id","capacidad","descripcion_reserva","reservada","ocupada"]

    constructor(capacidad){
        super()
        this.capacidad=capacidad
    }

}