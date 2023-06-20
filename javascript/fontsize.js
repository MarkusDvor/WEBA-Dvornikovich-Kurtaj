var big = false;

function fontMinus(){
    if(big == true){
        $( "h1" ).css( "font-size", "2.5rem");
        $( ".h1" ).css( "font-size", "2.5rem");
        $( "h2" ).css( "font-size", "medium");
        $( ".h2" ).css( "font-size", "medium");
        $( "p" ).css( "font-size", "1rem");
        $( ".header" ).css( "font-size", "1rem");
        $( ".body" ).css( "font-size", "1rem");
        $( ".btn-outline-primary" ).css( "font-size", "1rem");
        $( ".btn-dark" ).css( "font-size", "1rem");

        big = false;
        localStorage.setItem("fontSize", big);
        console.log(big);
    }
};

function fontPlus(){
    if(big == false){
        $( "h1" ).css( "font-size", "3rem");
        $( ".h1" ).css( "font-size", "3rem");
        $( "h2" ).css( "font-size", "1.5rem");
        $( ".h2" ).css( "font-size", "1.5rem");
        $( "p" ).css( "font-size", "1.5rem");
        $( ".header" ).css( "font-size", "1.2rem");
        $( ".body" ).css( "font-size", "1.2rem");
        $( ".btn-outline-primary" ).css( "font-size", "1.5rem");
        $( ".btn-dark" ).css( "font-size", "1.5rem");

        big = true
        
        localStorage.setItem("fontSize", big);
        console.log(big);
    }  
};