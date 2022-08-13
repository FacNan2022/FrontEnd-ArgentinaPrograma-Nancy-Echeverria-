export class Skills {
    id?: number;
    nombre: string;
   imagen: string;
    ColorInterior:string;
    ColorExterno: string;
    porcentaje: number;
  


    constructor(nombre: string, imagen: string,ColorInterior:string,  ColorExterno: string, porcentaje: number ){
        this.nombre = nombre;
        this.imagen=imagen;
        this.ColorInterior = ColorInterior;
        this.ColorExterno = ColorExterno;
        this.porcentaje = porcentaje;
    }
    

}
