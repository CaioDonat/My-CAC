let endPoint = document.getElementById("endPoint").innerHTML;
let endPoint_local = document.getElementById("endPoint").innerHTML;
var last_atendimento = 0;


function myFunction() {
  location.href = "/atdandamento.html"
}

function iniciarAtendimento() {
  location.href = "/iniciaratendimento.html"
}

function encerrarAtendimento() {
  location.href = "/atendimento.html"
}

function atualizarAatendimentoJS() {
  /*  
  
    const endPoint = 'https://central-atendimento-cliente.herokuapp.com/api';
    const route = '/atendimento/queue_next';
  
  
    const initDetails = {
      method: 'get',
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      mode: "cors"
    }
  
    fetch((endPoint + route), initDetails)
      .then(response => {
        document.getElementById("senhaAtual").innerHTML = `${response.numero_atendimento}${response.sufixo_atendimento}`;
  
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
  
        console.log(response.headers.get("Content-Type"));
        return response.json();
      }
      ).then(myJson => {
        document.getElementById("senhaAtual").innerHTML = `${myJson.numero_atendimento}-${myJson.sufixo_atendimento}`;
        console.log(JSON.stringify(myJson));
      })
      .catch(err => {
        console.log('Fetch Error :-S', err);
      });
  */
}

/*function fila() {
  const primeiraFila = document.getElementById("primeiroFila");
  primeiraFila.innerHTML = `
        <tr>
        <th class="tabela-1">SENHAS ANTERIORES</th>
        <th class="tabela-1"onclick="callNext()">GUICHÊ</strong></th>
        <tr>
        </tr>`

  const uri = `https://central-atendimento-cliente.herokuapp.com/api/atendimentos/queue/next`
  fetch(uri).then(r => r.json().then(r => {
    r.forEach(r1 => {

      primeiraFila.innerHTML += `
        <th class="tabela-1">${r1.numero_atendimento}${r1.sufixo_atendimento}</th>` + `<th class="tabela-2">${r1.numero_atendimento}</th>
        </tr>`

    });
  }))
}*/

function callNext() {
  const url = endPoint_local + `api/atendimentos/queue/already_called/`

  last_atendimento = 0;

  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    //body: JSON.stringify({})
  })
    .then(r => r.json().then(r => {
      if (r.success) {
        if (last_atendimento == r.r.id_atendimento) { } else {

          console.log("r.r[0].id_atendimento: " + r.r[0].id_atendimento);
          /*
                    last_atendimento = r.r.id_atendimento;
                    call = document.getElementById("senhaAtual");
                    call.innerHTML = "";
          
                    call.innerHTML += `<a id="senhaAtual" class="senhaTelao">${r.r.numero_atendimento}-${r.r.sufixo_atendimento}</a>`  
          */
        }
      }
    }))
}

function diaHora() {
  data = document.getElementById("data")

  now = new Date
  document.write("Hoje é " + now.getDay() + ", " + now.getDate() + " de " + now.getMonth() + " de " + now.getFullYear())

  data = now
}

function time() {
  today = new Date();
  h = today.getHours();
  m = today.getMinutes();
  s = today.getSeconds();
  document.getElementById('hora').innerHTML = h + ":" + m;

  let data = new Date();
  let dataFormatada = ((data.getDate())) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear();
  console.log(dataFormatada);
  document.getElementById("data").innerHTML = dataFormatada
}