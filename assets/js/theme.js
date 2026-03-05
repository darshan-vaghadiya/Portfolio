const updateTheme = (theme) => {
    const btns = document.querySelectorAll("#theme-toggle, #theme-toggle-mobile");
    const meta = document.querySelector('meta[name="theme-color"]');

    btns.forEach((btn) => {
        const icon = btn.querySelector("i");
        if (icon) icon.className = theme === "dark" ? "bi bi-sun-fill" : "bi bi-moon-fill";
        btn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    });

    if (meta) meta.content = theme === "dark" ? "#1a1a1a" : "#f5f5f5";
};

const savedTheme = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-theme", savedTheme);
updateTheme(savedTheme);

document.addEventListener("click", (e) => {
    const btn = e.target.closest("#theme-toggle, #theme-toggle-mobile");
    if (!btn) return;

    const current =
        document.documentElement.getAttribute("data-theme") === "dark"
            ? "light"
            : "dark";

    const overlay = document.querySelector("[data-theme-overlay]");
    if (overlay) {
        overlay.classList.add("active");
        setTimeout(() => {
            document.documentElement.setAttribute("data-theme", current);
            localStorage.setItem("theme", current);
            updateTheme(current);
            setTimeout(() => overlay.classList.remove("active"), 50);
        }, 200);
    } else {
        document.documentElement.setAttribute("data-theme", current);
        localStorage.setItem("theme", current);
        updateTheme(current);
    }
});
