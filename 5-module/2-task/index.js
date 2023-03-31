function toggleText() {
  const button = document.querySelector(".toggle-text-button");
  const text = document.querySelector("#text");
  let isHidden = false;
  button.addEventListener("click", () => {
    isHidden = !isHidden;
    text.hidden = isHidden;
  });
}
