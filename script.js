


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
      activi += `
                <div class="cardga enligne">
                <img class="cardimga" src="${a.image}" alt="${a.nom}"/>
                <span></span><p class="cardspan3a">difficulté</p>
                </div>
                <div class="cardda">
                <h3 class="cardpa">${a.nom}</h3>
                <p class="cardtexa">${a.description} </p>
                </div>
      `;
    });
    let pres = "";
    data.entreprise.presentation.forEach((p) => {
      pres += `
      <article class="articlep flex spacebettween enligne">
      <div class="width50">
      <img class="cardimgp" src="${p.image}" alt="Images des Présentations"/>
      </div>
   

      <div class="width50">
      <h3 class="cardtp">${p.titre}</h3>
      <p class="cardtexp">${p.texte}</p>
      </div>
      </article>
    
      `;
    });
    let temoin = "";
    data.entreprise.temoignages.forEach((t) => {
      temoin += `<li>${t.prenom} ${t.typeExperience} ${t.commentaire}${t.note}</li>`;
    });
    document.querySelector(".tetedepage").innerHTML += `
    <div>
        <h1 class="nom">${data.entreprise.nomCommercial}</h1>
        <p class="pp">${data.entreprise.phraseAccroche}</p>
    </div>`;
    document.querySelector(".appelreserv").innerHTML += `
    <p class="appelres">${data.entreprise.texteAppelAction}</p>
    `;
    document.querySelector(".prestaj").innerHTML += `
    <div data-aos="fade-up"
    data-aos-duration="5000">${pres}</div>
    `;
    document.querySelector(".appelreserv1").innerHTML += `
    <p class="appelres">${data.entreprise.texteAppelAction}</p>
    `;
    document.querySelector(".activj").innerHTML += `
    <section class="activj flex" data-aos="zoom-in data-aos-duration="2000">${activi}</section>
    
    `;

    
    
    
    console.log(data);
  }


 
  
  
  AOS.init();

    /*${data.entreprise.texteAppelAction}
      ${data.entreprise.avantagesClients}
      ${activi}
      ${pres}
      ${temoin}
      
      
      
      */