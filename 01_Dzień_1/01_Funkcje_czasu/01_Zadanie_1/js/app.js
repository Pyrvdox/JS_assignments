let sint = setInterval(function(){console.log("Wygenerowano z setInterval")},1000);


let dsa = setTimeout(function(){console.log("JavaScript Rules")}, 4000);



clearInterval(sint);
clearTimeout(dsa);