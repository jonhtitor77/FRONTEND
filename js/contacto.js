//creo funcion validar
function validateForm(){
    
let nombre = document.getElementById('name').value;
let email = document.getElementById('mail').value;
let msj = document.getElementById('msj').value;
let isValid = true;

//valido si el campo nombre esta vacio
if(nombre.trim() === ''){
    showERROR('empty-name','Debe escribir un nombre');
    isValid = false;
}else {
    hideERROR('empty-name');
}
if( email.trim() === ''){
    showERROR('empty-mail',"Debe escribir un email");
    isValid= false;
}else{
    hideERROR('empty-mail');
}
if(msj.trim() === ''){
    showERROR('empty-msj',"No escribio su mensaje");
    isValid = false;
}else{
    hideERROR('empty-msj');
}


return isValid;
}
//creo funcion de error
function showERROR(fielId, message){
    const errorElement =document.getElementById(fielId +'-error');
    errorElement.textContent = "❌ " + message;
    errorElement.style.display = 'block';
}



// creo funcion que oculte mensajes de error
function hideERROR(fielId){
    const errorElement =document.getElementById(fielId + '-error')
    errorElement.style.display = 'none';
}

//listener para el boton enviar

let btn = document.getElementById('enviar');

btn.addEventListener('click',enviarFormulario);





function enviarFormulario(evt){
evt.preventDefault();

if (!validateForm()) return;

    let nombre = encodeURIComponent(document.getElementById('name').value);
    let email = encodeURIComponent(document.getElementById('mail').value);
    let msj = encodeURIComponent(document.getElementById('msj').value);



let formularioUrl="https://docs.google.com/forms/d/e/1FAIpQLSeyNmVGk10KyOFD1_EPRx0SC4aPRlWmj1CjxvlFk2fJn1aEJg/formResponse?usp=pp_url&entry.795580734="+nombre+"&entry.1018255508="+email+"&entry.943132595="+msj;
console.log(formularioUrl);

window.open(formularioUrl, "_self");
}