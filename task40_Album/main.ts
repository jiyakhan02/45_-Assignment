//  task: 40
//  solution

interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

// Creating three albums without track information
const album1: Album = make_album("Artist1", "Album1");
const album2: Album = make_album("Artist2", "Album2");
const album3: Album = make_album("Artist3", "Album3");

// Creating an album with track information
const album4: Album = make_album("Artist4", "Album4", 12);

// Printing album information
console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);
