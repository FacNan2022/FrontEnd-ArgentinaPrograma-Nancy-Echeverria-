export class Proyectos {
id?:number;
nombre:string;
descripcion: string;
imagen: string;
link: string;

constructor(nombre: string, descripcion: string, imagen: string, link: string){
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imagen=imagen;
    this.link=link;
}
}

