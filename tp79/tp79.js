class CRectangulo{

    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }

    calcularArea(base, altura) {
        return base * altura;
    }
}

let ba = prompt("ingrese base");
let al = prompt("ingrese altura");
let rect = new CRectangulo(ba, al);
document.write('El area es: ' + rect.calcularArea(ba ,al));