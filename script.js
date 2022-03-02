// LOOPS FUN

document.getElementById("one").addEventListener("click", first)
document.getElementById("two").addEventListener("click", second)
document.getElementById("three").addEventListener("click", third)
document.getElementById("four").addEventListener("click", fourth)
document.getElementById("five").addEventListener("click", fifth)

function first(){
    
    for(n=1; n<=500; n++){
        console.log("I'm So Happy!")
    }
}

function second(){

    for(x=12; x<=800; x+=4){
        console.log(x)
    }
}

function third(){

    for (y=55; y>=11; y-=2){
        console.log(y)
    }
}

function fourth(){
    let sum = 0
    for (z=5; z<=50; z++){
        sum = sum + z
    }

    if (z=50){
        console.log(sum)
    }
    
}

function fifth(){
    let sum = 0
    for (a=10; a<=100; a+=10){
        sum = sum + a
    }

    if (a = 100){
        console.log(sum)
    }
}