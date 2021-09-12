op = 0;
d = 0;
window.addEventListener("keydown",keypressed);
window.addEventListener("keyup",keyupped);
function keyupped(event) {
    const keyPressed = event.keyCode;
    switch(keyPressed){
        case 48 : if(!event.shiftKey){
                    document.getElementById("0").classList.remove("active");
                  }
                  else {
                    document.getElementById(")").classList.remove("active");
                  }
                  break;
        case 49 : document.getElementById("1").classList.remove("active");
                  break;
        case 50 : document.getElementById("2").classList.remove("active");
                  break;
        case 51 : document.getElementById("3").classList.remove("active");
                  break;
        case 52 : document.getElementById("4").classList.remove("active");
                  break;
        case 53 : document.getElementById("5").classList.remove("active");
                  break;
        case 54 : document.getElementById("6").classList.remove("active");
                  break;
        case 55 : document.getElementById("7").classList.remove("active");
                  break;
        case 57 : if(!event.shiftKey){
                    document.getElementById("9").classList.remove("active");
                  }
                  else {
                    document.getElementById("(").classList.remove("active");
                  }
                  break;
        case 187: if(event.shiftKey){
                    document.getElementById("+").classList.remove("active");
                  }
                  else{
                    document.getElementById("=").classList.remove("active");
                  }
                  break;
        case 13 : document.getElementById("=").classList.remove("active");
                  break;
        case 189: if(!event.shiftKey){
                    document.getElementById("-").classList.remove("active");
                  }   
                  break;
        case 56:  if(event.shiftKey){
                    document.getElementById("*").classList.remove("active");
                  }
                  else {
                    document.getElementById("8").classList.remove("active");
                  }
                  break;
        case 191: if(!event.shiftKey){
                    document.getElementById("/").classList.remove("active");
                  }   
                  break;
        case 67 : document.getElementById("C").classList.remove("active");
                  break;
        case 8 :  document.getElementById("B").classList.remove("active");
                  break;
        case 190: document.getElementById(".").classList.remove("active");
                  break;
    }
}
function keypressed(event){
    const keyPressed = event.keyCode;
    switch(keyPressed){
        case 48 : if(!event.shiftKey){
                    document.getElementById("0").classList.add("active");
                    show(0);
                  }
                  else {
                    document.getElementById(")").classList.add("active");
                    show(")");
                  }
                  break;
        case 49 : document.getElementById("1").classList.add("active");
                  show(1);
                  break;
        case 50 : document.getElementById("2").classList.add("active");
                  show(2);
                  break;
        case 51 : document.getElementById("3").classList.add("active");
                  show(3);
                  break;
        case 52 : document.getElementById("4").classList.add("active");
                  show(4);
                  break;
        case 53 : document.getElementById("5").classList.add("active");
                  show(5);
                  break;
        case 54 : document.getElementById("6").classList.add("active");
                  show(6);
                  break;
        case 55 : document.getElementById("7").classList.add("active");
                  show(7);
                  break;
        case 57 : if(!event.shiftKey){
                        document.getElementById("9").classList.add("active");
                        show(9);
                    }   
                    else {
                        document.getElementById("(").classList.add("active");
                        show("(");
                    }
                    break;
        case 187: if(event.shiftKey){
                        document.getElementById("+").classList.add("active");
                        show("+");
                    }
                    else{
                        document.getElementById("=").classList.add("active");
                        equal("=");
                    }
                    break;
        case 13 : document.getElementById("=").classList.add("active");
                    equal("=");
                    break;
        case 189: if(!event.shiftKey){
                    document.getElementById("-").classList.add("active");
                    show("-");
                  }   
                  break;
        case 56: if(event.shiftKey){
                    document.getElementById("*").classList.add("active");
                    show("*");
                 }
                 else {
                    document.getElementById("8").classList.add("active");
                    show(8);
                 }
                 break;
        case 191: if(!event.shiftKey){
                    document.getElementById("/").classList.add("active");
                    show("/");
                  }   
                  break;
        case 67 : document.getElementById("C").classList.add("active");
                  show("C");
                  break;
        case 8 :  document.getElementById("B").classList.add("active");
                  show("B");
                  break;
        case 190: document.getElementById(".").classList.add("active");
                  show(".");
                  break;
    }
}
function show(current) {
    displayelement = document.getElementById("display-style");

    currentelmt = document.getElementById("1");
    if(current == "+" || current == "-" || current =="*" || current == "/"){
        if(op == 1)
            return ;
        op = 1;
        d = 0;  
    } 
    else if(current == "."){
        if(d==1)
            return ;
        d = 1;
    }
    else if (current == "C") {
        displayelement.innerHTML="";
        return;
    }
    else if (current == "B") {
        temp = displayelement.innerHTML;
        temp = temp.substring(0,temp.length-1);
        displayelement.innerHTML = temp;
        if(op == 1)
            op = 0;
        return ;
    }
    else {
        op = 0;
    }
    displayelement.innerHTML = displayelement.innerHTML+current;
}
function equal(current) {
    displayelement = document.getElementById("display-style");
    res = displayelement.innerHTML;
    console.log(res.length);
    if(res.length == 0)
        displayelement.innerHTML = "";
    else {
        try{
            displayelement.innerHTML = eval(res);
        }
        catch{
            displayelement.innerHTML = "Error";
        }
    }
    op = 0;
}