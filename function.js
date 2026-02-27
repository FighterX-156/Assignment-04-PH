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
let interestedElements=document.querySelectorAll(".Interested");
for(const interestedElement of interestedElements){
    interestedElement.addEventListener("click",function(){
        
        const card=this.closest(".card")
     
        const upStatus=card.querySelector(".Status")
         upStatus.style.backgroundColor='#FFA6A6'
         upStatus.style.borderColor='#C3110C'
         upStatus.style.color='#C3110C'




    })
}
//Rejected Button
const rejectedElements=document.querySelectorAll(".Rejected");
for(const rejectedElement of rejectedElements){
    rejectedElement.addEventListener("click",function(){{
     
        
        

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
  

