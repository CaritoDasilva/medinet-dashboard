export class Productivity{
    id: number;
    sucursal: string;
    anio: number;
    mes: string;
    tipo: string;
    prevision: string;
    cantidad: number;
    total: number;

    constructor(id: number, sucursal: string, anio: number, mes: string, tipo: string, 
        prevision: string, cantidad: number, total: number) {
            this.id = id;
            this.sucursal = sucursal;
            this.anio = anio;
            this.mes = mes;
            this.tipo = tipo;
            this.prevision = prevision;
            this.cantidad = cantidad;
            this.total = total;
    }
}