const mensagem = `Desde o show, que pra mim foi algo muito especial por estar com você e compartilhar aquele momento, tenho escutado muito a Cinema deles.

Cada vez que ouço essa música, só consigo pensar no quanto foi bom estar ao seu lado, vivendo aquilo juntos.

Sinto que tudo o que passamos ainda tem muito a ser vivido, e não consigo aceitar a ideia de deixar isso acabar agora.

Sei que a vida é cheia de altos e baixos, mas eu realmente acredito que o que a gente tem é algo que vale a pena continuar.

Não quero que essa história termine aqui.

Não agora.

Let me be your cinema (Again).

Stay?`;

const p = document.getElementById('mensagem');

let index = 0;

function typeWriter() {
  if (index < mensagem.length) {
    p.innerHTML += mensagem.charAt(index) === '\n' ? '<br><br>' : mensagem.charAt(index);
    index++;
    setTimeout(typeWriter, 50); // Diminui a velocidade de digitação
  }
}

window.onload = typeWriter;
