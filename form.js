var botaoAdcionar = document.querySelector("#adicionar-paciente");
 botaoAdcionar.addEventListener("click", function(){
 	event.preventDefault();
 
 	var form = document.querySelector("#form-adiciona");
 	// Extraindo informações do paciente do form
 	var paciente = obtemPacienteDoFormulario(form);
 	// Cria a tr e a td do paciente
 	var pacienteTr = montaTr(paciente);
 	// Adicionando o paciente na tabela
 	var tabela = document.querySelector("#tabela-pacientes");

 	tabela.appendChild(pacienteTr);

 });

 function obtemPacienteDoFormulario(form) {

 	return  {
 		nome: form.nome.value,
 		peso: form.peso.value,
 		altura: form.altura.value,
 		gordura: form.altura.value,
 		imc: calculaImc(form.peso.value, form.altura.value)
 	}
 }

 function montaTr(paciente) {

 	var pacienteTr = document.createElement("tr");
 	pacienteTr.classList.add("paciente");

 	var nomeTd = montaTd(paciente.nome, "info-nome");
 	var pesoTd = montaTd(paciente.peso, "info-peso");
 	var altutaTd = montaTd(paciente.altura, "info-altura");
 	var gorduraTd = montaTd(paciente.gordura, "info-gordura")
 	var imcTd = montaTd(paciente.imc, "info-imc");

 	pacienteTr.appendChild(nomeTd);
 	pacienteTr.appendChild(pesoTd);
 	pacienteTr.appendChild(alturaTd);
 	pacienteTr.appendChild(gorduraTd);
 	pacienteTr.appendChild(imcTd);


 	return pacienteTr;

 }

function montaTd(dado,classe) {

	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}