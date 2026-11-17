const scenarios = {
  greensboro: {
    place: "Greensboro, North Carolina · February 1960",
    title: "A seat at the counter",
    intro: "You are a Black college student in Greensboro, North Carolina. Four students have recently sat at a whites-only lunch counter at the local Woolworth's store and requested service. Their peaceful protest has drawn attention. Friends are discussing whether more students should join.",
    question: "What do you decide to do?",
    choices: [
      {
        label: "Join the sit-in with other students.",
        result: "You take part in a coordinated act of nonviolent protest. Participants in the Greensboro sit-ins faced hostility, threats, and possible arrest. The protests spread to other cities and helped energize a wider student-led movement.",
        concept: "SOCIOLOGY LENS: COLLECTIVE ACTION · RACIAL SEGREGATION · SOCIAL MOVEMENTS"
      },
      {
        label: "Support the movement in another way, such as organizing or sharing information.",
        result: "You choose a form of participation that may fit your circumstances and level of risk. Movements rely on many kinds of work—not only the people visible at demonstrations, but also organizers, communicators, supporters, and community networks.",
        concept: "SOCIOLOGY LENS: SOCIAL NETWORKS · RESOURCES · COLLECTIVE ACTION"
      },
      {
        label: "Do not participate because you are worried about the risks.",
        result: "You decide the potential consequences feel too serious. This choice invites an important question: how do threats to safety, education, employment, and family security shape whether someone can participate in protest? A person's decision cannot be separated from the conditions around them.",
        concept: "SOCIOLOGY LENS: SOCIAL PRESSURE · POWER · CONSTRAINTS ON INDIVIDUAL ACTION"
      }
    ],
    note: "Historical note: The Greensboro sit-ins began on February 1, 1960, when four Black students from North Carolina A&T State University sat at the whites-only lunch counter at Woolworth's. This demonstration helped inspire sit-ins elsewhere. This short demo simplifies a complex event; a complete scenario should include citations and more perspectives."
  },
  montgomery: {
    place: "Montgomery, Alabama · 1955–1956",
    title: "The cost of a boycott",
    intro: "You are a Black resident of Montgomery, Alabama. Following the arrest of Rosa Parks and years of organizing against bus segregation, community members are considering a sustained boycott of the city's buses. You rely on the bus to get to work.",
    question: "How will you respond?",
    choices: [
      { label: "Join the boycott and find another way to get to work.", result: "You join a collective effort that requires coordination, sacrifice, and community support. The boycott lasted 381 days and ended after the Supreme Court upheld a ruling against bus segregation. Walking, carpools, and other arrangements helped sustain participation.", concept: "SOCIOLOGY LENS: COLLECTIVE ACTION · COMMUNITY ORGANIZATION · INSTITUTIONAL CHANGE" },
      { label: "Support the boycott by helping organize rides or sharing information.", result: "You contribute to the infrastructure that makes collective action possible. Transportation networks and local organizing were essential to sustaining the boycott over time.", concept: "SOCIOLOGY LENS: SOCIAL NETWORKS · COMMUNITY RESOURCES · SOCIAL MOVEMENTS" },
      { label: "Continue riding because missing work could put your income at risk.", result: "You prioritize the immediate need to protect your livelihood. This decision highlights how economic circumstances can limit participation in movements, even when someone opposes the injustice being challenged.", concept: "SOCIOLOGY LENS: SOCIAL CLASS · ECONOMIC CONSTRAINTS · STRUCTURAL INEQUALITY" }
    ],
    note: "Historical note: The Montgomery Bus Boycott began on December 5, 1955, and lasted 381 days. The movement depended on extensive community organizing and alternative transportation."
  },
  suffrage: {
    place: "Washington, D.C. · March 3, 1913",
    title: "The right to be heard",
    intro: "You are a suffrage supporter in 1913. Thousands of women are preparing to march along Pennsylvania Avenue on the day before President Woodrow Wilson's inauguration. The parade calls attention to women's demand for voting rights, and organizers know participants may face hostility from spectators.",
    question: "What will you do?",
    choices: [
      { label: "March publicly with the suffrage supporters.", result: "You join a highly visible demonstration for political equality. The 1913 parade faced serious crowd harassment and inadequate protection from authorities. Public demonstrations helped keep suffrage in the national conversation, though voting rights were not secured nationally until the Nineteenth Amendment was ratified in 1920.", concept: "SOCIOLOGY LENS: GENDER INEQUALITY · POLITICAL PARTICIPATION · SOCIAL MOVEMENTS" },
      { label: "Help organize, distribute materials, or support the march behind the scenes.", result: "You take on work that helps a public movement function. Organizing, communication, fundraising, and logistics can be as important to a movement as the demonstration itself.", concept: "SOCIOLOGY LENS: ORGANIZATION · SOCIAL NETWORKS · COLLECTIVE ACTION" },
      { label: "Stay away because public protest could affect your reputation or safety.", result: "You weigh the social consequences of being publicly associated with a controversial cause. Gender expectations and social pressure can shape what forms of political participation seem possible or acceptable.", concept: "SOCIOLOGY LENS: GENDER NORMS · SOCIAL CONTROL · POWER" }
    ],
    note: "Historical note: The Woman Suffrage Procession took place in Washington, D.C., on March 3, 1913. The Nineteenth Amendment, prohibiting denial of the vote on the basis of sex, was ratified in 1920. Many women of color continued to face barriers to voting."
  },
  strike: {
    place: "United States · August 26, 1970",
    title: "A day for equality",
    intro: "You are a woman in 1970. Organizers are planning the Women's Strike for Equality to mark the 50th anniversary of the Nineteenth Amendment. Demonstrators are calling for equal opportunities, access to abortion, and publicly supported childcare. People around you disagree about the goals and tactics.",
    question: "How do you take part?",
    choices: [
      { label: "Join the public demonstration.", result: "You add your presence to a national action calling attention to gender inequality. Demonstrations can make a social issue visible, create solidarity, and put pressure on institutions, while also drawing criticism and disagreement.", concept: "SOCIOLOGY LENS: GENDER INEQUALITY · SOCIAL MOVEMENTS · PUBLIC OPINION" },
      { label: "Talk with coworkers, friends, or family about the issues instead.", result: "You choose conversation and persuasion as your form of participation. Changing social norms can involve everyday discussions as well as public demonstrations and policy advocacy.", concept: "SOCIOLOGY LENS: SOCIAL NORMS · CULTURE · SOCIAL CHANGE" },
      { label: "Do not participate because work or family responsibilities make it difficult.", result: "You face competing responsibilities and constraints. The unequal distribution of paid work, unpaid labor, and caregiving can affect who has time and resources to participate in activism.", concept: "SOCIOLOGY LENS: GENDER ROLES · UNPAID LABOR · STRUCTURAL INEQUALITY" }
    ],
    note: "Historical note: The Women's Strike for Equality took place on August 26, 1970. Demonstrations were held in multiple cities, with a major march in New York City. The movement included varied goals and perspectives."
  }
};

