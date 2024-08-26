// pop up and pop down of input
var task_to_pop = document.querySelector(".text1");
var description_to_pop = document.querySelector(".text2");
var pop1=0;
var pop2=0;
task_to_pop.addEventListener("click",()=>{
     if(pop1==0){
        pop1=1;
        document.querySelector("#task").style.display="inline-block";
     }
     else{
        pop1=0;
        document.querySelector("#task").style.display="none";
     }
})
description_to_pop.addEventListener("click",()=>{
    if(pop2==0){
       pop2=1;
       document.querySelector("#description").style.display="inline-block";
    }
    else{
       pop2=0;
       document.querySelector("#description").style.display="none";
    }
})

// on clicking submit button adding div.content 
var submit_button_click = document.querySelector("#submit");
submit_button_click.addEventListener("click",()=>{
  var  task_name=document.querySelector("#task").value; // getting task name
   var getting_description = document.querySelector("#description").value;// getting  description name

    
  var radio_button_value = document.querySelector("input[name='radio']:checked").value; 


   // checking whether it is empty
  if(task_name==="" || getting_description==="" || !radio_button_value){
   alert("Upon Clicking the Task and Description text .Text field will open add task via that");
  }
  

  else{
   var overall_todo_div = document.querySelector(".todos");   // main name
   var inner_div = document.createElement("div"); //  erlayer creation
   var p_tag = document.createElement("p");  // text need
    inner_div.setAttribute("filter",radio_button_value)// setting radio button value as a attribute 
   p_tag.textContent=task_name; // adding text
   overall_todo_div.appendChild(inner_div); // appending
   inner_div.appendChild(p_tag);  // appending
   inner_div.classList.add("content"); // class adding 
   p_tag.classList.add("taskname_in_todos");// class adding

   

   // description
  
   var description_inner_div = document.createElement("div");
   var p_tag_destcription = document.createElement("p"); 
   p_tag_destcription.textContent=getting_description;
   overall_todo_div.appendChild(description_inner_div);
   description_inner_div.appendChild(p_tag_destcription);
   description_inner_div.classList.add("description");
   p_tag_destcription.classList.add("description_in_todos");
   description_inner_div.style.display="none";
   description_inner_div.setAttribute("filter",radio_button_value)// as we write description showing div separately we need to do this for filtering manner

   // join down arrow and dustbin create new div 
   var join_div = document.createElement("div");
   inner_div.appendChild(join_div);

    // adding delete icon 
    var icon = document.createElement("i");
    icon.classList.add("fa-solid");
    icon.classList.add("fa-trash");
    join_div.appendChild(icon);
    icon.style.marginRight='10px'// to give space between ↓ and garbage box 
    icon.style.cursor="Pointer";
   
   
    // adding span to open and close description div
   var span_div = document.createElement("span");
   span_div.classList.add("spandiv"); // for some bug purpose added see in select js code 
   span_div.style.cursor="pointer";
   span_div.style.fontSize="25px"
   span_div.textContent = '↓';
   join_div.appendChild(span_div);  
   span_div.addEventListener("click",()=>{
      var span_div_value = span_div.textContent
      if(span_div_value==='↓'){
         description_inner_div.style.display="block";
         span_div.textContent = '↑';
      }
      else{
         description_inner_div.style.display="none";
         span_div.textContent = '↓';
      }
   })

  // deleting actual content 
  icon.addEventListener("click",()=>{
   inner_div.remove();
   description_inner_div.remove();
  })

}
}
)

// filter options by select div
var select_options = document.querySelector("select");
select_options.addEventListener("change",()=>{
   var inner_div_filtering = Array.from(document.querySelectorAll(".content")); // geting the task name divs
   var description_div_filtering = Array.from(document.querySelectorAll(".description"));// getting description text div
   var filtering_order = select_options.value; // select button value if need that onbetween text put .text
   

   var spandiv_change = Array.from(document.querySelectorAll(".spandiv"));
   spandiv_change.forEach((e)=>{
      e.textContent = '↓';
   })
   console
   // logic for task div hiding 
   inner_div_filtering.forEach((e)=>{
      var filter_attribute_value = e.getAttribute("filter");
      if(filtering_order=='All' || filter_attribute_value==filtering_order){
         e.style.display="flex";
      }
      else{
         e.style.display="none";
      }
   })
    
   // logic for description div hiding
   description_div_filtering.forEach((e)=>{
      var filter_attribute_value = e.getAttribute("filter");
      if(filtering_order=='All' || filter_attribute_value==filtering_order){
         e.style.display="none";
      }
      else{
         e.style.display="none";
      }
   })

})

