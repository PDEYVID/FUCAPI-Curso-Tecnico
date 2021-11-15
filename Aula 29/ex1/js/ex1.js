
function trocarClube() {
  //criar referencia aos elementos da pagina
  let imgClube = document.getElementById('imgClube')
  let divTitulo = document.getElementById('divTitulo')

  let clube; //receber o nome do clube

  if (rbBrasil.checked) {
    clube = "Brasil"
  } else if (rbPelotas.checked) {
    clube = "Pelotas"
  } else {
    clube = "Farroupilha"
  }

  divTitulo.className = 'row cores' + clube;

  imgClube.src="img/"+ clube.toLowercase()+".png";
  imgClube.className="exibe";
  imgClube.alt="Simbolo do"+clube;

  localStorage.setItem("clube", clube);
 
}

function verficarClube() {
  let clube = localStorage.getItem("clube")

  if ("clube") {
    if (clube === "brasil") {
      rbBrasil.checked = true;
    } else if (clube === "pelotas") {
      rbPelotas.checked = true;
    } else {
      rbFarroupilha.checked = true
    }

    trocarClube();

  }
}
//recuperando os radiobutton's
var rbBrasil = document.getElementById('rbBrasil')
var rbPelotas = document.getElementById('rbPelotas')
var rbFarroupilha = document.getElementById('rbFarroupilha')

//associa ao evento 'change' a function trocarCLube()
rbBrasil.addEventListener('change', trocarClube)
rbPelotas.addEventListener('change', trocarClube)
rbFarroupilha.addEventListener('change', trocarClube);

trocarClube();
