// scripts.js
const imagenes = ["matematico1.jpg", "matematico2.jpg", "matematico3.jpg"];
const informacion = [
    {
        nombre: "Matemático 1",
        descripcion: "Información adicional sobre Matemático 1."
    },
    {
        nombre: "Matemático 2",
        descripcion: "Información adicional sobre Matemático 2."
    },
    {
        nombre: "Matemático 3",
        descripcion: "Información adicional sobre Matemático 3."
    }
];

let indiceComic = 0;

const imagenComic = document.getElementById("imagen-comic");
const informacionComic = document.getElementById("informacion");
const cambiarComicButton = document.getElementById("cambiar-comic");

cambiarComicButton.addEventListener("click", () => {
    // Cambia la imagen y la información
    indiceComic = (indiceComic + 1) % imagenes.length;
    imagenComic.src = imagenes[indiceComic];
    informacionComic.innerHTML = `
        <h2>${informacion[indiceComic].nombre}</h2>
        <p>${informacion[indiceComic].descripcion}</p>
    `;
});
