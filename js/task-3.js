const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", () => {
  const trimmedName = inputEl.value.trim();
  outputEl.textContent = trimmedName !== "" ? trimmedName : "Anonymous";
});

