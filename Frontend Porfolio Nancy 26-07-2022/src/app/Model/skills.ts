export class Skills {
    id?: number;
    nombre: string;
    porcentaje: number;
   imagen: string;
    ColorInterior:string;
    ColorExterno: string;
  


    constructor(nombre: string, imagen: string, porcentaje: number,ColorInterior:string,  ColorExterno: string ){
        this.nombre = nombre;
        this.imagen=imagen;
        this.porcentaje = porcentaje;
        this.ColorInterior = ColorInterior;
        this.ColorExterno = ColorExterno;
    }
    

}
