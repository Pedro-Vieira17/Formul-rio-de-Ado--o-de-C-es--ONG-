document.getElementById("FormularioAdocao").addEventListener ("submit", function (e){
e.preventDefault();

let nome = document.getElementById("nome").value;
let email = document.getElementById("email").value;
let cpf = document.getElementById("cpf").value;
let telefone = document.getElementById("telefone").value;
let idade = document.getElementById("idade").value;
let cidade = document.getElementById("cidade").value;
let lugar = document.getElementById("lugar").value;
let quintal = document.querySelector('input[mame="quintal"]:checked');
let pet = document.querySelector('input[name="pet"]:checked');
let horas = document.getElementById("horas").value;
let motivo = document.getElementById("motivo").value;
let permição = document.getElementById("permição").checked;
let seguro = document.getElementById("seguro").checked;
let financeiro = document.getElementById("financeiro").checked;
let impulso = document.getElementById("impulso").checked;
let termo = document.getElementById("termo").checked;




if(nome.length < 3 ) return alert("Nome Inválido");
if(!email.includes("@")) return alert("Email Inválido");
if(cpf=="") return alert ("CPF obrigatório");
if(telefone.length <8) return alert ("Telefone inválido");
if(idade < 18) return alert ("Obragatório maior de 18!");
if(cidade == "") return alert ("Cidade obrigatória");
if(lugar =="") return alert ("Lugar onde você mora é obrigatório");
if(quintal =="")return alert ("Informe o quintal");
if(pet =="") return alert ("Informe se ja teve pet");
if(horas =="" || horas < 0) return alert ("Horas inválidas");
if(motivo.length <10) return alert ("Motivo curto. Explique mais!");
if(!termo) return alert (" Aceite os termos para a adoção!!");



if(lugar == "apartamento" && quintal.value == "sim"){
    return alert ("Apartamento não pode ter quintal!");
}

if(lugar == "apartamento" && !permite == "sim"){
    return alert ("Apartamento não permite animais!");
}

if(lugar == "casa" && !seguro){
    return alert ("Informe se o quintal é seguro!");
}

if(horas >8){
    return alert ("Animal ficará muito tempo sozinho!");
}

if(pet.value == "nao"){
    return alert ("A ONG poderá acompanhar sua adaptação");
}

let motivosInvalidos = ["quero", "porque sim", "porque eu quero"];
if (motivosInvalidos.includes(motivo.toLowerCase())){
    return alert ("Motivo inválido");
}

if(!financeiro){
    return alert ("Sem condições para ter um Pet.");
}

let impulsoInvalidos = ["hoje", "não importa", "ontem"];
if (impulsoInvalidos.includes(impulso.toLowerCase())){
    return alert ("Cuidado com sua decisão!!");
}



});