async function verificarCredenciais() {
    const emailInformado = document.getElementById("email").value;
    const senhaInformada = document.getElementById("senha").value;

    let usuario = await lerUsuario(emailInformado);
    
    if (!usuario) {
        alert("E-mail informado incorretamente!");
        return;
    }

    if (emailInformado === usuario.email) {
        // alert("E-mail informado corretamente!");
        if (senhaInformada === usuario.senha) {
            // alert("Senha informada corretamente!");
            window.location = "home.html";
        } else
            alert("Senha informada incorretamente!")
    } else
        alert("E-mail informado incorretamente!");
}

async function lerUsuario(email) {
    const replit = 'https://d5dad652-419f-46c0-9925-861f90309d3c-00-1tmsqbxznmufz.picard.replit.dev/'; // URL do projeto no Replit.com.
    const url = replit + `usuarios?email=${email}`;
    let usuario;

    await fetch(url)
        .then(response => response.json())
        .then(json => 
            usuario = { "email": json[0].email, "senha": json[0].senha }
        )
        .catch(error => console.error(error))

    return usuario;
}