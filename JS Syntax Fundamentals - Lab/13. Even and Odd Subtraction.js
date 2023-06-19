function evenAndOddSubtraction(array) {
    let evenSum = 0;
    let oddSum = 0;

    array.forEach(function(element) {
        if (element % 2 == 0)
        {
            evenSum += element;
        }
        else
        {
            oddSum += element;
        }
    });

    let difference = evenSum - oddSum;
    console.log(difference);
}

evenAndOddSubtraction([3, 5, 7, 9]);