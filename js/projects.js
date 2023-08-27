import { imageBufferToUrl } from "./imageDecoder.js";

export const fetchProjects = fetch("https://graceful-universal-modem.glitch.me/project")
    .then(response => response.json())
    .then(data => data);

export const projectsData = async () => {
    const data = await fetchProjects;

    data.map(item => {
        item["imageLink"] = imageBufferToUrl(item.bufferImage.data);
    });

    return data;
};