class CEmpleado{

    constructor(nom, año, sal, dir){
        this.nom = nom;
        this.año = año;
        this.sal = sal;
        this.dir = dir;
    }

    mostrarDatos(){
        return`
        Nombre: <b>${this.nom}</b></br>
        Año de ingreso: <b>${this.año}</b></br>
        Salario: <b>${this.sal}</b></br>
        Dirección: <b>${this.dir}</b></br>`
    }
}   

let empleado1 = new CEmpleado('Robert', 1994, '64C-', 'WallsStreat');
let empleado2 = new CEmpleado('Sam', 2000, '68D-', 'WallsStreat');
let empleado3 = new CEmpleado('Jhon', 1999, '26B-', 'WallsStreat');
document.write(`${empleado1.mostrarDatos()} <br>
                ${empleado2.mostrarDatos()} <br>
                ${empleado3.mostrarDatos()} <br>`);