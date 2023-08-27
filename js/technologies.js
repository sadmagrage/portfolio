import { imageBufferToUrl } from "./imageDecoder.js";

export const fetchTechnologies = fetch("https://graceful-universal-modem.glitch.me/technology")
    .then(response => response.json())
    .then(data => data);

export const technologiesData = async () => {
    const data = await fetchTechnologies;

    data.map(item => {
        item["imageLink"] = imageBufferToUrl(item.imageBuffer.data);
    });

    return data;
};