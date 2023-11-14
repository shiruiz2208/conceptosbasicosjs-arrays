//funciones declarativas no hay espacipos ni x ni mayusculas,en camelcase ,ni ñ
function saludar (){
    document.write(`<p>Hola mundo</p>`);
}
function nuevoSaludo(nombreIngresado,apellidoIngresado){
    document.write (`<p>Hola ${nombreIngresado} , ${apellidoIngresado} x,que tengass buen día</p>`)
}
//invocar a una funcion

saludar();

const nombre = prompt('Ingrese un nombre');
const apellido = prompt ('Ingrese un apellido');

nuevoSaludo(nombre,apellido);

nuevoSaludo ( 'Luciano','Cabello');

nuevoSaludo('Sebastian');
nuevoSaludo();