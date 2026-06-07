// Récupérer l'id dans l'URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Chercher le produit correspondant
const produit = produits[id];

if (produit) {

    document.getElementById("titre-produit").textContent =
        produit.nom;

    document.getElementById("prix-produit").textContent =
        produit.prix + " €";

    // Images
        const imagesDiv = document.getElementById("images-produit");

        let indexImage = 0;

    const img = document.createElement("img");
    img.src = produit.images[indexImage];
    imagesDiv.appendChild(img);
    document.getElementById("suivant").onclick = function () {

    if (indexImage < produit.images.length - 1) {
        indexImage++;
        img.src = produit.images[indexImage];
    }

};

    document.getElementById("precedent").onclick = function () {

    if (indexImage > 0) {
        indexImage--;
        img.src = produit.images[indexImage];
    }

};


    // Caractéristiques
    const specsList =
        document.getElementById("specs-produit");

    produit.caracteristiques
        .split(" | ")
        .forEach(spec => {
            const li = document.createElement("li");
            li.textContent = spec;
            specsList.appendChild(li);
        });
}




// Base de données des produits
    const produits = {
  // ========== PC GAMING ==========
  "alienware-rtx5050": {
    id: "alienware-rtx5050",
    nom: "Alienware GeForce RTX™ 5050",
    prix: 926.65,
    description: "PC gamer puissant avec carte graphique RTX 5050 et processeur AMD Ryzen 5",
    caracteristiques: "Carte Graphique: NVIDIA GeForce RTX 5050 8GB | Processeur: AMD Ryzen 5 5500 | Mémoire: 16GB DDR4 | Stockage: SSD 500Go M.2",
    images: ["pc/1/1 (1).png", "pc/1/1 (2).png", "pc/1/1 (3).png", "pc/1/1 (4).png", "pc/1/1 (5).png", "pc/1/1 (6).png", "pc/1/1 (7).png", "pc/1/1 (😎.png", "pc/1/1 (9).png"
    ],
    type: "pc",
    similaires: ["rog-rx9060", "omen-rtx5060ti"]
  },
  "rog-rx9060": {
    id: "rog-rx9060",
    nom: "ROG Radeon™ RX 9060",
    prix: 1057.75,
    description: "PC gamer ROG avec carte graphique AMD Radeon RX 9060",
    caracteristiques: "Carte Graphique: AMD Radeon RX 9060 8GB | Processeur: AMD Ryzen 5 5600 | Mémoire: 16GB DDR4 | Stockage: SSD 500Go M.2",
    images: ["pc/1 (2)/1 (1).png", "pc/1 (2)/1 (2).png", "pc/1 (2)/1 (3).png", "pc/1 (2)/1 (4).png", "pc/1 (2)/1 (5).png", "pc/1 (2)/1 (6).png", "pc/1 (2)/1 (7).png", "pc/1 (2)/1 (😎.png", "pc/1 (2)/1 (9).png","pc/1 (2)/1 (10).png","pc/1 (2)/1 (11).png","pc/1 (2)/1 (12).png","pc/1 (2)/1 (13).png","pc/1 (2)/1 (14).png"],
    type: "pc",
    similaires: ["alienware-rtx5050", "omen-rtx5060ti"]
  },
  "omen-rtx5060ti": {
    id: "omen-rtx5060ti",
    nom: "OMEN GeForce RTX™ 5060 Ti 8GB",
    prix: 1067.83,
    description: "PC gamer OMEN avec RTX 5060 Ti et processeur AMD Ryzen 7",
    caracteristiques: "Carte Graphique: NVIDIA GeForce RTX 5060 Ti 8GB | Processeur: AMD Ryzen 7 5700X | Mémoire: 16GB DDR4 | Stockage: SSD 500Go M.2",
    images: ["pc/1 (3)/1 (1).png", "pc/1 (3)/1 (2).png", "pc/1 (3)/1 (3).png", "pc/1 (3)/1 (4).png", "pc/1 (3)/1 (5).png", "pc/1 (3)/1 (6).png", "pc/1 (3)/1 (7).png", "pc/1 (3)/1 (😎.png", "pc/1 (3)/1 (9).png","pc/1 (3)/1 (10).png"],
    type: "pc",
    similaires: ["legion-rtx5060", "predator-rtx5060ti"]
  },
  "legion-rtx5060": {
    id: "legion-rtx5060",
    nom: "Legion GeForce RTX™ 5060",
    prix: 977.08,
    description: "PC gamer Legion avec RTX 5060 et processeur Intel Core i5",
    caracteristiques: "Carte Graphique: NVIDIA GeForce RTX 5060 8GB | Processeur: Intel Core i5 12400F | Mémoire: 16GB DDR4 | Stockage: SSD 500Go M.2",
    images: ["pc/1 (4)/1 (1).png", "pc/1 (4)/1 (2).png", "pc/1 (4)/1 (3).png", "pc/1 (4)/1 (4).png", "pc/1 (4)/1 (5).png", "pc/1 (4)/1 (6).png", "pc/1 (4)/1 (7).png", "pc/1 (4)/1 (😎.png", "pc/1 (4)/1 (9).png","pc/1 (4)/1 (10).png","pc/1 (4)/1 (11).png","pc/1 (4)/1 (12).png","pc/1 (4)/1 (13).png","pc/1 (4)/1 (14).png", "pc/1 (4)/1 (15).png", "pc/1 (4)/1 (16).png"],
    type: "pc",
    similaires: ["omen-rtx5060ti", "msi-rtx5060"]
  },
  "predator-rtx5060ti": {
    id: "predator-rtx5060ti",
    nom: "Predator GeForce RTX™ 5060 Ti 8GB",
    prix: 1148.50,
    description: "PC gamer Predator avec RTX 5060 Ti et processeur Intel Core i5",
    caracteristiques: "Carte Graphique: NVIDIA GeForce RTX 5060 Ti 8GB | Processeur: Intel Core i5 12400F | Mémoire: 16GB DDR4 | Stockage: SSD 500Go M.2",
    images: ["pc/1 (5)/1 (1).png", "pc/1 (5)/1 (2).png", "pc/1 (5)/1 (3).png", "pc/1 (5)/1 (4).png", "pc/1 (5)/1 (5).png", "pc/1 (5)/1 (6).png", "pc/1 (5)/1 (7).png", "pc/1 (5)/1 (😎.png", "pc/1 (5)/1 (9).png","pc/1 (5)/1 (10).png","pc/1 (5)/1 (11).png","pc/1 (5)/1 (12).png","pc/1 (5)/1 (13).png","pc/1 (5)/1 (14).png","pc/1 (5)/1 (15).png", "pc/1 (5)/1 (16).png"],
    type: "pc",
    similaires: ["legion-rtx5060", "msi-rtx5060"]
  },
  "msi-rtx5060": {
    id: "msi-rtx5060",
    nom: "MSI GeForce RTX™ 5060",
    prix: 1158.58,
    description: "PC gamer MSI avec RTX 5060, 32GB RAM et SSD 1To",
    caracteristiques: "Carte Graphique: NVIDIA GeForce RTX 5060 8GB | Processeur: Intel Core i5 12400F | Mémoire: 32GB DDR4 | Stockage: SSD 1To M.2",
    images: ["pc/1 (6)/1 (1).png", "pc/1 (6)/1 (2).png", "pc/1 (6)/1 (3).png", "pc/1 (6)/1 (4).png", "pc/1 (6)/1 (5).png", "pc/1 (6)/1 (6).png", "pc/1 (6)/1 (7).png", "pc/1 (6)/1 (😎.png", "pc/1 (6)/1 (9).png","pc/1 (6)/1 (10).png","pc/1 (6)/1 (11).png","pc/1 (6)/1 (12).png","pc/1 (6)/1 (13).png","pc/1 (6)/1 (14).png"],
    type: "pc",
    similaires: ["predator-rtx5060ti", "corsair-rx9060xt"]
  },
  "corsair-rx9060xt": {
    id: "corsair-rx9060xt",
    nom: "Corsair Vengeance Radeon™ RX 9060 XT",
    prix: 1410.65,
    description: "PC gamer Corsair avec RX 9060 XT, DDR5 et SSD 1To",
    caracteristiques: "Carte Graphique: AMD Radeon RX 9060 XT 16GB | Processeur: AMD Ryzen 5 7500F | Mémoire: 16GB DDR5 | Stockage: SSD 1To M.2",
    images: ["pc/1 (7)/1 (1).png", "pc/1 (7)/1 (2).png", "pc/1 (7)/1 (3).png", "pc/1 (7)/1 (4).png", "pc/1 (7)/1 (5).png", "pc/1 (7)/1 (6).png", "pc/1 (7)/1 (7).png", "pc/1 (7)/1 (😎.png", "pc/1 (7)/1 (9).png","pc/1 (7)/1 (10).png","pc/1 (7)/1 (11).png","pc/1 (7)/1 (12).png","pc/1 (7)/1 (13).png"],
    type: "pc",
    similaires: ["msi-rtx5060", "alienware-rtx5050"]
  },

  // ========== ECRANS GAMING ==========
  "asus-rog-strix-xg27aqdmes": {
    id: "asus-rog-strix-xg27aqdmes",
    nom: "ASUS ROG Strix OLED XG27AQDMES",
    prix: 799,
    description: "Écran gaming 27\" QD-OLED, 240 Hz, 0.03 ms, G-Sync compatible",
    caracteristiques: "27\" QD-OLED | 240 Hz | 0.03 ms | G-Sync compatible",
    images: ["afficheur/1/1 (1).jpg", "afficheur/1/1 (2).jpg", "afficheur/1/1 (3).jpg", "afficheur/1/1 (4).jpg", "afficheur/1/1 (5).jpg", "afficheur/1/1 (6).jpg", "afficheur/1/1 (7).jpg", "afficheur/1/1 (😎.jpg"],
    type: "ecran",
    similaires: ["iyama-g2245hsu-b2", "viewsonic-vx3218-pc-mhd"]
  },
  "iyama-g2245hsu-b2": {
    id: "iyama-g2245hsu-b2",
    nom: "IYAMA G2245HSU-B2",
    prix: 149,
    description: "Écran gaming 22\" FHD, 100 Hz, Dalle IPS, 1 ms",
    caracteristiques: "22\" FHD | 100 Hz | Dalle IPS | 1 ms",
    images: ["afficheur/3/1 (1).webp", "afficheur/3/1 (2).webp", "afficheur/3/1 (3).webp", "afficheur/3/1 (4).webp", "afficheur/3/1 (5).webp", "afficheur/3/1 (6).webp"],
    type: "ecran",
    similaires: ["minifire-mf24c1", "asus-rog-strix-xg27aqdmes"]
  },
  "minifire-mf24c1": {
    id: "minifire-mf24c1",
    nom: "Minifire MF24C1",
    prix: 129,
    description: "Écran gaming 24\" FHD incurvé, 100 Hz, HDMI+USB-C, haut-parleur",
    caracteristiques: "24\" FHD incurvé | 100 Hz | HDMI 1.4 | USB-C (2.5W) | Haut-parleur",
    images: ["afficheur/8/1 (1).webp", "afficheur/8/1 (2).webp", "afficheur/8/1 (3).webp", "afficheur/8/1 (4).webp", "afficheur/8/1 (5).webp", "afficheur/8/1 (6).webp"],
    type: "ecran",
    similaires: ["iyama-g2245hsu-b2", "viewsonic-vx3218-pc-mhd"]
  },
  "viewsonic-vx3218-pc-mhd": {
    id: "viewsonic-vx3218-pc-mhd",
    nom: "VIEWSONIC VX3218-PC-MHD",
    prix: 229,
    description: "Écran gaming 32\" FHD incurvé, 180 Hz, VA, 1 ms",
    caracteristiques: "32\" FHD incurvé | 180 Hz | VA | 1 ms",
    images: ["afficheur/9/1 (1).webp", "afficheur/9/1 (2).webp", "afficheur/9/1 (3).webp", "afficheur/9/1 (4).webp", "afficheur/9/1 (5).webp", "afficheur/9/1 (6).webp"],
    type: "ecran",
    similaires: ["z-edge-32-240hz", "minifire-mf24c1"]
  },
  "z-edge-32-240hz": {
    id: "z-edge-32-240hz",
    nom: "Z-Edge 32 pouces 240Hz",
    prix: 279,
    description: "Écran gaming 32\" FHD incurvé, 240 Hz, 1500R VA, FreeSync",
    caracteristiques: "32\" FHD incurvé | 240 Hz | 1500R VA | 1 ms MPRT | FreeSync",
    images: ["afficheur/10/1 (1).webp", "afficheur/10/1 (2).webp", "afficheur/10/1 (3).webp", "afficheur/10/1 (4).webp", "afficheur/10/1 (5).webp", "afficheur/10/1 (6).webp"],
    type: "ecran",
    similaires: ["viewsonic-vx3218-pc-mhd", "z-edge-ug27p-280hz"]
  },
  "z-edge-ug24pj-blanc": {
    id: "z-edge-ug24pj-blanc",
    nom: "Z-Edge UG24PJ Blanc",
    prix: 199,
    description: "Écran gaming 24\" FHD, 240 Hz, IPS, FreeSync, HDR",
    caracteristiques: "24\" FHD | 240 Hz | IPS | 1 ms | FreeSync | HDR | 350 cd/m²",
    images: ["afficheur/7/1 (1).webp", "afficheur/7/1 (2).webp", "afficheur/7/1 (3).webp", "afficheur/7/1 (4).webp", "afficheur/7/1 (5).webp", "afficheur/7/1 (6).webp"],
    type: "ecran",
    similaires: ["z-edge-ug27pj-noir", "z-edge-ug27f-incuve"]
  },
  "z-edge-ug27f-incuve": {
    id: "z-edge-ug27f-incuve",
    nom: "Z-Edge UG27F Incurvé",
    prix: 189,
    description: "Écran gaming 27\" FHD incurvé, 180 Hz, FreeSync, 1500R VA",
    caracteristiques: "27\" FHD incurvé | 180 Hz | 1 ms | FreeSync | 1500R VA | HDMI 2.0 & DP1.4",
    images: ["afficheur/5/1 (1).webp", "afficheur/5/1 (2).webp", "afficheur/5/1 (3).webp", "afficheur/5/1 (4).webp", "afficheur/5/1 (5).webp", "afficheur/5/1 (6).webp"],
    type: "ecran",
    similaires: ["z-edge-ug24pj-blanc", "z-edge-ug27p-280hz"]
  },
  "z-edge-ug27p-280hz": {
    id: "z-edge-ug27p-280hz",
    nom: "Z-EDGE UG27P Incurvé 280Hz",
    prix: 229,
    description: "Écran gaming 27\" FHD incurvé, 280 Hz, FreeSync, 1500R",
    caracteristiques: "27\" FHD incurvé | 280 Hz | 1 ms | FreeSync | 1500R | HDMI 2.0 & DP1.2",
    images: ["afficheur/2/1 (1).webp", "afficheur/2/1 (2).webp", "afficheur/2/1 (3).webp", "afficheur/2/1 (4).webp", "afficheur/2/1 (5).webp", "afficheur/2/1 (6).webp"],
    type: "ecran",
    similaires: ["z-edge-ug27f-incuve", "z-edge-ug27s-300hz"]
  },
  "z-edge-ug27pj-noir": {
    id: "z-edge-ug27pj-noir",
    nom: "Z-EDGE UG27PJ Noir",
    prix: 209,
    description: "Écran gaming 27\" FHD, 240 Hz, IPS LED, FreeSync",
    caracteristiques: "27\" FHD | 240 Hz | IPS LED | 400 cd/m² | FreeSync | HDMI 2.0 & DP1.4",
    images: ["afficheur/4/1 (1).webp", "afficheur/4/1 (2).webp", "afficheur/4/1 (3).webp", "afficheur/4/1 (4).webp", "afficheur/4/1 (5).webp", "afficheur/4/1 (6).webp"],
    type: "ecran",
    similaires: ["z-edge-ug24pj-blanc", "z-edge-ug27s-300hz"]
  },
  "z-edge-ug27s-300hz": {
    id: "z-edge-ug27s-300hz",
    nom: "Z-EDGE UG27S Incurvé 300Hz",
    prix: 259,
    description: "Écran gaming 27\" FHD incurvé, 300 Hz, FreeSync, 1500R VA",
    caracteristiques: "27\" FHD incurvé | 300 Hz | 1 ms MPRT | FreeSync | 1500R VA | 4000:1 contraste | VESA 100x100mm",
    images: ["afficheur/6/1 (1).webp", "afficheur/6/1 (2).webp", "afficheur/6/1 (3).webp", "afficheur/6/1 (4).webp", "afficheur/6/1 (5).webp", "afficheur/6/1 (6).webp"],
    type: "ecran",
    similaires: ["z-edge-ug27p-280hz", "z-edge-ug27pj-noir"]
  },

//  claviers
  "clavier-filaire-magnetique-mo": {
    id: "clavier-filaire-magnetique-mo",
    nom: "Clavier Gamer Filaire Magnétique Mo",
    prix: 89.99,
    description: "Clavier gaming avec switchs magnétiques, RGB personnalisable et anti-ghosting",
    caracteristiques: "Switchs magnétiques | Anti-ghosting | RGB personnalisable | Filaire USB",
    images: ["clavier/1/1 (1).webp", "clavier/1/1 (2).webp", "clavier/1/1 (3).webp", "clavier/1/1 (4).webp", "clavier/1/1 (5).webp", "clavier/1/1 (6).webp"],
    type: "clavier",
    similaires: ["rk-royal-kludge-s98", "spirit-pro-k5-black"]
  },
  "rk-royal-kludge-s98": {
    id: "rk-royal-kludge-s98",
    nom: "RK ROYAL KLUDGE S98",
    prix: 129.99,
    description: "Clavier mécanique format 98%, triple mode (Bluetooth/2.4GHz/Filaire), batterie 4000mAh",
    caracteristiques: "Format 98% | RGB dynamique | Bluetooth/2.4GHz/Filaire | Batterie 4000mAh",
    images: ["clavier/1 (2)/1 (1).webp", "clavier/1 (2)/1 (2).webp", "clavier/1 (2)/1 (3).webp", "clavier/1 (2)/1 (4).webp", "clavier/1 (2)/1 (5).webp", "clavier/1 (2)/1 (6).webp", "clavier/1 (2)/1 (7).webp"],
    type: "clavier",
    similaires: ["clavier-filaire-magnetique-mo", "spirit-pro-k5-white"]
  },
  "spirit-pro-k5-black": {
    id: "spirit-pro-k5-black",
    nom: "SPIRIT OF GAMER - Pro-K5 black",
    prix: 59.99,
    description: "Clavier mécanique design noir élégant avec éclairage LED",
    caracteristiques: "Design noir élégant | Switchs mécaniques | Éclairage LED | Anti-ghosting",
    images: ["clavier/1 (3)/1 (1).webp", "clavier/1 (3)/1 (2).webp", "clavier/1 (3)/1 (3).webp", "clavier/1 (3)/1 (4).webp", "clavier/1 (3)/1 (5).webp"],
    type: "clavier",
    similaires: ["spirit-pro-k5-white", "clavier-filaire-magnetique-mo"]
  },
  "spirit-pro-k5-white": {
    id: "spirit-pro-k5-white",
    nom: "SPIRIT OF GAMER - Pro-K5 white",
    prix: 59.99,
    description: "Clavier mécanique design blanc élégant avec éclairage LED",
    caracteristiques: "Design blanc élégant | Switchs mécaniques | Éclairage LED | Anti-ghosting",
    images: ["clavier/1 (4)/1 (1).webp", "clavier/1 (4)/1 (2).webp", "clavier/1 (4)/1 (3).webp", "clavier/1 (4)/1 (4).webp", "clavier/1 (4)/1 (5).webp"],
    type: "clavier",
    similaires: ["spirit-pro-k5-black", "rk-royal-kludge-s98"]
  },
  "g-lab-combo-argon": {
    id: "g-lab-combo-argon",
    nom: "THE G-LAB - COMBO ARGON",
    prix: 79.99,
    description: "Kit complet clavier + souris gaming, switchs mécaniques, RGB 7 couleurs",
    caracteristiques: "Kit complet (clavier + souris) | Switchs mécaniques | RGB 7 couleurs | 1000Hz polling rate",
    images: ["clavier/1 (5)/1 (1).webp", "clavier/1 (5)/1 (2).webp", "clavier/1 (5)/1 (3).webp", "clavier/1 (5)/1 (4).webp"],
    type: "clavier",
    similaires: ["g-lab-keyz-elite-300", "g-lab-keyz-elite-400"]
  },
  "g-lab-keyz-elite-300": {
    id: "g-lab-keyz-elite-300",
    nom: "THE G-LAB - KEYZ Elite 300 WG",
    prix: 69.99,
    description: "Clavier mécanique gaming avec anti-ghosting 19 touches et RGB personnalisable",
    caracteristiques: "Switchs mécaniques | Anti-ghosting 19 touches | RGB personnalisable | USB polling 1000Hz",
    images: ["clavier/1 (6)/1 (1).webp", "clavier/1 (6)/1 (2).webp", "clavier/1 (6)/1 (3).webp", "clavier/1 (6)/1 (4).webp", "clavier/1 (6)/1 (5).webp", "clavier/1 (6)/1 (6).webp"],
    type: "clavier",
    similaires: ["g-lab-combo-argon", "g-lab-keyz-elite-400"]
  },
  "g-lab-keyz-elite-400": {
    id: "g-lab-keyz-elite-400",
    nom: "THE G-LAB - KEYZ Elite 400 WB",
    prix: 89.99,
    description: "Clavier mécanique premium avec switchs mécaniques, RGB 16.8M couleurs et molette de volume",
    caracteristiques: "Switchs mécaniques premium | Anti-ghosting 19 touches | RGB 16.8M couleurs | Molette de volume",
    images: ["clavier/1 (7)/1 (1).webp", "clavier/1 (7)/1 (2).webp", "clavier/1 (7)/1 (3).webp", "clavier/1 (7)/1 (4).webp"],
    type: "clavier",
    similaires: ["g-lab-keyz-elite-300", "g-lab-keyz-titan"]
  },
  "g-lab-keyz-hydrogen-noir": {
    id: "g-lab-keyz-hydrogen-noir",
    nom: "THE G-LAB - KEYZ HYDROGEN (Noir)",
    prix: 49.99,
    description: "Clavier gaming design épuré noir, switchs linéaires, RGB",
    caracteristiques: "Design épuré noir | Éclairage RGB | Switchs linéaires | Filaire USB-C",
    images: ["clavier/1 (8)/1 (1).webp", "clavier/1 (8)/1 (2).webp", "clavier/1 (8)/1 (3).webp"],
    type: "clavier",
    similaires: ["g-lab-keyz-hydro-wgfr", "g-lab-keyz-elite-300"]
  },
  "g-lab-keyz-titan": {
    id: "g-lab-keyz-titan",
    nom: "THE G-LAB - KEYZ TITAN",
    prix: 99.99,
    description: "Clavier mécanique gaming construction robuste, RGB dynamique, 1000Hz ultra-rapide",
    caracteristiques: "Construction robuste | Switchs mécaniques | RGB dynamique | 1000Hz ultra-rapide",
    images: ["clavier/1 (9)/1 (1).webp", "clavier/1 (9)/1 (2).webp", "clavier/1 (9)/1 (3).webp", "clavier/1 (9)/1 (4).webp"],
    type: "clavier",
    similaires: ["g-lab-keyz-elite-400", "g-lab-combo-argon"]
  },
  "g-lab-keyz-hydro-wgfr": {
    id: "g-lab-keyz-hydro-wgfr",
    nom: "THE G-LAB - KEYZ-HYDRO-WGFR",
    prix: 54.99,
    description: "Clavier gaming design blanc élégant, switchs linéaires, RGB",
    caracteristiques: "Design blanc élégant | Éclairage RGB | Switchs linéaires | Filaire USB-C",
    images: ["clavier/1 (10)/1 (1).webp", "clavier/1 (10)/1 (2).webp", "clavier/1 (10)/1 (3).webp", "clavier/1 (10)/1 (4).webp", "clavier/1 (10)/1 (5).webp"],
    type: "clavier",
    similaires: ["g-lab-keyz-hydrogen-noir", "spirit-pro-k5-white"]
  }
};