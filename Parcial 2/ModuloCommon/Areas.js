
function areaCuadrado(lado)
{
    return lado*lado;
}

function areaTriangulo(base, altura)
{
    return ((base*altura)/2);
}

function multiplicacion(num1, num2)
{
    return num1*num2;
}
function IMC(peso, estatura)
{
    return (peso/(estatura*estatura));
}

module.exports.areacuadrado=areacuadrado;
module.exports.areatriangulo=areatriangulo;
module.exports.multiplicacion=multiplicacion;
module.exports.IMC=IMC;

//console.log(_dirname);
//console.log(_filename);
console.log(module);      /*archivo en el que estoy ahorita*/


