import RouterHTML from "./RouterHTML.js";

const menu = ["Alertas", "Bordes", "Botones", "Colores"];

document.addEventListener("DOMContentLoaded", (e) => {
  let frag = "";
  menu.forEach((el) => {
    frag += `
      <li class="list-item blue">
        <a class="white-text" href="${el}">${el}</a>
      </li>
    `;
  });
  document.querySelector("aside.menu ul.list").innerHTML = frag;

  RouterHTML({
    navLink: "aside.menu ul.list li.list-item a",
    container: "section.contenido",
    path: "./documentation/views",
  });
});
