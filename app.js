const title = document.querySelector("h1");

const todoListDiv = document.querySelector("div")

  

const newItemForlist = document.createElement("p");
  newItemForlist.innerText= "list"
  console.log("new pTag:" , newItemForlist)


newItemForlist.addEventListener("mouseover", (event)=> (
    console.log(event.target.innerText)
))

  todoListDiv.append(newItemForlist)


  
  
  // const newItemForlist2 = document.createElement("p")
  // newItemForlist2.innerText= "2."
  // console.log("new ptag" ,newItemForlist2)
 
  // todoListDiv.append(newItemForlist2)

  
  
  
const todoFormForNewItem = document.querySelector("form")
  todoFormForNewItem.addEventListener("submit", (event)=>{
    // console.log("submitting form !: ", event)
    console.log("event form !: ", event.target[0].value)
   

    event.preventDefault()

  })

 
  
  

 

  todoFormForNewItem.reset()








// $("#ButtonForm").click(function(){
//     $.ajax({
//             url:(Your url),
//             dataType:'json',
//             type: 'post',
//             data: yourForm.serialize(),
//             success:function(response){
//                   ** If yout API returns something, you're going to proccess the data here.
//             }
//         });
    