var arr = [];
var pares = [];
var impares = [];
var producto = [];
var i;

arr = [22, 400, 13, 25, 70, 56, 73, 15, 27, 39, 42, 24, 91, 95, 77];

for (i = 0; i < arr.length; i++) {
	if ( arr[i] % 2 === 0) {
		pares.push(arr[i]);
	}
	else {
		impares.push(arr[i])
	}

}

if (pares.length <= impares.length) {

	for (i = 0; i < pares.length; i++) 
		producto.push(pares[i]*impares[i]);

	for (i = pares.length; i < impares.length; i++)
		producto.push(impares[i]);	

}
else {		

	for (i = 0; i < impares.length; i++)
		producto.push(pares[i]*impares[i]);

	for (i = impares.length; i < pares.length; i++)
		producto.push(pares[i]);

}

console.log("Pares: " + pares.join(";"));
console.log("Impares: " + impares.join(";"));
console.log("Producto: " + producto.join(";"));