class Calculadora {
    sumar(a, b) {
      return a + b;
    }
  
    restar(a, b) {
      return a - b;
    }
  
    multiplicar(a, b) {
      return a * b;
    }
  
    dividir(a, b) {
      if (b === 0) {
        return "No es posible dividir por cero.";
      }
      return a / b;
    }
  }
  
  
  let calculadora = new Calculadora();
  
  console.log("Suma:", calculadora.sumar(5, 3)); // Suma: 8
  console.log("Resta:", calculadora.restar(10, 4)); // Resta: 6
  console.log("Multiplicación:", calculadora.multiplicar(6, 2)); // Multiplicación: 12
  console.log("División:", calculadora.dividir(8, 2)); // División: 4
  console.log("División por cero:", calculadora.dividir(6, 0)); // División por cero: No es posible dividir por cero.
  

  //primer ejecicio


class Personaje {
  constructor(nombre, apodo, edad, salud, fuerza, rareza) {
    this.nombre = nombre;
    this.apodo = apodo;
    this.edad = edad;
    this.salud = salud;
    this.fuerza = fuerza;
    this.rareza = rareza;
  }

  get atacar() {
    return `${this.nombre} está atacando, con una fuerza impresionante de ${this.fuerza}`;
  }

  get defender() {
    return `${this.nombre} está defendiendo, y tiene una salud imponente de ${this.salud}`;
  }

  get saludar() {
    return `${this.nombre} te saluda, y su rareza es ${this.rareza} `;
  }
}

let personaje1 = new Personaje("John", "The Warrior", 30, 100, 80, "Común");
let personaje2 = new Personaje("Alice", "Swiftblade", 25, 90, 70, "Raro");
let personaje3 = new Personaje("Bob", "The Magician", 35, 80, 60, "Épico");
let personaje4 = new Personaje("Eva", "Steelheart", 28, 95, 75, "Legendario");
let personaje5 = new Personaje("Grace", "Shadowstrike", 32, 110, 90, "Mítico");

console.log(personaje1.atacar);
console.log(personaje1.defender);
console.log(personaje1.saludar);

console.log(personaje2.atacar);
console.log(personaje2.defender);
console.log(personaje2.saludar);

console.log(personaje3.atacar);
console.log(personaje3.defender);
console.log(personaje3.saludar);

console.log(personaje4.atacar);
console.log(personaje4.defender);
console.log(personaje4.saludar);

console.log(personaje5.atacar);
console.log(personaje5.defender);
console.log(personaje5.saludar);


//segundo ejercicio