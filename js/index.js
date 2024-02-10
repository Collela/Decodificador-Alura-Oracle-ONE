const titulo = document.querySelector('h1');

function WriterStyle(tituloTexto){
    const textoArray = tituloTexto.innerHTML.split('');
    tituloTexto.innerHTML = '';

    textoArray.forEach((letra, i) => {
        setTimeout(() =>{
            tituloTexto.innerHTML += letra;
        }, 105 * i)

    })
}

WriterStyle(titulo);