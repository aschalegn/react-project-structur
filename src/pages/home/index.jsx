import { useState } from "react";
import SongsList from "../../componenst/songs";

function Home() {
    const [artists, setArtists] = useState([
        { artist: "sdcsd", songs: [] }
    ]);

    return (
        <div>
            <h1>Home page</h1>
            <SongsList />
        </div>
    );
}

export default Home;