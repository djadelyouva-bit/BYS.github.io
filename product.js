
    // Charger le produit
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const produit = produits[id];

    if (produit) {
      document.getElementById("titre-produit").textContent = produit.nom;
      document.getElementById("prix-produit").textContent = produit.prix + " €";

      // Images
      const imagesDiv = document.getElementById("images-produit");
      let indexImage = 0;
      
      const img = document.createElement("img");
      img.src = produit.images[0];
      img.style.width = "100%";
      imagesDiv.appendChild(img);

      document.getElementById("suivant").onclick = function() {
        if (indexImage < produit.images.length - 1) {
          indexImage++;
          img.src = produit.images[indexImage];
        }
      };

      document.getElementById("precedent").onclick = function() {
        if (indexImage > 0) {
          indexImage--;
          img.src = produit.images[indexImage];
        }
      };

      // Caractéristiques
      const specsList = document.getElementById("specs-produit");
      produit.caracteristiques.split(" | ").forEach(spec => {
        const li = document.createElement("li");
        li.textContent = spec;
        specsList.appendChild(li);
      });

    }
