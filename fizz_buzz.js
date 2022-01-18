function isDivisibleBy(n, m)
{
    return n % m === 0;
}

for (let i=1; i<=100; i++) {
    // 1st version
    // if (i%5===0 && i%3===0) { console.log("FizzBuzz");}
    // else if (i%3===0) { console.log("Fizz");}
    // else if (i%5===0) { console.log("Buzz");}
    // else {console.log(i);}   

    //2nd version
    // var s = (i%5===0 && i%3===0) ? 'FizzBuzz' : (i%3===0) ? "Fizz": (i%5===0) ? "Buzz" : i.toString();
    // console.log(s);

    //3rd version
    //var s = isDivisibleBy(i,5) && isDivisibleBy(i,3) ? 'FizzBuzz' : isDivisibleBy(i,3) ? "Fizz": isDivisibleBy(i,5) ? "Buzz" : i.toString();
    //console.log(s);

    //4th version
    let result='';
    if (isDivisibleBy(i,3)) result+="Fizz";
    if (isDivisibleBy(i,5)) result+="Buzz";
    if (result==='') result=i.toString();
    console.log(result);

}