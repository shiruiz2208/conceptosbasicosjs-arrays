let productos = [
    "Hidratante facial",
     "Tonico exfoliante" , 
     "Protector solar factor 50" ,
     "Protector solar toque seco factor 50" , 
     "Gel de limpieza facial",
     "Tonico hidratante" ,
     "Serum hidratante",
     "Exfoliante de azucar cherry" ,
     "Pads de hidrogel para contorno de ojos",
     "Mascarilla facil" ,
     "Serum facial con PHA" ,
      "Agua micellar",
      "Mascara de hidratacion y reparacion" ,
      "Protector solar en barra" , 
      "Crema contorno de ojos" ,
      "Balsamo labial",
];
//metodo mutables: modifican al array push,pop,ish,etc
//metodos inmutables: se le aplican al array sin modificarlos
//metodo maps= metodo inmutables , mapea cada uno de los elememtos del array(se ve mucho en pantalla)recorre todo el array y muestra el resultado

const mostrarProductos= (arregloNuevo,titulo)=>{
document.write(`<h2>${titulo}</h2>`);
document.write(`<ul> `);
arregloNuevo.map( (productos)=> 
document.write(`</li>${productos}</li>`));
document.write(`</ul>`);
}

//for (let i = 0 ; i <li productos.length; i++){document.write(`<li>${productos[i]}</li>`);
//}

mostrarProductos(productos);

//filtrar protectores solares
//const protectorSolares = productos.filter((producto)=> producto === "Protector solar factor 50" )//
const protectorSolares = productos.filter((producto)=>producto.includes('Protector')) 
console.log(protectorSolares);

console.log(productos[0].includes("Protector"))

mostrarProductos(protectorSolares);

mostrarProductos(protectorSolares,'Protectores solares')
//incloud devuelve true o false
//find buscar un serum
const buscarProducto = productos.find((item)=>item.includes("Tonico hidratant 2"));

document.write(`<p>Producto buscado: ${buscarProducto}>/p>`)