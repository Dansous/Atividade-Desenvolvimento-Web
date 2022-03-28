function CalcIMC() {
    var peso = document.getElementById("weight").value;
    var altura = document.getElementById("height").value;

    if (altura.includes(',')){
        alert("Utilize")
        return;
    }

     var IMC = peso / (altura * altura)
    console.log(IMC)
    
    if (IMC < 18.5) {
        alert("Seu IMC é de " + IMC.toFixed(2) + " CLASSIFICAÇÃO MAGREZA");
      } else if (IMC > 18.5 && IMC < 25) {
        alert("Seu IMC é de " + IMC.toFixed(2) + " CLASSIFICAÇÃO NORMAL");
      } else if (IMC >= 25 && IMC < 30) {
        alert("Seu IMC é de " + IMC.toFixed(2) + " CLASSIFICAÇÃO SOBREPESO");
      } else if (IMC >= 30 && IMC < 40) {
        alert("Seu IMC é de " + IMC.toFixed(2) + " CLASSIFICAÇÃO OBESIDADE");
      } else if (IMC >= 40 && IMC < 80) {
        alert("Seu IMC é de " + IMC.toFixed(2) + " CLASSIFICAÇÃO OBESIDADE GRAVE");
      } else if (IMC > 90000) {
        alert("Informações incorretas");
      } else {
        alert("Digite os dados corretamente!");
      }
    
      return IMC;
    }
    
