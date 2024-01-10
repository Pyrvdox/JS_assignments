
function distFromAverage(Table){
    let newTable = [];
    let Average = 0;
    for (t of Table){
        Average += t;
        
    }
    Average = Average/(Table.length);

    for(let r of Table){
        r= r-Average;
        newTable.push(r);
        
        
    }

    console.log(Average);
    console.log(newTable);

}





distFromAverage([1,2,3,4,5,6,7]);
distFromAverage([1,1,1,1]);
distFromAverage([2,8,3,7]);
