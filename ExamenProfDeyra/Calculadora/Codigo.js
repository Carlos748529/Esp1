let operador = prompt(' Que operacion desea hacere: 1. Sumar || 2.Restar || 3.Multiplicar || 4.Dividir ');
let numero1 = Number(prompt('Ingrese el primer numero '));
let numero2 = Number(prompt('Ingrese el segundo numero '));
let total;

if(operador == 1){
    total = numero1 + numero2
    alert('El resultado de la suma es: '+total)
}else if (operador == 2){
    total = numero1 - numero2
    alert('El resultado de la resta es: '+total)
}else if (operador == 3){
    total = numero1 * numero2
    alert('El resultado de la multiplicacion es: '+total)
}else if (operador == 4){
    total = numero1 / numero2
    alert('El resultado de la division es: '+total)
}else{
    alert('Opcion incorrecta')
}