const dialog = document.getElementById("game-dialog");
const gameContent = document.getElementById("game-content");
const closeButton = document.getElementById("dialog-close");

function openScenario(key) {
  const scenario = scenarios[key];
  if (!scenario) return;
  gameContent.innerHTML = `
    <p class="game-kicker">${scenario.place}</p>
    <h2 class="game-title">${scenario.title}</h2>
    <p class="game-copy">${scenario.intro}</p>
    <h3 class="game-title" style="font-size:21px">${scenario.question}</h3>
    <div class="choice-list">
      ${scenario.choices.map((choice, index) => `
        <button class="choice-option" data-choice="${index}">
          <span class="choice-letter">${String.fromCharCode(65 + index)}.</span>
          <span>${choice.label}</span>
        </button>
      `).join("")}
    </div>
    <p class="game-copy"><strong>Remember:</strong> There may not be one simple or risk-free answer.</p>
  `;
  gameContent.querySelectorAll("[data-choice]").forEach(button => {
    button.addEventListener("click", () => showOutcome(scenario, Number(button.dataset.choice)));
  });
  dialog.showModal();
}

function showOutcome(scenario, choiceIndex) {
  const choice = scenario.choices[choiceIndex];
  gameContent.innerHTML = `
    <p class="game-kicker">YOUR DECISION</p>
    <h2 class="game-title">What your choice reveals</h2>
    <p class="game-copy"><strong>You chose:</strong> ${choice.label}</p>
    <div class="game-result">
      <h4>Consider the consequences</h4>
      <p>${choice.result}</p>
      <p class="concept">${choice.concept}</p>
    </div>
    <p class="game-copy" style="margin-top:20px">${scenario.note}</p>
    <p class="game-copy"><strong>Reflection:</strong> What social pressures or resources influenced the options available to you? Would your decision change if your circumstances were different?</p>
    <button class="game-restart" id="play-again">↺ PLAY THIS SCENARIO AGAIN</button>
  `;
  document.getElementById("play-again").addEventListener("click", () => openScenario(Object.keys(scenarios).find(key => scenarios[key] === scenario)));
}

document.querySelectorAll(".play-button").forEach(button => {
  button.addEventListener("click", () => openScenario(button.dataset.scenario));
});
closeButton.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});

const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
