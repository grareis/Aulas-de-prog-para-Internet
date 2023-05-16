var entrada = document.querySelector('#entrada');
//console.log(entrada);
var botao = document.querySelector('#botao');
var lista = document.getElementsByTagName('ul')[0];

/*botao.onclick = function(){
    var msg = entrada.value;
    console.log(`botao clicado: ${msg}`);
}*/

botao.onclick = function(){
    let msg = entrada.value;
    let no = `<li class="list-group-item">${msg}</li>`
    lista.innerHTML += no;
    console.log(`botao clicado: ${msg}`);
}

entrada.addEventListener('keyup', function(event){
    /*let aux = event.target.value;
    console.log(aux);
    console.log('key:'+ event.key );
    console.log('keyCode:' + event.keyCode);*/
    event.preventDefault();
    if(event.keyCode == 13){
      //console.log(`Tarefa: ${event.target.value}`);  
      botao.click();
    }    
    
});