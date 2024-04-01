//  task: 40
//  solution
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Creating three albums without track information
var album1 = make_album("Artist1", "Album1");
var album2 = make_album("Artist2", "Album2");
var album3 = make_album("Artist3", "Album3");
// Creating an album with track information
var album4 = make_album("Artist4", "Album4", 12);
// Printing album information
console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);
