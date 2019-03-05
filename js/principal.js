console.log("Fui carregado de um arquivo externo");

var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

//para garantir que o codigo seja aplicado para todos os pacientes nos usamos o for
for( var i = 0; i< pacientes.length; i++){
    var paciente = pacientes[i]
    
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    var imc = peso / (altura * altura);
    // colocando o valor do cálculo na célula certa
    var tdImc = paciente.querySelector(".info-imc");
    tdImc.textContent = imc;
    
    // Validação dos dados inseridos
    var alturaEhValida = true;
    var pesoEhValido = true;
    
    if(peso <= 0 || peso > 1000){
        console.log("Peso inválido");
        tdImc.textContent = "Peso inválido!";
        pesoEhValido = false;
    }
    if(altura <= 0 || altura >= 3){
        console.log("Altura inválida");
        tdImc.textContent = "Altura inválida!";
        alturaEhValida = false;
    }
    if(pesoEhValido && alturaEhValida){
        var imc = peso / ( altura * altura);    
        tdImc.textContent = imc.toFixed(2);
    }
}