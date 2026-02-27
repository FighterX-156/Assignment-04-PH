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
        //status update
         const card=this.closest(".card")
         const upStatus=card.querySelector(".Status")
         upStatus.style.backgroundColor='#DDF4E7'
         upStatus.style.borderColor='#16C47F'
         upStatus.style.color='#004225'
         upStatus.innerText="Interested"
         upStatus.classList.remove("hidden")
                



    })
}
//Rejected Button
const rejectedElements=document.querySelectorAll(".Rejected");
for(const rejectedElement of rejectedElements){
    rejectedElement.addEventListener("click",function(){{
     //status update
         const card=this.closest(".card")
         const upStatus=card.querySelector(".Status")
         upStatus.style.backgroundColor='#FFA6A6'
         upStatus.style.borderColor='#C3110C'
         upStatus.style.color='#C3110C'
         upStatus.innerText="Rejected"
         upStatus.classList.remove("hidden")
        

    }})
}
//Section switching [toggle bar] 
const jobPosts=document.querySelectorAll(".jobPost")
//All Button
document.getElementById("All-btn").addEventListener("click",function(){
for(const jobPost of jobPosts){
         jobPost.classList.remove("hidden")}
})
//Interview Button

document.getElementById("Interview-btn").addEventListener("click",function(){
     console.log("button  clicked") 
    for(const jobPost of jobPosts){
         jobPost.classList.add("hidden")
        const currentStatus=jobPost.querySelector(".Status")

        if(currentStatus.innerText=="Interested"){
            jobPost.classList.remove("hidden")
            
        }
        else{
            jobPost.classList.add("hidden")
        }
        }
        
})
//Rejected Button
document.getElementById("Rejected-btn").addEventListener("click",function(){
     console.log("button  clicked") 
    for(const jobPost of jobPosts){
         jobPost.classList.add("hidden")
        const currentStatus=jobPost.querySelector(".Status")

        if(currentStatus.innerText=="Rejected"){
            jobPost.classList.remove("hidden")
            
        }
        else{
            jobPost.classList.add("hidden")
        }
        }
        
      
})
//delete function
let bins = document.querySelectorAll(".delete");
  for(const bin of bins){

    bin.addEventListener("click",function(event){
        const card=event.target.closest(".card")
        card.classList.add("hidden")
    })
  }
  

