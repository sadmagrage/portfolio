import { tecnologies } from "./tecnologies.js";
import { projects } from "./projects.js";

const projectsSection = document.querySelector('.projects-section');
const leftArrow = document.querySelector("#left-arrow");
const showProjectsElement = document.getElementById('show_projects');
const identityElement = document.querySelector("#identity");
const tecnologiesElement = document.querySelector("#tecnologies");

identityElement.innerHTML = `Meu nome é Victor Goya, tenho ${parseInt((new Date().getTime() - new Date(2003, 10, 7, 8).getTime()) / 365 / 24 / 3600 / 1000)} anos.`;

let tecnologiesText = "";

tecnologies.map(item => {
    tecnologiesText += `
        <div class="tecnology">
            <img class="tecnology-image" src="./images/${ item.imageName }" alt="${ item.title }">
            <h5 class="tecnology-title">${ item.title }</h5>
        </div>`;
});

tecnologiesElement.innerHTML = tecnologiesText;

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
            <img class="project-image" src="${ projects[i].image }" alt="">
        </div>`;
}

document.querySelector(".projects-section").innerHTML = projectsSectionHTML;

let projectsListHTML = "";

const iterateTecnologies = (data) => {
    let tecnologies = "";

    data.tecnologies.map((item) => {
        tecnologies += `
        <div class="tecnology-info">
            <img class="tecnology-icon" src="./images/${ item.toLowerCase() }.png" />
            <p>${item}</p>
        </div>
        `;
    });

    return tecnologies;
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
        linksElement += `<a class="repository-link" href="${ item.repository }" target="_blank" ><img class="repository-image" src="../images/github.png" /></a><a class="project-link" href="${ item.runningLink }" target="_blank" ><h5 class="project-link-text">Link do projeto</h5></a>`
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
            <img class="project-image" src="${ data.image }" alt="">
            <div id="description" class="inactive">
                <p class="description-text">${ data.description }</p>
                <div class="description-links">
                    ${ projectLinks(data) }
                </div>
            </div>
            <div class="project-info">
                <div class="project-technologies">
                    ${ iterateTecnologies(data) }
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

        if (e.target.classList.contains("description-links") || e.target.closest(".description-links")) {
            e.stopPropagation();
            return;
        }
    
        const element = e.currentTarget.querySelector(".inactive") != null ? e.currentTarget.querySelector(".inactive") : e.currentTarget.querySelector(".active") ;
    
        element.classList.toggle("inactive");
        element.classList.toggle("active");
    });
});

window.addEventListener('resize', function () {
    const mediaQuery768px = window.matchMedia('(max-width: 768px)');
    const introSection = document.querySelector('.intro-section');
    const tecnologiesContainer = document.querySelector('#tecnologies-container');

    if (mediaQuery768px.matches) {
        document.querySelector('.content').appendChild(tecnologiesContainer);
    } else {
        introSection.appendChild(tecnologiesContainer);
    }
});

window.dispatchEvent(new Event('resize'));