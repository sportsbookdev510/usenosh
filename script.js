const navToggle = document.getElementById("navToggle");
const mobileMenu = document.getElementById("mobileMenu");
const copyBtn = document.getElementById("copyCa");
const caValue = document.getElementById("caValue");

if (navToggle && mobileMenu) {
  navToggle.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (copyBtn && caValue) {
  copyBtn.addEventListener("click", async () => {
    const text = caValue.textContent.trim();
    try {
      await navigator.clipboard.writeText(text);
      copyBtn.textContent = "Copied";
      copyBtn.classList.add("copied");
      setTimeout(() => {
        copyBtn.textContent = "Copy";
        copyBtn.classList.remove("copied");
      }, 1600);
    } catch {
      copyBtn.textContent = "Failed";
      setTimeout(() => {
        copyBtn.textContent = "Copy";
      }, 1600);
    }
  });
}
