// panier-commun.js – stockage localStorage partagé
let panier = [];

function sauvegarderPanier() {
  localStorage.setItem('panier_global', JSON.stringify(panier));
}

function chargerPanier() {
  const saved = localStorage.getItem('panier_global');
  if (saved) {
    panier = JSON.parse(saved);
  } else {
    panier = [];
  }
  afficherPanier();
}

function ajouterAuPanier(nom, prix, image) {
  // Vérifier si le produit existe déjà (optionnel : on peut cumuler les quantités)
  const existing = panier.find(p => p.nom === nom);
  if (existing) {
    existing.quantite = (existing.quantite || 1) + 1;
  } else {
    panier.push({ nom: nom, prix: prix, image: image, quantite: 1 });
  }
  sauvegarderPanier();
  afficherPanier();
  alert(`${nom} ajouté au panier !`);
}

function afficherPanier() {
  const liste = document.getElementById('liste-panier');
  const totalSpan = document.getElementById('total-panier');
  if (!liste) return;
  liste.innerHTML = '';
  let total = 0;
  if (panier.length === 0) {
    liste.innerHTML = '<li style="text-align:center;">Votre panier est vide</li>';
  } else {
    panier.forEach((item, idx) => {
      const qty = item.quantite || 1;
      const itemTotal = item.prix * qty;
      total += itemTotal;
      const li = document.createElement('li');
      li.innerHTML = `
        <span><strong>${item.nom}</strong> (x${qty})</span>
        <span>${itemTotal.toFixed(2)} €</span>
        <button onclick="retirerDuPanier(${idx})" style="background:#f44336; padding:5px 10px; border-radius:8px;">❌</button>
      `;
      liste.appendChild(li);
    });
  }
  totalSpan.textContent = total.toFixed(2);
}

function retirerDuPanier(index) {
  panier.splice(index, 1);
  sauvegarderPanier();
  afficherPanier();
}

function viderPanier() {
  if (confirm('Vider tout le panier ?')) {
    panier = [];
    sauvegarderPanier();
    afficherPanier();
  }
}

// Charger au démarrage
chargerPanier();