/* Chapter IV — Hope Is Not the End. All protagonist dialogue and workplace scenes are fictional. 
Historical anchors: June 5 district court decision, November 13 Supreme Court affirmance and injunction against the organized carpool. */
window.chapterFourData = {
  "evelyn": {
    "heading": "Almost Isn't There",
    "place": "TUESDAY EVENING · NOVEMBER 13, 1956 · EVELYN'S HOME",
    "opening": [
      "In June, Evelyn heard that a federal court had ruled against segregation on Montgomery's buses. For one evening, she allowed herself to imagine a shorter journey to work.",
      "But the ruling was appealed. The buses remained segregated, and the boycott went on. Throughout summer and autumn, Evelyn continued making the same difficult calculations: hours, wages, neighbors, and Ruth.",
      "Tonight a newspaper brings astonishing news: the Supreme Court has upheld the ruling. Ruth reads the headline twice, the way she has learned to do with important things.",
      "“Can we ride tomorrow?” she asks. Evelyn begins to answer, but Lottie Mae arrives carrying news that the organized carpool has just been stopped by a court order.",
      "The room is quiet. A legal victory, and still no easy way to reach work.",
      "Evelyn notices Ruth's worn shoes by the door. She thinks about what the last eleven months have cost, and how close the change now seems."
    ],
    "cb1": {
      "walk": "Ruth still remembers her mother's long first walk to work. Tonight she asks whether all those walks were worth it.",
      "ride": "Lottie Mae was the first person Evelyn asked for a ride. Their bond grew out of a simple need, and now they face the possibility of losing the system that helped so many people.",
      "bus": "Evelyn remembers the December morning she took the bus to protect her paycheck. She knows that decisions made under pressure cannot be explained by simple labels."
    },
    "cb2": {
      "employer": "Mrs. Whitmore's willingness to adjust hours has remained uncertain. Even good legal news cannot guarantee Evelyn's job tomorrow morning.",
      "help": "Evelyn knows the names on Lottie Mae's transportation lists. The court order against the carpool threatens arrangements built through months of volunteer work.",
      "bus": "There have been mornings when Evelyn used the bus because work could not wait. Now she wonders whether the approaching legal change will finally ease that burden."
    },
    "cb3": {
      "family": "Evelyn drew a line when the neighborhood asked more of her. Ruth's needs are more secure, but she remembers Lottie Mae's disappointed face.",
      "more": "Evelyn took on additional rides in February. Some neighbors now call on her automatically, and she is more tired than she likes to admit.",
      "shared": "Evelyn encouraged her neighbors to divide the work. The system is imperfect, but she has seen how much becomes possible when responsibility is shared."
    },
    "relationship": {
      "lottieHigh": "Lottie Mae takes Evelyn's hand. “We got through all these months together,” she says. “I can't promise tomorrow will be easy.”",
      "lottieLow": "Lottie Mae looks worn down. The past months have put strain on their friendship, but she still came to bring the news in person.",
      "ruthHigh": "Ruth has watched her mother make difficult decisions without pretending any were easy. Tonight she listens carefully.",
      "ruthLow": "Ruth wants a clear answer about what comes next. Evelyn knows she has not always known how much to explain."
    },
    "prompt": "With the organized carpool halted and integration still pending, what will Evelyn do?",
    "choices": [
      {
        "id": "recover",
        "label": "Put Ruth and the family's immediate needs first while the court order takes effect.",
        "delta": {
          "stability": 12,
          "network": -3,
          "contribution": -4
        },
        "relation": {
          "ruth": 1
        },
        "result": "Evelyn makes a careful plan for work and sets aside money for Ruth's shoes. She tells Lottie Mae she cannot take on more neighborhood responsibilities right now. The decision brings some relief, but not certainty: no one yet knows when the buses will be integrated.",
        "delayed": {
          "family": "Evelyn remembers the limits she set in February. This time she sets them without trying to explain away their necessity.",
          "more": "After months of taking on extra responsibilities, the decision to rest feels almost as difficult as volunteering.",
          "shared": "Evelyn asks others to continue the arrangements they built together while she focuses on home."
        },
        "memory": "You put Ruth and household stability first in the final weeks of the boycott.",
        "toast": "Personal Stability strengthened · Ruth's trust grew"
      },
      {
        "id": "walking",
        "label": "Help organize neighborhood walking and mutual-support groups.",
        "delta": {
          "stability": -9,
          "network": 12,
          "contribution": 9
        },
        "relation": {
          "lottie": 1
        },
        "result": "Evelyn and Lottie Mae begin matching neighbors who live along the same routes. Some can walk together; others need help with errands or childcare. The effort is tiring, but it gives people another way to support one another while they wait.",
        "delayed": {
          "family": "Evelyn limits the hours she gives, remembering that Ruth cannot be left to carry the cost alone.",
          "more": "Neighbors turn to Evelyn's experience, and she begins assigning tasks instead of trying to handle everything herself.",
          "shared": "The volunteers Evelyn recruited earlier are ready to take responsibility for different streets."
        },
        "memory": "You helped neighbors coordinate walking groups after the carpool injunction.",
        "toast": "Support Network strengthened · Personal Stability under pressure"
      },
      {
        "id": "home",
        "label": "Contribute through meals, childcare, and coordination from home.",
        "delta": {
          "stability": -5,
          "network": 9,
          "contribution": 7
        },
        "relation": {
          "lottie": 1
        },
        "result": "Evelyn clears space on her kitchen table for phone numbers and pickup notes. She helps neighbors share meals and watch children while adults make difficult trips to work. The help isn't always visible, and it still costs time, but it matters.",
        "delayed": {
          "family": "Ruth joins her mother at the table, and together they decide what can realistically be done after school.",
          "more": "After months of exhausting transportation duties, Evelyn finds ways to help without promising to be everywhere at once.",
          "shared": "The division of responsibility she suggested in February now supports the work being done from home."
        },
        "memory": "You supported the final weeks through care, meals, and coordination.",
        "toast": "Support Network strengthened · Community care grew"
      }
    ],
    "ending": [
      "The Supreme Court's decision has brought the boycott closer to victory, but the order has not yet taken effect in Montgomery.",
      "Evelyn watches Ruth fold the newspaper neatly beside the transportation lists. “Almost,” Ruth says.",
      "“Almost,” Evelyn agrees. She does not yet know what that word will mean for tomorrow."
    ],
    "next": "A seat for Ruth, a changed law, and the uncertain work of rebuilding a family's future."
  },
  "marcus": {
    "heading": "Hope Is Not Rest",
    "place": "TUESDAY AFTERNOON · NOVEMBER 13, 1956 · NEAR ALABAMA STATE COLLEGE",
    "opening": [
      "Back in June, Marcus had read about a federal court ruling against segregated buses. For days he thought the boycott might finally be over.",
      "But the appeal continued, the buses remained segregated, and volunteers kept carrying schedules and supplies through another season.",
      "Now David arrives at the door holding a newspaper. “They upheld it,” he says before Marcus can ask. “The Supreme Court upheld the decision.”",
      "Marcus drops his pencil. For a moment they grin at each other as though it is the first December meeting all over again.",
      "Then David tells him about the court order halting the carpool. Volunteers are trying to figure out how people will reach work tomorrow.",
      "Beside Marcus's college notes is a letter from his mother. She has asked about his grades, his safety, and what he plans to do when his education is complete."
    ],
    "cb1": {
      "public": "The enthusiasm Marcus felt while distributing leaflets has matured into a clearer understanding of how much work organizing requires.",
      "quiet": "Marcus's early behind-the-scenes work taught him that movements need people who solve logistical problems as much as people who speak publicly.",
      "study": "Marcus still remembers choosing his studies over the leaflets at first. He has since discovered that participation can take many forms and change over time."
    },
    "cb2": {
      "schedule": "His months helping with ride schedules mean he immediately understands how damaging the carpool injunction may be.",
      "limited": "Marcus has tried to keep a dependable volunteer schedule and protect his studies. Today's news makes those boundaries feel hard to maintain.",
      "supplies": "The supplies and contacts Marcus helped secure are still useful, but he knows the carpool problem is larger than any one store visit."
    },
    "cb3": {
      "public": "Marcus became more visible during the height of intimidation. His mother has worried, and David has grown to rely on him.",
      "behind": "Marcus stayed close to the practical work while avoiding some public attention. He has seen how much daily labor sustains a movement.",
      "pause": "Marcus stepped back to catch up on schoolwork. He has not forgotten the people working through the boycott, and David has not forgotten that he stepped away."
    },
    "relationship": {
      "davidHigh": "David's confidence in Marcus is obvious. “People need you,” he says, and Marcus knows it is both an expression of trust and a new demand.",
      "davidLow": "David looks at Marcus cautiously. Their friendship has survived differences about how much time either of them should give, but the strain is real.",
      "motherHigh": "Marcus's mother has noticed his attempts to balance college and community responsibilities. Her letter is worried, but she sounds proud of his persistence.",
      "motherLow": "His mother's latest letter sounds more anxious than proud. Marcus knows that her worry grows from the sacrifices she made for his future."
    },
    "prompt": "With the carpool shut down and exams approaching, how will Marcus help?",
    "choices": [
      {
        "id": "full",
        "label": "Take on another major round of transportation and community organizing.",
        "delta": {
          "stability": -10,
          "network": 10,
          "contribution": 12
        },
        "relation": {
          "david": 1,
          "mother": -1
        },
        "result": "Marcus joins David and other volunteers to reorganize transportation help. The practical demands grow as the court order makes the old system unavailable. He feels useful, but the college work awaiting him does not disappear.",
        "delayed": {
          "public": "The public responsibilities he accepted in February have prepared him, but people now expect him to keep saying yes.",
          "behind": "Marcus's knowledge of schedules and volunteers becomes essential in the temporary reorganization.",
          "pause": "David is surprised and grateful when Marcus returns to heavier organizing, but Marcus knows it will complicate the plans he made for school."
        },
        "memory": "You committed to extensive organizing during the boycott's final weeks.",
        "toast": "Movement Contribution grew · Academic stability under pressure"
      },
      {
        "id": "boundaries",
        "label": "Offer set hours of assistance while protecting classwork and exams.",
        "delta": {
          "stability": 5,
          "network": 5,
          "contribution": 6
        },
        "relation": {
          "mother": 1
        },
        "result": "Marcus agrees to help at specific times and asks David to find another volunteer for the remaining shifts. David would like more, but the work they can count on is still valuable. Marcus returns to his books after the planned hours end.",
        "delayed": {
          "public": "Marcus has to tell people who know him as a visible organizer that he cannot attend every meeting.",
          "behind": "The quiet, reliable work he practiced earlier makes a limited schedule easier to coordinate.",
          "pause": "Marcus offers a way to return to helping without undoing the academic recovery he worked for."
        },
        "memory": "You continued supporting the boycott while setting boundaries for school.",
        "toast": "Personal Stability protected · Support Network grew"
      },
      {
        "id": "small",
        "label": "Step away from organizing leadership and contribute in smaller ways.",
        "delta": {
          "stability": 8,
          "network": -2,
          "contribution": 2
        },
        "relation": {
          "david": -1
        },
        "result": "Marcus tells David he cannot take on another schedule. Instead, he agrees to pass along updates and help when he can. His friend is disappointed, and Marcus accepts that staying close to a movement sometimes means being honest about his limits.",
        "delayed": {
          "public": "The change from visible leadership feels noticeable to Marcus, even though the reasons are real.",
          "behind": "Marcus shares his organizing notes so another volunteer can continue where he leaves off.",
          "pause": "Having stepped back earlier, Marcus now sees the importance of describing what help he can reliably offer."
        },
        "memory": "You scaled back leadership while remaining connected to the movement.",
        "toast": "Academic stability supported · David's expectations changed"
      }
    ],
    "ending": [
      "In the days after the Supreme Court's announcement, Marcus watches the volunteers adapt without their organized carpool.",
      "David puts another set of names on the table. Marcus wonders how many ordinary decisions lie behind the single headline they have waited so long to read.",
      "The semester continues, and so does the boycott. Neither has yet reached its end."
    ],
    "next": "The movement's legal victory, Marcus's college future, and what it means to carry the experience forward."
  },
  "daniel": {
    "heading": "When the Law Changes",
    "place": "TUESDAY AFTERNOON · NOVEMBER 13, 1956 · BENNETT'S HARDWARE",
    "opening": [
      "In June, a federal court ruled against segregation on Montgomery's buses. Mr. Bennett called it a temporary inconvenience and said the city would appeal.",
      "Now the Supreme Court has upheld the ruling. The headline lies on the counter, its edges already soft from being handled by customers.",
      "Mr. Bennett stares at it. “They've gone and done it. Washington telling Montgomery how to run its own streets.”",
      "Daniel remembers the customers who needed ordinary hardware supplies for volunteer transportation. He remembers the choices he made while Bennett was watching.",
      "Outside, people pass the storefront on their way home. The organized carpool has just been halted by another court order, so the boycott is still creating daily difficulties.",
      "Mr. Bennett looks up. “You've been quiet. What do you think?” Daniel knows he can still avoid answering. He also knows that silence will not stop the law from changing."
    ],
    "cb1": {
      "agree": "Daniel agreed with Bennett early in the boycott. That agreement helped establish the expectations that now press on him.",
      "silent": "His first response in December was silence. Eleven months later, he has learned how much silence can allow other people to assume.",
      "question": "Daniel questioned Bennett before the boycott had even lasted a week. The memory makes this moment feel familiar, though the stakes have grown."
    },
    "cb2": {
      "refuse": "Daniel remembers turning away a customer who wanted supplies for volunteer transportation. Bennett's approval came easily, but that did not make the decision sit well.",
      "quiet_sale": "Daniel once completed a sale quietly despite Bennett's opposition. He knows that practical help and public disagreement are not identical.",
      "open_sale": "Daniel openly challenged Bennett about serving a customer. The store's atmosphere has been uneasy ever since."
    },
    "cb3": {
      "avoid": "During the spring Daniel chose to avoid further confrontation. His household has remained more secure, but he has continued noticing discriminatory treatment.",
      "private": "Daniel has offered quiet practical support when he could. He wonders whether the coming legal change will demand something more visible.",
      "open": "Daniel told Bennett that he would not refuse customers simply for supporting the boycott. His position at the store has remained uncertain."
    },
    "relationship": {
      "sarahHigh": "Sarah and Daniel have been talking more openly about injustice and about the rent. She wants him to act thoughtfully rather than in a rush.",
      "sarahLow": "Daniel and Sarah have not yet found an easy way to discuss the risk his decisions pose to their finances. He knows he needs to include her.",
      "bennettHigh": "Bennett still regards Daniel as a dependable employee and expects agreement from him.",
      "bennettLow": "Bennett's suspicion has hardened. Whatever Daniel says now may shape whether he has a job next month."
    },
    "prompt": "How does Daniel respond to Mr. Bennett's opposition to integration?",
    "choices": [
      {
        "id": "quiet",
        "label": "Agree to keep the controversy out of the store and avoid another confrontation.",
        "delta": {
          "stability": 10,
          "network": -3,
          "contribution": -5
        },
        "relation": {
          "bennett": 1
        },
        "result": "Daniel says that he will focus on business. Bennett relaxes, satisfied. Daniel can feel the familiar comfort of keeping his place, but he also knows that refusing to challenge discriminatory expectations leaves them intact.",
        "delayed": {
          "avoid": "His decision continues the pattern of avoiding conflict, and Sarah may appreciate the security without sharing his silence.",
          "private": "Daniel finds himself wondering whether even the small assistance he offered earlier would now become harder to repeat.",
          "open": "After Daniel's earlier challenge, Bennett treats this promise as a retreat—and is quick to remind Daniel who employs him."
        },
        "memory": "You chose workplace security and avoided open disagreement over integration.",
        "toast": "Personal Stability strengthened · Workplace expectations reinforced"
      },
      {
        "id": "private",
        "label": "Express disagreement privately and continue practical support where possible.",
        "delta": {
          "stability": -5,
          "network": 6,
          "contribution": 9
        },
        "relation": {},
        "result": "Daniel tells Bennett he believes the court ruling should be obeyed, but does not try to force a public argument. Later he explains his position to Sarah and offers practical assistance when customers need it. The support remains limited, and trust is not automatic.",
        "delayed": {
          "avoid": "Daniel's first quiet disagreement in months feels awkward but necessary to him.",
          "private": "The conversation resembles his earlier private support; Daniel is beginning to see both its usefulness and its limits.",
          "open": "Daniel seeks a less confrontational way to continue after the earlier conflict with Bennett."
        },
        "memory": "You disagreed privately with segregation and continued limited practical support.",
        "toast": "Movement Contribution grew · Workplace uncertainty increased"
      },
      {
        "id": "refuse",
        "label": "Tell Mr. Bennett you will not participate in discriminatory treatment.",
        "delta": {
          "stability": -15,
          "network": 6,
          "contribution": 15
        },
        "relation": {
          "bennett": -1,
          "sarah": -1
        },
        "result": "“The ruling is right,” Daniel says. “I won't turn away customers because they support the boycott.” Bennett tells him that he may need to find work elsewhere. Daniel walks home thinking of Sarah, who has asked him to weigh the rent as well as his convictions.",
        "delayed": {
          "avoid": "After months of avoiding direct conflict, Daniel's refusal surprises even him.",
          "private": "His private objections have finally become an open disagreement that Bennett cannot overlook.",
          "open": "Bennett recalls Daniel's earlier opposition. The confrontation now threatens to end their employment relationship."
        },
        "memory": "You publicly refused discriminatory treatment despite the employment risk.",
        "toast": "Movement Contribution grew · Employment security declined"
      }
    ],
    "ending": [
      "The Supreme Court has affirmed the ruling, but the desegregation order has not yet reached Montgomery. The buses remain segregated in the meantime.",
      "Daniel passes the hardware counter where ordinary sales became tests of what he would accept. His role in the city's history is small; the consequences of his actions for others are still real.",
      "When he goes home, Sarah asks how his day went. He knows that the conversation will matter more than any headline he brings with him."
    ],
    "next": "An integrated bus system and the unfinished work of confronting the beliefs that upheld segregation."
  }
};
