document.addEventListener("DOMContentLoaded", () => {
  const width = window.innerWidth;
  let viewType = "";

  if (width < 600) {
    viewType = "Mobile View";
  } else if (width >= 600 && width < 900) {
    viewType = "Tablet View";
  } else {
    viewType = "Desktop/Laptop View";
  }

  console.log(`Current screen width: ${width}px — ${viewType}`);
});
