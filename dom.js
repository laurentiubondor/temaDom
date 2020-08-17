const name = document.getElementById("name");
const lastname = document.getElementById("lastname");
const form = document.getElementById("text-area");
const button = document.querySelector('#button');
const genul = document.getElementsByName("gender")


button.addEventListener("click", sendForm);
button.addEventListener("click", makeRed);
button.addEventListener("click", showname);
button.addEventListener("click", removeRed);
button.addEventListener("click", removeRed2);
button.addEventListener("click", genulmf);


function makeRed() {
    console.log('sa da click');
    console.log("numele este " + name.value);

    if (name.value && lastname.value) {
        console.log('este valida');
    } else {
        console.log('introdu numele');
        name.classList.add('invalid');
        lastname.classList.add('invalid');


    }
}

function sendForm() {
    console.log("descrierea este " + form.value);
}



function showname() {
    if (name.value && form.value)
        var para = document.createElement("P");
    para.innerHTML = "Thank you for contacting us." + name.value
    document.getElementById("mydiv").appendChild(para);
}

function removeRed() {
    if (name.value)
        name.classList.remove("invalid")
}

function removeRed2() {
    if (lastname.value)
        lastname.classList.remove("invalid")
}

function genulmf() {

    for (var i = 0; i < genul.length; i++) {
        if (genul[i].checked)
            console.log(genul[i].value)
    }
}