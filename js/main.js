
// /* ------------------------  */
// /* TRABALHANDO COM AJAX PURO */
// /* ------------------------ */

// // //inicializa o ajax
// // var xhr = new XMLHttpRequest();


// // //ao abrir a conexão, é especificado
// // //o tipo de conexão e em qual URL
// // //ele irá buscar essas informações
// // xhr.open('GET', 'https://api.github.com/users/Rogerio632');
// // xhr.send(null);

// // //verifica se os dados carregaram, para só assim
// // //inicializar todo o resto da página
// // xhr.onreadystatechange = function(){

// //     if(xhr.readyState === 4){

// //     console.log(JSON.parse(xhr.responseText));

// //     }


// // }

// /* ------------------------  */
// /* TRABALHANDO COM PROMISSE  */
// /* ------------------------ */
// var minhaPromise = function () {

//     //resolve: caso seja encontrado resultado positivo
//     //reject: caso não seja encontrado nenhum resultado
//     return new Promise(function (resolve, reject) {

//         //inicializa o ajax
//         var xhr = new XMLHttpRequest();

//         //inicia uma conexão, discriminando o método 'GET'
//         //e de onde será retirada a informação
//         xhr.open('GET', 'https://api.github.com/users/Rogerio632');
//         xhr.send(null);

//         //
//         xhr.onreadystatechange = function () {

//             //4 = operação concluída
//             if (xhr.readyState === 4) {

//                 //retorno Ok
//                 if (xhr.status === 200) {

//                     //retorna a informação buscada
//                     resolve(JSON.parse(xhr.responseText));

//                 } else {

//                     //retorna um erro
//                     reject('Erro na requisição');

//                 }



//             }


//         }
//     });
// }

// //a função é executada
// //a estrutura me lembra o try, catch
// //devido a isso, seguindo a mesma lógica,
// //o then tenta executar a informação recebida
// //caso não consiga, capture e mostre o erro
// minhaPromise()
//     .then(function (response) {

//         console.log(response);

//     })
//     .catch(function (error) {

//         console.warn(error);

//     });

axios.get('https://api.github.com/users/Rogerio632')
    .then(function(response){

    console.log(response);

    })
    .catch(function(error){

        console.warn(error);

    });


















































