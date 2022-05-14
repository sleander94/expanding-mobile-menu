function mainMenu(element, menu) {
  const menuContainer = document.querySelector(menu);
  menuContainer.style.display = "none";
  const menuOptions = menuContainer.querySelectorAll("button");
  element.addEventListener("click", () => {
    if (menuContainer.style.display === "none") {
      menuContainer.style.display = "flex";
      // Force reflow to trigger animation
      void menuContainer.offsetHeight;
    } else {
      menuContainer.style.display = "none";
    }
    menuOptions.forEach((option) => {
      option.classList.toggle("visible");
      const optionImage = option.querySelector("img");
      optionImage.classList.toggle("visible");
    });
    element.classList.toggle("active");
  });
}

const mainButton = document.getElementById("mainMenuButton");

mainMenu(mainButton, ".optionContainer");
