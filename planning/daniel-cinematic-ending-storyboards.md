# 381 Days — Daniel Carter: miniature-movie ending storyboards

**Status:** First full storyboard draft for creative review; not yet implemented in the game.  
**User-approved direction:** Four illustrated cinematic shots per outcome, moderate camera motion (Option B), silent-film-inspired and no lip-sync. **Sarah must appear directly as a person** because she is an important character and a meaningful influence on Daniel, not just an off-screen voice, note or prop. The appearance of Sarah should carry distinct dramatic weight across all three endings. No voices or recordings are selected: ask the user about casting/tone before any voice decisions.

## Director-approved staging revision — supersedes earlier conflicting shot directions

**Signature action:** Daniel visibly **serves customers equally, then meets Bennett's gaze without looking away or delivering an additional speech**. His expression/still posture conveys quiet **strength, determination and an actual step after the boycott**. Stage as two composed illustrated stills or a gentle pan, not animated speaking. Keep Sarah **physically visible**; her small, **supportive smile or touch** should mean companionship without erasing her worries or the consequences of his actions. No obligatory Sarah dialogue.

**Final-choice honesty takes priority:**
- \`consistent\`: show the actual quiet, consistent equal treatment and the direct, wordless glance toward Bennett. This is the creator's primary visual example.
- \`clear\`: he does challenge a customer's discriminatory remark **verbally as the original story states** and can still hold Bennett's gaze afterward in silence. Never erase the existing final-choice consequence.
- \`comfort\`: **do not show the equal-service stand or heroic confrontation**. He avoids involvement at work, and at home a genuine, unresolved moment with Sarah gives the player a **reflective, motivating** impression of agency still possible. Even with a high stat-derived ending, portray what happened in *this* choice accurately.
- \`observer\`: viewer should leave **reflective and motivated**, not condemned, frustrated or punished. A visible opportunity, a missed action and Sarah's independent presence make the difference apparent.
- In every category, keep the original \`stand\`/\`hesitant\`/\`observer\` stats and history intact; visual variation reflects accumulated behavior without changing what happened on December 21.

**Score:** modern restrained film-scoring with **low cello** as tension/weight, sparse jazz-informed piano chords and the shared game motif in a different voicing. Music may grow toward Daniel's resolved gaze (where earned and chosen), but **observer** should resolve into thoughtful restraint rather than a villain sting. Foley of store door, quiet bus, cash register is most audible before/after music swells and must not overpower narration.

**Voices:** one narrator plus distinct Daniel and Sarah voices *if implemented*, but no voice models/performers selected. Daniel: middle-class white male sound without marked accent; Sarah: young white woman's natural, period-appropriate vocal warmth. Get user approval for actual samples, narration and accent before generating/recording audio. No lip-sync.

## Narrative guardrails

The scene begins in Montgomery on **Friday, December 21, 1956**, the first day of integrated bus service. The original fictional story is centered on Daniel at Bennett's Hardware, his employer Bennett, his wife Sarah, and remembered encounters with Thomas Reed. These are fictional personal scenes. **The boycott's victory belongs to the Black Montgomery residents who walked, organized, testified, and challenged segregation, not Daniel.**

Stat-based outcome category is calculated by the original `finalEndingId()`, **after** the player's Chapter V decision:
- `stand` / **A Visible Stand**: contribution >= 60 and stability < 60
- `hesitant` / **A Hesitant Ally**: not stand, contribution >= 40
- `observer` / **The Comfortable Observer**: other cases

The player separately chooses one final action:
- `clear`: Daniel challenges a customer's discriminatory remark and refuses unequal service. Bennett warns him.
- `consistent`: Daniel treats customers equally and resists quietly through routine conduct, despite the employer's prejudice.
- `comfort`: Daniel remains largely disengaged, protects his job, and at home Sarah asks whether he has really changed.

**Crucial:** the final action appears truthfully in Shot 3 *even if* it seems to contrast with the accumulated stat-derived outcome. An outcome class is the broader pattern; the final action is what happened that day. Do not claim he resisted publicly when he chose comfort or portray a clear-choice player as never challenging discrimination.

## Shared artistic rules

- Canvas: wide, painterly 16:9 plate with safe margins for subtitles on mobile; historical 1950s hardware/store and Carter home visual references; use approved Daniel, Sarah, Bennett and Thomas appearances.
- Motion: slow 2–4% push/pan, sunlight and shadow movement, scene dissolves, a bus drifting by outside the store; **no animated lips, talking faces, character walking rigs, or prerecorded cutscene video**.
- Player controls: Next, Back, Skip cinematic, Replay. Captions always readable and cutscene replayable; no autoplay audio; respect prefers-reduced-motion. Only propose voice-over later after asking the user for specific casting and narration preferences.
- Remembered visual in Shot 2 maps to the player's actual earlier actions: `ch1=agree/silent/question`; `ch2=refuse/quiet_sale/open_sale`; `ch3talk=listen/explain` where appropriate. Don't create a memory in which Daniel acted more courageously than the player did.
- Sarah relationship: high trust → attentive, comfortable proximity while acknowledging real economic fears; lower trust → visible concern and emotional distance but not hostility, separation, or invented reconciliation. Sarah is not a reward for "good" stats; she retains opinions and concerns whatever Daniel chooses.
- Bennett relationship: include Bennett as an employer and external source of pressure when the choice demands it. Avoid excessive focus on him elsewhere.
- Original written ending, relationship notes, complete historical afterword, sources, reflection and journal remain intact. Do not change game logic or saves.
- If caption lines were later voiced, **do not animate mouths**; the words can be presented as off-screen character narration with subtitles, with user approval of voices first.

---

## 07 — A VISIBLE STAND (`stand`)
**Feeling:** Determined but uncomfortable; public accountability, not a heroic victory.  
**Color:** Faded late-afternoon gold against the shop's cool window light.  
**Motif:** A counter that once separated Daniel from Thomas becomes a place where Daniel must decide what he will enforce.

### Shot 1 — The street moves forward
**Visual:** Wide interior of Bennett's Hardware on December 21. An integrated bus passes the store window. Daniel is behind the counter; Bennett remains at the edge or in the back, part of the familiar environment.  
**Camera:** Slow pan from the bus window to Daniel; faint shifting dust in a sunbeam.  
**Caption:** “The buses had changed. The store had not.”

### Shot 2 — What he learned to notice
**Visual:** Tight shot across Thomas's old place at the counter, a plain receipt, and a small remembered visual of Daniel's **actual** Chapter II decision. Dissolve briefly to the Carter home: **Sarah appears in the warm kitchen light**, opposite Daniel at the table. Neither character is speaking with an animated mouth; their posture shows a difficult, attentive conversation, not automatic agreement.  
**Camera:** Soft crossfade from receipt to home, then back to the present store.  
**Caption:** “Sarah had asked him to consider more than the safety of his own job.”

### Shot 3 — The day's choice
**Visual variations:**
- **`clear`:** Daniel visibly addresses a customer who has made a discriminatory remark; Bennett's disapproving posture signals possible job consequences.
- **`consistent`:** Daniel completes an equal, ordinary sale and declines to join a discriminatory remark; the action is quieter, not a speech.
- **`comfort`:** Daniel hesitates and returns to his duties. His accumulated outcome may reflect previous costly stands, but this day's choice is **avoidance**, shown without falsely turning it into a confrontation.
**Camera:** Medium-wide framing at counter height; subtle lateral drift.  
**Caption:** “Each new moment still asked something of him.”

### Shot 4 — Responsibility at home
**Visual:** Evening at the Carter family table. **Sarah is fully visible, seated across from Daniel**, with the household accounts between them. They occupy the same shot even if his Bennett/job conflict is unresolved. She appears as a participant with her own concerns, not an approving spectator. A small glimpse of the street through the window evokes the law's change beyond the home.  
**Camera:** 2% pull back from a restrained two-shot; lamplight brightens.  
**Caption:** “Making a stand did not end the responsibility to keep making one.”  
**Title:** **A VISIBLE STAND**  
**Transition:** Original full epilogue text and historical afterword.

---

## 08 — A HESITANT ALLY (`hesitant`)
**Feeling:** Incomplete progress, uncertainty, mixed motives.  
**Color:** Muted gray-blue store daylight; warm but complicated home lighting.  
**Motif:** An open doorway between the work he can leave behind and a conversation he cannot avoid.

### Shot 1 — A familiar routine
**Visual:** Wide view of the hardware counter; an integrated bus passes in the street and Bennett continues work in the background. Daniel pauses mid-task but the store remains unchanged.  
**Camera:** Nearly motionless 2% push toward the window.  
**Caption:** “The world outside had moved further than he had.”

### Shot 2 — Sarah refuses the easy answer
**Visual:** **Direct two-shot in the Carter kitchen**, revisiting their Chapter III conversation. Sarah faces Daniel, attentive but serious; the table carries dinner dishes and a newspaper about the boycott. Her expression conveys that she recognizes injustice **and** worries about what losing his wages would mean. Their physical closeness reflects saved `relationships.sarah`. A faint picture dissolve recalls whether Daniel chose to listen first or explain himself in that earlier talk.  
**Camera:** Slow over-the-table drift toward Sarah's half of the frame, rather than always centering Daniel.  
**Caption:** “Sarah believed the treatment was wrong. She also feared what speaking up could cost.”

### Shot 3 — The practical test
**Visual variations:**
- **`clear`:** Daniel makes a stronger objection than his earlier uncertain pattern might suggest; Bennett remains visible to underline the ongoing risk.
- **`consistent`:** Daniel completes a fair sale and resists an unfair remark without a public performance.
- **`comfort`:** Daniel retreats into his store routine, conscious of the unresolved question.
**Camera:** Medium shot that gently shifts between counter, customer and Daniel.  
**Caption:** “Recognizing unfairness was not the same as choosing what to do.”

### Shot 4 — An unfinished conversation
**Visual:** Return to the Carter kitchen at dusk. **Sarah and Daniel are both clearly visible in profile near the table**; no argument is being staged as a victory and there is no mouth animation. Sarah stays facing him while he looks toward the window; the composition conveys potential conversation and disagreement, not isolation or a neat resolution.  
**Camera:** Slight pullback followed by a quiet still hold.  
**Caption:** “He was changing. Whether that change would last was still uncertain.”  
**Title:** **A HESITANT ALLY**  
**Transition:** Original complete written epilogue.

---

## 09 — THE COMFORTABLE OBSERVER (`observer`)
**Feeling:** Subtle discomfort and passivity rather than punishment or melodrama.  
**Color:** Cooler daylight in the hardware store, subdued golden domestic light.  
**Motif:** The street beyond a window contrasted with a familiar interior where routines can continue unchanged.

### Shot 1 — Change passes the window
**Visual:** Wide store interior on December 21. Through the front window, an integrated bus passes. Daniel continues ordinary counter work; the camera lets the bus occupy more of the frame than Daniel.  
**Camera:** Very restrained static hold and slow bus-layer movement.  
**Caption:** “Montgomery's buses had changed. He could keep his day much the same.”

### Shot 2 — Choices already made
**Visual:** Counter receipt and remembered transaction with Thomas Reed, accurately representing the saved decision. Dissolve to **Sarah present at their dining table**, physically visible as she was during their conversations. A seat across from her is empty during the transition, making the domestic perspective matter rather than substituting a note.  
**Camera:** Crossfade from cool store tones to warm interior.  
**Caption:** “Sarah had asked what he truly believed. The question had not disappeared.”

### Shot 3 — Today's decision
**Visual variations:**
- **`clear`:** Daniel makes a clear objection **today** despite an overall history of limited contribution; the image must recognize this actual action.
- **`consistent`:** Daniel provides equal service, though his broader involvement remains limited.
- **`comfort`:** He lets the remark pass and protects his workplace routine. Bennett's satisfaction may be apparent without exaggeration.
**Camera:** Slow pan from shop window back to the counter.  
**Caption:** “A single choice could challenge a habit—or leave it untouched.”

### Shot 4 — The question waiting at home
**Visual:** Evening Carter kitchen. **Sarah is prominently shown opposite Daniel**; her posture suggests an unresolved question rather than condemnation. If the final choice was `comfort`, this directly reflects the existing story result where Sarah asks whether anything has really changed for him. For other final choices, show a quieter reckoning rather than incorrectly claiming he remained silent that day. A window occupies a corner of the image, linking home to the changed city outside.  
**Camera:** Almost entirely still, holding long enough for unease; very gentle fade to title.  
**Caption:** “The movement changed the law. It could not make his choices for him.”  
**Title:** **THE COMFORTABLE OBSERVER**  
**Transition:** Existing complete ending, documented history and reflection question.

---

## Sarah — production and continuity notes

Sarah is **visibly present in every Daniel ending**, but for a different dramatic reason:
- **Visible Stand:** The real personal cost and household consequences of choosing differently.
- **Hesitant Ally:** Her independent moral position and practical worries are central to his conflict.
- **Comfortable Observer:** Her presence prevents the ending from treating quiet disengagement as uncomplicated contentment.

Do **not** use Sarah as a moral prize or pretend she has to approve of Daniel's latest action. She knows segregation is wrong and worries about job and home security, as established in the existing Chapter III scene.

**Recommended art layers:** existing Bennett's Hardware painting, Carter kitchen painting, approved Daniel/Sarah/Bennett/Thomas portrait designs, optional wider cinematic compositions of the store and home. Maintain continuity with approved likenesses. A modest two-person still composition conveys the emotional influence without animated acting.

**Voices:** No decisions yet. Captions remain fully sufficient. Before considering voice-over for Sarah or Daniel, ask the user questions about both characters' voice ages, accent, emotional delivery, pacing and authenticity. No lip-sync animation.

## Status and next steps
- [x] Conceptual and exact four-shot drafts now exist for all **nine** endings (Evelyn 3, Marcus 3, Daniel 3).
- [x] Creative direction locked: miniature-movie, moderate motion, still illustrated people, no lip-sync.
- [x] User chose **Sarah directly on screen** over symbolic-only references; preserve her narrative agency.
- [ ] Review/approve Daniel's three complete storyboards (this document).
- [ ] Cross-review all nine storyboards for visual variety, era accuracy, and branching fidelity.
- [ ] Select reusable environments and approve any new scenic art before implementation.
- [ ] Ask user about voices if and when voiced narration becomes a real production task.
- [ ] After the nine final cutscenes are implemented, remind user about the **all-character dramatic opening cinematic before character selection**, coordinating with the tutorial.
