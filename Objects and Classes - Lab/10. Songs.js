function songsAlbum(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songsNumber = Number(input[0]);

    let album = [];
    for(let i = 1; i <= songsNumber; i++) {
        let typeList = input[i].split("_")[0];
        let name = input[i].split("_")[1];
        let time = input[i].split("_")[2];

        let currSong = new Song(typeList, name, time);
        album.push(currSong);
    }

    let searchedAlbum = input[input.length - 1];
    if (searchedAlbum === "all") {
        album.forEach(a => console.log(a.name));
    } else {
        let validAlbums = album.filter(a => a.typeList === searchedAlbum);
        validAlbums.forEach(a => console.log(a.name));
    }
}

songsAlbum([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'like']);