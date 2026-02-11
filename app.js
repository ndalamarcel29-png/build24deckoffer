// ====== EDIT ICI : contenu du deck ======
const slides = [
  {
    badge: "VENDEUR",
    title: "La réalité des pros\nde la construction aujourd’hui",
    subtitle: "Beaucoup de demandes… mais trop peu de chantiers signés.",
    leftTitle: "Ce qui bloque le CA",
    leftBullets: [
      "Leads non qualifiés → perte de temps",
      "Devis trop lents → le client signe ailleurs",
      "Relances irrégulières → opportunités perdues",
      "Infos dispersées (WhatsApp, mails, Excel) → zéro visibilité"
    ],
    rightTitle: "Impact concret",
    rightBullets: [
      "Taux de signature trop bas",
      "Carnet de commandes instable",
      "Équipes sous pression",
      "Marge qui se dégrade (travail “gratuit” sur des devis)"
    ],
    kpis: [
      { big: "−30% à −50%", small: "de leads perdus sans relance" },
      { big: "24–72h", small: "délai moyen avant devis (trop tard)" },
      { big: "0", small: "pilotage fiable sans CRM" }
    ],
    footLeft: "Build.24 — Deck IA Construction",
    footRight: "1 / " // auto complété
  },

  {
    badge: "PROBLÈME",
    title: "Le vrai problème :\nle temps commercial est mal utilisé",
    subtitle: "Les dirigeants + conducteurs de travaux font du support, pas de la vente.",
    leftTitle: "Où le temps part ?",
    leftBullets: [
      "Appels entrants sans tri",
      "Allers-retours client (photos, plans, contraintes)",
      "Devis manuels et répétitifs",
      "Relances “à la mémoire”"
    ],
    rightTitle: "Ce que le marché attend",
    rightBullets: [
      "Réponse rapide (≤ 15 min sur un lead chaud)",
      "Devis clair + rassurant",
      "Suivi pro jusqu’à signature",
      "Expérience client fluide"
    ],
    kpis: [
      { big: "10–15h/sem", small: "perdues en relance + tri" },
      { big: "5–20%", small: "signature typique sans système" },
      { big: "x2", small: "CA possible avec process" }
    ],
    footLeft: "Build.24 — Problème",
    footRight: "2 / "
  },

  {
    badge: "SOLUTION",
    title: "Infrastructure IA\npour entreprises du bâtiment",
    subtitle: "Une machine simple : capter → qualifier → devis → relancer → signer.",
    leftTitle: "Ce qu’on met en place",
    leftBullets: [
      "Assistant IA de qualification (site + WhatsApp + téléphone)",
      "CRM léger + pipeline (devis, visites, signatures)",
      "Génération de devis (templates + données chantier)",
      "Relances automatiques (SMS/WhatsApp/mail) jusqu’à décision"
    ],
    rightTitle: "Résultat",
    rightBullets: [
      "Plus de réponses instantanées",
      "Devis plus rapides et plus propres",
      "Relances systématiques",
      "Visibilité sur le pipeline (semaine/mois)"
    ],
    kpis: [
      { big: "≤ 5 min", small: "réponse initiale aux leads" },
      { big: "−50%", small: "temps passé sur les relances" },
      { big: "+20–40%", small: "signatures (selon flux)" }
    ],
    footLeft: "Build.24 — Solution",
    footRight: "3 / "
  },

  {
    badge: "COMMENT ÇA MARCHE",
    title: "Le process en 4 étapes",
    subtitle: "Concret, mesurable, déployable en 7–14 jours.",
    leftTitle: "1) Capture & tri",
    leftBullets: [
      "Formulaire + WhatsApp + appel entrant",
      "Questions IA (type de travaux, budget, délai, adresse, photos)",
      "Score “lead chaud / tiède / froid”"
    ],
    rightTitle: "2) Devis & relance",
    rightBullets: [
      "Pré-remplissage du devis (templates)",
      "Validation humaine (2 min)",
      "Relances auto + prise de RDV",
      "Statuts: envoyé / relancé / gagné / perdu"
    ],
    kpis: [
      { big: "7–14 j", small: "déploiement typique" },
      { big: "1 dashboard", small: "pilotage du pipeline" },
      { big: "100%", small: "relances systématiques" }
    ],
    footLeft: "Build.24 — Process",
    footRight: "4 / "
  },

  {
    badge: "ÉTUDE DE CAS (EXEMPLE)",
    title: "Avant / Après :\nEntreprise de rénovation",
    subtitle: "Exemple type (à adapter à tes chiffres).",
    leftTitle: "Avant",
    leftBullets: [
      "80 leads/mois",
      "30 devis/mois",
      "Relances au feeling",
      "Signature: 6 chantiers/mois"
    ],
    rightTitle: "Après Build.24",
    rightBullets: [
      "80 leads/mois (même volume)",
      "Devis + rapides + relances auto",
      "Pipeline clair (priorités quotidiennes)",
      "Signature: 8–10 chantiers/mois"
    ],
    kpis: [
      { big: "+2 à +4", small: "chantiers/mois" },
      { big: "−8h/sem", small: "de relance manuelle" },
      { big: "+CA", small: "sans recruter" }
    ],
    footLeft: "Build.24 — Étude de cas",
    footRight: "5 / "
  },

  {
    badge: "OFFRE",
    title: "Une offre simple,\norientée résultats",
    subtitle: "On installe. On mesure. On optimise.",
    leftTitle: "Inclus",
    leftBullets: [
      "Setup IA + intégrations (site/WhatsApp/mail)",
      "Pipeline CRM + templates devis",
      "Scénarios de relance (chantiers, devis, no-show)",
      "Tableau de bord (leads, devis, taux de signature)"
    ],
    rightTitle: "Options",
    rightBullets: [
      "Campagnes Ads + tracking",
      "Standardisation des scripts d’appel",
      "Bibliothèque de devis par prestation",
      "Formation équipe (30–60 min)"
    ],
    kpis: [
      { big: "Pilotable", small: "en 10 min/jour" },
      { big: "Mesurable", small: "chaque semaine" },
      { big: "Scalable", small: "sans complexité" }
    ],
    footLeft: "Build.24 — Offre",
    footRight: "6 / "
  },

  {
    badge: "CTA",
    title: "Prochaine étape :\nAudit 20 minutes",
    subtitle: "On regarde ton flux actuel et on te donne un plan clair.",
    leftTitle: "Ce qu’on te demande",
    leftBullets: [
      "Volume leads / mois",
      "Nombre de devis envoyés",
      "Temps de relance / semaine",
      "Valeur moyenne d’un chantier"
    ],
    rightTitle: "Ce que tu reçois",
    rightBullets: [
      "Un diagnostic des fuites de CA",
      "Un scénario IA adapté à ton métier",
      "Une estimation ROI (simple & réaliste)",
      "Une roadmap 7–14 jours"
    ],
    kpis: [
      { big: "20 min", small: "audit" },
      { big: "0 blabla", small: "concret" },
      { big: "Plan", small: "actionnable" }
    ],
    footLeft: "Build.24 — Contact",
    footRight: "7 / "
  }
];

