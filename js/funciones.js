function leerJSON(json) {	
	try {		
		for (var i = 0; i < json.length; i++) {
			addrow(json[i].codigo,json[i].nombre,json[i].nota);			
		}
	} catch (error) {
		alert("Existe un Error" + " - " + error.message);
	}
}

function calcularPromedio(id,json) {
	try {
    	var out = "Total Promedio: ";
    	var totalPromedio = 0.0;
    	for (var i = 0; i < json.length; i++) {
	        totalPromedio += json[i].nota;
    	}
    	totalPromedio=totalPromedio/i;
    	//document.getElementById(id).innerHTML = out+totalPromedio;	 
        alert(out+totalPromedio);
    } catch (error) {
		alert("Existe un Error" + " - " + error.message);
	}
}

function calcularMayor(id,json) {
	try {
    	var out = "Estudiante con Mayor Nota: ";    
    	var indice=0;
    	for (var i = 0; i < json.length; i++) {      		    		   	
    		if( json[i].nota >= json[indice].nota){    			
    			indice=i;    			
			}	
		}							
		//document.getElementById(id).innerHTML = out+json[indice].nombre;	
        alert(out+json[indice].nombre);
	} catch (error) {
		alert("Existe un Error" + " - " + error.message);
	}  	    		    
}       


function calcularMenor(id,json) {
	try {
    	var out = "Estudiante con Mayor Nota: ";    
    	var indice=0;
    	for (var i = 0; i < json.length; i++) {      		    		   	
    		if( json[i].nota <= json[indice].nota){    			
    			indice=i;    			
			}	
		}							
		//document.getElementById(id).innerHTML = out+json[indice].nombre;		
		alert(out+json[indice].nombre);
	} catch (error) {
		alert("Existe un Error" + " - " + error.message);
	}  	   	    
}

function leerAprobados(id,json) {	
	try {
		var out = "-----------Estudiantes Aprobados-----------<br>";	
		for (var i = 0; i < json.length; i++) {
			if(json[i].nota>70){
				out += "Código:" + json[i].codigo + "-" + "Nombre:" + json[i].nombre + "-" + "Nota:" + json[i].nota + "<br>";
				}	
		}
		document.getElementById(id).innerHTML = out;	 
	} catch (error) {
		alert("Existe un Error" + " - " + error.message);
	}
}

function leerReprobados(id,json) {	
	try {
		var out = "-----------Estudiantes Reprobados-----------<br>";	
		for (var i = 0; i < json.length; i++) {
			if(json[i].nota<70){
				out += "Código:" + json[i].codigo + "-" + "Nombre:" + json[i].nombre + "-" + "Nota:" + json[i].nota + "<br>";
				}	
		}
		document.getElementById(id).innerHTML = out;	 
	} catch (error) {
		alert("Existe un Error" + " - " + error.message);
	}
}
function addrow(celda1,celda2,celda3) {
    var table = document.getElementById("Tabla");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = celda1;
    cell2.innerHTML = celda2;
    cell3.innerHTML = celda3;
}