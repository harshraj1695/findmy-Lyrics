async function fetchLyrics() {
    let searchTerm = document.getElementById('searchInput').value.trim();
    
    if (searchTerm === '') {
        alert('Please enter the artist and song in the format "artist - song"');
        return;
    }

    // Split the search term into artist and song, allowing for no space around the hyphen
    const [artist, song] = searchTerm.split(/ - |-/).map(part => part.trim());

    // Check if both artist and song are present
    if (!artist || !song) {
        alert('Please enter the artist and song in the format "artist - song"');
        return;
    }

    const apiUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.lyrics) {
            document.getElementById('lyricsContainer').innerHTML = `
                <h2>Lyrics for "${song}" by ${artist}</h2>
                <pre>${data.lyrics}</pre>
            `;
            document.getElementById('lyricsContainer').style.display = 'block'; // Show the lyrics container
        } else {
            document.getElementById('lyricsContainer').innerHTML = `<p>Sorry, no lyrics found for "${song}" by ${artist}.</p>`;
            document.getElementById('lyricsContainer').style.display = 'block'; // Show the empty message container
        }
    } catch (error) {
        document.getElementById('lyricsContainer').innerHTML = `<p>Error fetching lyrics. Please try again later.</p>`;
        document.getElementById('lyricsContainer').style.display = 'block'; // Show error message
    }
}
