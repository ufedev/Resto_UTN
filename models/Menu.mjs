import {Base} from "./Base.mjs"

export class Menu extends Base{
    static tabla="menues"
    static columns=["id","menu","descripcion","precio","descuento","estado","creado_el","actualizado_el"]


    constuctor(menu,descripcion,precio){
        super()
        this.menu=menu
        this.descripcion=descripcion
        this.precio=precio
    }
}