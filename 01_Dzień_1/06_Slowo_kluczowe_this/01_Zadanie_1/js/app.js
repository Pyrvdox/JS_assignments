const Car = {
    brand:"Audi",
    color:"Black",
    numberOfKilometers: 0,
    printCarInfo: function(){
        console.log(Car.brand, Car.color, Car.numberOfKilometers);
    },
    drive: function(km){

        this.numberOfKilometers += km;
        console.log(this.numberOfKilometers);
    },
    checks:[],
    carCheck: function(date){
        this.checks.push(date);
        console.log("Przeglad dodano pomyślnie!");
    },
    allCarChecks: function(){
        console.log(this.checks);
    }
};

Car.printCarInfo();
Car.drive(250000000);
Car.carCheck("12-12-2012");
Car.allCarChecks();