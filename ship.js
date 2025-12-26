


class Ship{
    constructor(length){
        this.length = length;
        this.hitcounter = 0;
        
    }

    hit(){
        if(this.hitcounter<this.length){
            this.hitcounter++;
        }
    }

    isSunk(){
        return this.hitcounter >= this.length;
    }

}


module.exports = Ship;