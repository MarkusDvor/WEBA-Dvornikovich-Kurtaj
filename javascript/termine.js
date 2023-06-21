let input = document.getElementById("inputText");
        let list= document.getElementById("list");
        let date = document.getElementById("inputDate");
        let minimalValue = 3;
        let listNum = 0;  

addList=(x)=>{
    // get
    let inputText = "leer";
    if(x != ''){
        inputText = x;
    } else {
        inputText = filterList(input.value,inputDate.value);
    }
    // set 
   if (inputText) {
    list.innerHTML += ` <li class=" my-3 py-3 shadow list-group-item " id="list${listNum}">
                <div class="row">
                <div class="col-2">
                    <span class=" h4" id="date${listNum}"> ${inputDate.value} </span>
                </div>  
                <div class="col-4">
                    <span class=" h4" id="text${listNum}"> ${inputText} </span>
                </div>
                <div class="col-2">
                     <button class=" btn btn-dark" onclick="deleteList(${listNum})">Löschen</button>
                     <button class=" btn btn-dark" onclick="editList(${listNum})">Bearbeiten</button>
                </div>          
                 </div>    
                </li> `;
        input.value=" ";
        localStorage.setItem("Termine"+listNum, inputText);
        listNum++;
   }
   return false;
}

filterList=(x,y)=>{
        if(!y && x.length < minimalValue){
            alert("Bitte ein Datum auswählen und mehr als 3 Zeichen eingeben!")
            return false;
        }
        else if(!y){
            alert("Bitte ein Datum auswählen!")
            return false;
        }
        else if (x) {
            if (x.length >= minimalValue) {
                return x;
            }
            else{
                alert("Bitte mehr als 3 Zeichen eingeben!")
            }
       }
       else{
            return false;
       }
}

filterListDate=(x,y)=>{
    if(!y && x.length < minimalValue){
        alert("Bitte ein Datum auswählen und mehr als 3 Zeichen eingeben!")
        return false;
    }
    else if(!y){
        alert("Bitte ein Datum auswählen!")
        return false;
    }
    else if (x) {
        if (x.length >= minimalValue) {
            return y;
        }
        else{
            alert("Bitte mehr als 3 Zeichen eingeben!")
        }
   }
   else{
        return false;
   }
}

editList=(listId)=>{
    let currentText = document.getElementById(`text${listId}`);
    let newText = prompt("Wollen Sie die Liste bearbeiten?",currentText.innerHTML);
    if (filterList(newText,inputDate)) {
        currentText.innerHTML = newText; 
    }
}

deleteList=(listId)=>{
    let current = document.getElementById(`text${listId}`).innerHTML;
       let deleteComfirm = confirm(`Sind Sie sicher? ${current} wird gelöscht`);
    if (deleteComfirm) {
         let p = document.getElementById("list")
        let c = document.getElementById(`list${listId}`);
        p.removeChild(c);
        localStorage.removeItem("Termine"+listId);
        console.log(listId);
    }
    else{
        console.log("gelöscht");
    }
};

function loadList(){
    Object.keys(localStorage).forEach((key) => {
        if(key.includes("Termine")){
            console.log(localStorage.getItem(key));
            addList(localStorage.getItem(key));
        }
        });    
}

loadList();
