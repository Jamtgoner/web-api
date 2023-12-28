const cargarPais = async () => {

const apiUrl = "https://api-paises-production.up.railway.app/v1/random"

const res = await fetch(apiUrl);

const datos = await res.json();

let toHtml = ""

datos.forEach( (pais, index) =>{
  toHtml += `
        <div class="bandera" >
        <img src="${pais.urlImg}" class="card-img-top" alt="Bandera de ${
          pais.nombre
        }" ${index > 20 ? 'loading="lazy"' : ""}>
        <div class="overlay">
          <i class="bi bi-people-fill"></i>
          <p>${pais.gentilicio.join('<br>')}</p>
        </div>
        <div class="pais text-bg-dark align-items-center flex-column">
          <p class="text-bg-secondary paisF">${pais.nombre}</p>
          <p>${pais.capital}</p>
        </div>
      </div>
    `
})

document.getElementById("contenedorBanderas").innerHTML = toHtml

}

cargarPais();