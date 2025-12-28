/* ================= SCROLL REVEAL ================= */
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    reveals.forEach(el => {
        if (
            el.getBoundingClientRect().top < window.innerHeight - 100 &&
            !el.classList.contains('active')
        ) {
            el.classList.add('active');

            // Animate skills only when skills section appears
            if (el.classList.contains('skills')) {
                document.querySelectorAll('.fill').forEach(bar => {
                    bar.style.width = bar.dataset.width;
                });
            }
        }
    });
}

window.addEventListener('load', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);


/* ================= PROJECT DATA ================= */
const projects = [
    {
        title: "StudyMate AI",
        desc: "AI-powered academic mentor platform"
    },
    {
        title: "Payroll Management System with AI Chatbot",
        desc: "Smart payroll system for employee management"
    },
    {
        title: "J.A.R.V.I.S",
        desc: "Personal AI Assistant"
    },
    {
        title: "Time Management System",
        desc: "System for efficient time planning"
    },
    {
        title: "Sentiment Analyser",
        desc: "System can detect the emotion of the user autometically"
    }
    // ➕ Add more projects here (no limit)
];


/* ================= RENDER PROJECTS ================= */
const grid = document.getElementById("projectGrid");

function renderProjects(projectList) {
    grid.innerHTML = ""; // clear first

    projectList.forEach(project => {
        const card = document.createElement("div");
        card.className = "project-card";

        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.desc}</p>
        `;

        grid.appendChild(card);
    });
}

renderProjects(projects);
