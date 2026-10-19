
const tips = [
  {
    title: "Afsenderens navn var stavet forkert",
    wrong:
      "Der manglede et 'e' til sidst i efternavnet.",
    right:
      "Sammenlign navnet med det korrekte navn.",
    explanation:
      "Lagde du mærke til det manglende 'e'Tvede ? " +
      "Selv en lille stavefejl i navnet på en person, " +
      "du kender, kan være et tegn på phishing. " +
      "Husk dog, at et korrekt navn ikke beviser, " +
      "at afsenderen er ægte."
  },
  {
    title: "Afsenderens mailadresse var anderledes",
    wrong:
      "Beskeden kom fra en anden mailadresse end normalt.",
    right:
      "Kontrollér den fulde mailadresse og domænet efter @.",
    explanation:
      "Et genkendeligt visningsnavn er ikke nok. " +
      "Kontrollér den faktiske mailadresse. " +
      "Et anderledes domæne eller et usædvanligt " +
      "brugernavn kan være et vigtigt faresignal."
  },
  {
    title: "Dokumentet var ikke en rigtig PDF",
    wrong:
      "Teksten lignede et PDF-dokument, " +
      "men var faktisk et klikbart link.",
    right:
      "Undersøg linkets destination inden du klikker.",
    explanation:
      "Et filnavn, der slutter på .pdf, kan sagtens " +
      "være linktekst. Hold musen over linket " +
      "for at se destinationen. På mobilen kan du " +
      "ofte holde fingeren på linket for at se " +
      "flere oplysninger uden at åbne det."
  },
  {
    title: "Mailen forsøgte at skabe tidspres",
    wrong:
      "Du blev bedt om at gennemgå dokumentet " +
      "inden i eftermiddag.",
    right:
      "Stop op og kontrollér uventede anmodninger, " +
      "selvom de virker hastende.",
    explanation:
      "Tidspres kan få dig til at handle hurtigt " +
      "uden at undersøge afsenderen. " +
      "En kort tidsfrist er dog ikke i sig selv " +
      "bevis på phishing."
  },
  {
    title: "Der var en grammatisk fejl",
    wrong:
      "'Det opdateret dokument'",
    right:
      "'Det opdaterede dokument'",
    explanation:
      "Formuleringen var grammatisk forkert. " +
      "Der manglede bogstaver i ordet. " +
      "Sproglige fejl kan være mistænkelige, " +
      "men også helt ægte mails kan have fejl."
  },
  {
    title: "Mailen var uklar om dokumentets indhold",
    wrong:
      "Beskeden nævnte nogle ændringer, " +
      "men forklarede ikke hvilke.",
    right:
      "Bekræft en uventet besked via en kendt kontaktvej.",
    explanation:
      "Hvis du modtager et uventet dokument " +
      "uden en tydelig forklaring, bør du undersøge " +
      "anledningen. Kontakt den påståede afsender " +
      "via et telefonnummer eller en adresse, " +
      "som du allerede kender."
  }
];

const list = document.getElementById("tips-list");

if (list) {
  list.replaceChildren();

  tips.forEach((tip, index) => {
    const details = document.createElement("details");
    details.className = "tip";

    const summary = document.createElement("summary");
    summary.textContent =
      "⚠️ " + (index + 1) + ". " + tip.title;

    const wrongBox = document.createElement("div");
    wrongBox.className = "wrong-box";

    const wrongLabel = document.createElement("strong");
    wrongLabel.textContent = "🔴 I DEN FALSKE MAIL";

    const wrongText = document.createElement("p");
    wrongText.textContent = tip.wrong;

    wrongBox.append(wrongLabel, wrongText);

    const rightBox = document.createElement("div");
    rightBox.className = "right-box";

    const rightLabel = document.createElement("strong");
    rightLabel.textContent =
      "🟢 DET SKULLE DU HAVE UNDERSØGT";

    const rightText = document.createElement("p");
    rightText.textContent = tip.right;

    rightBox.append(rightLabel, rightText);

    const explanation = document.createElement("p");
    explanation.className = "tip-explanation";
    explanation.textContent = tip.explanation;

    details.append(
      summary,
      wrongBox,
      rightBox,
      explanation
    );

    list.appendChild(details);
  });
}
