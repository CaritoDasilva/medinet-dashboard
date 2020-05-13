export class AttentionType{
    name: string;
    qty: number;
    total: number;
    prevision: string;
    sucursal: string;
    year: number;
    month: number;

    constructor(name: string, qty: number, total: number, prevision: string, sucursal: string, year: number, month: number) {
        this.name = name;
        this.qty = qty;
        this.total = total;
        this.prevision = prevision;
        this.sucursal = sucursal;
        this.year = year;
        this.month = month;
    }
}

