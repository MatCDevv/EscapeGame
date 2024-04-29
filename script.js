fetch("escapeGame.json")
  .then(rep => {
    return rep.json();
  })
  .then(data => {
    addProducts(data);
  });

function addProducts (data) 
{ data.forEach ((element) => {
    let activite ="" 
    element.entreprise.forEach((h) => {
        (activite+=``);
    });
    document.querySelector ("#content").innerHTML +=`
        <div></div>`
});
}

    