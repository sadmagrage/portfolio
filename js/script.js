import { technologiesData } from "./technologies.js";
import { projectsData } from "./projects.js";

const technologies = await technologiesData();
const projects = await projectsData();

const projectsSection = document.querySelector('.projects-section');
const leftArrow = document.querySelector("#left-arrow");
const showProjectsElement = document.getElementById('show_projects');
const identityElement = document.querySelector("#identity");
const technologiesElement = document.querySelector("#technologies");

identityElement.innerHTML = `Meu nome é Victor Goya, tenho ${parseInt((new Date().getTime() - new Date(2003, 10, 7, 8).getTime()) / 365 / 24 / 3600 / 1000)} anos.`;

let technologiesText = "";

technologies.map(item => {
    technologiesText += `
        <div class="technology">
            <img class="technology-image" src="${ item.imageLink }" alt="${ item.title }">
            <h5 class="technology-title">${ item.title }</h5>
        </div>`;
});

technologiesElement.innerHTML = technologiesText;

projectsSection.addEventListener('click', function () {
    showProjectsElement.classList.toggle("visible");
});

leftArrow.addEventListener('click', function () {
    showProjectsElement.classList.toggle("visible");
});

let projectsSectionHTML = "<h3 id='projetos-title'>Projetos</h3>";

const counter = projects.length > 2 ? 2 : projects.length;

for (let i = 0; i < counter; i++) {
    projectsSectionHTML += `
        <div class="project-thumbnail">
            <img class="project-image" src="${ projects[i].imageLink }" alt="">
        </div>`;
}

document.querySelector(".projects-section").innerHTML = projectsSectionHTML;

let projectsListHTML = "";

const iterateTechnologies = (data) => {
    let technologiesText = "";

    data.technologies.map((item) => {

        technologiesText += `
        <div class="technology-info">
            <img class="technology-icon" src="${ technologies.filter(technologyItem => technologyItem.title.toLowerCase() == item.toLowerCase())[0].imageLink }" />
            <p>${item}</p>
        </div>
        `;
    });

    return technologiesText;
}

const statusIsUp = (status) => {
    if (status) {
        return `
        <span class="isUp"></span>
        <p>Em execução</p>
        `
    }

    return `
        <span class="isntUp"></span>
        <p>Não está em execução</p>
    `;
}

const projectLinks = (item) => {
    let linksElement = "";

    if (item.runningLink.length > 0) {
        linksElement += `<a class="repository-link" href="${ item.repository }" target="_blank" ><img class="repository-image" src="./images/github.png" /></a><a class="project-link" href="${ item.runningLink }" target="_blank" ><h5 class="project-link-text">Link do projeto</h5></a>`
    }
    else {
        linksElement = `<a class="repository-link only-link" href="${ item.repository }" target="_blank" ><img class="repository-image" src="../images/github.png" /></a>`;
    }

    return linksElement;
}

projects.map(data => {
    projectsListHTML += `
        <div class="project-item">
            <h4 class="project-name">${ data.name }</h4>
            <img class="project-image" src="${ data.imageLink }" alt="">
            <div class="wrapper">
                <div id="description" class="expandable">
                    <p class="description-text">${ data.description }</p>
                    <div class="description-links">
                        ${ projectLinks(data) }
                    </div>
                </div>
            </div>
            <div class="project-info">
                <div class="project-technologies">
                    ${ iterateTechnologies(data) }
                </div>
                <div class="status">
                    ${ statusIsUp(data.status) }
                </div>
            </div>
        </div>`;
});

document.querySelector(".projects-list").innerHTML = projectsListHTML;

const projectItemElements = document.querySelectorAll(".project-item");

projectItemElements.forEach(projectItemElement => {
    projectItemElement.addEventListener("click", (e) => {

        const listWrapperOpen = document.querySelectorAll(".open");

        if (listWrapperOpen.length >= 1) {
            listWrapperOpen[0].classList.toggle("open");
            return;
        }

        if (e.target.classList.contains("description-links") || e.target.closest(".description-links")) {
            e.stopPropagation();
            return;
        }
    
        const element = e.currentTarget.querySelector(".wrapper");

        element.classList.toggle("open");
    });
});

window.addEventListener('resize', function () {
    const mediaQuery768px = window.matchMedia('(max-width: 768px)');
    const introSection = document.querySelector('.intro-section');
    const technologiesContainer = document.querySelector('#technologies-container');

    if (mediaQuery768px.matches) {
        document.querySelector('.content').appendChild(technologiesContainer);
    } else {
        introSection.appendChild(technologiesContainer);
    }
});

window.dispatchEvent(new Event('resize'));