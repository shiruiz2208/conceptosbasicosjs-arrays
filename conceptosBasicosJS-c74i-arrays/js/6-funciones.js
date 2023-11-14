//funciones declarativas no hay espacipos ni x ni mayusculas,en camelcase ,ni ñ
function saludar (){
    document.write(`<p>Hola mundo</p>`);
}
function nuevoSaludo(nombreIngresado,apellidoIngresado){
    document.write (`<p>Hola ${nombreIngresado} , ${apellidoIngresado} x,que tengass buen día</p>`)
}

 //function conversionApesos(dolares){
 //   const precioFinal= dolares * 1000;
   // return precioFinal;
    //console.log(precioFinal);
 //}
 //

//arrow functions
//const conversionApesos = dolores =>{
   // const precioFinal = dolores *1000;
    //console.log (precioFinal);
    //return precioFinal;
//}
 const conversionApesos= (dolares) => dolares *1000;





//invocar a una funcion
saludar();

const nombre = prompt('Ingrese un nombre');
const apellido = prompt ('Ingrese un apellido');

nuevoSaludo(nombre,apellido);

nuevoSaludo ( 'Luciano','Cabello');

nuevoSaludo('Sebastian');
nuevoSaludo();


conversionApesos(35);

let precioproducto = conversionPesos(35);
document.write(`<p>El precio del producto de prueba es ${precioProducto} </p>`);
document.write(`<p>El precio del producto de prueba es ${conversionApesos} </p>`);

