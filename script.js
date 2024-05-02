
fetch("escapeGame.json")
  .then(rep => {
    return rep.json();
  })
  .then(data => {
    addContent(data);
  });
  function addContent(data) {
    let activi = "";
    data.entreprise.activites.forEach((a) => {
      activi += `
                <div class="cardga enligne">
                <img class="cardimga" src="${a.image}" alt="${a.nom}"/>
                <span></span><p class="cardspan3a"></p>
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


    document.querySelector(".tetedepage").innerHTML += `
    <div>
        <h1 class="nom">${data.entreprise.nomCommercial}</h1>
        <p class="pp">${data.entreprise.phraseAccroche}</p>
    </div>`;
    document.querySelector(".appelreserv").innerHTML += `
    <p class="appelres">${data.entreprise.texteAppelAction}</p>
    `;
    document.querySelector(".prestaj").innerHTML += `
    <div data-aos="zoom-in data-aos-duration="2000">${pres}</div>
    `;

/* Slider des Aventages */

    data.entreprise.avantagesClients.forEach((a) => {
    document.querySelector("#commentSlider1").innerHTML += `
        <li class="splide__slide slide0" data-splide-interval="3000"> 
            <h4 class="commtitre">${a}</h4>
               </li>
    `;
    });

    document.querySelector(".appelreserv1").innerHTML += `
    <p class="appelres">${data.entreprise.texteAppelAction}</p>
    `;
    document.querySelector(".activj").innerHTML += `
    <section class="activj flex" data-aos="zoom-in data-aos-duration="2000">${activi}</section>
    `;

/* Slider des Commentaires*/

    data.entreprise.temoignages.forEach((t) => {
      document.querySelector("#commentSlider").innerHTML +=`
      <li class="splide__slide slide" data-splide-interval="3200"> 
      <h4 class="commtitre textcenter">${t.typeExperience}</h4>
      <p class="commtext textcenter">${t.commentaire}</p>
      <div class="flex enligne">
      <p class="commnote">${t.note}</p>
      <span class="material-symbols-outlined iconcomm">lock</span>
      <p class="commPrem">${t.prenom}</p>
      </div></li>
      `;
      });
  
    document.querySelector(".appelreserv2").innerHTML += `
    <p class="appelres">${data.entreprise.texteAppelAction}</p>
    `;
    
    
    console.log(data);
/*
    var splide = new Splide( '.comm0', {
      type   : 'loop',
      perPage :1,
      autoplay: true,
    } );
    splide.mount();

    var splide2 = new Splide( '.comm1', {
      type   : 'loop',
      perPage :1,
      autoplay: true,
    } );
    splide2.mount();*/

    document.querySelectorAll(".splide").forEach(s=>{
      new Splide(s,{
        type   : 'loop',
      perPage :1,
      autoplay: true,
      }).mount()
    })    
  }

  var map = L.map('map').setView([45.4397, 4.3872], 14);

  var Stadia_AlidadeSmoothDark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}', {
    minZoom: 0,
    maxZoom: 20,
    attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    ext: 'png'
  }).addTo(map);
  
  L.marker([45.4397, 4.3872]).addTo(map)
  .bindPopup('<span class="material-symbols-outlined span1">emoji_people </span>')
      .openPopup();




  
  AOS.init();

    /*${data.entreprise.texteAppelAction}
      ${data.entreprise.avantagesClients}
      ${activi}
      ${pres}
      ${temoin}
      
      
      
      */