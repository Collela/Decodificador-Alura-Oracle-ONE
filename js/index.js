let msgText = "";
let resultMsg = "";
let msgResultado ="";

function criptografar(){
    msgResultado = msgTextValidada.replace(/e/g, "enter")
                                  .replace(/i/g, "imes")
                                  .replace(/a/g, "ai")
                                  .replace(/o/g, "ober")
                                  .replace(/u/g, "ufat");
    
    document.getElementById('textarea_result').innerHTML = msgResultado;
}

function descriptografar(){
    msgResultado = msgTextValidada.replace(/enter/g, 'e')
                                  .replace(/imes/g, 'i')
                                  .replace(/ai/g,'a')
                                  .replace(/ober/g,'o')
                                  .replace(/ufat/g,'u')
                                
    document.getElementById('textarea_result').innerHTML = msgResultado;
}   

function validarMensagem(){
    msgText = document.getElementById('textarea_mensagem').value;

    if(msgText !== ""){
        msgTextValidada = msgText.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(); 
        criptografar();
    }
    else{
        alert("Por favor preencher a caixa de texto com sua mensagem...");
    }
}

function copiar() {
    const textoCopiado = document.getElementById('textarea_result');
    const btCopy = document.getElementById('button_copy');

    btCopy.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(textoCopiado.value);
            alert("Texto copiado com sucesso...");
        } catch (error) {
            console.error(error.name, error.message);
            alert("Não foi possível copiar o texto. Por favor, tente manualmente.");
        }
    });
}

function showMenu(){
    const sMenu = document.getElementById('nav__menu');
    
    if (sMenu.style.display == 'flex') {
        sMenu.style.display = 'none';
    }else{
        sMenu.style.display = 'flex';
    }
}