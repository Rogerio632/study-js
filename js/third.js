function checkAge(idade){

    return new Promise(function(resolve, reject){

    if(idade >= 18 ){

    resolve(`O usuário possui ${idade} anos e já é adulto!`);

    } else if(idade < 18 && idade > 0){

    reject(`O usuário possui ${idade} anos e num pode acessar a próxima página, não. ( ͡° ͜ʖ ͡°)`);

    }


    });
    
}

checkAge(18)
.then(function(response){

console.log(response);

}).catch(function(error){

    console.log(error);

});