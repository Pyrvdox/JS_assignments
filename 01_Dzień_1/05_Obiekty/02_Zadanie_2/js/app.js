const timeMachine = {
    shape:"box",
    model:"C3P0",
    run: function (date,place){
        console.log("Przeniosłeś się do: miejsce: ",place," dzień: ",date);
    }
};


console.log(timeMachine.shape, timeMachine.model);

timeMachine.run("12/12/1977","Londyn");