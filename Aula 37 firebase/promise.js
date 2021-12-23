// promise -> classe para operações assincronas
const p = new Promise((resolve, reject) => {
    let num = 40;
    if (num % 2 == 0) {
        resolve(num) // operação ocorreu com sucesso 
    } else {
        reject('falhou')// operação falhou
    }

})

//p.then => executado quando promise true
p.then((num) => {
    console.log(num);
})

    //
    .catch((reason) => {
        console.log(reason);
    })
