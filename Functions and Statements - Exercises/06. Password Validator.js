function passwordValidator(password) {
    let isLengthValid = false;
    let isTwoDigits = false;
    let isLettersAndDigitsOnly = false;
    if(password.length >= 6 && password.length <= 10) {
        isLengthValid = true;
    }
    if (/[0-9]{2,}/.test(password)) {
        isTwoDigits = true;
    }
    if (/^[A-Za-z0-9]+$/.test(password)) {
        isLettersAndDigitsOnly = true;
    }

    if (!isLengthValid) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (!isLettersAndDigitsOnly) {
        console.log("Password must consist only of letters and digits");
    }
    if (!isTwoDigits) {
        console.log("Password must have at least 2 digits");
    }

    if (isLengthValid && isTwoDigits && isLettersAndDigitsOnly) {
        console.log("Password is valid");
    }
}

passwordValidator('MyPass123');