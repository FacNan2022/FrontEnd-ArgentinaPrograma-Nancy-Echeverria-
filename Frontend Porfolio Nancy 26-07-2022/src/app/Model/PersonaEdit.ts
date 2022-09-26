export class PersonaEdit{
id?:number;
nombre:string;
apellido: string;
img: string;
animacion: string;
descripcion: string;
ubicacion: string;

constructor(nombre: string,
    apellido:string, img:string, animacion:string, descripcion:string, ubicacion:string ){
    this.nombre= nombre; 
    this.apellido= apellido;
    this.img= img;
    this.animacion= animacion;
    this.descripcion = descripcion;
    this.ubicacion= ubicacion;
    }
}
