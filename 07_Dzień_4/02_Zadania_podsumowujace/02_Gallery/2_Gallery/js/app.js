/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */

const listOfPhotos = document.querySelectorAll("li.gallery");
const tagBody = document.querySelector("body");
console.log(listOfPhotos, tagBody);


 for(l of listOfPhotos){
  l.addEventListener("click", function(){
    let link = this.firstElementChild.src;
    console.log(link);
    let fullScreenPhoto = document.createElement("div");
    fullScreenPhoto.className = "fullScreen";
    let fullSCreenImage = document.createElement("img");
    fullSCreenImage.setAttribute("src", link);
    fullSCreenImage.src = link;
    let closeButton = document.createElement("button");
    closeButton.classList = "close";
    closeButton.innerText = "Close";
    
    fullScreenPhoto.appendChild(fullSCreenImage);
    fullScreenPhoto.appendChild(closeButton);
    tagBody.appendChild(fullScreenPhoto);


    closeButton.addEventListener("click", function(){
      tagBody.removeChild(fullScreenPhoto);
    })
})
}