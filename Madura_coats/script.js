
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


const scrollTopBtn = document.getElementById("scroll-to-top");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = "flex";
    } else {
        scrollTopBtn.style.display = "none";
    }
});


document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navbarLinks = document.querySelectorAll(".navbar-a");

    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navbarLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill');
    
    skills.forEach(skill => {
        const progressBar = skill.querySelector('.progress-bar');
        const skillLevel = skill.querySelector('.progress-bar').getAttribute('data-skill');
        const description = skill.getAttribute('data-description');
        
       
        progressBar.style.setProperty('--progress-width', `${skillLevel}%`);
        
       
        skill.addEventListener('mouseenter', () => {
        
            const descriptionElement = document.createElement('div');
            descriptionElement.classList.add('skill-description');
            descriptionElement.innerText = description;
            
            
            skill.appendChild(descriptionElement);
        });
        
        skill.addEventListener('mouseleave', () => {
       
            const descriptionElement = skill.querySelector('.skill-description');
            if (descriptionElement) {
                descriptionElement.remove();
            }
        });
    });
});
