const email = document.getElementById("email")
const password = document.getElementById("password")
const form = document.getElementById("form")
const parrafo1 = document.getElementById("warningEmail")
const parrafo = document.getElementById("warningPass")

form.addEventListener("submit",e=>{
    e.preventDefault()
    let warningEmail = ""
    let warningPass = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ''
    parrafo1.innerHTML = ''
   
    if(!regexEmail.test(email.value)){
        warningEmail += 'El email no es valido <br>'
        entrar = true

    }
    if(password.value.length < 8){
        warningPass += 'La contraseña no es valida <br>'
        entrar = true
    }
    
   
    parrafo1.innerHTML = warningEmail

    parrafo.innerHTML =warningPass
    


}
)