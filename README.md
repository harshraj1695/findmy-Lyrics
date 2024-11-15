# Song Lyrics Finder

## Description

This web application allows users to search for song lyrics from around the world by entering the song name and artist in the format "artist - song". The app fetches lyrics using the **Lyrics.ovh API** and displays them on the page.

**Note**: Since the Lyrics.ovh API is a public API, it may not have all song lyrics in its database. Some lyrics, especially from specific genres or less popular songs, may not be available.


## Features

- Search for song lyrics by entering the song name and artist.
- Display lyrics for both English and Bollywood songs (based on the availability from the API).
- Display error messages if lyrics cannot be found or if there's an issue with fetching the data.

## How to Use

1. Enter the song name and artist in the input field in the format:  
   **`artist - song`**  
   Example: `Dua Lipa - One Kiss`
   
2. Press the "Search" button.

3. The song lyrics will appear below the search bar if available. Otherwise, a message will appear saying no lyrics are found.

## Live Demo

You can try the live version of this project here:  
**[Live Project Link](https://harshraj1695.github.io/findmy-Lyrics/)**  
(Replace with your actual project URL)

## Tech Stack

- **HTML**: For the basic structure of the page.
- **CSS**: For styling the app and making it responsive.
- **JavaScript**: To fetch lyrics from the Lyrics.ovh API and dynamically update the page.
- **Lyrics.ovh API**: Used to get song lyrics by entering the artist and song name.

## Installation

If you want to run this project locally, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/harshraj1695/findmy-Lyrics.git