// ====== moteur du deck ======
let index = 0;

const slideEl = document.getElementById("slide");
const btnBack = document.getElementById("btnBack");
const btnNext = document.getElementById("btnNext");
const counter = document.getElementById("counter");

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (m) => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[m]));
}

function render() {
  const s = slides[index];
  const total = slides.length;

  counter.textContent = `Slide ${index + 1} / ${total}`;

  const title = escapeHtml(s.title).replaceAll("\n", "<br/>");
  const subtitle = escapeHtml(s.subtitle);

  const leftLis = s.leftBullets.map(b => `<li>${escapeHtml(b)}</li>`).join("");
  const rightLis = s.rightBullets.map(b => `<li>${escapeHtml(b)}</li>`).join("");

  const kpis = (s.kpis || []).map(k => `
    <div class="kpi">
      <div class="big">${escapeHtml(k.big)}</div>
      <div class="small">${escapeHtml(k.small)}</div>
    </div>
  `).join("");

  slideEl.innerHTML = `
    <div class="badge"><span class="dot"></span>${escapeHtml(s.badge)}</div>
    <h1>${title}</h1>
    <p>${subtitle}</p>

    <div class="grid">
      <div class="card">
        <h3>${escapeHtml(s.leftTitle)}</h3>
        <div class="hr"></div>
        <ul>${leftLis}</ul>
      </div>
      <div class="card">
        <h3>${escapeHtml(s.rightTitle)}</h3>
        <div class="hr"></div>
        <ul>${rightLis}</ul>
      </div>
    </div>

    <div class="kpiRow">${kpis}</div>

    <div class="footerNote">
      <div>${escapeHtml(s.footLeft || "")}</div>
      <div><span class="tagAccent">${index + 1}</span> / ${total}</div>
    </div>
  `;

  btnBack.disabled = index === 0;
  btnNext.textContent = (index === total - 1) ? "Revenir au début ↺" : "Continuer →";

  // URL hash pour partager une slide
  location.hash = `#s${index + 1}`;
}

function next() {
  if (index >= slides.length - 1) index = 0;
  else index++;
  render();
}

function back() {
  if (index <= 0) return;
  index--;
  render();
}

btnNext.addEventListener("click", next);
btnBack.addEventListener("click", back);

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") next();
  if (e.key === "ArrowLeft") back();
});

function initFromHash() {
  const m = location.hash.match(/^#s(\d+)$/);
  if (!m) return;
  const n = parseInt(m[1], 10);
  if (!Number.isFinite(n)) return;
  index = Math.min(Math.max(n - 1, 0), slides.length - 1);
}

window.addEventListener("hashchange", () => {
  initFromHash();
  render();
});

initFromHash();
render();
