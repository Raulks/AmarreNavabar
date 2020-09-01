
abrirYcerrar = () => {
  let iconoMenu = document.querySelector(".hamburguer>img");
  let navContainer = document.querySelector(".divNavContainer");

  if (iconoMenu.getAttribute("src") == "./img/icono-menu.png") {
    iconoMenu.setAttribute("src", "./img/close-menu.png");
    navContainer.style.left = "0vw";
  } else {
    iconoMenu.setAttribute("src", "./img/icono-menu.png");
    navContainer.style.left = "-58vw";
  }
};

openDropDown = (position) => {
  let arrayOfUls = [...document.querySelectorAll(".dropDownLi>ul")];

  let compStyles = window.getComputedStyle(arrayOfUls[position]);

  if (compStyles.getPropertyValue("display") == "none") {
    arrayOfUls[position].style.display = "block";
  } else {
    arrayOfUls[position].style.display = "none";
  }
};
