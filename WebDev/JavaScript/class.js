// class has 
// 1.State/properties
// 2.Behaviour

class human{
    age = 13;
    #wt=80; // private member only accesible within class '#' to make this private
    ht = 180;


    //constructor
    constructor(newAge,newHeight){
        this.age = newAge;
        this.ht = newHeight
    }


    //behavior
    walking(){
        console.log("Im Walking")
    }
    running(){
        console.log("Im Running")
    }

    // getter
    get FetchWeight(){
        return this.#wt
    }

    //setter
    set modifyWeight(val){
        this.#wt = val;
    }
}

// let obj = new human();
let obj = new human(50,190); // constructor
console.log(obj.age);
obj.walking()


// if we want to access private members outside class we need to build setter and getter
