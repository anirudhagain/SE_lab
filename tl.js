let calci = document.querySelector("#form");

calci.addEventListener("submit",function(events){

    events.preventDefault();
    let num1= document.querySelector("#num1").value;
    let num2= document.querySelector("#num2").value;

    let opp=document.querySelector("#opp").value;

    console.log(opp);
    switch(opp){
        case "+":
            document.querySelector("#cool").innerHTML=`Result = ${Number(num1)+Number(num2)}`;
            break;
        case "-":
            document.querySelector("#cool").innerHTML=`Result = ${Number(num1)-Number(num2)}`;
            break;
        case "*":
            document.querySelector("#cool").innerHTML=`Result = ${Number(num1)*Number(num2)}`;
            break;
        case "/":
            document.querySelector("#cool").innerHTML=`Result = ${Number(num1)/Number(num2)}`;

    }
    


})

