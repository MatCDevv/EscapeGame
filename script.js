fetch("escapeGame.json")
  .then(rep => {
    return rep.json();
  })
  .then(data => {
    addProducts(data);
  });

function addProducts (data) 
  { data.forEach ((element) => {
    let acti=""
    element.activites.forEach ((a) => { 
      (acti+=`<h4>${a.nom}</h4>`);
    })
  })
};