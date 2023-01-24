

class MisProductos {
    constructor() 
    {       
        this.Productos = [];    
        this.estado = "";
        this.Autonumerico = 0;
    }


    addProduct(object) {
      const MiCode = this.Productos.map((p) => p.code);
      const Revision = MiCode.includes(object.code);
      if (Revision) {
        console.log("Este codigo ya figura en la base de datos, por favor verifique");
      } else if (Object.values(object).includes("")) {
        console.log( "Complete los campos, no pueden estar vacio");
      } 
      else 
      {
        let id;
        id = this.Productos.length + 1;
        const NuevoProducto = { ...object, id };
        this.Productos.push(NuevoProducto);
        return console.log(` Se agrego a la base un nuevo porducto      : ${NuevoProducto.id} `);
      }
    }
    getProducts() {
      return this.Productos;
    }
    getPorductById(id) {
      const BuscoProducto = this.Productos.find((p) => id === p.id);
      if (BuscoProducto) {
        let TrabajoJS = JSON.stringify(BuscoProducto);
        return console.log(`El producto seleccionado es: ${TrabajoJS}`);
      } else {
        console.log("Not Found");
      }
    }
  }
  
const ProbandoTP = new MisProductos();

console.log(ProbandoTP);

ProbandoTP.addProduct({
  title: "Renault 12",
  description: "Coche nacional",
  price: 250,
  thumbnail: "https://es.wikipedia.org/wiki/Renault_12",
  code: 1,
  stock: 1500,
});

console.log(ProbandoTP);

ProbandoTP.addProduct({
  title: "Tracker Chevrolet",
  description: "4x4 origen mexicano",
  price: 350,
  thumbnail: "https://chevrolet.com.gt/vehiculo/chevrolet-tracker/",
  code: 2,
  stock: 147,
});

ProbandoTP.addProduct({
  title: "Citroen C4 Lounge",
  description: "Origen frances caja automatica",
  price: 450,
  thumbnail: "https://www.autocosmos.com.ar/auto/usado/citroen/c4-lounge",
  code: 2,
  stock: 159,
});

ProbandoTP.addProduct({
  title: "Tracker Chevrolet",
  description: "",
  price: 1406,
  thumbnail: "http://www.clarin.com",
  code: 3,
  stock: 6,
});

console.log(ProbandoTP);

ProbandoTP.getPorductById(2)