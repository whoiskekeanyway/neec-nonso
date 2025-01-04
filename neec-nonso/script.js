// Mobile Navigation

const toggleBtn = document.querySelector(".menu");
const nav = document.querySelector(".nav-list");
const burger = document.querySelector(".menu");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("active"), burger.classList.toggle("toggle");
});

// Back to top Button

const mybutton = document.getElementById("myBtn");

function scrollFunction() {
  document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ? (mybutton.style.display = "block")
    : (mybutton.style.display = "none");
}

function topFunction() {
  (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
}

window.onscroll = function () {
  scrollFunction();
};

let tl = gsap.timeline({ scrollTrigger: { trigger: ".logo-image" } });
tl.from(".logo-image", { y: -200, opacity: 0.5, duration: 1.5 })
  .from(".nav-list", { y: -200, opacity: 0.5, duration: 1.5 })
  .from(".extra", { x: 200, opacity: 0, duration: 1.5 })
  .from(".footer-container", { y: 10, opacity: 0, duration: 1.5 });


// Flag to ensure initialization only happens once
let isInitialized = false;

function initAnimations() {
    // Prevent multiple initializations
    if (isInitialized) return;
    
    // Check if GSAP and ScrollTrigger are available
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.warn('GSAP or ScrollTrigger not loaded yet. Retrying...');
        requestAnimationFrame(initAnimations);
        return;
    }

    try {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Select all sections within homepage-images
        const sections = document.querySelectorAll('.homepage-images section');

        if (sections.length === 0) {
            console.warn('No sections found. Check selector.');
            return;
        }

        // Create animation for each section
        sections.forEach((section, i) => {
            // Set initial state
            gsap.set(section, { opacity: 0, y: 50 });

            gsap.to(section, {
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom-=100",
                    toggleActions: "play none none reverse",
                },
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                delay: i * 0.2,
            });
        });

        // Mark as initialized
        isInitialized = true;
        
    } catch (error) {
        console.error('Animation initialization error:', error);
    }
}

// Use a single initialization point
window.addEventListener('load', initAnimations);