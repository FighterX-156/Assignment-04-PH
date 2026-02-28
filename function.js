//Section of counting status 

//Counting Mechanism
const jobPosts=document.querySelectorAll(".jobPost") 
let Delete=0;
let Rejected=0;
let Interested=0;
let transport=0;

//total count
      const Job=document.getElementById("all-Job-Post")
      let totalJob=Job.children.length;
      
    
totalCounter()
function totalCounter(){
    totalJob=totalJob-Delete;
    const Totals= document.getElementsByClassName("Total-count")
    for(const total of Totals){
        total.innerText=totalJob;
    }
    
}
function totalInterested(){
    for(const jobPost of jobPosts){
       const currentStatus=jobPost.querySelector(".Status")

        if(currentStatus.innerText=="Interested"){
            Interested++;
            
        }
        
        }
        document.getElementById("Interested-count").innerText=Interested
        Interested=0;
       
}

function totalRejected(){
    for(const jobPost of jobPosts){
       const currentStatus=jobPost.querySelector(".Status")

        if(currentStatus.innerText=="Rejected"){
            Rejected++;
            
        }
        
        }
        document.getElementById("Rejected-count").innerText=Rejected
        Rejected=0;
    
       
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
          totalInterested();
          totalRejected();
          
          

    })
}
//Rejected Button
const rejectedElements=document.querySelectorAll(".Rejected");
for(const rejectedElement of rejectedElements){
    rejectedElement.addEventListener("click",function(){
     //status update
         const card=this.closest(".card")
         const upStatus=card.querySelector(".Status")
         upStatus.style.backgroundColor='#FFA6A6'
         upStatus.style.borderColor='#C3110C'
         upStatus.style.color='#C3110C'
         upStatus.innerText="Rejected"
         upStatus.classList.remove("hidden")
         totalRejected();
         totalInterested();
         

    })
}
//Section switching [toggle bar] 

//All Button
document.getElementById("All-btn").addEventListener("click",function(){
for(const jobPost of jobPosts){
         jobPost.classList.remove("hidden")}
})
//Interview Button

document.getElementById("Interview-btn").addEventListener("click",function(){
    
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
        Delete++
        totalCounter()
        Delete=0
       
    })
  }
  

