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
    <p class="textconcept"><span class="material-symbols-outlined guille">format_quote</span>  
    Un escape game est un jeu d'énigmes qui se vit en équipe. Les joueurs évoluent généralement dans un lieu clos et thématisé. Ils doivent résoudre une série de casse-têtes dans un temps imparti pour réussir à s'échapper ou à accomplir une mission.
    <span class="material-symbols-outlined guille">format_quote</span> </p>
    <a href="./Réserver.html" alt="Réserver" class="boutonreser"><span class="material-symbols-outlined">touch_app</span></a>
    `;
    console.log(data);
  }

    /*${data.entreprise.texteAppelAction}
      ${data.entreprise.avantagesClients}
      ${activi}
      ${pres}
      ${temoin}*/