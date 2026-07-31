import { parseBlob } from "music-metadata-browser";

export async function getSongMetadata(songUrl) {

    const response = await fetch(songUrl);

    const blob = await response.blob();

    const metadata = await parseBlob(blob);

    let image = null;

    if (metadata.common.picture && metadata.common.picture.length > 0) {

        const picture = metadata.common.picture[0];

        image = URL.createObjectURL(
            new Blob([picture.data], { type: picture.format })
        );

    }

    return {
        title: metadata.common.title || "Unknown Title",
        artist: metadata.common.artist || "Unknown Artist",
        image
    };

}