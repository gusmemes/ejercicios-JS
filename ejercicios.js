
//PRIMER EJERCICIO

const textoEnCadena =  (cadena = "", texto="") => {
    if(!cadena){
     return console.warn("no ingresaste un texto")
    }
    if(!texto){
       return console.warn("no ingresaste la letra a evaluar")
    }

    let posicion = 0;

    while(posicion !== -1){ 
        posicion = cadena.indexOf(texto,posicion);
        if(posicion !== -1){
            posicion++;
            
        }
    }
    //return console.log(`la letra ${texto} se repite ${contador} veces`)
}

textoEnCadena("texto", "e")


//SEGUNDO EJERCICIO


const minMax = (arr) => {
    let min= Math.min(...arr)
    let max= Math.max(...arr)

    return [min, max]
}
//console.log(minMax([1,2,3,4,5]))

//TERCER EJERCICIO
const mayorDigito = (numero) => {
    let digitos = numero.split("");
    let digitoMayor = digitos[0];

    digitos.forEach(el => digitoMayor = Math.max(digitoMayor, el));
    return digitoMayor;
}

//console.log(mayorDigito("123456"));


//CUARTO EJERCICIO


const descender = (num) => {
    num = [1,2,3]
    num.sort((a, b) => b - a);
    return num;
}
//console.log(descender(123))


//QUINTO EJERCICIO

const codigoPostal = (cadena = "") => {

    if(cadena === ""){
        console.log("no puede ir el campo vacio")
    }else if(cadena.length > 4){
        console.log("no pueden ser mas de 5 digitos")
    }else if(cadena >= String){
        console.log("no puede poner letras")
    }else{
        return true;
    }
    
}

//console.log(codigoPostal("1234"))
//console.log(codigoPostal(""))
//console.log(codigoPostal("hola"))
//console.log(codigoPostal("123456"))


//SEXTO EJERCICIO

const convertidor = (celsius) => {
    let resultado = Math.round( celsius * 9/ 5.0 + 32);
    if (celsius === 33){
        return console.error("no es valido")
    }else{
       return resultado;
    }
}

const convertidor2 = (fahrenheit) => {
    let resultado = Math.round((fahrenheit -32 ) * 5/9.0);

    return resultado
}

let celsius = 0;
let resultado = convertidor(celsius)

//console.log("la temperatura en celcius es " + convertidor(34))
//console.log("la temperatura en fahrenheit es " + convertidor2(34))


//SEPTIMO EJERCICIO

// Usando objetos Date


// El tiempo a expresar va aquí:
const tiempo = (fecha) => {
let fechaInicial = new Date()
let fechaFinal = new Date(fecha)

let resultado = fechaFinal.getTime() - fechaInicial.getTime()
 resultado  / (1000 * 3600 * 24);

return Math.floor(resultado);

}

console.log(tiempo("10/30/2022"))





//OCTAVO EJERCICIO

const remplazarVocal = (palabra) => {
    let palabra2 = palabra.replace (/(a)|(A)/g, "1")  
    let palabra3 = palabra2.replace (/(e)|(E)/g, "2")  
    let palabra4 = palabra3.replace (/(i)|(I)/g, "3")  
    let palabra5 = palabra4.replace (/(o)|(O)/g, "4")  
    let palabra6 = palabra5.replace (/(u)|(U)/g, "5")  
    
    return palabra6
} 
//console.log(remplazarVocal("aeiou"))

//NOVENO EJERCICIO

const Array = (arr) => {

arr.sort((a, b) => a - b);
return arr[0] + arr[1];

}
//console.log(Array([5,4,3,2,1]))



//DECIMO EJERCICIO


const calculadora = (n1,operador,n2) => {
    if(operador == "+"){
       return resultado = n1 + n2;
    }
  
   else if(operador == "*"){
        return resultado = n1 * n2;
     }
    else if(operador == "/"){
        return resultado = n1 / n2;
     }
     else if(operador !== "+","/","*"){
        return console.log("asigne un operador valido")
     }
}
//console.log(calculadora(4,"+",2))
        

    