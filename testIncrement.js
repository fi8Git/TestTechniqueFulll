// Incrémenter un tableau d'entier, sans conversion du tableau en nombre
// Exemple: [1,0,0] => [1,0,1]

function incrementDigitArray(origineDigitArray){
    let newDigitArray = origineDigitArray.reverse();

    for(let i in newDigitArray){
        if(newDigitArray[i] == 9){
            newDigitArray[i] = 0;
        }
        else{
            newDigitArray[i]++ ;
            break;
        }
    }

    newDigitArray.reverse();

    if(newDigitArray[0] == 0)
        newDigitArray.unshift(1);
    
    return newDigitArray;
}

console.log(incrementDigitArray([9,9]));