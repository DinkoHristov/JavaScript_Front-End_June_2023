function totalPrice(groupCount, groupType, dayOfWeek) {
 
    let totalPrice = 0;

    if (groupType === "Students")
    {
        if (dayOfWeek === "Friday")
        {
            totalPrice = 8.45 * groupCount;
        }
        else if (dayOfWeek === "Saturday")
        {
            totalPrice = 9.80 * groupCount;
        }
        else if (dayOfWeek === "Sunday")
        {
            totalPrice = 10.46 * groupCount;
        }
        
        if (groupCount >= 30) {
            totalPrice -= totalPrice * 15 / 100;
        }
    }
    else if (groupType === "Business")
    { 
        if (groupCount >= 100) {
            groupCount -= 10;
        }

        if (dayOfWeek === "Friday")
        {
            totalPrice = 10.90 * groupCount;
        }
        else if (dayOfWeek === "Saturday")
        {
            totalPrice = 15.60 * groupCount;
        }
        else if (dayOfWeek === "Sunday")
        {
            totalPrice = 16 * groupCount;
        }
    }
    else if (groupType === "Regular")
    {
        if (dayOfWeek === "Friday")
        {
            totalPrice = 15 * groupCount;
        }
        else if (dayOfWeek === "Saturday")
        {
            totalPrice = 20 * groupCount;
        }
        else if (dayOfWeek === "Sunday")
        {
            totalPrice = 22.50 * groupCount;
        }
 
        if (groupCount >= 10 && groupCount <= 20) {
            totalPrice -= totalPrice * 5 / 100;
        }
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

totalPrice(100, "Business", "Sunday");