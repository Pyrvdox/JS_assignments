
document.addEventListener("DOMContentLoaded", function(){
    const allImages = document.getElementById("gallery").children;
    
    const buttonHide = document.getElementById("hideButton");
    const buttonShow = document.getElementById("showButton");
    const textArea = document.getElementById("tagInput");
    console.log(allImages, buttonHide, buttonShow, textArea);

    


    buttonHide.addEventListener("click", function(){
        let newTag = textArea.value

        for(a of allImages){
            let thisTags = a.getAttribute('data-tag');
            console.log(thisTags);
            if(thisTags.includes(newTag)){
                a.classList.add('invisible');
            } 
        }


        console.log(textArea.value);
    })

    buttonShow.addEventListener("click", function(){
        let newTag = textArea.value

        for(a of allImages){
            let thisTags = a.getAttribute('data-tag');
            console.log(thisTags);
            if(thisTags.includes(newTag)){
                a.classList.remove('invisible');
            } 
        }


        console.log(textArea.value)
    })




































})


