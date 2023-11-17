export function isDark(hint) {
  // Whenever the user explicitly chooses light mode
  if (hint === "toLight") localStorage.setItem("theme", "light");

  // Whenever the user explicitly chooses dark mode
  if (hint === "toDark") localStorage.setItem("theme", "dark");

  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}
export function subscriber(callback) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", callback);
  return () => {
    media.removeEventListener("change", callback);
  };
}
export function getSnapShot() {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  return media.matches;
}
