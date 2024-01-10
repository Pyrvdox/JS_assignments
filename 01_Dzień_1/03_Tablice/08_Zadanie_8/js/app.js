
function addArrays(table1,table2){

    let newArray =[];
    let BiggerTable = [];
    let SmallerTable = [];

    if(table1.length > table2.length){
        BiggerTable =[table1,table1.length]
        SmallerTable =[table2,table2.length]
    }else{
        BiggerTable =[table2,table2.length]
        SmallerTable =[table1,table1.length]
    }

    for(t=0;t<SmallerTable[1];t++){
        newArray.push(table1[t]+table2[t]);
    }
    for(t=SmallerTable[1];t<BiggerTable[1];t++){
        newArray.push(BiggerTable[0][t]);
        console.log(t);
    }
    return console.log(newArray);
};



addArrays([4,0,1,3,4], [1,9,6,7,8,17])// => [5,9,7,10,12,17]
addArrays([8,3,22], [1,3,2])// => [9,6,24]
addArrays([2,3,1,5,3,5], [3,1,76,1])// => [5,4,77,6,3,5]
