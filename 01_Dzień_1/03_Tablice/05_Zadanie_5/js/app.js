
function multiply (table) {
    return console.log(table.reduce((a,b)=>a*b))

}







multiply([1,2,3,4,5,6,7])// => 5040
multiply([1,1,1,1])// => 1
multiply([2,8,3,7])// => 336
