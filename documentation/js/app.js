import RouterHTML from "./RouterHTML.js";

const menu = [
  "Alertas",
  "Bordes",
  "Botones",
  "Colores",
  "Flex",
  "Texto",
  "Tipografia",
];

document.addEventListener("DOMContentLoaded", (e) => {
  let frag = "";
  menu.forEach((el) => {
    frag += `
        <a class="list-item blue white-text" href="${el}">${el}</a>
    `;
  });
  document.querySelector("aside.menu nav.list").innerHTML = frag;

  RouterHTML({
    navLink: "aside.menu nav.list a,.navbar-nav .navbar-item a",
    container: "section.contenido",
    path: "./documentation/views",
  });
});
