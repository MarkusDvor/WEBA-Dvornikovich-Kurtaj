farbe = 1

function color(){
    if(farbe==1)
    {
        value = 'lightgrey'
    }
    else{
        value = 'white'
    }
    document.body.style.backgroundColor=value;
    localStorage.setItem("Hintergrundfarbe", value);
    farbe=farbe*(-1)
    colorCheck(value);
}

function colorLoad()
{
    value=localStorage.getItem("Hintergrundfarbe")
    document.body.style.backgroundColor=value;
    colorCheck(value);
}

function colorCheck(){
    var check = document.getElementById("colorButton").checked;
    if(value=='lightgrey'&& !check){
        $("#colorButton").prop("checked", true);
    }
    else if(value=='white'&&check){
        $("#colorButton").prop("checked", false);
    }
}

function colorCheck(value){
    var check = document.getElementById("colorButton").checked;
    if(value=='lightgrey'&& !check){
        $("#colorButton").prop("checked", true);
    }
    else if(value=='white'&&check){
        $("#colorButton").prop("checked", false);
    }
}

