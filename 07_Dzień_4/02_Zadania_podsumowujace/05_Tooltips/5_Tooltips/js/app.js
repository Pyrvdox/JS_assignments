/*
 <span class="tooltipText">Text tooltipa</span>
 */


 const toolTip = document.querySelectorAll(".tooltip");
 console.log(toolTip);

 for(t of toolTip){
    
    let newElement = document.createElement ("p");
    newElement.className = "tooltipText";
    newElement.innerText = t.getAttribute('data-text');

    t.addEventListener("mouseover", function(){
        this.appendChild(newElement);
        console.log(newElement);

        
    })
    t.addEventListener("mouseout", function(){
        this.removeChild(newElement);
    })
 }