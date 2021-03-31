
class Edificio{
    pisos: Piso[];
    constructor(pisos:Piso[]){
        this.pisos = pisos;
    }
    addDepartamentoToPiso(nombredelpiso:string, departamento:Departamento){
        const pisoEncontrado = this.pisos.find((p) => p.nombre = nombredelpiso)
            return pisoEncontrado.pushDepartamento(departamento);
    }
    getDepartamentosByPiso(nombredelpiso:string): Departamento[]{
        const pisoEncontrado = this.pisos.find((p) => p.nombre = nombredelpiso)
        return pisoEncontrado.getDepartamentos();

    }

    
}

class Piso{
    nombre:string;
    departamentos:Departamento[] = [];
    constructor(nombre:string){
        this.nombre = nombre;
        
    }
    pushDepartamento(depto:Departamento){
        
        this.departamentos.push(depto);

    }
    getDepartamentos() : Departamento[]{
        return this.departamentos;
    }
}

class Departamento{
    nombre:string
    constructor(nombre:string){
        this.nombre = nombre;
    }
    getName(){
        return this.nombre;
    }
}


function testClaseEdificio() {
    const unPiso = new Piso("planta baja");
    const otroPiso = new Piso("primer piso");
    const unEdificio = new Edificio([unPiso, otroPiso]);
    const deptoUno = new Departamento("depto uno");
    const deptoDos = new Departamento("depto dos");
    const deptoTres = new Departamento("depto tres");
    unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
    unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
    unEdificio.addDepartamentoToPiso("planta baja", deptoTres);
  
    const deptos = unEdificio.getDepartamentosByPiso("planta baja");
    const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");
  
    if (
      Array.isArray(deptosEmpty) &&
      deptosEmpty.length == 0 &&
      deptos.length == 3 &&
      deptos[2].getName() == "depto tres"
    ) {
      console.log("testClaseBandaApartment passed");
    } else {
      throw "testClaseBandaApartment not passed";
    }
  }
  
  function main() {
      console.log("Cambio");
    testClaseEdificio();
  }
  main();
