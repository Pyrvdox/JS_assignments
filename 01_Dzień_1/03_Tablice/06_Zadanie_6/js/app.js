

function getEvenAverage(table){

    let EvenCounter = 0;
    let EvenAverage = 0;
    for (t of table){
        if(t % 2 ==0){
            EvenAverage += t;
            EvenCounter++;
        }
    }
    
    return console.log(EvenAverage/EvenCounter);
};



getEvenAverage([1,2,3,4,5,6,7])// => 4
getEvenAverage([1,1,1,1])// => null
getEvenAverage([2,8,3,7,4])// => 4.666

