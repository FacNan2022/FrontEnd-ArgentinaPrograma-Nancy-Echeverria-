export class Experiencia {
    id? : number;
    nombreE : string;
    puesto:string;
    descripcionE : string;
    fechaInicio:string;
    fechaFinalizacion:string;

    constructor(nombreE: string, puesto:string, descripcionE: string, fechaInicio: string, fechaFinalizacion:string){
        this.nombreE = nombreE;
        this.puesto=puesto;
        this.descripcionE = descripcionE;
        this.fechaInicio= fechaInicio;
        this.fechaFinalizacion= fechaFinalizacion;
    }
}
