import question1Icon from "./assets/question1.svg";
import question2Icon from "./assets/question2.svg";
import question3Icon from "./assets/question3.svg";
import question4Icon from "./assets/question4.svg";
import question5Icon from "./assets/question5.svg";
import question6Icon from "./assets/question6.svg";
import question7Icon from "./assets/question7.svg";
import question8Icon from "./assets/question8.svg";
import question9Icon from "./assets/question9.svg";

export const questions = [
  {
    id: 1,
    categorie: "Urbanisme",
    question:
      "Votre ville est fortement construite, favorisant l'accumulation de la chaleur. Comment améliorer la situation ?",
    choixA: {
      text: "Démolir des bâtiments à Lyon et Villeurbanne pour créer des couloirs de ventilation arborés",
      scoreFinancement: -20,
      scoreEffetRebond: 10,
      scorePopularite: -20,
      scoreVulnerabilite: -10,
      scoreImpact:
        "Augmente la circulation de l’air, et diminue la surchauffe urbaine, mais coûteux et difficilement accepté.",
    },
    choixB: {
      text: "Peindre les toits en blanc pour réfléchir la chaleur",
      scoreFinancement: -8,
      scoreEffetRebond: 0,
      scorePopularite: 0,
      scoreVulnerabilite: -5,
      scoreImpact:
        "Réduit l’accumulation de chaleur sous les toits sans modifier l’urbanisme.",
    },
    choixC: {
      text: "Planter des murs végétaux sur les bâtiments existants",
      scoreFinancement: -15,
      scoreEffetRebond: 10,
      scorePopularite: 10,
      scoreVulnerabilite: -8,
      scoreImpact:
        "Diminue l’effet d’îlot de chaleur et améliore l’isolation des bâtiments et le cadre de vie. Mais nécessite un entretien régulier.",
    },
  },
  {
    id: 2,
    categorie: "Espaces verts",
    question:
      "Tous les quartiers ne disposent pas d'îlots de fraîcheur à proximité (jardin, parc, forêt) qui réduisent la surchauffe, comment pouvez-vous améliorer les quartiers ne disposant pas ou peu de lieux végétalisés ?",
    choixA: {
      text: "Ouvrir les cours d'école (communes intra-périphérique) au public pour créer de nouvelles zones fraîches",
      scoreFinancement: -10,
      scoreEffetRebond: 0,
      scorePopularite: 15,
      scoreVulnerabilite: -5,
      scoreImpact:
        "Augmentation drastique du nombre de zones fraîches, mais cela mobilise du personnel.",
    },
    choixB: {
      text: "Encourager financièrement les copropriétés à verdir leurs cours privées",
      scoreFinancement: -5,
      scoreEffetRebond: 5,
      scorePopularite: 10,
      scoreVulnerabilite: 0,
      scoreImpact:
        "Certaines copropriétés sautent le pas, mais beaucoup sont réticentes et ne le font pas. Les nouvelles plantations nécessitent une sur-consommation d’eau.",
    },
    choixC: {
      text: "Promouvoir les lieux existants ils suffisent",
      scoreFinancement: 0,
      scoreEffetRebond: 0,
      scorePopularite: 0,
      scoreVulnerabilite: 0,
      scoreImpact:
        "Cela ne solutionne pas le problème mais au moins les gens sont mis au courant.",
    },
  },
  {
    id: 3,
    categorie: "Espaces verts",
    question:
      "Mais ces espaces verts, comme les habitants, sont aussi soumis à la chaleur, ce qui posent des problèmes d’alimentation et d'accès à l’eau. Comment comptez-vous vous adapter à ce besoin en eau ?",
    choixA: {
      text: "Créer des parcs avec des essences résistantes à la sécheresse",
      scoreFinancement: -15,
      scoreEffetRebond: 10,
      scorePopularite: 10,
      scoreVulnerabilite: -10,
      scoreImpact:
        "Solution efficace et durable, améliore la résilience climatique. Mais réduit le potentiel immobilier sur le territoire (offre de logements).",
    },
    choixB: {
      text: "Installer plus de fontaines et brumisateurs dans les espaces verts",
      scoreFinancement: -10,
      scoreEffetRebond: 20,
      scorePopularite: 10,
      scoreVulnerabilite: -5,
      scoreImpact:
        "Apporte du confort immédiat, mais consomme beaucoup d’eau et n’a pas d’effet structurel.",
    },
    choixC: {
      text: "Arroser massivement les espaces verts en été",
      scoreFinancement: -10,
      scoreEffetRebond: 30,
      scorePopularite: -5,
      scoreVulnerabilite: 0,
      scoreImpact:
        "Rafraîchit temporairement mais n’est pas durable, et surconsommation d’eau dans des périodes de tension.",
    },
  },
  {
    id: 4,
    categorie: "Habitat",
    question:
      "Certains logements et bâtiments ont une faible performance énergétique. Comment adapter le bâti urbain pour réduire l'effet d'îlot de chaleur ?",
    choixA: {
      text: "Imposer des normes de construction bioclimatique",
      scoreFinancement: 0,
      scoreEffetRebond: 0,
      scorePopularite: -15,
      scoreVulnerabilite: -5,
      scoreImpact:
        "Solution efficace à long terme, mais difficile à faire accepter (prix du logement, besoin de structuration de la filière de construction, voir opposition des promoteurs)",
    },
    choixB: {
      text: "Encourager les rénovations énergétiques avec des aides financières",
      scoreFinancement: -30,
      scoreEffetRebond: 0,
      scorePopularite: 15,
      scoreVulnerabilite: -5,
      scoreImpact:
        "Améliore le confort thermique des logements, mais coûte cher.",
    },
    choixC: {
      text: "Installer des pergolas végétalisées sur les places et trottoirs",
      scoreFinancement: -15,
      scoreEffetRebond: 0,
      scorePopularite: 5,
      scoreVulnerabilite: -5,
      scoreImpact:
        "Rafraîchit l’espace public rapidement et améliore le cadre de vie, mais ne traite pas la question de l’habitat.",
    },
  },
  {
    id: 5,
    categorie: "Précarité",
    question:
      "Les populations vulnérables sont souvent démunies (isolement, peu de capacité à faire face...) face aux périodes de canicule. Comment protéger les populations vulnérables ?",
    choixA: {
      text: "Ouvrir des espaces climatisés accessibles gratuitement 24h/24 et rendre les transports gratuits pour accéder aux îlots de fraîcheur",
      scoreFinancement: -20,
      scoreEffetRebond: 10,
      scorePopularite: 10,
      scoreVulnerabilite: 5,
      scoreImpact:
        "Réduction immédiate des risques sanitaires, mais hausse de la consommation énergétique.",
    },
    choixB: {
      text: "Subventionner les climatiseurs dernière génération pour les personnes vulnérables et précaires",
      scoreFinancement: -20,
      scoreEffetRebond: 30,
      scorePopularite: 15,
      scoreVulnerabilite: 15,
      scoreImpact:
        "Réduction de la chaleur immédiate chez eux, mais augmente la facture d'électricité",
    },
    choixC: {
      text: "Organiser des campagnes de prévention et d’entraide communautaire",
      scoreFinancement: -5,
      scoreEffetRebond: 0,
      scorePopularite: 5,
      scoreVulnerabilite: 0,
      scoreImpact:
        "Sensibilisation efficace mais impact limité sur les conditions physiques des logements.",
    },
  },
  {
    id: 6,
    categorie: "Santé",
    question:
      "En période de chaleur, l'accès aux soins et la gestion des urgences sont complexes, surtout pour les personnes les plus vulnérables. Comment améliorer la situation lors d’épisodes d'extrême chaleur ?",
    choixA: {
      text: "Augmenter les capacités d’accueil des hôpitaux et EHPAD en été",
      scoreFinancement: -20,
      scoreEffetRebond: 10,
      scorePopularite: 15,
      scoreVulnerabilite: -10,
      scoreImpact:
        "Meilleure prise en charge des personnes vulnérables mais pression sur les finances. Améliore la réactivité en cas de crise mais fatigue les équipes médicales.",
    },
    choixB: {
      text: "Former des bénévoles pour surveiller les populations fragiles",
      scoreFinancement: -5,
      scoreEffetRebond: 0,
      scorePopularite: 10,
      scoreVulnerabilite: -10,
      scoreImpact:
        "Mesure de solidarité efficace, mais dépend de l’engagement citoyen et donc demande une animation et mise en dynamique du territoire et de son écosystème.",
    },
    choixC: {
      text: "Installer des capteurs de température et alerter les habitants via une application",
      scoreFinancement: -15,
      scoreEffetRebond: 10,
      scorePopularite: 10,
      scoreVulnerabilite: -5,
      scoreImpact:
        "Renforce la réactivité face aux canicules, mais exclut certains publics (problème de couverture numérique)",
    },
  },
  {
    id: 7,
    categorie: "Budget",
    question: "Dis donc, ça devient tendu niveau budget…",
    choixA: {
      text: "Instaurer une taxe sur les climatiseurs",
      scoreFinancement: 30,
      scoreEffetRebond: -10,
      scorePopularite: -10,
      scoreVulnerabilite: -10,
      scoreImpact: "Votre porte monnaie vous remercie mais les citoyens non.",
    },
    choixB: {
      text: "Retarder les travaux d'amélioration de l'espace public",
      scoreFinancement: 15,
      scoreEffetRebond: 20,
      scorePopularite: -10,
      scoreVulnerabilite: 20,
      scoreImpact:
        "Toutes les améliorations auxquelles vous aviez pensées sont reportées. La vulnérabilité est forcée d'augmenter.",
    },
    choixC: {
      text: "Continuer, mais faire attention au coût des prochaines mesures",
      scoreFinancement: 0,
      scoreEffetRebond: 0,
      scorePopularite: 0,
      scoreVulnerabilite: 0,
      scoreImpact: "En effet, il vaut mieux être prudent.",
    },
  },
  {
    id: 8,
    categorie: "Âge",
    question:
      "Comment mieux protéger les personnes âgées pendant les périodes de forte chaleur ?",
    choixA: {
      text: "Créer un réseau de bénévoles pour appeler et visiter les personnes isolées (réserve citoyenne)",
      scoreFinancement: -10,
      scoreEffetRebond: -10,
      scorePopularite: 10,
      scoreVulnerabilite: -10,
      scoreImpact:
        "Améliore la vigilance et réduit l’isolement, mais repose sur l’engagement des citoyens (besoin d’animation et d’entretien de la dynamique)",
    },
    choixB: {
      text: "Installer des salles climatisées dans les maisons de quartier",
      scoreFinancement: -20,
      scoreEffetRebond: 10,
      scorePopularite: 15,
      scoreVulnerabilite: -10,
      scoreImpact:
        "Offrir des espaces frais est une solution immédiate mais consomme beaucoup d’énergie.",
    },
    choixC: {
      text: "Rendre obligatoire des normes plus strictes de confort thermique dans les EHPAD",
      scoreFinancement: 0,
      scoreEffetRebond: 10,
      scorePopularite: 10,
      scoreVulnerabilite: -10,
      scoreImpact:
        "Mesure durable mais difficile à appliquer rapidement et présente des coûts importants de mise en conformité",
    },
  },
  {
    id: 9,
    categorie: "Information",
    question:
      "Comment s’assurer que la population est bien informée des risques de / de la chaleur ?",
    choixA: {
      text: "Mettre en place un dispositif d’alerte chaleur",
      scoreFinancement: -10,
      scoreEffetRebond: -10,
      scorePopularite: 10,
      scoreVulnerabilite: -5,
      scoreImpact:
        "Permet une réaction rapide, mais risque d'exclure certaines personnes plus vulnérables",
    },
    choixB: {
      text: "Diffuser des messages via la radio et l’affichage urbain",
      scoreFinancement: -15,
      scoreEffetRebond: 0,
      scorePopularite: 10,
      scoreVulnerabilite: -5,
      scoreImpact: "Accessible à tous mais moins interactif",
    },
    choixC: {
      text: "Organiser des campagnes d’information et de sensibilité à la culture de la chaleur / climatique, dans les quartiers",
      scoreFinancement: -20,
      scoreEffetRebond: 0,
      scorePopularite: 10,
      scoreVulnerabilite: -5,
      scoreImpact:
        "Sensibilisation de proximité mais demande un effort continu.",
    },
  },
];

export const questionIconMapping = {
  1: question1Icon,
  2: question2Icon,
  3: question3Icon,
  4: question4Icon,
  5: question5Icon,
  6: question6Icon,
  7: question7Icon,
  8: question8Icon,
  9: question9Icon,
};
