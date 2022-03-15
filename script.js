function media() {
    let notaDoPrimeiroBimestre = parseFloat(document.getElementById("media1").value)
    let notaDoSegundoBimestre = parseFloat(document.getElementById("media2").value)
    let notaDoTerceiroBimestre = parseFloat(document.getElementById("media3").value)
    let notaDoQuartoBimestre = parseFloat(document.getElementById("media1").value)
    let notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4
    console.log(notaDoSegundoBimestre)
    let notaFixada = notaFinal.toFixed(1)

    let mediaFinal = document.getElementById("valorMediaFinal")

    let valorMediaFinal = notaFixada
    if(valorMediaFinal <= 6){
        mediaFinal.innerHTML = "Sua média foi " + valorMediaFinal + " Você está Reprovado!"
    }
    if(valorMediaFinal >= 7){
        mediaFinal.innerHTML = "Sua média foi " + valorMediaFinal + " Você está Aprovado!"
    }

}