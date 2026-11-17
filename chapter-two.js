/* Chapter II — The Long Walk. Fictional scenes and personal dialogue.
 * Historical context: the Montgomery bus boycott carpool system; see the
 * Stanford King Institute and Library of Congress archive linked in game.html.
 */
window.chapterTwoData = {
  "evelyn": {
    "heading": "More Than One Day",
    "place": "THURSDAY MORNING · DECEMBER 15, 1955 · EVELYN’S HOME",
    "intro": [
      "Evelyn has been awake since before sunrise. The kitchen smells of coffee, and Ruth is still asleep.",
      "Lottie Mae knocks at the door before Evelyn can put on her coat. “One of the volunteer cars needs attention. I don't know when your ride is coming.”",
      "For a moment Evelyn watches the clock. Mrs. Whitmore expects her on time. She had thought the boycott would last one Monday; now every morning requires a new plan.",
      "“I can't keep doing this every morning,” Evelyn says. Lottie Mae looks just as tired. “I know. None of us can do it alone.”"
    ],
    "callbacks": {
      "walk": "The long walk she chose on the first Monday still lingers in her aching feet. She wonders how many more late arrivals Mrs. Whitmore will tolerate.",
      "ride": "Lottie Mae helped find a ride on that first Monday. Now Evelyn knows the arrangement relies on neighbors with their own work and worries.",
      "bus": "Evelyn protected her paycheck that first Monday by taking the bus. Ruth has asked about it since, and Evelyn is still looking for another way to contribute."
    },
    "prompt": "What will Evelyn do about the growing transportation problem?",
    "choices": [
      {
        "id": "employer",
        "label": "Ask Mrs. Whitmore whether your work hours can be adjusted.",
        "delta": {
          "stability": 3,
          "network": -2,
          "contribution": 3
        },
        "relation": {},
        "result": "Evelyn decides to speak with Mrs. Whitmore. Her employer listens but offers no immediate promise. Asking may help, yet the uncertainty reminds Evelyn who controls her working hours.",
        "toast": "Work arrangement uncertain · Personal Stability shifted",
        "memory": "You asked Mrs. Whitmore for flexibility with your hours."
      },
      {
        "id": "help",
        "label": "Help Lottie Mae organize more reliable rides for the neighborhood.",
        "delta": {
          "stability": -10,
          "network": 12,
          "contribution": 10
        },
        "relation": {
          "lottie": 1
        },
        "result": "Evelyn spends the evening comparing neighbors' schedules and sharing what she knows. Several rides become more predictable, but the work takes time away from her own responsibilities.",
        "toast": "Support Network strengthened · Personal Stability under pressure",
        "memory": "You helped Lottie Mae coordinate neighborhood transportation."
      },
      {
        "id": "bus",
        "label": "Ride the bus when necessary to keep your job and income.",
        "delta": {
          "stability": 10,
          "network": -5,
          "contribution": -7
        },
        "relation": {},
        "result": "Evelyn decides that keeping her job must come first on the mornings when no ride can be found. She still opposes segregation. When Ruth asks what this means, Evelyn begins explaining why some choices come with costs no one else can see.",
        "toast": "Personal Stability protected · Movement Contribution shifted",
        "memory": "You chose to use the bus when necessary to protect your wages."
      }
    ],
    "end": [
      "January arrives. The buses still follow their routes, but many Black residents keep walking, arranging rides, and relying on neighbors.",
      "Evelyn puts away another week's wages and looks toward Ruth's bedroom. She has learned that one day's decision can become an everyday responsibility.",
      "She has no way of knowing how much longer the boycott will last."
    ],
    "next": "A mother's fear, rising pressure at work, and the question of what more her family can give"
  },
  "marcus": {
    "heading": "The Work Behind the Movement",
    "place": "THURSDAY AFTERNOON · DECEMBER 15, 1955 · A NEIGHBORHOOD MEETING",
    "intro": [
      "Marcus arrives expecting to help spread news about the boycott. Instead, he finds a table covered with handwritten addresses, pickup times, and requests for rides.",
      "Lottie Mae is trying to sort through the papers. “People have jobs to reach,” she says. “Somebody has to know where the cars are going.”",
      "David slides a sheet of names toward Marcus. “You're good at organizing things. We could use you.”",
      "Marcus thinks about his college books waiting at home. He had imagined the excitement of meetings and speeches, not the patient work of making sure people can get to work at dawn."
    ],
    "callbacks": {
      "public": "People recognize Marcus from his earlier leaflet work. A few volunteers already assume he'll be available for whatever comes next.",
      "quiet": "His discreet work with the leaflets has earned some trust. Lottie Mae seems comfortable giving him a difficult task.",
      "study": "Marcus did not help distribute leaflets the first time David asked. David has invited him again, though Marcus can sense a little disappointment."
    },
    "prompt": "How much responsibility will Marcus take on?",
    "choices": [
      {
        "id": "schedule",
        "label": "Take responsibility for organizing several neighborhood ride schedules.",
        "delta": {
          "stability": -12,
          "network": 12,
          "contribution": 12
        },
        "relation": {
          "david": 1,
          "mother": -1
        },
        "result": "Marcus begins matching addresses, drivers, and pickup times. The work makes him useful to neighbors he barely knows, but as his evenings fill up, his unread college assignments begin to pile up.",
        "toast": "Support Network strengthened · Studies under pressure",
        "memory": "You accepted responsibility for several carpool schedules."
      },
      {
        "id": "limited",
        "label": "Volunteer during set hours and protect time for your studies.",
        "delta": {
          "stability": 5,
          "network": 4,
          "contribution": 5
        },
        "relation": {
          "mother": 1,
          "david": -1
        },
        "result": "Marcus offers a few reliable hours each week. David thinks he could do more, but Lottie Mae says that dependable help is still help. His textbooks stay within reach.",
        "toast": "Personal Stability supported · David's expectations changed",
        "memory": "You set boundaries around your volunteer hours."
      },
      {
        "id": "supplies",
        "label": "Help volunteers obtain supplies and connect people who can assist.",
        "delta": {
          "stability": -5,
          "network": 10,
          "contribution": 10
        },
        "relation": {
          "david": 1
        },
        "result": "Marcus helps track down needed paper, work lights, and small repair supplies. At one store, he notices an employee hesitating while his employer questions why a customer needs items for volunteer transportation.",
        "toast": "Support Network strengthened · Movement Contribution grew",
        "memory": "You helped obtain supplies for the transportation network."
      }
    ],
    "end": [
      "As December becomes January, the transportation work only grows. What looked like a short protest has become a daily feat of planning.",
      "Marcus studies a stack of schedules beside his college notes. Helping a movement, he has learned, can mean doing work that no one will remember by name.",
      "The future he wants to teach others about is being shaped through ordinary mornings like these."
    ],
    "next": "Worrying letters from home and pressure from David as intimidation intensifies"
  },
  "daniel": {
    "heading": "A Transaction",
    "place": "THURSDAY AFTERNOON · DECEMBER 15, 1955 · BENNETT’S HARDWARE",
    "intro": [
      "The bell above the hardware-store door rings. A young Black customer asks Daniel about a few supplies for neighbors who are helping people reach work without the buses.",
      "Mr. Bennett comes from the back room. “What's all this for?” The customer explains that the items are for volunteer transportation.",
      "Mr. Bennett's expression hardens. “We're not getting involved with that boycott business.”",
      "Daniel looks from the counter to his employer. No one is asking him to give a speech or join a march. Someone is simply asking to buy supplies, and Bennett expects him to decide what happens next."
    ],
    "callbacks": {
      "agree": "Mr. Bennett still remembers Daniel agreeing with him about the boycott. He clearly expects the same answer now.",
      "silent": "Daniel said nothing when Mr. Bennett criticized the boycott before. He wonders whether another silence will feel any different.",
      "question": "Daniel previously questioned Mr. Bennett's remarks. His employer has been watching him with new suspicion ever since."
    },
    "prompt": "How does Daniel respond to his employer's refusal?",
    "choices": [
      {
        "id": "refuse",
        "label": "Follow Mr. Bennett's instructions and refuse the sale.",
        "delta": {
          "stability": 8,
          "network": -5,
          "contribution": -6
        },
        "relation": {
          "bennett": 1
        },
        "result": "Daniel tells the customer the store cannot complete the sale. Mr. Bennett seems satisfied. The customer leaves without arguing, and Daniel finds that the absence of a confrontation offers little comfort.",
        "toast": "Job security protected · Your decision was remembered",
        "memory": "You complied with Bennett's refusal to sell supplies."
      },
      {
        "id": "quiet_sale",
        "label": "Complete the sale discreetly without openly challenging Mr. Bennett.",
        "delta": {
          "stability": -3,
          "network": 5,
          "contribution": 7
        },
        "relation": {},
        "result": "Daniel quietly finishes the transaction while Bennett is distracted. He has helped in one small way, but he knows that secrecy protects him more than it changes the store's rules.",
        "toast": "Practical support increased · Workplace uncertainty grew",
        "memory": "You quietly completed a sale for someone supporting the boycott."
      },
      {
        "id": "open_sale",
        "label": "Question the refusal and insist on serving the customer.",
        "delta": {
          "stability": -12,
          "network": 8,
          "contribution": 12
        },
        "relation": {
          "bennett": -1
        },
        "result": "“He's here to buy something,” Daniel says. “Why shouldn't we serve him?” Bennett tells him to mind his place. The customer eventually receives the supplies, but Daniel knows his employer will remember this.",
        "toast": "Movement Contribution grew · Bennett's confidence decreased",
        "memory": "You challenged Bennett and insisted on serving the customer."
      }
    ],
    "end": [
      "By January, the boycott has lasted far longer than Mr. Bennett expected. People in Montgomery talk about it as though every ordinary errand has become political.",
      "Daniel thinks of the customer at the counter and the choices he had available—choices not everyone in the city has.",
      "He wonders what he will do the next time his employer asks him to choose a side."
    ],
    "next": "Rising intimidation and a difficult conversation with Sarah about security and silence"
  }
};
