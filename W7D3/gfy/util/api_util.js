export function fetchSearchGiphys(searchTerm) {
    return $.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=xMaw4W6Ut9N9JElW9Iq1RBkBNEHfvah7&limit=2`);
}