function incluirApostas() {

    let inNome = document.getElementById('inNome')
    let InPeso = document.getElementById('inPeso');

    let nome = inNome.value;
    var peso = Number(InPeso.value)

    if (nome == "" || peso == 0 || isNaN(peso)) {
        alert("informe nome e peso da aposta")
        inNome.focus()
        inNome.value = ""
        InPeso.value = ""
        return;
    }
    if (verApostaExiste(peso.toString())) {
        alert("alguem ja apostoum esses peso, informe outro!!");
        InPeso.focus();
        InPeso.value = "";
        return;
    }
    // se houver dados no localst0rage
    // se for a primeira aposta 
    if (!localStorage.getItem("melanciaNome")) {
        alert("Primeira Aposta")
        localStorage.setItem("melanciaNome", nome);
        localStorage.setItem("melanciaNome", peso);
    } else {
        alert("Aposta adicionada")
        let melanciaNome = localStorage.getItem('melanciaNome')
        let melanciaPeso = localStorage.getItem('melanciaPeso')

        melanciaNome += ';' + nome;
        melanciaPeso += ';' + peso;

        localStorage.setItem('melanciaNome', melanciaNome);
        localStorage.setItem('melanciaPeso', melanciaPeso);
    }

    mostrarApostas();
    inNome.value = "";
    InPeso.value = "";
    inNome.focus();
}

function verApostaExiste(peso) {
    //se existe algum dado salvo
    if (localStorage.getItem('melanciaPeso')) {

        let arrayPesos = localStorage.getItem('melanciaPeso').split(';')
        if (arrayPesos.indexOf(peso) >= 0) {

            return true;
        }
    }
    return false;
}

function mostrarApostas() {
    //recuperar o elemento <pre>
    let outApostas = document.getElementById('outApostas');

    // se não ha apostas armazenadas
    if (!localStorage.getItem('melanciaNome')) {

        //limpar o elemento
        outApostas.textContent = ""
        return;
    }
    //recuperar dados do locastore
    let arrayNomes = localStorage.getItem('melanciaNome').split(';')
    let arrayPesos = localStorage.getItem('melanciaPeso').split(';')

    let linhas = ""; // ira acumular as linhas (apostas) a serem exibidas

    for (let i = 0; i < arrayNomes.length; i++) {
        linhas += arrayNomes[i] + " - " + arrayPesos[i] + 'gr \n';
    }

    outApostas.textContent = linhas;
}

function verificarVencedor(){
    if(! localStorage.getItem("melanciaNome"))
    alert("não ha apostas cadastradas!!")
    return;
}

mostrarApostas();

let btApostar = document.getElementById('btApostar')
btApostar.addEventListener('click', incluirApostas);
