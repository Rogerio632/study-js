var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");


//aqui fazemos a busca dos valores gravados no localstorage
//usando o getItem e identificando pelo nome da key
//no caso, estamos utilizando 'list_todos'
//o JSON.parse serve para transformar o array em string,
//para string em array
// o "|| []" serve como alternativa caso não seja encontrado
//nenhum valor no localstorage
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function showTodos() {

    //limpa a lista
    listElement.innerHTML = '';

    // Semelhante ao foreach do php, primeiro se diz qual
    //será o nome da variável que irá receber elemento por elemento
    //e após você diz onde fica a variável com este array.
    for (todo of todos) {

        //crio o elemento li
        var todoElement = document.createElement("li");
        
        //recebo os todos transformados em string como todo
        var textToTodo = document.createTextNode(todo);

        //identifico a posição do todo no array todos
        var position = todos.indexOf(todo);

        //crio o elemento <a>
        var aElement = document.createElement("a");
            aElement.setAttribute("href", "#");
            
            //seto um atributo que, ao ser clicado, apaga o índice selecionado
            aElement.setAttribute("onclick", "deleteTodo(" + position + ")");

            var aText = document.createTextNode("  Excluir");
            aElement.appendChild(aText);

        
        todoElement.appendChild(textToTodo);
        todoElement.appendChild(aElement);

        listElement.appendChild(todoElement);

        //resultado:
        //º Fazer Café
        //º Estudar JavaScript
        //º Acessar Comunidade RocketSeat
    }

}
showTodos();


function addTodos() {

    //recebe o valor digitado pelo user
    var todoText = inputElement.value;

    //adiciona o valor digitado pelo usuário ao último índice do array
    todos.push(todoText);

    //limpa a input
    inputElement.value = '';
    
    //carrega os elementos da li
    showTodos();
    saveToStorage();


}

function deleteTodo(position){

    //apaga 1 índice especificado no position
    todos.splice(position, 1);

    showTodos();
    saveToStorage();

}

//para salvar as alterações em memória local

function saveToStorage(){

    //seta quais são os items que serão gravados na memória local
    //no primeiro parâmetro damos um nome qualquer como identificador
    //no segundo parâmetro, colocamos o array com os dados
    //perceba que usamos o JSON.stringify
    //nada mais é que transformar o array em string
    localStorage.setItem('list_todos', JSON.stringify(todos));


}

//ao clicar no botão de adc, o addTodos é acionado
buttonElement.onclick = addTodos;

