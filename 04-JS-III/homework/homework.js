// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
    return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var incremArray= [];

  for (i = 0; i < array.length; i++){
    var aumento = array[i] + 1;
    incremArray.push(aumento);
  }
  return incremArray;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  //es lo mismo si ponemos return palabras.join(" ")
    var cadena = palabras.join(" ");
    return cadena;

}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  for(i = 0; i < array.length; i++){
    if (array[i] === elemento){
      return true;
    }
  }
  return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  //Asignamos a la variable resultado el valor del primer alemanto del array, este va a servir como acumulador
  var resultado = numeros[0];
  //Empezamos a sumar desde el elemento con la posición 1, ya que ya tomamos el elemento de la primera posición
  //El largo del array se mantiene igual porque no sacamos ningún elemento, solo nos saltamos uno
  for(i = 1; i < numeros.length; i++){
    //reasignamos el valor a la variable resultado con la suma del sig elemento
    var resultado = resultado + numeros[i];
  }
  return resultado;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var sum = resultadosTest[0];

  for(i = 1; i < resultadosTest.length; i++){
    var sum = sum + resultadosTest[i];
  }
  var promedio = sum / resultadosTest.length
  return promedio
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var masGrande = numeros[0];
  for(i = 1; i < numeros.length; i++){
    if(numeros[i] > masGrande){
      masGrande= numeros[i];
    }
  }
  return masGrande;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  /*Arguments funciona como un array, aunque no es uno, también se puede utilizar con ella el método .length
  y para tener acceso a cada uno de sus elementos solo hay que llamarla en el numero de posición*/
  //[2, 4, 6]
  if (arguments.length < 1){
    return 0;

  }else if(arguments.length === 1){
    return arguments[0];

  }else{
    var producto = 1;
    for(i = 0; i < arguments.length; i++){
    producto = producto * arguments[i];
  }
    return producto;
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var mayores18 = 0;

  for(i = 0; i < arreglo.length; i++){
    if(arreglo[i] > 18){
      mayores18= mayores18 + 1;
    }
  }
  return mayores18;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí
  // 1 = domingo, 2 = lunes, 3 = martes, 4 = miércoles, 5 = jueves, 6 = viernes, 7 = sábado

  if(numeroDeDia === 1 || numeroDeDia === 7 ){
    return "Es fin de semana";
  }else{
    return "Es dia Laboral";
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  var num = n.toString();
  if(num[0] === "9"){
    return true;
  }
  return false;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí 

  for(i = 0; i < arreglo.length; i++){
    for(j = 1; j < arreglo.length; j++){
      if(arreglo[i] !== arreglo[j]){
        return false;
      }
    }
  }
  return true;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  var nuevoArray =[];

  for(i = 0; i < array.length; i++ ){
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre" ){
      nuevoArray.push(array[i]);
    }
  }
  if(nuevoArray.length >= 3){
    return nuevoArray;
  }
  return "No se encontraron los meses pedidos";
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nvoArray =[];

  for(i = 0; i < array.length; i++){
    if(array[i] > 100){
      nvoArray.push(array[i])
    }
  }
  return nvoArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  var nvoArray = [];
  var suma = numero;

  for(i = 1; i < 11; i++){
    suma = suma + 2;
    if(suma === i){
      break;
    }else{
      nvoArray.push(suma);
    }
  }

  if(nvoArray.length < 10){
    return "Se interrumpió la ejecución";
  }else if(nvoArray.length === 10){
    return nvoArray;
  } 
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  // 4
  //[6, 8, ]
  
  var nvoArreglo = [];
  var suma = numero;

  for(var i = 1; i < 11; i++){
    if(i === 5){
      continue;
    }else{
      suma = suma + 2;
      nvoArreglo.push(suma);
    }
  }
  return nvoArreglo;  
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
