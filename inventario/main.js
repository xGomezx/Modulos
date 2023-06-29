import { ingresarGranos, ingresarAseo, ingresaCarnes, ingresarLacteos } from "./ingresar.js";
import { existenciasGranos, existenciasAseo, existenciasCarnes,existenciasLacteos } from "./disponibles.js";
import { esquema } from "./model.js";

esquema();

function start() {
  //mostramos la cantidad de arroz disponible
  existenciasDisponibles();
  //se aumenta la cantidad de productos en 1
  let opcionIngresar = prompt("Desea actualizar el arroz");
  if (opcionIngresar == "si"){
    let ingresar = ingresarGranos();
    if (ingresar == "actualizado"){
    //mostramos la cantidad de arroz disponible actualizada
    console.log(existenciasDisponibles());
    }else{
      console.log("Ocurrió un error al actualizar");
    }
  }else{
    console.log("Gracias por usar nuestro programa");
  }
}

start();