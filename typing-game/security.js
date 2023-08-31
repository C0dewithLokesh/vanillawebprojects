// security.js
console.log = () => {};
console.warn = () => {};
console.error = () => {};

window.addEventListener('keydown', (e) => {
  if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.shiftKey && e.key === 'J')) {
    e.preventDefault();
  }
});

// Disable context menu
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
