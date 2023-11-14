//declaremos un array vacio
let colores = [];

const peliculas = ['dr strange','rambo','La saga de Transformer','Five nights at freedy', true, 2023 ];

//cantidad de elementos en un array
console.log(peliculas.length);
console.log(peliculas.length - 1);

mostrarPeliculas('');
//mostrar por pantalla un array
document.write(peliculas);
document.write(`<p>El primer elemento del array es: ${peliculas[0]}</p>`);
document.write(`<p>El ultimo elemento del array es: ${peliculas[peliculas.length-1]}</p>`);
document.write(`<p>Un elemento inexistente del array es: ${peliculas[10]}</p>`);

document.write(`<h2>Lista de peliculas</h2>`);
document.write(`<ul>`);
for(let i=0; i < peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`);
}
document.write(`</ul>`);

//agregar elementos en el array
peliculas.unshift('Ironman 1','Ironman 2');
mostrarPeliculas('+Iroman')


peliculas.splice(2,0,'Thor');
mostrarPeliculas('+Thor')

peliculas.push('Batman');
mostrarPeliculas ('+Batman')

//modificar elementos en el array
peliculas[3] = 'Dr. Strange: multiverse of madness'
console.log(peliculas)
mostrarPeliculas(` + Dr. strange modificado (${peliculas.length})`);


//borrar elementos del array
peliculas.shift();
mostrarPeliculas(`menos el primer elemento(${peliculas.length})`)


peliculas.pop();
mostrarPeliculas (`menos el ultimo elemento(${peliculas.length})`)