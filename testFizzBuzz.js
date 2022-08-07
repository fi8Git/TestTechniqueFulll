function playFizzBuzzGenerator(nbIteration) {
    for (let i = 1; i <= nbIteration; i++)
        console.log(getFizzBuzzCheckResult(i));
}

function getFizzBuzzCheckResult(nb){
    if (nb % 3 == 0 && nb % 5 == 0)
        return "FizzBuzz";

    if (nb % 3 == 0)
        return "Fizz";

    if (nb % 5 == 0)
        return "Buzz";

    return nb.toString();
}
