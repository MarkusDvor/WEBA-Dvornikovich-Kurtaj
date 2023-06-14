function toggleClockFunction() {
    var checkBox = document.getElementById("btncheck-datumuhr");
    var card = document.getElementById("col-clock");
  
    if (checkBox.checked == true){
        card.style.display = "block";
    } else {
        card.style.display = "none";
    }
}

function toggleTodoFunction() {
    var checkBox = document.getElementById("btncheck-todo");
    var card = document.getElementById("col-todo");
  
    if (checkBox.checked == true){
        card.style.display = "block";
    } else {
        card.style.display = "none";
    }
}

function toggleTermineFunction() {
    var checkBox = document.getElementById("btncheck-termine");
    var card = document.getElementById("col-termine");
  
    if (checkBox.checked == true){
        card.style.display = "block";
    } else {
        card.style.display = "none";
    }
}

function togglePersonenFunction() {
    var checkBox = document.getElementById("btncheck-personen");
    var card = document.getElementById("col-personen");
  
    if (checkBox.checked == true){
        card.style.display = "block";
    } else {
        card.style.display = "none";
    }
}

function toggleGallerieFunction() {
    var checkBox = document.getElementById("btncheck-gallerie");
    var card = document.getElementById("col-gallerie");
  
    if (checkBox.checked == true){
        card.style.display = "block";
    } else {
        card.style.display = "none";
    }
}

function toggleWaehrungFunction() {
    var checkBox = document.getElementById("btncheck-wrechner");
    var card = document.getElementById("col-wrechner");
  
    if (checkBox.checked == true){
        card.style.display = "block";
    } else {
        card.style.display = "none";
    }
}