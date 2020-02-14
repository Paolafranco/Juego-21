class Cartas{
    constructor(barajas,value=[],texto){
      this.barajas=barajas;
      this.value=value;
      this.text=text;
      
    }
  }
  
  class Baraja{
    constructor (model){
      this.model = model;
    }
  }
  
  class Fabrica {
    barajas = [new Baraja("trebol negro"),new Baraja("corazon Rojo"),new Baraja("corazon Negro"),new Baraja("brillo rojo")];
       letras=['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
        Valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        cartas=[];
        cartasEnOrden=[];
        elementos;
    crearBarajas() {
      // insertar los valores al array
     barajas.forEach(function (elementBaraja) {
        letras.forEach(function (elementFigu, index) {
            if (index == 0) {
                this.cartas.push(new Cartas(elementBaraja, [1, 11], elementFigu))
            } else if (index > 9) {
                this.cartas.push(new Cartas(elementBaraja, Valores[9], elementFigu))
            } else {
                this.cartas.push(new Cartas(elementBaraja, Valores[index], elementFigu))
            }
        },this)
    },this)
    
    
  }
  mezclarCarta(){
   
  }
  
  }
  
  class Jugar extends Fabrica {
    nuevaBaraja=[]
    contador=0;
    mezclarCarta() {
      while (this.cartasEnOrden.length < 52) {
        let car = Math.floor(Math.random() * (52));
        this.elementos = this.cartasEnOrden.find(element => element == car)
        let condicion = (this.elementos == undefined) ? this.cartasEnOrden.push(car) : car;
    }
    
    for (let j = 0; j < this.cartas.length - 1; j++) {
        this.elementos = this.cartas[this.cartasEnOrden[j]]
        this.cartas[this.cartasEnOrden[j]] = this.cartas[j]
        this.cartas[j] = this.elementos;
    }
    return this.cartas   
    }
    validarCarta() {
      //sumatoria
      let filtro = this.nuevaBaraja.reduce(
        function(ahora,antes) {
            if (typeof(antes) == 'object') {
                if (antes > 10) {
                    return antes[0] + ahora;
                } else {
         return antes[1] + ahora;
                }
            } else {
                return antes + ahora;
            }
  
        })
  
    if (filtro == 21) {
        console.log('GANADOR')
    } else if (filtro < 21) {
        console.log('OTRA CARTA')
    } else if (filtro > 21) {
        console.log('SIGUE PARTICIPANDO')
    }
    console.log('tu suma es'+filtro);
      
    }
  }
  
  class Jugador extends Fabrica{
    nuevaBaraja=[];
    contador=0;
    pedirCarta(){
  
      this.nuevaBaraja.push(this.cartas[this.contador].valor);
          this.contador++;
          this.validarCarta()
          return this.nuevaBaraja
  
    }
  }