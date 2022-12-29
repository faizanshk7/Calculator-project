let result=document.getElementById("inputext");



function cal(number){
    result.value+=number;
}
function Result(){
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("Enter the valid result");
    }
    
}
function  clr(){
    result.value="";
}
function del(){
    result.value=result.value.slice(0,-1);
}
