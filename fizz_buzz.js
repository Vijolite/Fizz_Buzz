for (let i=1; i<=100; i++) {
    // if (i%5===0 && i%3===0) { console.log("FizzBuzz");}
    // else if (i%3===0) { console.log("Fizz");}
    // else if (i%5===0) { console.log("Buzz");}
    // else {console.log(i);}   


    var s = (i%5===0 && i%3===0) ? 'FizzBuz' : (i%3===0) ? "Fizz": (i%5===0) ? "Buzz" : i.toString();
    console.log(s);
}