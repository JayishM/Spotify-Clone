import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

let jamState = {
    song: null,
    isPlaying: false,
    currentTime: 0,
    updatedAt: Date.now()
};

app.use(cors());

// Serve mp3 files
app.use("/songs", express.static(path.join(__dirname, "songs")));

//Jam route to get the current state of the jam session
app.get("/jam", (req, res) => {
    res.json(jamState);
});

app.post("/jam", (req, res) => {

    jamState = {
        ...req.body,
        updatedAt: Date.now()
    };

    res.json({
        success: true
    });

});

// Home Route
app.get("/", (req, res) => {
    res.send("🎵 Spotify Backend Running!");
});

// API to return all songs
app.get("/api/songs", (req, res) => {

    const songsFolder = path.join(__dirname, "songs");

    const files = fs
        .readdirSync(songsFolder)
        .filter(file => file.endsWith(".mp3"));

    const songs = files.map((file, index) => ({
        id: index + 1,
        title: path.parse(file).name,
        url: `http://localhost:${PORT}/songs/${encodeURIComponent(file)}`
    }));

    res.json(songs);
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});