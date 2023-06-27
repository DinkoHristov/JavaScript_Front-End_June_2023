function moviesData(input) {
    class Movie {
        constructor(name, director, data) {
            this.name = name;
            this.director = director;
            this.date = data;
        }
    }
    
    let movies = [];
    for(let i = 0; i < input.length; i++) {
        let currInput = input[i];

        if(currInput.includes("addMovie")) {
            let name = currInput.substring(9, currInput.length);
            let movie = new Movie(name, undefined, undefined);

            movies.push(movie);
        }
        else if (currInput.includes("directedBy")) {
            let info = [];

            let string = "";
            for(let i = 0; i < currInput.length; i++) {
                let currElement = currInput[i];

                if(currElement === " " && string !== "directedBy") {
                    info.push(string);
                    string = "";
                }
                else if (currElement === " " && string === "directedBy") {
                    info.push("_");
                    string = "";
                }
                else if (i === currInput.length - 1 && string !== "directedBy") {
                    string += currElement;
                    info.push(string);
                }
                else {
                    string += currElement;
                }
            }

            let nameInfo = [];
            for(let i = 0; i < info.length; i++) {
                let current = info.shift();

                if (current === "_") {
                    break;
                }

                nameInfo.push(current);
            }

            let currentName = nameInfo.join(" ");

            let isFound = false;
            for(let i = 0; i < movies.length; i++) {
                if(movies[i].name === currentName) {
                    isFound = true;
                    break;
                }
            }

            let direnctorInfo = [];
            if(isFound) {
                for(let i = 0; i < info.length; i++) {
                    if (info[i] !== "_") {
                        direnctorInfo.push(info[i]);
                    }
                }
            }
            
            let director = direnctorInfo.join(" ");

            let count = 1;
            movies.forEach(function(element) {
                if(element.name === currentName && count === 1) {
                    element.director = director;
                    count++;
                }
            });
        }
        else if (currInput.includes("onDate")) {
            let info = [];

            let string = "";
            for(let i = 0; i < currInput.length; i++) {
                let currElement = currInput[i];

                if(currElement === " " && string !== "onDate") {
                    info.push(string);
                    string = "";
                }
                else if (currElement === " " && string === "onDate") {
                    info.push("_");
                    string = "";
                }
                else if (i === currInput.length - 1 && string !== "onDate") {
                    string += currElement;
                    info.push(string);
                }
                else {
                    string += currElement;
                }
            }

            let nameInfo = [];
            for(let i = 0; i < info.length; i++) {
                let current = info.shift();

                if (current === "_") {
                    break;
                }

                nameInfo.push(current);
            }

            let currentName = nameInfo.join(" ");

            let isFound = false;
            for(let i = 0; i < movies.length; i++) {
                if(movies[i].name === currentName) {
                    isFound = true;
                    break;
                }
            }

            let dataInfo = [];
            if(isFound) {
                for(let i = 0; i < info.length; i++) {
                    if (info[i] !== '_') {
                        dataInfo.push(info[i]);
                    }
                }
            }
            
            let data = dataInfo.join(" ");

            let count = 1;
            movies.forEach(function(element) {
                if(element.name === currentName && count === 1) {
                    element.date = data;
                    count++;
                }
            });
        }
    }

    let validMovies = movies.filter(m => m.name !== undefined && m.director !== undefined && m.date !== undefined);

    validMovies.forEach(element => {
        console.log(JSON.stringify(element));
    });
}

moviesData(
    [
        'addMovie The Avengers',
        'addMovie Superman',
        'The Avengers directedBy Anthony Russo',
        'The Avengers onDate 30.07.2010',
        'Captain America onDate 30.07.2010',
        'Captain America directedBy Joe Russo'
    ]       
);