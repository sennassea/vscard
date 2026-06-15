const copyButtons = document.querySelectorAll(".copy-btn");
const copyMessage = document.getElementById("copyMessage");

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const textToCopy = button.dataset.copy;

    try {
      await navigator.clipboard.writeText(textToCopy);
      showCopyMessage();
    } catch (error) {
      copyFallback(textToCopy);
      showCopyMessage();
    }
  });
});

function showCopyMessage() {
  copyMessage.classList.add("show");

  setTimeout(() => {
    copyMessage.classList.remove("show");
  }, 1400);
}

function copyFallback(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}