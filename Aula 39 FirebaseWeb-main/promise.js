// Promise -> classe para operações assincronas
const p = new Promise( (resolve , reject) =>{
  let num = 37;
  if(num%2==0){
    resolve( num ) // operacao ocorreu com sucesso
  }else{
    reject('falhou') // operacao falhou
  }
  
}  )


p.then( (num) =>{ // p.then => executado quando promise true
  console.log(num);
})
.catch( (reason) =>{
  console.log(reason);  
})