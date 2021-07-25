//Declarations
let inputBox=document.querySelector(".input-box");
let ul=document.querySelector(".task-list");
//Event listener on input box
inputBox.addEventListener("keydown",function(e){
    if(e.key=="Enter" && inputBox!=""){
        //getting the tag value into vriable
        let value=inputBox.value;
        //creating new element
       let li=document.createElement("li");
       //appending child
        ul.appendChild(li);
        //storing value from variable to li tag
        li.textContent=value;
        //setting the class attribute
        li.setAttribute("class","task-list");
        //event listener for delete
        li.addEventListener("dblclick",function(){
            //removing the element
            li.remove();
        })
        //clearing the input box
        inputBox.value="";
    }
})