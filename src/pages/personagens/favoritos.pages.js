export async function personagensFavoritosPage() {
      const app = document.querySelector('#app')
  app.innerHTML = `
<h1 class="fw-bold text-primary">⭐ Personagens</h1>
<div class="row mt-4" id="lista-personagens"></div>
  `;
}