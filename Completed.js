// let a=localStorage.getItem('tasks');
// const parseTasks=JSON.parse(a);

var div=document.getElementById('display');

let dispNot = document.getElementById("show");
var msgpNot = document.getElementsByClassName("msg");


// var divFlex=document.getElementById('bodyFlex').style.display="none";
let elem;
let delList=[];

// console.log(parseTasks)
window.onload=function(){

        
        getTasks();

}


function getTasks(){


    //get tasks from local storage
     let a=localStorage.getItem('tasks');
     
     if(localStorage.getItem('tasks')){

      elem=JSON.parse(localStorage.getItem('tasks'));
    }
    else{
      elem=[]
    }
     console.log(elem)

     //loop on items in local storage and create elements in html
     elem.forEach(element => {
       
     if(element.process=='Completed'){
      delList.push(element.id);
      
      console.log(element.title)
      
            let newElement=document.createElement('div');
            newElement.className="displayElem";
          
        //   let divE= document.getElementsByClassName('displayElem');

           
           
            



            let elementTitle=document.createElement('p');
            
            elementTitle.innerHTML=element.title;
            elementTitle.style.fontSize="15px";
            elementTitle.style.flexGrow = "1";

            
            
            let span=document.createElement('span');
            span.className="del";
            span.innerHTML="Delete";
            span.style.fontSize="10px";
            


          

            
             

         

            
            newElement.appendChild(span);
            newElement.appendChild(elementTitle);
         
            
            
            
            

            div.appendChild(newElement);

            

            
          

      
     }

     

        
    });


    
    let del =document.getElementsByClassName('del');
    let poupMsg =document.getElementById('poupMsg');
    for(let itm=0;itm<del.length;itm++){
      
  
      del[itm].onclick=function(){
        poupMsg.style.display="inline";
        document.getElementById('deleteBtn').onclick=function(){
          for(let comp=0;comp<elem.length;comp++){
          
          
            if(elem[comp].id==delList[itm]){
              console.log(elem[comp].id)
              
              console.log(elem)
              console.log(delList+"id from delete");
              delete(elem[comp]);
              var fltrNull=elem.filter(item => item!=null)
              // delete(elem[comp].title);
              // delete(elem[comp].details);
              // delete(elem[comp].catg);
              // delete(elem[comp].process);
              localStorage.setItem('tasks',JSON.stringify(fltrNull));
              poupMsg.style.display="none";


              dispNot.style.backgroundColor="#fda3a2";
              dispNot.style.borderLeftColor="#b33e3e";
              msgpNot[0].style.color="#b33e3e";
              msgpNot[0].innerHTML="تم حذف المهمة"
              dispNot.style.display="inline";
                setTimeout(tt,1000)
                function tt (){
                  dispNot.style.display="none";
                 
                  location.reload();
                }
      
              
              
            }
          }
        }

        document.getElementById('cancelBtn').onclick=function(){
          poupMsg.style.display="none";
        }
     
      }
    
    }


     
     }

     function AddTasks(tasksObj){

  
      return  localStorage.setItem('tasks',JSON.stringify(tasksObj));
     
       // tasksObj.push({title:category[0].value,details:category[1].value,catg:e,completed:false})
     
     }


