const letter = `Paste your letter here.

Leave one blank line between paragraphs.

Like this.

The website will automatically format everything nicely.`;

const envelope = document.getElementById("envelope");
const landing = document.getElementById("landing");
const letterPage = document.getElementById("letterPage");
const letterText = document.getElementById("letterText");

envelope.addEventListener("click", () => {

    envelope.classList.add("open");

    setTimeout(() => {

        landing.style.display = "none";

        letterPage.classList.remove("hidden");

        renderLetter();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1200);

});

function renderLetter() {

    letterText.innerHTML = "";

    const paragraphs = letter.trim().split("\n\n");

    paragraphs.forEach((paragraph) => {

        const p = document.createElement("p");

        p.className = "paragraph";

        p.textContent = paragraph;

        letterText.appendChild(p);

    });

    revealParagraphs();

}

function revealParagraphs() {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll(".paragraph").forEach(p => {

        observer.observe(p);

    });

}

// Optional floating particles
setInterval(() => {

    const particle = document.createElement("div");

    particle.className = "floating-heart";

    particle.innerHTML = "❤";

    particle.style.left = Math.random() * window.innerWidth + "px";

    particle.style.fontSize = (10 + Math.random() * 12) + "px";

    particle.style.animationDuration = (6 + Math.random() * 4) + "s";

    document.body.appendChild(particle);

    setTimeout(() => {

        particle.remove();

    }, 10000);

}, 1200);
