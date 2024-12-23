function hello(){
//    console.log(element.innerHTML)
console.log(document.querySelector(".ptag"))
//    element.innerHTML = "HI from JS"
document.querySelector(".ptag").innerHTML = "HI from JS"
}


function turnOff(element) {
    if(element.innerText == "ON"){

        element.innerText = "Off";
        element.style.backgroundColor = "red"
    }else {
        element.innerText = "ON"
        element.style.backgroundColor = "green"
    }
}

function chooseLunch(element) {
    alert("You picked " + element.value);
}

var nameTag = document.querySelector("#name-tag");
function setName(element) {
    console.log(element.value);
    nameTag.innerText = element.value;
}


function message() {
    alert("Delayed message");    
}
    
console.log("Start");
setTimeout(message, 3000);
console.log("End");


