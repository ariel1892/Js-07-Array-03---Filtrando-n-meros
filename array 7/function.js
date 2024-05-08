
function calcularSecuencia() {
   
    const fileInput = document.getElementById("fileInput"); //agarra los elementos input de la carpeta 
    const file = fileInput.files[0];

 
    if (!file) {
      
        alert("Por favor, seleccione un archivo.");
        return; 
    }


    const reader = new FileReader(); //  lee el contenido del archivo

    // lee el archivo y se fiuja como empezar
    reader.onload = function(event) {
       
        const content = event.target.result;// agarra lo que tiene el archivo como texcto
      
        const numeros = content.trim().split('\n').map(Number); // Divide el  archivo en líneas y convierte  cada línea a un número

        let resultado = [];  // Crear un vector para  números que cumplen propiedad

        for (let i = 0; i < numeros.length; i++) {
         
            const numString = numeros[i].toString();// Convertir número a  cadena de texto 
         
            if (numString.charAt(0) === numString.charAt(numString.length - 1)) {   // Veri primer y ultimo digito
                
                resultado.push(numeros[i]);// se agrega al array
            }
        }

        const resultadoDiv = document.getElementById("resultado");
       
        resultadoDiv.innerHTML = `<p>Cantidad de números con propiedad: ${resultado.length}</p>`;
      
        resultadoDiv.innerHTML += `<p>Números con propiedad: ${resultado.join(", ")}</p>`;
    };

    
    reader.readAsText(file);//leo como texto el archiuvo
}
