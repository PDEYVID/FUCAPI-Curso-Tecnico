function trocarClube() {
    //criar referencia aos elementos da pagina
    let imgClube = document.getElementById('imgClube')
    let divTitulo = document.getElementById('divTitulo')

    //armazena a lista de clubes
    let clubes = ["Brasil", "Pelotas", "Farroupilha"]
    let selecao;

    for (let i = 0; i < 4; i++) {
        if (inputsRadio[i].checked == true) {
            selecao = i;
            break;
        }
    }

    if (selecao <= 2) {
        divTitulo.className = "row cores" + clubes[selecao];

        imgClube.src = "img/" + clubes[selecao].toLowerCase() + '.png';
        imgClube.className = 'exibe';
        imgClube.alt = "simbolo do" + clubes[selecao];

        localStorage.setItem("clube", clubes[selecao]);
    }else{
        divTitulo.className = "row"
        imgClube.className='oculta';
        imgClube.alt="";
        localStorage.removeItem("clube");
    }
}

function verificarClube() {
    let clube = localStorage.getItem("clube")
    //se já estiver salvo algum clube

    if (clube) {

        if (clube == 'Brasil') {
            inputsRadio[0].checked = true;
        } else if (clube == 'Pelotas') {
            inputsRadio[1].checked = true;
        } else {
            inputsRadio[2].checked = true
        }

        trocarClube();

    }
}



//capturar as tags inputs da pagina
var inputsRadio = document.getElementsByTagName('input')


for(let i = 0; i<inputsRadio.length; i++){
    inputsRadio[i].addEventListener('change', trocarClube);
}

verificarClube();