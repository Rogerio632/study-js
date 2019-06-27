var containerElement = document.querySelector("div#app");
var ulElement = document.querySelector("#app ul");

var inputElement = document.createElement("input");
inputElement.setAttribute("type", "text");
inputElement.setAttribute("id", "github_user");

var buttonElement = document.createElement("button");
buttonElement.setAttribute("id", "submit");
buttonElement.setAttribute("onclick", "showGithUser()");

buttonText = document.createTextNode("Pesquisar");
buttonElement.appendChild(buttonText);

containerElement.appendChild(inputElement);
containerElement.appendChild(buttonElement);
containerElement.appendChild(ulElement);

function showGithUser() {

    ulElement.innerHTML = "";
    ulElement.innerHTML = "Só um instante!";

    var github_user = inputElement.value;

    axios.get(`https://api.github.com/users/${github_user}/repos`)

    .then(response => {
       
            ulElement.innerHTML = "";

       
            for (let number = 0; number < response.data.length; number++) {

                var liElement = document.createElement("li");
                var aElement = document.createElement("a");
                aElement.setAttribute("href", `https://github.com/${response.data[number].full_name}`);
                aElement.style.textDecoration = "none";
                aElement.style.color = "#000000";
                aElement.style.cursor = "pointer";

                aText = document.createTextNode(`${response.data[number].name}`);

                aElement.appendChild(aText);
                liElement.appendChild(aElement);

                ulElement.appendChild(liElement);

            }
            
        }).catch(error => {

            ulElement.innerHTML = "404! Usuário não encontrado... D:";


        });
        

            
}
