export class Educacion {
    id?: number;
    institucion: string;
    titulo: string;
    orientacion: string;
    fechaInicio: string; 
    fechaFinalizacion: string;

    constructor(institucion:string, titulo:string, orientacion: string,
        fechaInicio: string, fechaFinalizacion: string){
            this.institucion = institucion;
            this.titulo = titulo;
            this.orientacion = orientacion;
            this.fechaInicio = fechaInicio;
            this.fechaFinalizacion = fechaFinalizacion;
        }
    
}
