import {Base} from "./Base.mjs"

export class RegistroPedido extends Base{
    static tabla="registro_pedido"
    static columns=[
        "id",
        "pedido_id",
        "menu_id",
        "creado_el"
    ]

    constructor(pedido_id,menu_id){
        super()
        this.pedido_id=pedido_id
        this.menu_id=menu_id

    }
}