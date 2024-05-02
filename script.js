


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
      temoin += `
					  <li class="splide__slide slide" data-splide-interval="1000"> 
            <h4 class="commtitre">${t.typeExperience}</h4>
					  <p class="commtext">${t.commentaire}</p>
            <p class="commPrem">${t.prenom}</p>
					  <span class="material-symbols-outlined">vpn_key</span>
					  <p>${t.note}</p></li>
            

    `;
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
    document.querySelector(".comm").innerHTML += `
  
				  <ul class="splide__list">
					 ${temoin}
				  </ul>
	
    `;
    
    
    console.log(data);
  }





  var splide = new Splide( '.splide', {
    type    : 'loop',
    perPage : 3,
    autoplay: true,
  } );
  
  splide.mount();
 
  
  
  AOS.init();

    /*${data.entreprise.texteAppelAction}
      ${data.entreprise.avantagesClients}
      ${activi}
      ${pres}
      ${temoin}
      
      
      
      */