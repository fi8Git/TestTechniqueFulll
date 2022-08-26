// Incrémenter un tableau d'entier, sans conversion du tableau en nombre
// Exemple: [1,0,0] => [1,0,1]

function incrementDigitArray(origineDigitArray){
    let newDigitArray = origineDigitArray.reverse();

    for(let i in newDigitArray){
        if(newDigitArray[i] === 9){
            newDigitArray[i] = 0;
            continue;
        }

        newDigitArray[i]++ ;
        break;
    }

    newDigitArray.reverse();

    if(newDigitArray.every(d => d === 0))
        newDigitArray.unshift(1);
    
    return newDigitArray;
}

console.log(incrementDigitArray([9,9]));
console.log(incrementDigitArray([0]));
console.log(incrementDigitArray([9,9,9,9,9,9,9]));
console.log(incrementDigitArray([1,0,0]));
console.log(incrementDigitArray([1,8,9]));
console.log(incrementDigitArray([0,0,6]));