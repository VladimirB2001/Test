function ageControl() {
    console.log("AHOJ!");

    const age =parseInt(document.getElementById("ageInput").value);
    console.log("Váš věk je:"+age);

    let variable1 = age +1;
    console.log(variable1);
}

function startCykle() {

    for(let i = 1; i < 11; i++) {
console.log("AHOJ");
    }

}

function ifFunction() {
    let i = 10
    let x = 12

    if(i < x ){
        console.log("I je menší než X!");
    }

    if(i > x) {
        console.log('I je větší než X!');
    }

     if(i > x ) {
    console.log('I je větší než X!');
    } else console.log('I je menší než X!');

    if(i > x ) {
    console.log('I je větší než X!');
    } else if(i === x){
    console.log('I je rovno než X!');
    else if(i > x){
        console.log('I je menší než X!');
    }

    let z= 1
    let g= '1'

    if(z == g){
        console.log("JSOU ROVNA ==");
    }else if (z=== g){
        console.log("JSOU ROVNA");
    }
} 

function outputNumber(){
    let i ="Ahoj"
    document.getElementById("outPut").value = i

    alert("Hello! I am an alert box!!");
}
} 



