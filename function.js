
//global
const jobPosts = document.querySelectorAll(".jobPost");
let Delete = 0;
let Rejected = 0;
let Interested = 0;

//Counting Mechanism
//total count
const Jobs = document.getElementById("all-Job-Post");
let totalJob = Jobs.children.length;

totalCounter();
function totalCounter() {
  totalJob = totalJob - Delete;
  const Totals = document.getElementsByClassName("Total-count");
  Delete = 0;
  for (const total of Totals) {
    total.innerText = totalJob;
  }
  return totalJob;
}
//total interested count
function totalInterested() {
  Interested = 0;
  for (const jobPost of jobPosts) {
    const currentStatus = jobPost.querySelector(".Status");
    
    if (currentStatus.innerText == "Interested") {
      Interested++;
    }
  }
  document.getElementById("Interested-count").innerText = Interested;
  return Interested;



}
//Hidden
function noPostShow(val) {
  if (val === 0) {
    document.getElementById("noPost").classList.remove("hidden")
  }
  else {
    document.getElementById("noPost").classList.add("hidden")
  }

}
//total rejected count
function totalRejected() {
  Rejected = 0;
  for (const jobPost of jobPosts) {
    const currentStatus = jobPost.querySelector(".Status");

    if (currentStatus.innerText == "Rejected") {
      Rejected++;
    }
  }
  document.getElementById("Rejected-count").innerText = Rejected;
  return Rejected;

}

//Interested Button
let interestedElements = document.querySelectorAll(".Interested");
for (const interestedElement of interestedElements) {
  interestedElement.addEventListener("click", function () {
    //status update
    const card = this.closest(".card");
    const upStatus = card.querySelector(".Status");
    upStatus.style.backgroundColor = "#DDF4E7";
    upStatus.style.borderColor = "#16C47F";
    upStatus.style.color = "#004225";
    upStatus.innerText = "Interested";
    upStatus.classList.remove("hidden");
    totalInterested();
    totalRejected();
  });
}
//Rejected Button
const rejectedElements = document.querySelectorAll(".Rejected");
for (const rejectedElement of rejectedElements) {
  rejectedElement.addEventListener("click", function () {
    //status update
    const card = this.closest(".card");
    const upStatus = card.querySelector(".Status");
    upStatus.style.backgroundColor = "#FFA6A6";
    upStatus.style.borderColor = "#C3110C";
    upStatus.style.color = "#C3110C";
    upStatus.innerText = "Rejected";
    upStatus.classList.remove("hidden");
    totalRejected();
    totalInterested();
  });
}
//Section switching [toggle bar]

//All Section view
const allButton = document.getElementById("All-btn");
allButton.addEventListener("click", function () {
  //clicked button color change
  allButton.style.backgroundColor = "#008BFF";
  allButton.style.color = "white";
  //other button color reset
  interviewButton.style.backgroundColor = "white";
  interviewButton.style.color = "black";
  //-------
  rejectedButton.style.backgroundColor = "white";
  rejectedButton.style.color = "black";

  for (const jobPost of jobPosts) {
    jobPost.classList.remove("hidden");
  }
  const tVal = totalCounter()

  noPostShow(tVal)
});
//Interview Section VIew

const interviewButton = document.getElementById("Interview-btn");
interviewButton.addEventListener("click", function () {
  //clicked button color change
  interviewButton.style.backgroundColor = "#008BFF";
  interviewButton.style.color = "white";
  //other button color reset
  allButton.style.backgroundColor = "white";
  allButton.style.color = "black";
  //-------
  rejectedButton.style.backgroundColor = "white";
  rejectedButton.style.color = "black";
  for (const jobPost of jobPosts) {
    jobPost.classList.add("hidden");
    const currentStatus = jobPost.querySelector(".Status");

    if (currentStatus.innerText == "Interested") {
      jobPost.classList.remove("hidden");
    } else {
      jobPost.classList.add("hidden");
    }
  }
  const iVal = totalInterested()

  noPostShow(iVal)
  });
//Rejected Section view
const rejectedButton = document.getElementById("Rejected-btn");
rejectedButton.addEventListener("click", function () {
  //clicked button color change
  rejectedButton.style.backgroundColor = "#008BFF";
  rejectedButton.style.color = "white";
  //other button color reset
  allButton.style.backgroundColor = "white";
  allButton.style.color = "black";
  //------
  interviewButton.style.backgroundColor = "white";
  interviewButton.style.color = "black";

  for (const jobPost of jobPosts) {
    jobPost.classList.add("hidden");
    const currentStatus = jobPost.querySelector(".Status");

    if (currentStatus.innerText == "Rejected") {
      jobPost.classList.remove("hidden");
    } else {
      jobPost.classList.add("hidden");
    }
  }
  const rVal = totalRejected()

  noPostShow(rVal)

});
//delete function
let bins = document.querySelectorAll(".delete");
for (const bin of bins) {
  bin.addEventListener("click", function (event) {
    const card = event.target.closest(".card");
    card.classList.add("hidden");
    Delete++;
    const tVal = totalCounter()
    noPostShow(tVal)
  });
}