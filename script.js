let button1=document.querySelector(".button1");
let button2=document.querySelector(".button2");
//let input1=document.querySelector(".input1");
//let input2=document.querySelector(".input2");
let result=document.querySelector(".result");

button2.onclick=function(){
let userinput1=document.querySelector(".input1").value;
  let userinput2=document.querySelector(".input2").value;
  
  
  if (userinput1==="yes" && userinput2==="3"){
    result.innerHTML="I love you"
}
  else if(userinput1==="yes" && userinput2==="2"){
    result.innerHTML="Ok average"
  }
  else if(userinput1==="yes" && userinput2==="1"){
    result.innerHTML="Your very weird"
  }
  else if(userinput1==="no" && userinput2==="1"){
    result.innerHTML="i hate you"
  }

};



 