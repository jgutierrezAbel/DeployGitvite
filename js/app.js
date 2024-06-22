let variable = "Hola Mundo";
// let permite modificar el valor de la variable

const variable2 = "Hola Mundo";
// const no permite modificar el valor de la variable

var variable3 = "Hola Mundo";
// var backward compatibility deprecado

//JSON  Javascript Object Notation
const datosProyectos = [
  {
    nombre: "Bodeguita Guty",
    descripcion: "Se realizo una pagina web referenciada a una bodega de abarroteria en general, para conocer lo que se vende y sus propositos",
    fechaInicio: "2024-03-21",
    fechaFin: "2024-04-02",
    imgUrl: "images/lg.jpg",
    done: true,
  },
  {
    nombre: "Proyecto REM",
    descripcion: "Se realizo una pagina web referenciada a un evento religioso con  el proposito de atraer a la juventud y hacer de este algo grande",
    fechaInicio: "2023-02-25",
    fechaFin: "2023-02-25",
    imgUrl: "images/rm.jpg",
    done: true,
  }
  
];

let myModal = null;
function page_load() {
    myModal = new ModalClass();
    populateProjects();
}

// funcion para carga sitios web al dom
function populateProjects() {
    const contendorSitiosWeb = document.getElementById("sitiosWebProjects");
  datosProyectos.forEach((proyecto) => {
    const card = document.createElement("div");
    card.classList.add("card");
    if (proyecto.done) {
      card.classList.add("done");
    }
    const img = document.createElement("img");
    img.src = proyecto.imgUrl;
    img.alt = "Imagen del Proyecto";
    const h4 = document.createElement("h4");
    h4.textContent = proyecto.nombre;
    h4.addEventListener("click", () => {
        myModal.showModal(proyecto.nombre, proyecto.descripcion);
    });
    const p = document.createElement("p");
    p.textContent = `${proyecto.descripcion} | ${proyecto.fechaInicio} - ${proyecto.fechaFin}`;

    card.appendChild(img);
    card.appendChild(h4);
    card.appendChild(p);

    contendorSitiosWeb.appendChild(card);
  });
}


//registrando una funcion para que se
// ejecute cuando este cargado todo el documento
document.addEventListener("DOMContentLoaded", page_load);
