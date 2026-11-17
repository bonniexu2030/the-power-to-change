/* The Power to Change — Chapter III: The Price of Standing Up.
 * The fictional cast and their dialogue are inventions, grounded in the
 * documented January 30 bombing, February 21 indictments, and March 22 verdict.
 */
window.chapterThreeData = {
  "evelyn": {
    "heading": "A Mother's Fear",
    "place": "THURSDAY EVENING · FEBRUARY 23, 1956 · EVELYN'S KITCHEN",
    "intro": [
      "The radio has been telling Montgomery the same frightening story in different ways: Dr. King's home was bombed in January. Now boycott leaders face criminal charges.",
      "Ruth sits at the kitchen table, drawing careful circles on the back of an old envelope. She stops when the announcer mentions arrests.",
      "“Will they arrest people just for not riding the bus?” Ruth asks. Evelyn reaches over and turns the radio down.",
      "Earlier that day, Mrs. Whitmore had asked Evelyn to stay late. Their conversation turned, as it so often does now, to the buses. The prospect of losing work no longer seems distant.",
      "Lottie Mae has also come by with news that one of their neighbors cannot get to work tomorrow. The family has already missed wages.",
      "Evelyn looks at Ruth, the unpaid bills, and the folded transportation schedule. The decisions she made in December are still shaping this February evening."
    ],
    "ch1Callbacks": {
      "walk": "She remembers walking in the cold before sunrise on the first boycott day. Ruth remembers, too—and has begun asking why anyone should have to choose between being treated fairly and earning a paycheck.",
      "ride": "Lottie Mae's help on the first Monday turned a neighborly favor into something larger. Evelyn is thankful, but she knows that no one person can supply every ride.",
      "bus": "On that first Monday, Evelyn used the bus to protect her wages. Ruth has not forgotten. Evelyn has tried to make it clear that one difficult decision does not settle what a person believes."
    },
    "ch2Callbacks": {
      "employer": "Mrs. Whitmore had considered changing Evelyn's hours, but the arrangement was never guaranteed. Today she spoke sharply: “I can't keep rearranging my household around this. If you're late again, I'll need someone else.”",
      "help": "Evelyn has helped Lottie Mae organize rides for weeks. Mrs. Whitmore says that the disruptions have gone on too long: “If you can't get here reliably, I'll need someone else.” Evelyn knows the schedule she helps maintain is still fragile.",
      "bus": "Using the bus when rides fail has protected some income. Still, Mrs. Whitmore has noticed Evelyn's uncertainty and warns that she expects regular hours. Evelyn hears the warning even on days she is punctual."
    },
    "relationshipLines": {
      "high": "Lottie Mae has relied on Evelyn through several difficult weeks. When she asks for help again, there is trust behind the request—and exhaustion.",
      "low": "Evelyn and Lottie Mae have both been stretched thin. Their friendship matters, but they haven't always agreed on what either woman can realistically give."
    },
    "exchange": {
      "title": "Ruth is waiting for an answer.",
      "prompt": "What does Evelyn say about the danger?",
      "options": [
        {
          "id": "truth",
          "label": "Explain honestly that people are facing threats, but that neighbors are looking out for one another.",
          "response": "Evelyn pulls a chair closer. “Some people want to frighten us into stopping. I'm frightened sometimes, too. That's why we make plans and help each other.” Ruth nods slowly. Evelyn has not taken away her fear, but she has made room for it."
        },
        {
          "id": "comfort",
          "label": "Reassure Ruth first, and promise to talk about the news together tomorrow.",
          "response": "Evelyn puts a hand over Ruth's. “You are my first responsibility, baby. We'll talk more about what happened tomorrow.” Ruth doesn't stop worrying, but she lets herself lean against her mother for a moment."
        }
      ]
    },
    "prompt": "With her job, Ruth, and the neighborhood all needing her, what does Evelyn do?",
    "choices": [
      {
        "id": "family",
        "label": "Tell Lottie Mae you cannot take on another ride problem this week.",
        "delta": {
          "stability": 12,
          "network": -5,
          "contribution": -5
        },
        "relation": {
          "ruth": 1,
          "lottie": -1
        },
        "result": "Evelyn tells Lottie Mae that this week she has to protect her job and be home for Ruth. Lottie Mae is disappointed, though she understands more than she says. Evelyn uses the evening to repair Ruth's coat and plan a reliable trip to work.",
        "memory": "You set limits to protect Ruth and your job.",
        "toast": "Personal Stability strengthened · Lottie Mae's expectations changed"
      },
      {
        "id": "more",
        "label": "Help arrange emergency rides, even if your own work and savings suffer.",
        "delta": {
          "stability": -12,
          "network": 10,
          "contribution": 12
        },
        "relation": {
          "lottie": 1
        },
        "result": "Evelyn stays with Lottie Mae to reshuffle pickup times and ask another neighbor for help. By nightfall they have a plan for the stranded family. Evelyn knows she may face Mrs. Whitmore's anger tomorrow, and the unpaid bills remain on the table.",
        "memory": "You accepted additional transportation responsibilities despite the cost.",
        "toast": "Support Network strengthened · Personal Stability under pressure"
      },
      {
        "id": "shared",
        "label": "Offer limited help and ask neighbors to divide the work more fairly.",
        "delta": {
          "stability": -4,
          "network": 7,
          "contribution": 7
        },
        "relation": {
          "lottie": 1
        },
        "result": "Evelyn calls two neighbors to ask what they can realistically take on. Some are unable to help; one offers an early-morning pickup, and another can mind Ruth for an hour. It is imperfect, but the burden begins to spread.",
        "memory": "You encouraged neighbors to share transportation and care work.",
        "toast": "Support Network strengthened · Responsibilities redistributed"
      }
    ],
    "delayed": {
      "employer": {
        "family": "Because Mrs. Whitmore has already threatened to replace her, Evelyn knows the decision to reduce volunteer work is also about keeping food on the table.",
        "more": "The thought of Mrs. Whitmore finding a replacement follows Evelyn as she rearranges the routes.",
        "shared": "Evelyn writes down the new arrangement, hoping she can give Mrs. Whitmore a dependable arrival time."
      },
      "help": {
        "family": "Lottie Mae pauses. Evelyn has been doing so much already that the refusal catches her off guard—but she also sees how tired her friend looks.",
        "more": "The neighbors know Evelyn has organized rides before and trust her to solve yet another difficulty.",
        "shared": "Evelyn asks volunteers who have depended on her schedules to take responsibility for a portion of the work."
      },
      "bus": {
        "family": "Ruth notices that her mother has been thinking about changing how she travels to work; their family remains at the center of the decision.",
        "more": "Evelyn hopes helping coordinate rides will make it possible to depend less on the buses herself.",
        "shared": "She offers to do the coordination from home, searching for a way to contribute without losing another shift."
      }
    },
    "ending": [
      "On March 22, the news reaches Evelyn that Martin Luther King Jr. has been convicted under Alabama's anti-boycott law. The conviction does not end the protest.",
      "Ruth has stopped asking whether the boycott will end tomorrow. Instead she asks how long people can keep helping one another.",
      "Evelyn has no simple answer. She looks again at the transportation schedule and the bills on the kitchen table. Both are still there."
    ],
    "next": "A ruling against segregation brings hope, but getting to work remains difficult."
  },
  "marcus": {
    "heading": "The Expectations of Others",
    "place": "FRIDAY AFTERNOON · FEBRUARY 24, 1956 · NEAR ALABAMA STATE COLLEGE",
    "intro": [
      "David arrives carrying a newspaper. The news of the indictment of boycott leaders has made even the campus conversations quieter.",
      "Marcus thinks about January's bombing of Dr. King's home and the volunteers who continued organizing rides the following morning.",
      "“They're trying to make people afraid to organize,” David says. “And it's working on some people.”",
      "Marcus has an unopened letter from his mother. She believes segregation is wrong, but she worries about her son's safety and whether his college education can survive another difficult semester.",
      "David takes a seat across from him. “There's a meeting tonight. They need people willing to help.”",
      "Marcus looks at the newspaper, then at his textbooks. The responsibilities are not competing in theory anymore. They are competing for his hours."
    ],
    "ch1Callbacks": {
      "public": "People who saw Marcus distributing leaflets in December now greet him as a familiar volunteer. Their confidence in him feels encouraging—and heavy.",
      "quiet": "He has always preferred doing the necessary work without much attention. The indictment makes even that less visible work feel newly exposed.",
      "study": "Marcus had initially chosen to focus on school, but the boycott kept drawing him into conversations and decisions. He is still deciding what participation means for him."
    },
    "ch2Callbacks": {
      "schedule": "The transportation schedules have consumed evenings that Marcus once reserved for studying. His mother has noticed his shorter letters and asks whether he is falling behind.",
      "limited": "Marcus has protected study hours and offered dependable help, but David has begun asking whether the circumstances call for something more.",
      "supplies": "The supplies Marcus helped find made transportation work a little easier, but he has also seen that even ordinary store transactions can be obstructed by segregationist beliefs."
    },
    "relationshipLines": {
      "high": "David trusts Marcus and speaks to him as someone who will understand why the next weeks matter so much.",
      "low": "David has been frustrated by Marcus's limits. Today he tries to hide that frustration, but Marcus can hear it."
    },
    "exchange": {
      "title": "A letter from home.",
      "prompt": "How does Marcus answer his mother's concerns?",
      "options": [
        {
          "id": "candid",
          "label": "Tell her plainly what the organizing has cost him and why he still thinks it matters.",
          "response": "Marcus begins a letter that admits he has missed sleep and sometimes fallen behind. He also tells his mother why the rides matter to families who cannot afford to stop working. It is harder to write honestly than he expected."
        },
        {
          "id": "plan",
          "label": "Make a specific plan for his coursework and explain the limits he intends to set.",
          "response": "Marcus writes down the classes and assignments he cannot let slip. Then he writes to his mother that he will continue helping only if he can meet those responsibilities. The promise feels both necessary and difficult."
        }
      ]
    },
    "prompt": "How will Marcus participate as pressure against organizers increases?",
    "choices": [
      {
        "id": "public",
        "label": "Take a more public role in meetings and organizing.",
        "delta": {
          "stability": -12,
          "network": 7,
          "contribution": 15
        },
        "relation": {
          "david": 1,
          "mother": -1
        },
        "result": "Marcus joins more visible gatherings and volunteer work. He meets people who are frightened but determined. When he returns to his books, the hours have slipped away, and he knows his mother will ask about them.",
        "memory": "You increased your public organizing despite family and academic concerns.",
        "toast": "Movement Contribution grew · Family concern increased"
      },
      {
        "id": "behind",
        "label": "Keep transportation support running without seeking visibility.",
        "delta": {
          "stability": -7,
          "network": 10,
          "contribution": 10
        },
        "relation": {},
        "result": "Marcus helps others find rides, confirms schedules, and makes himself useful in the practical work. David wishes he would attend more public meetings, but Marcus sees that the everyday work will not happen by itself.",
        "memory": "You continued practical organizing behind the scenes.",
        "toast": "Support Network strengthened · Study time under pressure"
      },
      {
        "id": "pause",
        "label": "Temporarily step back to protect college and reassure his mother.",
        "delta": {
          "stability": 12,
          "network": -6,
          "contribution": -8
        },
        "relation": {
          "mother": 1,
          "david": -1
        },
        "result": "Marcus tells David he needs time to catch up on his studies. David is disappointed, and Marcus dislikes hearing it. Yet he also knows what his mother has sacrificed to keep him in college. He does not stop caring when he steps back.",
        "memory": "You temporarily reduced your involvement to focus on education.",
        "toast": "Personal Stability protected · David's trust tested"
      }
    ],
    "delayed": {
      "schedule": {
        "public": "David reminds Marcus that people already depend on the ride schedules, and the additional role may mean even less sleep.",
        "behind": "The volunteers need someone with Marcus's scheduling experience, so his work becomes especially valuable.",
        "pause": "Marcus hands the schedules to another volunteer instead of leaving riders without a plan."
      },
      "limited": {
        "public": "Marcus knows he is crossing the boundary he set earlier, and he wonders how he will explain it to his mother.",
        "behind": "He tries to keep the limits he set while accepting quieter responsibilities.",
        "pause": "David remembers Marcus's careful schedule and knows this is not an impulsive withdrawal."
      },
      "supplies": {
        "public": "Marcus remembers how much resistance a single purchase could encounter; visible organizing feels even riskier now.",
        "behind": "He returns to locating supplies and coordinating people, work that has helped him build useful relationships.",
        "pause": "He passes along his contacts and supply notes so that others can continue without him."
      }
    },
    "ending": [
      "On March 22, Marcus hears that King has been convicted of violating Alabama's anti-boycott law. David is quiet when he tells him.",
      "The news does not end the boycott. Marcus looks at the letter to his mother beside his notes and realizes that he will have to keep choosing how to use his time.",
      "He wants to teach someday. This year is changing what he thinks teaching might require."
    ],
    "next": "A legal breakthrough challenges segregation while Marcus faces another test of sustainable commitment."
  },
  "daniel": {
    "heading": "The Cost of Looking Away",
    "place": "FRIDAY EVENING · FEBRUARY 24, 1956 · THE CARTERS' HOME",
    "intro": [
      "Mr. Bennett spent the afternoon talking about the charges against boycott leaders, certain that the arrests would finally bring the protest to an end.",
      "Daniel had heard about the January bombing of Dr. King's home. His employer spoke about the boycott as a business disruption. Daniel has started noticing the people whose work and safety disappear from that account.",
      "At home, Sarah is setting supper on the table when Daniel mentions the indictments.",
      "“I think the way people are treated on those buses is wrong,” Sarah says. She pauses before continuing. “But we can't pretend your job doesn't matter, either.”",
      "Daniel pulls out a chair. He has come to realize that he and Sarah can avoid many of the hardships Black residents face simply because they are white. That knowledge does not make the decision in front of him simple.",
      "Sarah sits down opposite him. “I need to know what you're thinking. And I need you to listen when I tell you what worries me.”"
    ],
    "ch1Callbacks": {
      "agree": "In December Daniel agreed with Bennett's dismissal of the boycott. That agreement has made his employer more comfortable expecting him to fall in line.",
      "silent": "Daniel's first response to Bennett was silence. With each new headline, he finds it harder to convince himself that saying nothing has no consequences.",
      "question": "Daniel questioned Bennett early in the boycott. He has since learned that even asking why people are protesting can carry a cost at work."
    },
    "ch2Callbacks": {
      "refuse": "Daniel refused to sell transportation supplies when Bennett ordered him to. The customer's expression stayed with him longer than his employer's approval.",
      "quiet_sale": "Daniel quietly completed a sale for someone connected to the volunteer rides. He helped in a small way, but he is aware that keeping it hidden also kept him safe.",
      "open_sale": "Daniel challenged Bennett over a sale for volunteer transportation. The store has not felt the same since, and he knows his employer remembers."
    },
    "relationshipLines": {
      "high": "Sarah knows Daniel has been wrestling with difficult questions. She wants to understand his reasoning even when she worries about his choices.",
      "low": "Sarah has been uneasy about the risks Daniel has taken or refused to discuss. She wants him to stop making decisions without including her."
    },
    "exchange": {
      "title": "Sarah asks him to listen.",
      "prompt": "How does Daniel begin their conversation?",
      "options": [
        {
          "id": "listen",
          "label": "Ask Sarah what she fears most before explaining his own position.",
          "response": "Sarah tells him she worries about rent, groceries, and the possibility of Bennett turning against him. “And I worry about what happens if we say nothing forever,” she adds. Daniel had not expected her to say both things."
        },
        {
          "id": "explain",
          "label": "Explain why the store's treatment of Black customers has begun troubling him.",
          "response": "Daniel tells Sarah about the customer who tried to buy supplies for the transportation effort. She listens, then asks, “What do you wish you had done differently?” He realizes that is a harder question than whether he agrees with Bennett."
        }
      ]
    },
    "prompt": "What will Daniel do as Bennett grows more hostile toward the boycott?",
    "choices": [
      {
        "id": "avoid",
        "label": "Keep his views private and avoid further conflict at work.",
        "delta": {
          "stability": 10,
          "network": -3,
          "contribution": -5
        },
        "relation": {
          "sarah": 1
        },
        "result": "Daniel promises Sarah he will not invite another confrontation with Bennett. She appreciates the concern for their security, but neither of them mistakes the decision for a resolution of what is happening in the city.",
        "memory": "You prioritized financial security and avoided workplace confrontation.",
        "toast": "Personal Stability protected · Questions remain unresolved"
      },
      {
        "id": "private",
        "label": "Help sympathetic customers quietly when opportunities arise.",
        "delta": {
          "stability": -5,
          "network": 7,
          "contribution": 10
        },
        "relation": {},
        "result": "Daniel decides he can sometimes help people obtain ordinary supplies without endorsing Bennett's refusal to serve them. Sarah asks him to think carefully about what secrecy protects, and what it leaves unchanged.",
        "memory": "You chose practical but mostly private support.",
        "toast": "Practical support increased · Workplace risk grew"
      },
      {
        "id": "open",
        "label": "Tell Bennett you will not participate in discriminatory treatment.",
        "delta": {
          "stability": -15,
          "network": 6,
          "contribution": 15
        },
        "relation": {
          "sarah": -1,
          "bennett": -1
        },
        "result": "At work the next morning, Daniel tells Bennett that he will not refuse a customer because that customer supports the boycott. Bennett responds sharply and hints that Daniel's job may not be secure. Daniel comes home knowing Sarah will want to hear exactly what happened.",
        "memory": "You openly challenged Bennett's discriminatory treatment of customers.",
        "toast": "Movement Contribution grew · Employment and marriage under strain"
      }
    ],
    "delayed": {
      "refuse": {
        "avoid": "The decision feels familiar: obey the employer, keep the job, and live with the memory of turning a customer away.",
        "private": "Daniel remembers the earlier refusal and resolves not to repeat it when he can act differently.",
        "open": "The earlier refusal makes Daniel's change of position especially visible to Bennett."
      },
      "quiet_sale": {
        "avoid": "His earlier secret help now seems like the safest he is willing to risk.",
        "private": "Daniel expands on what he tried discreetly in December, though he knows occasional assistance is limited.",
        "open": "Bennett has no idea how often Daniel has already disagreed with him in private."
      },
      "open_sale": {
        "avoid": "Bennett may see Daniel's withdrawal as capitulation after their earlier argument.",
        "private": "Daniel tries to lower the tension without abandoning his conviction that customers should be served equally.",
        "open": "Bennett reminds Daniel that he has already challenged him once. Their conflict is no longer hypothetical."
      }
    },
    "ending": [
      "On March 22, newspapers report that King has been convicted under the anti-boycott law. Mr. Bennett is confident that the protest will now collapse.",
      "Daniel remembers Thomas Reed at the counter and Sarah at the supper table. The law can be used to punish people for protesting, even while the daily injustices that brought them together remain.",
      "The boycott continues. Daniel realizes that he cannot make Montgomery's future his personal achievement—but he does have to decide how he will behave in it."
    ],
    "next": "The Supreme Court's eventual ruling forces another decision about the distance between private beliefs and public actions."
  }
};
