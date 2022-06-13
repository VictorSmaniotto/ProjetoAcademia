let btnMenu = document.getElementById("btnMenu");
let menu = document.getElementById("menu");

btnMenu.addEventListener("click",function(){
    menu.classList.toggle("menuShow");
});

const cep = document.getElementById('cep');


cep.addEventListener('blur', function(){

    fetch("https://viacep.com.br/ws/"+ this.value +"/json/").then(function(response){

        response.json().then(function(endereco){
            document.getElementById("endereco").value = endereco.logradouro;
            document.getElementById("complemento").value = endereco.complemento;
            document.getElementById("bairro").value = endereco.bairro;
            document.getElementById("cidade").value = endereco.localidade;
            document.getElementById("estado").value = endereco.uf;
        });
    });

});