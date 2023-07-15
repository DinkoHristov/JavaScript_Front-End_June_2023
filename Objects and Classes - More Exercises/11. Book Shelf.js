function bookShelf(input) {
    let shelf = {};

    for (let i = 0; i < input.length; i++) {
        let command = input[i];

        if (command.includes("->")) {
            // {shelf id} -> {shelf genre}
            let splittedCommand = command.split(" -> ");

            let id = splittedCommand[0];
            let genre = splittedCommand[1];
            let books = [];
            let count = 0;

            if (!shelf.hasOwnProperty(id)) {
                shelf[id] = {
                    genre: genre,
                    books,
                    count: 0
                };
            }
        } else {
            // {book title}: {book author}, {book genre}
            let info = command.split(", ");
            let bookGenre = info[1];

            let bookInfo = info[0].split(": ");
            let bookTitle = bookInfo[0];
            let bookAuthor = bookInfo[1];

            let keys = Object.keys(shelf);

            keys.forEach(key => {
                let currentShelf = shelf[key];

                if (currentShelf.genre === bookGenre) {
                    currentShelf.books.push({
                        bookTitle: bookTitle,
                        bookAuthor: bookAuthor
                    });

                    currentShelf.count++;
                }
            });
        }
    }

    let idCount = [];
    
    Object.entries(shelf).forEach(([id, data]) => {
        idCount.push({
            id: id,
            count: data.count
        });
    });

    idCount.sort((a, b) => b.count - a.count).forEach(item => {
        let currentShelf = shelf[item.id];

        console.log(`${item.id} ${currentShelf.genre}: ${item.count}`);
        currentShelf.books.sort((a, b) => a.bookTitle.localeCompare(b.bookTitle)).forEach(book => {
            console.log(`--> ${book.bookTitle}: ${book.bookAuthor}`);
        });
    });
}

// bookShelf(
// [
//     '1 -> history', 
//     '1 -> action', 
//     'Death in Time: Criss Bell, mystery', 
//     '2 -> mystery', 
//     '3 -> sci-fi', 
//     'Child of Silver: Bruce Rich, mystery', 
//     'Hurting Secrets: Dustin Bolt, action', 
//     'Future of Dawn: Aiden Rose, sci-fi', 
//     'Lions and Rats: Gabe Roads, history', 
//     '2 -> romance', 
//     'Effect of the Void: Shay B, romance', 
//     'Losing Dreams: Gail Starr, sci-fi', 
//     'Name of Earth: Jo Bell, sci-fi', 
//     'Pilots of Stone: Brook Jay, history'
// ]    
// );

bookShelf(
[
    '1 -> mystery', 
    '2 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Lions and Rats: Gabe Roads, history',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi'
]
);