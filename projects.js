const projects = [
  {
    title: "AI Recycle Sorter",
    year: "2023-2024",
    description: "Smart object-sorting robot using Jetson Nano and OpenCV. Built with React, MongoDB and Python. Developed as a Capstone Project at University of Ottawa.",
    image: "assets/images/projects/ai-sorter.png"
  },
  {
    title: "E-Hotel Booking System",
    year: "2024",
    description: "Web-based booking platform with PostgreSQL, PHP and JavaScript. Includes admin panel and real-time availability features.",
    image: "assets/images/projects/e-hotel.png"
  },
  {
    title: "Service Novigrad App",
    year: "2022",
    description: "Android app for local service bookings. Built with Java and Firebase.",
    image: "assets/images/projects/novigrad.png"
  },
  {
    title: "Real-Time Alarm Subsystem",
    year: "2024",
    description: "Embedded alarm system using STM32 and C++ for real-time monitoring and security use cases.",
    image: "assets/images/projects/alarm.png"
  }
];

let current = 0;

function renderProject() {
  const p = projects[current];
  document.getElementById("project-slider").innerHTML = `
    <div class="project-card">
      <img src="${p.image}" class="project-img" alt="${p.title}">
      <div>
        <h3>${p.title}</h3>
        <p><em>${p.year}</em></p>
        <p>${p.description}</p>
      </div>
    </div>
  `;
  document.getElementById("project-counter").innerText = (current + 1) + " / " + projects.length;
}

function nextProject() {
  if (current < projects.length - 1) {
    current++;
    renderProject();
  }
}

function prevProject() {
  if (current > 0) {
    current--;
    renderProject();
  }
}

window.onload = renderProject;
