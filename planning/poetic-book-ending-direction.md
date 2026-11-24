# Poetic book-ending — creator decisions and prototype

**Status:** Creative pivot from illustrated character animations, November 23, 2026. One self-contained, working HTML/CSS/JS mockup is [here](https://bonniexu2030.github.io/the-power-to-change/preview/poetic-book-ending.html), saved as \`preview/poetic-book-ending.html\`. The main playable game is unchanged. **The mockup is not yet approved.**

## Final format selected by project creator

- All **nine stat-derived endings** should receive distinct, meaningful/poetic text.
- Aged cream vintage novel pages, hints of cursive/handwriting, detailed literary decorations and a handsome embossed cover.
- Short summary (paragraph or 3–4 lines) of the character's experience and outcome, followed by one meaningful, **historical public-domain quote** that acts like an extended reflective silver lining.
- Main body in readable elegant serif, the final quotation in a more elaborate handwritten/cursive font. Words reveal like ink; important words glow subtly, and the last **entire quote glows** before the book closes.
- Floral ornamentation plus small meaningful character motifs on each page; one template with **distinct character-related colors and symbols**, not nine unrelated animations.
- Book closes at the end and reveals the title **The Power to Change** on a dark, gold-embossed cover. Navy or brown leather both suit the user's choices.
- **Overall narrator only** (not individual character voices for this short task). Music/recorded narrator are optional future refinements; the **mockup is silent by default**, with a clearly labeled opt-in browser speech-synthesis test button, not a selected voice recording.
- This is the **absolute last emotional screen** at the end of the player's route, while archival sources, reflection, full epilogue, and journal remain elsewhere on the website and accessible.
- ~10–15 seconds, automatically runs, with pause/replay/skip and reduced-motion respect. Dramatic but calm and elegantly paced, reflective rather than saccharine.
- **User wanted a mockup before full implementation**: create and show one \`Finding Her Footing\` prototype and invite feedback. No changes to core game or endings until reviewed.

## Prototype content (provisional, not user-written)

**Existing game outcome:** Evelyn Brooks, *Finding Her Footing*.

**Sample original conclusion**:
> The buses began to change.  
> At home, the work of living went on.  
> Evelyn and Ruth faced tomorrow together,  
> with questions, courage, and hope.

**Documented historic quotation:**
> We are all bound up together in one great bundle of humanity.

— Frances Ellen Watkins Harper, from \`We Are All Bound Up Together\`, 1866; source: https://constitutioncenter.org/the-constitution/historic-document-library/detail/frances-ellen-watkins-harper-we-are-all-bound-up-together-1866 .

Both sample conclusion and historical quote selected for *prototype* only. The quote is **historical and public-domain**, not dialogue or a line spoken by Evelyn.

## Implementation review notes
- Single static HTML/CSS/JS file; no separate media or copyright-restricted audio files.
- Scripted page text and quote revealing, gold glow, hinged 3-D CSS book-closing, final centered navy cloth/leather-like gold title; optional temporary speechSynthesis, disabled by default.
- Keyboard controls, reduced motion, pause/replay/skip, responsive page CSS.
- All nine endings must share the common book component and retain the original \`finalEndingId()\` and stored saves.
- **Do not reintroduce rejected illustrated character cutscenes** into final endings.
- **After endings are done**, remind creator of the separate opening-cinematic idea but verify desired medium first (the previous painterly movement was rejected for endings).

## Review checklist
- [x] Gather creator's combined artistic decisions before generating mockup.
- [x] Build a single standalone preview and push to GitHub (no changes to game).
- [x] Validate page JS syntax and file in repository.
- [ ] Creator approves/changes visual style, pacing, text, final glow, book closing.
- [ ] Move from prototype to full game only with approval.
- [ ] Implement nine unique role/ending texts with creator review.
- [ ] Verify mobile, accessibility, 9 endings, saving and production deployment.
