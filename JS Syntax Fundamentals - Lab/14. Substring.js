function substring(string, startIndex, countToSubstring) {
    let newSubstring = string.substr(startIndex, countToSubstring);

    console.log(newSubstring);
}

substring('SkipWord', 4, 7);