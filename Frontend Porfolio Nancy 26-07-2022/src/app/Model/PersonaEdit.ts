export class PersonaEdit{
id?:number;
nombre:string;
apellido: string;
img: string;

constructor(nombre: string,
    apellido:string, img:string){
    this.nombre= nombre; 
    this.apellido= apellido;
    this.img= img;
    }
}