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
    <div>
        <h1 class="nom">${data.entreprise.nomCommercial}</h1>
        <p class="pp">${data.entreprise.phraseAccroche}</p>
    </div>`;
    document.querySelector(".con").innerHTML += `
    <p class="textconcept">" Un escape game est un jeu d'énigmes qui se vit en équipe. Les joueurs évoluent généralement dans un lieu clos et thématisé. Ils doivent résoudre une série de casse-têtes dans un temps imparti pour réussir à s'échapper ou à accomplir une mission. En résumé, c'est un peu comme Fort Boyard mais sans les épreuves physiques. "</p>
    <a href="./Panier.html" class="boutonreser flex spaceBetween"><span class="material-symbols-outlined">Réserver</span></a>
    `;
    console.log(data);
  }

    /*${data.entreprise.texteAppelAction}
      ${data.entreprise.avantagesClients}
      ${activi}
      ${pres}
      ${temoin}*/