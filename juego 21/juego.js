class Carta{
    numero=0
    figura='';
    valor1=0;
    valor2=0;
    dobleValor=false;
    constructor(numero,figura,valor1,valor2,dobleValor){
        this.numero=numero;
        this.figura=figura;
        this.valor1=valor1;
        this.valor2=valor2;
    //esta variable sirve para saber si la carta tiene dos valores como por ejemplo el a y el 1 que vale  11 y 1
        if (valor1==valor2){

            this.dobleValor=false;
        }
        else{
            this.dobleValor=true;
        }
    }
}

class Mazo extends Array {        
    
}

class Jugador{
    mano = new Array();
    puntaje = 0;
}

function crearCartas(mazoCartas) {
    var nombresCartas=['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
    var pintas=['CORAZON ROJO', 'CORAZON NEGRO', 'TREBOL', 'DIAMANTE'];
    // hacemos el salto entre las difernetes pintas de las cartas
    pintas.forEach(function(nombrePinta) {
        //hacemos un barrido entre todos los numeros por cada pinta
        nombresCartas.forEach(function(numeroCarta,indice){
           var valorCarta1=0
           var valorCarta2=0
            // el indice 0 es el a
            if(indice==0)
            {
                //aqui nos dice que la carta a valga 1 y 11
                valorCarta1=1
                valorCarta2=11
            }
            else{
                //el indice es 9 y luego hacemos que a partir de 9 nos de 10
                if (indice>9) 
                {
                    valorCarta1=10
                    valorCarta2=10
                }
             else
                {
                // a los numero entre dos y 10 van a tener mas 1 EJEMPLO: carta 2 el indice va ser 1 por eso
                // incrementamos el 1 el indice para tener el valor de la carta.
                    valorCarta1=indice+1
                    valorCarta2=indice+1
                }
            }
            mazoCartas.push(new Carta(numeroCarta,nombrePinta,valorCarta1,valorCarta2) )
        });

        
    });
    return;
  
};
function verCartasMazo(mazoCartas) 
{
    mazoCartas.forEach(function (carta) {
        console.log(carta.numero + ' '+ carta.figura)
    });
    
}

function pedirCarta(mazoCartas, player)
{
// Math.forr sirve para rendondear la sifra menor del numero decimal y obtener un entero 
//Match.random se utiliza para tener un numero aleatorio entre 0 y 1, y multiplicar por el tamaño 
//actual del array para obtener  un numero alealtorio.
    var cartasRetiradas = mazoCartas.splice(Math.floor(Math.random()*mazoCartas.length),1)
    var  textoCarta=''
    var dobleCarta=false
    cartasRetiradas.forEach(function (carta) {
        player.mano.push(carta);
        
        
        textoCarta = carta.numero + ' '+ carta.figura
    });
    
    var suma = 0
    player.mano.forEach(function (carta){
        //suma todos los valores de todas las cartas de la mano 
        if (carta.dobleValor)
            dobleCarta = true
        suma = suma + carta.valor2

    });

    
    // los numers de la suma que sea mayor de 21 y la doble carta 
    if (suma > 21 & dobleCarta) {
        suma = 0
        //el juegador y la mano luego ejecutamos la función 
        //indicada una vez por cada elemento del array.
        //en este caso seria carta
        player.mano.forEach(function (carta){
            //suma todos los valores de todas las cartas de la mano
            //console.log(carta.numero + ' '+ carta.figura) 
            suma = suma + carta.valor1

        });
        
    }
    //console.log(suma)
    player.puntaje = suma
    return textoCarta;
}
