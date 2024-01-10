const multiValueArray = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
  ];


function print2DArray(table){

    for(t of table){
        console.log(t);
    }

}

print2DArray(multiValueArray);