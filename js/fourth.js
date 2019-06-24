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

    var github_user = inputElement.value;

    axios.get(`https://api.github.com/users/${github_user}/repos`)
        .then(response => {

            for (let result of Object.keys(response.data)) {

                var length = response.data.length;

                var liElement = document.createElement("li");

                liText = document.createTextNode(`${result}`);

                liElement.appendChild(liText);

                ulElement.appendChild(liElement);


            }
        }).catch(error => {

            console.warn(error);

        });


}

