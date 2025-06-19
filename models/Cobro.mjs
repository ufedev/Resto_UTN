import {Base} from "./Base.mjs"


export class Cobro extends Base{
    static tabla="cobros"
    static columns=[
        "id",
        "pedido_id",
        "metodo",
        "monto",
        "creado_el"
    ]

    constructor(pedido_id,metodo){
        super()
        this.pedido_id=pedido_id
        this.metodo=metodo
    }
}

