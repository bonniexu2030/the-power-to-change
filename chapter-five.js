/* Chapter V — What Comes After Victory? Historical context: the MIA ended the boycott on December 20, 1956; integrated Montgomery bus service began December 21.
 * All main characters, personal scenes and dialogue are fictional.
 * Source: https://kinginstitute.stanford.edu/king-papers/documents/statement-ending-bus-boycott
 */
window.chapterFiveData = {
  "evelyn": {
    "heading": "A Seat and a Future",
    "place": "THURSDAY EVENING · DECEMBER 20, 1956 · EVELYN’S KITCHEN",
    "opening": [
      "Evelyn is folding Ruth's school clothes when Lottie Mae knocks. For once, her friend is smiling before she says a word.",
      "“It's here,” Lottie Mae says, holding up the newspaper. “The order. The boycott is over.”",
      "Evelyn takes the paper and reads slowly. After more than a year of walking, rides, missed hours, and worry, the Montgomery Improvement Association has called off the boycott. The buses will run on an integrated basis beginning tomorrow.",
      "Ruth looks up from her homework. “Does that mean we can sit wherever we want?”",
      "“It means the law cannot tell us where to sit because of the color of our skin,” Evelyn says. She wants to sound certain. She knows a court ruling cannot promise that every passenger will be kind, or that a frightened mother will stop being frightened.",
      "The kitchen table still holds bills. Ruth still needs new shoes. Lottie Mae is already talking about neighbors who are excited to ride and others who are afraid.",
      "Evelyn wonders what victory will feel like when morning comes and the ordinary world needs them again."
    ],
    "cb1": {
      "walk": "Ruth remembers the first morning her mother walked miles to work. “You did that because of this,” she says softly. Evelyn thinks of all the other people whose footsteps made the boycott possible.",
      "ride": "Evelyn thinks of the first ride Lottie Mae helped arrange. A favor between neighbors became the beginning of a network that sustained a city.",
      "bus": "Evelyn remembers riding the bus on the first boycott day because Ruth needed food and the rent needed paying. She has learned that protecting a family and seeking justice are never simple opposites."
    },
    "cb2": {
      "employer": "Mrs. Whitmore's uncertain demands have not disappeared, but a lawful ride to work may finally give Evelyn more dependable options.",
      "help": "The schedules Evelyn helped build for her neighborhood are no longer needed in quite the same way. The relationships built around them remain.",
      "bus": "For months, Evelyn had sometimes taken the bus when no alternative would keep her employed. Tomorrow she can make a different decision under a different law."
    },
    "cb3": {
      "family": "Evelyn remembers the week she put Ruth's security first. She wants her daughter to understand that the movement depended on people who carried very different burdens.",
      "more": "The extra transportation work Evelyn took on in February left her exhausted and introduced her to families who still need help in other ways.",
      "shared": "Evelyn has seen what happens when neighbors divide difficult work rather than expecting one person to bear it all."
    },
    "cb4": {
      "recover": "After the carpool was halted, Evelyn turned toward home and Ruth's needs. She is still rebuilding the sense of safety the long months shook.",
      "walking": "Evelyn helped neighbors form walking groups in November. The same people are now asking who will accompany them on the first integrated rides.",
      "home": "Evelyn spent those final weeks helping with meals, childcare, and coordination. Her kitchen became a quieter kind of organizing space."
    },
    "prompt": "What does Evelyn decide to do on the first day of integrated buses?",
    "choices": [
      {
        "id": "ride",
        "label": "Ride with Ruth and help her experience the new freedom for herself.",
        "delta": {
          "stability": -4,
          "network": 2,
          "contribution": 5
        },
        "relation": {
          "ruth": 1
        },
        "result": "In the morning, Evelyn and Ruth approach the bus stop together. Evelyn notices the ordinary details: the steps, the fare, the driver's hands. They board without looking for a sign telling them where to sit. Ruth chooses a seat by the window. Evelyn sits beside her. The relief is real, and so is the caution.",
        "memory": "You rode an integrated bus with Ruth and made space for her questions.",
        "toast": "Ruth's trust grew · A new freedom became tangible"
      },
      {
        "id": "wait",
        "label": "Take time to plan a safer first ride and talk honestly with Ruth about what has changed.",
        "delta": {
          "stability": 7,
          "network": 1,
          "contribution": 2
        },
        "relation": {
          "ruth": 1
        },
        "result": "Evelyn tells Ruth that the law has changed and that they can choose when to ride. They discuss what to do if another passenger is hostile. On the first morning, Evelyn follows her usual route to work while making plans for a later trip together. Ruth is disappointed but understands that victory and caution can exist at once.",
        "memory": "You planned a careful first integrated bus ride with Ruth.",
        "toast": "Personal Stability strengthened · Ruth felt heard"
      },
      {
        "id": "neighbors",
        "label": "Help Lottie Mae accompany nervous neighbors and share information about the integrated buses.",
        "delta": {
          "stability": -6,
          "network": 12,
          "contribution": 8
        },
        "relation": {
          "lottie": 1,
          "ruth": 1
        },
        "result": "Evelyn and Lottie Mae spend the morning answering questions, walking neighbors to bus stops, and checking on those who need company. Ruth comes along when she can. Evelyn knows that these ordinary acts will not make headlines. She also knows why they matter.",
        "memory": "You helped neighbors navigate the first days of integrated bus service.",
        "toast": "Support Network strengthened · Community care continued"
      }
    ],
    "endings": {
      "rebuilding": {
        "title": "Still Rebuilding",
        "text": "Evelyn has protected what she could, but the long boycott has left her family with worries that a single ruling cannot remove. She continues working, supporting Ruth, and recovering the stability that segregation and its resistance both made so costly to maintain.",
        "final": "A seat is no longer assigned by law. Her family's future remains something she must build day by day."
      },
      "ties": {
        "title": "Community Ties",
        "text": "Evelyn carries friendships forged through transportation schedules, shared meals, and long walks. The buses have changed, but the networks built during the boycott can help families face problems that did not vanish with desegregation.",
        "final": "She knows a movement is more than a victory date. It is also the people who show up afterward."
      },
      "footing": {
        "title": "Finding Her Footing",
        "text": "Evelyn and Ruth are finding a rhythm after months of uncertainty. Evelyn knows the court ruling matters enormously, and she also knows that a reliable job, a safe home, and dignity at work still require attention.",
        "final": "Ruth asks what happens next. Evelyn answers, “We keep going.”"
      }
    },
    "relationships": {
      "ruthHigh": "Ruth has seen her mother make hard choices and admit when she is afraid. Their conversations have become a part of how they understand freedom together.",
      "ruthLow": "Ruth still has questions Evelyn struggles to answer. Their conversations continue even when the answers are uncertain.",
      "lottieHigh": "Lottie Mae remains someone Evelyn can count on, and they have learned when to ask for help and when to offer it.",
      "lottieLow": "The months have strained Evelyn and Lottie Mae's friendship at times. They have not always agreed, but both know why the boycott mattered."
    },
    "reflection": "What obligations should employers and communities share so that taking part in social change does not require families to sacrifice basic security?"
  },
  "marcus": {
    "heading": "The Lessons He Carries",
    "place": "THURSDAY NIGHT · DECEMBER 20, 1956 · MARCUS’S ROOM",
    "opening": [
      "David arrives without knocking. “They've called it off,” he says, nearly out of breath. “The boycott. The buses are going to be integrated tomorrow.”",
      "Marcus stands, and they embrace before either remembers to pretend the moment is ordinary.",
      "A year earlier, David brought leaflets to this room. Since then they have carried schedules, argued about commitments, faced frightening news, and tried to keep students and workers moving.",
      "Marcus looks at his textbooks on the desk. He still hopes to become a teacher. Now the notes in the margins seem connected to the life outside the classroom.",
      "His mother's latest letter asks how he is doing and whether he has been sleeping. She would want to know the good news—and how he intends to finish the semester.",
      "David asks, “What now? First bus ride tomorrow? Or are you going back to those books?”",
      "Marcus laughs, then grows quiet. He understands that the boycott has ended. The larger work of making their city fairer has not."
    ],
    "cb1": {
      "public": "He remembers distributing leaflets openly with David in December. Neither of them understood how much work would follow.",
      "quiet": "He remembers carefully assembling leaflets and learning how much essential work goes unnoticed.",
      "study": "He remembers declining David's first invitation so he could study. The friendship survived that decision and many others."
    },
    "cb2": {
      "schedule": "Marcus still remembers the names and addresses from the carpool schedules. He can picture the people behind every line.",
      "limited": "The hours he reserved for study became a promise to himself and, sometimes, a source of tension with David.",
      "supplies": "Marcus learned to obtain supplies and make connections, seeing how even small logistical needs could become sites of discrimination."
    },
    "cb3": {
      "public": "He spoke and organized more visibly as arrests and intimidation increased. The experience gave him confidence, but it did not make him fearless.",
      "behind": "He stayed with the quiet work of coordination when the dangers grew. Dependability felt like a form of commitment.",
      "pause": "He stepped back during the months of greatest pressure. He still cares about the movement, and he has had to learn that not every contribution looks alike."
    },
    "cb4": {
      "full": "After the carpool injunction, Marcus accepted another heavy load of organizing. His textbooks are still waiting.",
      "boundaries": "Marcus kept helping in set hours after the November court order. David came to appreciate what he could reliably promise.",
      "small": "Marcus reduced his leadership as the boycott neared victory and made sure others had the notes they needed."
    },
    "prompt": "How will Marcus carry the experience beyond the boycott?",
    "choices": [
      {
        "id": "teach",
        "label": "Turn his organizing experience into the kind of history and civic lessons he hopes to teach.",
        "delta": {
          "stability": 9,
          "network": 4,
          "contribution": 5
        },
        "relation": {
          "mother": 1
        },
        "result": "Marcus writes to his mother first. He tells her the buses will be integrated and that he is returning to his studies with a different sense of purpose. In the margin of his notebook, he writes a question for the students he hopes to teach: Who keeps a movement going when the speeches are over?",
        "memory": "You committed to carrying the boycott's lessons into your future teaching.",
        "toast": "Academic direction strengthened · Lessons carried forward"
      },
      {
        "id": "organize",
        "label": "Continue organizing with David on problems that segregation has not resolved.",
        "delta": {
          "stability": -8,
          "network": 11,
          "contribution": 11
        },
        "relation": {
          "david": 1
        },
        "result": "Marcus and David begin discussing the work still ahead: schools, jobs, and fair treatment beyond the buses. They make no grand promises about winning quickly. Marcus knows from experience how much steady effort change demands.",
        "memory": "You committed to continued community organizing after the bus boycott.",
        "toast": "Support Network strengthened · Organizing continues"
      },
      {
        "id": "balance",
        "label": "Stay involved in a limited, sustainable way while protecting his education.",
        "delta": {
          "stability": 7,
          "network": 5,
          "contribution": 6
        },
        "relation": {
          "mother": 1,
          "david": 1
        },
        "result": "Marcus tells David he wants to keep helping, but he also wants to finish college. They agree to share responsibilities and make room for more volunteers. For the first time in months, his plans for the future and his work in the present feel less like enemies.",
        "memory": "You chose sustained, bounded participation alongside your education.",
        "toast": "Personal Stability strengthened · Shared commitments grew"
      }
    ],
    "endings": {
      "costly": {
        "title": "Costly Commitment",
        "text": "Marcus's education remains at risk after months of demanding organizing. He does not regret everything he has done, but he recognizes that dedication cannot erase exhaustion or replace missed study time. He must work to rebuild what sustained participation has cost.",
        "final": "The movement needed people who showed up. Marcus is learning that it also needs people who can keep going."
      },
      "organizer": {
        "title": "Emerging Organizer",
        "text": "Marcus has formed relationships through practical work, difficult decisions, and shared responsibilities. The boycott has shown him that leadership is not only standing before a crowd—it is helping other people act together.",
        "final": "He wants to be a teacher. He also knows the city itself has been teaching him."
      },
      "teacher": {
        "title": "A Future Teacher",
        "text": "Marcus turns back toward his education with a more complicated understanding of history. The boycott is not a story of one famous person and one decisive day. It is a story of neighbors, sacrifice, legal challenges, and the work behind visible victories.",
        "final": "He closes his notebook, then opens it to begin a new page."
      }
    },
    "relationships": {
      "motherHigh": "His mother worries, but she knows Marcus has tried to honor both his education and the struggle around him.",
      "motherLow": "His mother still fears that Marcus is endangering the future she worked to help him reach. Their disagreements remain rooted in love and uncertainty.",
      "davidHigh": "David trusts Marcus as a friend and organizer, even when they disagree about how much to do.",
      "davidLow": "Marcus and David are still working through disappointments. Their friendship has been tested by a movement neither could fully control."
    },
    "reflection": "Who gets recognized as a leader, and whose everyday labor makes collective action possible?"
  },
  "daniel": {
    "heading": "A Different Kind of Ordinary",
    "place": "FRIDAY AFTERNOON · DECEMBER 21, 1956 · BENNETT’S HARDWARE",
    "opening": [
      "The first integrated buses are moving through Montgomery. Daniel watches one pass the hardware store window.",
      "Mr. Bennett barely glances at it. “We'll see how long this lasts,” he says.",
      "Daniel thinks of Thomas Reed at the counter months ago, asking for ordinary supplies, and of Sarah across their supper table asking what he really believed.",
      "The law has changed, but Bennett's opinions have not. Daniel has learned that he can often protect his comfort simply by staying quiet, a choice denied to many of the Black neighbors living under segregation.",
      "A customer comes in and comments bitterly about the buses. Mr. Bennett waits for Daniel's reaction.",
      "Daniel has no power to claim the boycott's victory. The people who walked, organized, testified, and challenged segregation earned that change. But he still has choices about his own conduct in the world they have helped remake.",
      "As the bell above the door settles, he wonders whether he can stop calling the old ways ordinary."
    ],
    "cb1": {
      "agree": "Daniel remembers agreeing with Bennett when Rosa Parks was first arrested. Agreement once came so easily.",
      "silent": "Daniel remembers choosing silence on the first day. He has spent a year considering the difference between avoiding conflict and refusing injustice.",
      "question": "Daniel remembers questioning Bennett in December. That first hesitation was small, but it changed what he was willing to notice."
    },
    "cb2": {
      "refuse": "He remembers refusing a sale connected to volunteer transportation. He cannot undo that transaction by feeling differently now.",
      "quiet_sale": "He remembers helping a customer quietly despite Bennett's wishes. That act mattered in a limited way; it did not dismantle the store's discrimination.",
      "open_sale": "He remembers challenging Bennett about serving a customer. The conflict made it impossible to pretend that the issue was distant."
    },
    "cb3": {
      "avoid": "When pressure grew, Daniel avoided more workplace confrontations. His financial security benefited, though the moral question did not vanish.",
      "private": "During the most dangerous months, Daniel found small opportunities for private support without opening himself to full confrontation.",
      "open": "Daniel openly refused discriminatory treatment and faced the prospect of losing his job. Sarah has had to share that uncertainty."
    },
    "cb4": {
      "quiet": "In November, Daniel kept the legal controversy out of the store. Bennett saw that as agreement.",
      "private": "Daniel privately acknowledged the ruling's justice and offered practical assistance where he could.",
      "refuse": "Daniel refused discriminatory treatment again in November. His employment situation has remained uncertain."
    },
    "prompt": "What does Daniel do now that the buses are integrated?",
    "choices": [
      {
        "id": "clear",
        "label": "Challenge discriminatory remarks and refuse to enforce unequal treatment at work.",
        "delta": {
          "stability": -12,
          "network": 5,
          "contribution": 10
        },
        "relation": {
          "bennett": -1
        },
        "result": "Daniel tells the customer that Black riders have the same legal right to sit on the bus as anyone else. Bennett warns him sharply about causing trouble. Daniel's statement will not make him the hero of someone else's history, but it does make his own position clear.",
        "memory": "You challenged discriminatory remarks after integration and refused unequal service.",
        "toast": "Your position became visible · Employment risk grew"
      },
      {
        "id": "consistent",
        "label": "Treat customers equally and push back in practical ways without seeking attention.",
        "delta": {
          "stability": -4,
          "network": 5,
          "contribution": 7
        },
        "relation": {},
        "result": "Daniel serves customers without making exceptions for Bennett's prejudices. When the next discriminatory remark comes, he does not join in. The changes in his behavior are modest, and the store is still under Bennett's control, but they are choices Daniel must keep making.",
        "memory": "You committed to consistent equal treatment in ordinary transactions.",
        "toast": "Everyday conduct changed · Practical support grew"
      },
      {
        "id": "comfort",
        "label": "Avoid involvement and concentrate on maintaining his job and household.",
        "delta": {
          "stability": 9,
          "network": -3,
          "contribution": -4
        },
        "relation": {
          "bennett": 1
        },
        "result": "Daniel says little about the buses and returns to his work. Bennett seems pleased. At home, Sarah asks whether anything really changed for him. Daniel knows that the new law did not demand the same sacrifices of him that the boycott demanded of Black residents.",
        "memory": "You prioritized personal security and remained largely disengaged after integration.",
        "toast": "Personal Stability protected · Complicity remains unresolved"
      }
    ],
    "endings": {
      "stand": {
        "title": "A Visible Stand",
        "text": "Daniel has repeatedly placed his employment and social standing at risk by opposing discriminatory treatment. These decisions do not make him central to the boycott's success, and they do not erase the privileges he continues to hold. They do make his future behavior a responsibility he cannot delegate.",
        "final": "The buses move past the hardware store. He knows the next test may be smaller and quieter."
      },
      "hesitant": {
        "title": "A Hesitant Ally",
        "text": "Daniel has begun changing his behavior, sometimes privately and sometimes under pressure. He remains uncertain, and there are costs he has been unwilling to accept. His story is not about rescuing a movement. It is about whether recognition of injustice can become consistent action.",
        "final": "He remembers Thomas Reed's face and knows that awareness alone is not the same as change."
      },
      "observer": {
        "title": "The Comfortable Observer",
        "text": "The integrated buses pass by Daniel's workplace, but much of his daily life can remain the same. He can benefit from the stability of the world he knows while other people bear the work of transforming it. The opportunity to act differently remains open, though he has not often taken it.",
        "final": "He turns back to the counter. The movement changed the law; only his choices can change how he behaves."
      }
    },
    "relationships": {
      "sarahHigh": "Sarah and Daniel have learned to discuss fear, money, and responsibility more openly, even when they disagree.",
      "sarahLow": "Sarah and Daniel still have difficult conversations ahead. The risks to their household are real, as are the consequences of ignoring injustice.",
      "bennettHigh": "Bennett's confidence in Daniel shows how readily conformity can be rewarded in an unequal system.",
      "bennettLow": "Bennett distrusts Daniel. The conflict has exposed how employment can be used to enforce social expectations."
    },
    "reflection": "When a system becomes more equal under the law, what responsibilities remain for people who benefited from the old rules?"
  }
};
