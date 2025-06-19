import {Base} from "./Base.mjs"


export class Pedido extends Base{

    static tabla="pedidos"
    static columns=[
        "id",
        "mesa_id",
        "mozo_id",
        "direccion",
        "estado",
        "creado_el",
        "actualizado_el"
    ]

    constructor(mozo_id,mesa_id,direccion){
        super()
        this.mozo_id=mozo_id
        this.mesa_id=mesa_id
        this.direccion=direccion
    }


}
