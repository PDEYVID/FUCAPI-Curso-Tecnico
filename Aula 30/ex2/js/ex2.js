function incluirApostas(){
    // recuperar inputs (nome e peso) 
    let inNome = document.getElementById("inNome")
    let inPeso = document.getElementById("inPeso")
  
    // recuperar nome e peso (strings)
    let nome = inNome.value;
    var peso = Number(inPeso.value) // peso é number
    
    // se vazios ou Not-a-Number
    if(nome== "" || peso== 0 || isNaN(peso)){
      alert("Informe nome e peso da aposta")
      inNome.focus() // joga o cursor no nome
      inNome.value = ""
      inPeso.value = ""
      return;
    }
    // verifica se aposta existe
    if( verApostaExiste(peso.toString() )){
      alert("Alguém já a apostou esse peso, informe outro!!");
      inPeso.focus();
      inPeso.value="";
      return;
    }
  
    //se for primeira aposta
    if(! localStorage.getItem("melanciaNome")){
      localStorage.setItem("melanciaNome",nome);
      localStorage.setItem("melanciaPeso",peso);
    }else{ // se já houver apostas
      //recuperando os dados Storage
      let melanciaNome = localStorage.getItem('melanciaNome')
      let melanciaPeso = localStorage.getItem('melanciaPeso')
  
      //concatenar o nome e o peso
      melanciaNome += ';' + nome;
      melanciaPeso += ';' + peso;
  
      //atualizar localStorage
      localStorage.setItem('melanciaNome',melanciaNome);
      localStorage.setItem('melanciaPeso',melanciaPeso );
  
    }
  
    mostrarApostas();
    inNome.value="";
    inPeso.value="";
    inNome.focus();  
  }
  // se aposta existe => true ; senao => false
  function verApostaExiste(peso){
    //se existe algum dado salvo 
    if(localStorage.getItem('melanciaPeso')){
  
      let arrayPesos = localStorage.getItem('melanciaPeso').split(';')
      if(arrayPesos.indexOf(peso) >= 0){
        return true; //aposta já existe 
      }
      
    }
    return false; // ainda nao tem aposta
  }
  
  // mostrar as apostas no site
  function mostrarApostas(){
    //recuperar o elemento <pre>
    let outApostas = document.getElementById('outApostas');
  
    //se não há apostas armazenadas
    if(! localStorage.getItem('melanciaNome') ){
      //limpar o elemento
      outApostas.textContent = ""
      return;
    }
    //recuperar dados do localStorage
    let arrayNomes = localStorage.getItem('melanciaNome').split(';')
    let arrayPesos = localStorage.getItem('melanciaPeso').split(';')
  
    let linhas = ""; // irá acumular as linhas(apostas) a serem exibidas
  
    for(let i = 0 ; i < arrayNomes.length ; i++){
      linhas  += arrayNomes[i] + " - " + arrayPesos[i]+'gr \n';
    }
    outApostas.textContent = linhas;
  }
  
  
  function verificarVencedor(){
    // se não há apostas cadastradas
    if(! localStorage.getItem("melanciaNome")){
      alert("Não há apostas cadastradas!!")
      return;
    }
    let pesoCorreto  = Number(prompt("Qual o peso da melancia?"))
  
    if( isNaN(pesoCorreto)  || pesoCorreto <=0 ){
      alert("DIgite um peso válido!!")
      return;
    }
  
    let arrayNomes = localStorage.getItem("melanciaNome").split(';');
    let arrayPesos = localStorage.getItem("melanciaPeso").split(';');
  
    //primeiro elemento 'senta no trono'
    let nomeVencedor = arrayNomes[0];
    let pesoVencedor = arrayPesos[0];
    let difVencedor, difAposta;
    for(let i=1 ; i< arrayNomes.length ; i++){
  
      //calcular a dif. de pesso do vencedor e da aposta atual
      difVencedor = Math.abs(pesoVencedor - pesoCorreto);
      difAposta = Math.abs(arrayPesos[i] - pesoCorreto);
  
      //se a difAposta for menor que difVencedor => atualizar vencedor
      if( difAposta < difVencedor){
        nomeVencedor = arrayNomes[i]
        pesoVencedor = arrayPesos[i]
      }
    }
  
    let mensagem = " Resultado - Peso Correto: " + pesoCorreto + "gr";
    mensagem+="\n----------------------------------------";
    mensagem+="\nVencedor: "+ nomeVencedor;
    mensagem+="\nAposta: "+pesoVencedor;
    alert(mensagem)
  
    //limpar elemento <pre>
    document.getElementById('outApostas').textContent=''
    localStorage.removeItem('melanciaNome');
    localStorage.removeItem('melanciaPeso');
  
  
  }
  
  function limparApostas(){
    if( confirm("Confirma a exclusão de todas as apostas?")){
      localStorage.removeItem("melanciaNome");
      localStorage.removeItem("melanciaPeso");
      mostrarApostas();
    }
  }
  mostrarApostas();
  let btApostar = document.getElementById('btApostar');
  btApostar.addEventListener('click',incluirApostas);
  
  let btVencedor = document.getElementById('btVencedor');
  btVencedor.addEventListener('click',verificarVencedor);
  
  let btLimpar = document.getElementById('btLimpar')
  btLimpar.addEventListener('click',limparApostas);
  
  function contadorVisitas(){
    let mensagem;
  
    if(!localStorage.getItem("visitas")){
      mensagem = "Muito bem vindo! Esta é a sua primeira visita";
      document.getElementById('textVisitas').textContent = mensagem;
      localStorage.setItem('visitas','1');
      return;
    }
  
    
    let numVisitas = Number(localStorage.getItem('visitas'))
    //caso variavel tenha valor invalido
    if(isNaN(numVisitas) || numVisitas <= 0){
      mensagem = "Erro contador visitas";
      document.getElementById('textVisitas').textContent = mensagem;
      localStorage.setItem('visitas','1');
      return;
    }
  
    numVisitas++;
    mensagem ="Que bom vc voltou! Esta é a sua visita de numero "+
                    numVisitas + " ao nosso site";
    document.getElementById('textVisitas').textContent = mensagem;
    localStorage.setItem('visitas', numVisitas.toString());
  
  }
  
  contadorVisitas();