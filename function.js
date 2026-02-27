//Section of counting status 
 counter()
//Counting Mechanism

function counter(){
    //total count
      const totalJob=document.getElementById("all-Job-Post")
    //total interested 
      const totalInterestedJob=document.getElementById("all-Interested-Job-Post")
    //total rejected
        const totalRejectedJob=document.getElementById("all-Rejected-Job-Post")
     document.getElementById("Total-count").innerText=totalJob.children.length
    
}


//Interested Button
const interestedElements=document.querySelectorAll(".Interested");
for(const interestedElement of interestedElements){
    interestedElement.addEventListener("click",function(){{
        counter()
        console.log("done! i")
    }})
}
//Rejected Button
const rejectedElements=document.querySelectorAll(".Rejected");
for(const rejectedElement of rejectedElements){
    rejectedElement.addEventListener("click",function(){{
       counter()
        
        

    }})
}
//delete function
let bins = document.querySelectorAll(".delete");
  for(const bin of bins){
    bin.addEventListener("click",function(event){
        const card=event.target.closest(".card")
        card.classList.add("hidden")
    })
  }
  

