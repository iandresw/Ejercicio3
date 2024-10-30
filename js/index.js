
function kiometros_metros(kilometros){
    return kilometros*1000
}
function metros_centimetros(metros){
    return 100*metros
}
function pies_pulgadas(pies){
    return pies*12
}
function yardas_pulgadas(yarda){
    return yarda*36
}


function calcular(){
    const selectElement = document.getElementById("conversiones");
    const valorSeleccionado = selectElement.value;
    let strConvertir = document.getElementById("valConvertir").value
    
    if (valorSeleccionado==""){

    }
    
    
    if (valorSeleccionado == ""){
        warning("Debe selecionar una opcion")
    } else{
        if (strConvertir == ""){
            warning("valor a en blanco")
        } else{
            let valor = parseInt(strConvertir)
            if (valorSeleccionado=='1'){
                document.getElementById("valResultado").value = kiometros_metros(valor)
            }else if (valorSeleccionado=='2'){
                document.getElementById("valResultado").value = metros_centimetros(valor)
            }
            else if (valorSeleccionado=='3'){
                document.getElementById("valResultado").value = pies_pulgadas(valor)
            }
            else if (valorSeleccionado=='4'){
                document.getElementById("valResultado").value = yardas_pulgadas(valor)
            }
      
        }
    }
}

function limpiar(){
    document.getElementById("valResultado").value=""
    document.getElementById("valConvertir").value=""
    document.getElementById("conversiones").value=""


}

function warning(mensaje){
    Swal.fire({
        icon: "warning",
        title: "Ops..",
        text: mensaje
    })
}