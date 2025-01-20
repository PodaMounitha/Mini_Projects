const mytext=document.getElementById("mytext");
const mysubmit=document.getElementById("mysubmit");
const resultelement=document.getElementById("resultelement");

let age;
mysubmit.onclick=function(){
    age=mytext.value;
    age=Number(age);
    if(age>18&&age<60){
        resultelement.textContent=`You are eligible for driving license...`;
    }
    else{
        resultelement.textContent=`You are not eligible for driving license...`;
    }
}


