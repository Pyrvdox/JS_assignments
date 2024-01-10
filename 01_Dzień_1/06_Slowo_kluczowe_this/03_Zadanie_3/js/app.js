const stairs = {
    step: 0,
    up: function(){
        this.step ++;

    },
    down: function(){
        this.step --;
    },
    print: function(){
        console.log(this.step);
    }
};

stairs.up();
stairs.up();
stairs.up();
stairs.down();
stairs.print();