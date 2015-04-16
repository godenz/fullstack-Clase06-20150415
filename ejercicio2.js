var arr = [];
var pares = [];
var impares = [];
var producto = [];
var i, tot;

arr = [22, 400, 13, 25, 70, 56, 73, 15, 27, 39, 42, 24, 91, 95, 77];

for (i = 0; i < arr.length; i++) {
	if ( arr[i] % 2 === 0) {
		pares.push(arr[i]);
	}
	else {
		impares.push(arr[i])
	}

}

tot = Math.max(pares.length, impares.length);

for (i=0; i < tot; i++) {

	if (typeof(pares[i]) === "undefined")
			producto.push(1*impares[i]);
	else if (typeof(impares[i]) === "undefined")
			producto.push(pares[i]*1);
		else
			producto.push(pares[i]*impares[i]);
}

console.log("Pares: " + pares.join(";"));
console.log("Impares: " + impares.join(";"));
console.log("Producto: " + producto.join(";"));