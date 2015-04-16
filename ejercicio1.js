var arr = [];
var pares = [];
var impares = [];
var i;

arr = [22, 400, 13, 25, 70, 56, 73, 15, 27, 39, 42, 24];

for (i = 0; i < arr.length; i++) {
	if ( arr[i] % 2 === 0) {
		pares.push(arr[i]);
	}
	else {
		impares.push(arr[i])
	}

}

console.log("Pares: " + pares.join(";"));
console.log("Impares: " + impares.join(";"));