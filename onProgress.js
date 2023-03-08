// let a=localStorage.getItem('tasks');
// const parseTasks=JSON.parse(a);

var divDisplay=document.getElementById('display');
let dispNot = document.getElementById("show");
var msgpNot = document.getElementsByClassName("msg");
// var divFlex=document.getElementById('bodyFlex').style.display="none";

let delList=[];
// console.log(parseTasks)
window.onload=function(){

        
        getTasks();

}


function getTasks(){


    //get tasks from local storage
    //  let a=localStorage.getItem('tasks');
     let elem;
     if(localStorage.getItem('tasks')){

      elem=JSON.parse(localStorage.getItem('tasks'));
    }
    else{
      elem=[];
      // let nullBody=document.createElement('h3');
      divDisplay.textContent="لاتوجد مهام ";

      // document.body="لاتوجد مهام "

    }
     console.log(elem)

     //loop on items in local storage and create elements in html
     elem.reverse().forEach(element => {
      delList.push(element.id);
        console.log(element.title)
     if(element.process=='on progress'){
      
       
            let newElement=document.createElement('div');
            newElement.className="displayElem";
          
        //   let divE= document.getElementsByClassName('displayElem');

            let chek=document.createElement('span');
            chek.className="checkCompleted";
            chek.innerHTML="";
            chek.style.backgroundColor="grey";
            chek.style.height="15px";
            chek.style.width="15px";
            chek.style.borderRadius="10px";
            chek.style.margin="10px";
            chek.style.cursor="pointer";
            chek.onclick=function(){
              chek.style.backgroundColor="green";
              


              dispNot.style.backgroundColor="#bbfab5";
              dispNot.style.borderLeftColor="#48b33e";
              msgpNot[0].style.color="#48b33e";
              msgpNot[0].innerHTML="إكتملت المهمة ";
              
              dispNot.style.display="inline";

              setTimeout(tt,1000)
              function tt (){
                element.process='Completed';
                dispNot.style.display="none";
                AddTasks(elem)
                location.reload();
                
              }
            
              // elem.push({process:'Completed'});
             
              console.log(elem)
              // setTimeout(location.reload(),3000)
              
                  
                  //do stuff
                
              
              
            }
            



            let elementTitle=document.createElement('p');
            
            elementTitle.innerHTML=element.title;
            elementTitle.style.fontSize="15px";
            elementTitle.style.flexGrow = "1";

            
            
            // let span=document.createElement('span');
            // span.className="del";
            // span.innerHTML="Delete";
            // span.style.fontSize="10px";
            


          



            
            // newElement.appendChild(span);
            newElement.appendChild(elementTitle);
            newElement.appendChild(chek);
            
            
            
            

            divDisplay.appendChild(newElement);

            
           
      
     }

        
    });


    let elementClick=document.getElementsByTagName('p');
    let poupMsg =document.getElementById('poupMsg');
    document.getElementById('cancelBtn').style.backgroundColor="#276678";
    document.getElementById('cancelBtn').style.color="whitesmoke";
    for(let itm=0;itm<elementClick.length;itm++){
       
     console.log(elementClick[itm].innerHTML+"من عندي")
 
     elementClick[itm].onclick=function(){
       // poupMsg.style.display="inline";
       
         for(let comp=0;comp<elem.length;comp++){
           poupMsg.style.display="inline";
         
           if(elem[comp].id==delList[itm]){

               document.getElementById('title').innerHTML=elem[comp].title;
               document.getElementById('discription').innerHTML=elem[comp].details;
               document.getElementById('category').innerHTML=elem[comp].catg;

             

              //  setTimeout(tt,1000)
              //  function tt (){
              //    dispNot.style.display="none";
              //    location.reload();
              //  }
     
             
             
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



    