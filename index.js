//Abrir y cerrar divNavContainer
abrirYcerrar = () => {
  let iconoMenu = document.querySelector(".hamburguer>img");
  let navContainer = document.querySelector("#divNavContainer");

  if (iconoMenu.getAttribute("src") == "./img/icono-menu.png") {
    iconoMenu.setAttribute("src", "./img/close-menu.png");
    navContainer.style.left = "0";
  } else {
    iconoMenu.setAttribute("src", "./img/icono-menu.png");
    navContainer.style.left = "-59vw";
  }
};
//Desplegar secciones divNavContainer
openDropDown = (position) => {
  let arrayOfUls = [...document.querySelectorAll(".dropDownLi>ul")];

  let compStyles = window.getComputedStyle(arrayOfUls[position]);

  if (compStyles.getPropertyValue("display") == "none") {
    arrayOfUls[position].style.display = "block";
  } else {
    arrayOfUls[position].style.display = "none";
  }
};

//Cerrar al clickar fuera del divNavContainer
window.onclick = (event) => {
  let iconoMenu = document.querySelector(".hamburguer>img");
  let navContainer = document.querySelector("nav > div").contains(event.target);

  if (!navContainer) {
    if (document.querySelector("#divNavContainer")) {
      document.querySelector("#divNavContainer").style.left = "-59vw";
      iconoMenu.setAttribute("src", "./img/icono-menu.png");
    }
  }
};
