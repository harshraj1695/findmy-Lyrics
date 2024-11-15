async function fetchLyrics() {
    let searchTerm = document.getElementById('searchInput').value.trim();

    if (searchTerm === '') {
        alert('Please enter the artist and song in the format "artist - song"');
        return;
    }

    // Split the search term into artist and song, allowing for no space around the hyphen
    const [artist, song] = searchTerm.split(/ - |-/).map(part => part.trim());

    if (!artist || !song) {
        alert('Please enter the artist and song in the format "artist - song"');
        return;
    }

    const apiUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok && data.lyrics) {
            document.getElementById('lyricsContainer').innerHTML = `
                <h2>Lyrics for "${song}" by ${artist}</h2>
                <pre>${data.lyrics}</pre>
            `;
            document.getElementById('lyricsContainer').style.display = 'block'; // Show the lyrics container
        } else if (data.error) {
            document.getElementById('lyricsContainer').innerHTML = `
                <p>Sorry, no lyrics found for "${song}" by ${artist}. Please check the song title or try another song.</p>
            `;
            document.getElementById('lyricsContainer').style.display = 'block'; // Show the empty message container
        }
    } catch (error) {
        console.error('Error fetching lyrics:', error);
        document.getElementById('lyricsContainer').innerHTML = `<p>Error fetching lyrics. Please try again later.</p>`;
        document.getElementById('lyricsContainer').style.display = 'block'; // Show error message
    }
}
