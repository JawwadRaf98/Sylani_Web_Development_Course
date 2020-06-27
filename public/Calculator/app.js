function getBackValue(){
    return document.getElementById("back").innerText;
}
function pushSign(sign){
    document.getElementById("back").innerText += sign
}
function getFrontValue(){
    return document.getElementById("front").innerText;
}
function setBackValue(num){
    document.getElementById("back").innerText += num;
}
function setFrontValue(num){
    if (num === ""){
        document.getElementById("front").innerText = ""
    }
    else{
        document.getElementById("front").innerText += num;
    }
}

function clearFun(){
    console.log("clear funcation call")
    document.getElementById("back").innerText = '';
    document.getElementById("front").innerText = '';
}

function getNumber(num){    
    setFrontValue(num)
}
function operator(sign){
    var value = getFrontValue();
    console.log(value + sign);
    var pushValue =  " " +sign+ " "
    setBackValue(value )
    pushSign(pushValue)
    setFrontValue("")
}

function finalValue(num){
    if (num === ""){
        document.getElementById("front").innerText = ""
    }
    else{
        setBackValue("")
        document.getElementById("front").innerText = commaSepValue(num);
    }
}

function equalOpt(){
   var back = getBackValue();
   var front = getFrontValue();
   if(back === "" && front === ""){
    document.getElementById("front").innerText = 0
   }
   else{
        var totalValue = back+front;
        document.getElementById("front").innerText = eval(totalValue)
        document.getElementById("back").innerText = ""
   }
   
}
function doubleZero(num){
    document.getElementById("front").innerText += "00";
}
function tripleZero(num){
    document.getElementById("front").innerText += "000";
}
function backSpace(){
    var front = getFrontValue()
    // console.log(front.slice(0, front.length - 1));
    document.getElementById("front").innerText  = front.slice(0, front.length - 1); 
}