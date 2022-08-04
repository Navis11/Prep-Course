Conceptos

Variables: Las variables funcionan como una especie de caja o recipiente en el cual nosotros podemos poner adentro cualquier objeto, el cual podemos cambiar las veces que queramos. Un día podemos poner dentro de esta un zapato, al siguiente libros y así sucesivamente, entonces la caja o recipiente tomaría el "valor" de cada objeto que contenga, el que nosotros le "asignamos". Para crear una variable en JS, primero necesitamos declararla, o en otras palabras dar a entender que "tenemos una caja nueva" en donde queremos guardar cosas, para esto utilizamos utilizamos la palabra "var", seguida por el nombre de la caja, que en este caso es "nuevaCaja". Ahora lo que resta es poner algo dentro de la caja, para eso necesitamos el signo "=" que en este caso es de asignación. En el ejemplo hemos introducido o asignado el valor "zapato" a la caja o variable nuevaCaja, de esta manera nuevaCaja toma el valor de "zapato". Eventualmente si quisiéramos meter alguna otra cosa, solo cambiaría el valor y en lugar de zapato tendríamos "libros", por ejemplo, y así sucesivamente.

var nuevaCaja = "zapato";
var nuevaCaja = "libros";

Strings: Las strings son la representación de cualquier letra, palabra o grupo de palabras dentro del código, como podría ser "norte1234", "897", "zapato rojo" o "libros pesados". Identificamos una string ya que estas están escritas entre comillas "" las cuales pueden ser dobles o simples. Estas comillas son importante ya que hacen que el cógigo las reconozca como tales y nos permita usarlas. Dentro de JS, string, es un tipo de dato que podemos asignar a una variable.

Funciones: Las funciones son una serie de instrucciones que la computadora lleva a cabo de manera automatizada cada vez que se lo pedimos. Un tipo de programa que va a realizar una tarea y nos va a regresar un resultado al concluirla. Muchas veces estas funciones van a necesitar información extra para llevar a cabo su tarea de forma correcta, por ejemplo, si buscamos que nuestra computadora salude a todos mis amigos, necesita saber el nombre de estos, para esto crea la siguiente función:

Con esta función estamos pidiendo a la computadora que nos salude, pero no saluda a nadie en específico, necesitamos ahora decirle los nombres de cada uno de mis amigos. La palabra return, es una palabra que utilizamos en JS para indicarle a la función que es lo que queremos que nos regrese al finalizar.

function saludo (){
    var saludarAmigos = "Hola!"
    return saludarAmigos;
}

Para esto debemos darle a entender que ahora, en lugar de solo saludar, va a tener que saludar a alguien en específico y que yo le voy a decir, para esto vamos a agregar a la función el argumento "nombre" la cual es la información que tiene que recibir la función antes de llevar a cabo su tarea.

function saludo (nombre){
    var saludarAmigos = "Hola!"
    return saludarAmigos;
}

Pero no es todo, ahora que ya tiene el nombre, necesita saber como va a utilizar esa información, para esto tenemos que crear una variable para asignarle el nombre como valor y para que lo pueda utilizar como le indiquemos a continuación.

function saludo (nombre){
    var saludarAmigos = "Hola " + nombre + "!";
    return saludarAmigos;
}

Hasta ahorita, solo le hemos explicado a la máquina que es lo que queremos que haga y como, sin embargo, no hemos hecho trabajar esta función. Para esto necesitamos "llamarla o invocarla" con su nombre, seguido con el nombre de uno de mis amigos en paréntesis, lo cual me representa dicíendole el nombre a la función.

saludo ("Roberto");
Hola Roberto!

Declaraciones if: Las declaraciones if, son estructuras que nos van a ayudar a tomar una descición dependiendo si una o varias condiciones se cumplen. Por ejemplo, si quiero salir a caminar o quiero comprar algo, tengo que tomar en consideración, el clima en el primer caso y mi presupuesto en el segundo caso. La estructura if evaluaría la situación de la siguiente forma: Si el cielo esta despejado, entonces, sal a caminar, sino, quédate en casa, para el segundo ejemplo sería: Si el presupuesto es mayor a el precio del producto, entonces, cómpralo, sino, no lo compres. If recibe una condición o situación, la cual evalua y realiza una tarea o devuelve un resultado en caso de que esta se cumpla y otra en caso de no cumplirse.

Valores booleanos: Los booleanos son valor que solo pueden "verdadero" o "falso", "si" o "no", "cumple" o "no cumple". Son dentro de JS un tipo de dato que únicamente se mueve dentro de esos dos estados. Los valores posibles dentro de JS son "true" y "false".