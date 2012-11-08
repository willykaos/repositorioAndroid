function calcular(){
	var peso = document.getElementById('peso');
	var estatura = document.getElementById('estatura');
	operacion = peso.value / (estatura.value * estatura.value);
	
	if(operacion < 18.5){
		
		alert("Estas flaco");
		
	}else if(operacion < 24.9){
		
		alert("Estas Bien");
		
	}else if(operacion < 29.9){
		alert("Estas Gordo");
	}
	else{
		alert("Estas Bien Gordo Llave");
	}
}