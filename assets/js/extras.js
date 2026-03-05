// Page loader — hide after components load
document.addEventListener("includesLoaded", () => {
    const loader = document.querySelector("[data-loader]");
    if (loader) {
        loader.classList.add("hidden");
        setTimeout(() => loader.remove(), 400);
    }
});

// Scroll progress bar
const progressBar = document.querySelector("[data-progress]");
if (progressBar) {
    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        progressBar.style.width = (scrollTop / docHeight) * 100 + "%";
    }, { passive: true });
}

// Copy email to clipboard
document.addEventListener("click", (e) => {
    const btn = e.target.closest("#copyEmail");
    if (!btn) return;

    const email = btn.dataset.email;
    navigator.clipboard.writeText(email).then(() => {
        btn.classList.add("copied");
        setTimeout(() => btn.classList.remove("copied"), 1500);
    });
});
