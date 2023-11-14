// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

// pida número de filas y columnas 

// multiplicar las filas por las columnas y el resultado es la primer celda, luego ir decrementando cada celda

const filas = parseInt(prompt('Ingrese un numero de filas'));
const columnas = parseInt(prompt('Ingrese un numero de columnas'));

let total = filas * columnas;

document.write( `<table><tbody>`)
for(let indiceFilas=0; indiceFilas < filas; indiceFilas++){
    document.write( `<tr>`)
    for(let indiceColumnas=0; indiceColumnas< columnas; indiceColumnas++){
        document.write( `<td>${total}</td>`);
        total--;
    }
    document.write( `</tr>`)
}
document.write( `</tbody></table>`)