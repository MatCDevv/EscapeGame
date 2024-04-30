fetch("escapeGame.json")
  .then(rep => {
    return rep.json();
  })
  .then(data => {
    addProducts(data);
  });
  function addProducts(data) {
    let activi = "";
    data.entreprise.activites.forEach((a) => {
      activi += `<li>${a.nom} ${a.description} <img src="${a.image}" alt="${a.nom}"/> </li>`;
    });
    let pres = "";
    data.entreprise.presentation.forEach((p) => {
      pres += `<li>${p.titre} ${p.texte} <img src="${p.image}" alt=""/> </li>`;
    });
    let temoin = "";
    data.entreprise.temoignages.forEach((t) => {
      temoin += `<li>${t.prenom} ${t.typeExperience} ${t.commentaire}${t.note}</li>`;
    });
    document.querySelector(".content").innerHTML += `
    <section class="">
    <video autoplay muted loop id="Video">
    <source src="" type="video/mp4">
    </video>
    <div class="">
      <strong> ${data.entreprise.nomCommercial}</strong>
      <h1 >${data.entreprise.phraseAccroche}</h1>
      </div>
      </section>
      ${data.entreprise.texteAppelAction}
      ${data.entreprise.avantagesClients}
      ${activi}
      ${pres}
      ${temoin}
    `;
    console.log(data);
  }