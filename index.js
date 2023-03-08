let createBtuton=document.getElementById('createButton');
let category=document.getElementsByClassName('inputStyle');
var msgpNot = document.getElementsByClassName("msg");
let dispNot = document.getElementById("show");


// localStorage.clear();

let a=localStorage.getItem('tasks');
let getNum=localStorage.getItem('IdNum');

const parseTasks='';
let elem=[];
let idT;




//get id number from local storage


//get tasks from local storage
if(localStorage.getItem('tasks')){

  elem=JSON.parse(localStorage.getItem('tasks'));
  console.log(elem)
  
  
}
else{
  elem=[];

}



// try {
//    elem=JSON.parse(a);
// } catch (err) {
//   // 👇️ This runs
//   console.log('Error: ', err.message);
// }


// on click to create task button 
createBtuton.addEventListener('click',function(){
  let checkvalues=false;
  console.log("hello",category.length);
for(let item=0;item<category.length;item++){
  
  console.log(category[item].value.length==0)
  if(category[item].value.length==0){
    checkvalues=true;
    category[item].style.borderColor="#b33e3e";


    dispNot.style.backgroundColor="#fda3a2";
    dispNot.style.borderLeftColor="#b33e3e";
    msgpNot[0].style.color="#b33e3e";
    msgpNot[0].innerHTML="إملأ الحقول لإنشاء المهمة"
    dispNot.style.display="inline";
      setTimeout(tt,3000)
      function tt (){
        dispNot.style.display="none";
      }
      // break;

    
  }
  else{
    category[item].style.borderColor="black";
  }
  
}


console.log(e)

if(checkvalues==false){
  var e = document.getElementById("category").value;
  GetIdNum();
 
 
  elem.push({id:idT,title:category[0].value,details:category[1].value,catg:e,process:'on progress'});
  AddTasks(elem);
  setIdNum(idT);

  category[0].value="";
  category[1].value="";
  
 
  
  dispNot.style.backgroundColor="#bbfab5";
  dispNot.style.borderLeftColor="#48b33e";
   msgpNot[0].style.color="#48b33e";
   msgpNot[0].innerHTML="تمت إضافة المهمة بنجاح";
  
  dispNot.style.display="inline";

  setTimeout(tt,3000)
  function tt (){
    dispNot.style.display="none";
    // location.reload();
    
  }
  
  


 console.log(elem)

}
else{
  elem=JSON.parse(a);
}




});


function AddTasks(tasksObj){

  
 return  localStorage.setItem('tasks',JSON.stringify(tasksObj));

  // tasksObj.push({title:category[0].value,details:category[1].value,catg:e,completed:false})

}



function setIdNum(idnum){
  return  localStorage.setItem('IdNum',idnum);
}

 




function GetIdNum(){
  if(localStorage.getItem('IdNum')!=null){
    idT=parseInt(localStorage.getItem('IdNum'));
     console.log( typeof(idT))
    idT+=1;
 }
 else{
 idT=1111111;
 }
 
}



// console.log(titleTask());0

