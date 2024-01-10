




function CountHello (number){
    let counter = 0;
    let theInterval = setInterval(function(){console.log("hello x ",counter); counter++;
    if(counter === number+1){
        clearInterval(theInterval);
    }



},1000);


};

CountHello(5);