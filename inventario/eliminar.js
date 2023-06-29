
function eliminarGranos() {
    let cualGrano = prompt("Ingrese que grano desea ingresar \n -Arroz \n -Frijoles \n -Lentejas")
    let cantidad;
    switch (cualGrano.toLowerCase()) {
      case "arroz":
        cantidad = localStorage.getItem("arroz");
        localStorage.setItem("arroz", parseInt(cantidad) - parseInt(prompt("Ingrese la cantidad que desea eliminar")));
        break;
      case "frijoles":
        cantidad = localStorage.getItem("frijoles");
        localStorage.setItem("frijoles", parseInt(cantidad) - parseInt(prompt("Ingrese la cantidad que desea eliminar")));
        break;
      case "lentejas":
        cantidad = localStorage.getItem("lentejas");
        localStorage.setItem("lentejas", parseInt(cantidad) - parseInt(prompt("Ingrese la cantidad que desea eliminar")));
      default:
        return console.log("Producto no encontrado");
        break;
    }
    return "actualizado";
}

function ingresarAseo() {
    let productoAseo = prompt("Ingrese que producto de aseo quiere ingresar\n -jabon \n -limpido \n -champú ");
    let cantidad;
    switch (productoAseo.toLowerCase()) {
      case "jabon":
        cantidad = localStorage.getItem("jabon");
        localStorage.setItem("jabon", parseInt(cantidad) - parseInt(prompt("Ingrese la cantidad que desea eliminar")));
        break;
      case "limpido":
        cantidad = localStorage.getItem("limpido");
        localStorage.setItem("limpido", parseInt(cantidad) - parseInt(prompt("Ingrese la cantidad que desea eliminar")));
        break;
      case "champu":
        cantidad = localStorage.getItem("champu");
        localStorage.setItem("champu", parseInt(cantidad) - parseInt(prompt("Ingrese la cantidad que desea eliminar")));
      default:
        return console.log("producto no encontrado");
        break;
    }
    return "actualizado";
  }

  function ingresaCarnes() {
    let cualCarne = prompt("Ingrese la carne que desea ingresar: \n -pescado\n -res\n -cerdo")
    let cantidad;
    switch (cualCarne.toLowerCase()) {
      case "pescado":
        cantidad = localStorage.getItem("pescado");
        localStorage.setItem("pescado", parseInt(cantidad) - parseInt(prompt("Ingrese la cantidad que desea eliminar")));
        break;
      case "res":
        cantidad = localStorage.getItem("res");
        localStorage.setItem("res", parseInt(cantidad) - parseInt(prompt("Ingrese la cantidad que desea eliminar")));
        break;
      case "cerdo":
        cantidad = localStorage.getItem("cerdo");
        localStorage.setItem("cerdo", parseInt(cantidad) - parseInt(prompt("Ingrese la cantidad que desea eliminar")));
      default:
        return console.log("Producto no encontrado");
        break;
    }
    return "actualizado";
  }

function eliminarGranos() {
    let cualGrano = prompt("Ingrese que grano desea ingresar \n -Arroz \n -Frijoles \n -Lentejas")
    let cantidad;
    switch (cualGrano.toLowerCase()) {
      case "arroz":
        cantidad = localStorage.getItem("arroz");
        localStorage.setItem("arroz", parseInt(cantidad) - parseInt(prompt("Ingrese la cantidad que desea eliminar")));
        break;
      case "frijoles":
        cantidad = localStorage.getItem("frijoles");
        localStorage.setItem("frijoles", parseInt(cantidad) - parseInt(prompt("Ingrese la cantidad que desea eliminar")));
        break;
      case "lentejas":
        cantidad = localStorage.getItem("lentejas");
        localStorage.setItem("lentejas", parseInt(cantidad) - parseInt(prompt("Ingrese la cantidad que desea eliminar")));
      default:
        return console.log("Producto no encontrado");
        break;
    }
    return "actualizado";
}