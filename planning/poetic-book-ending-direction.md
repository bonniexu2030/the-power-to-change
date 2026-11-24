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

## Creator revision from antique-book reference — November 23, 2026

The creator **does not approve the first version** of the mockup. They supplied a photographic reference of antique embossed poetry book bindings with intricate gilt/floral decoration and requested:
- **Cover redesign:** richer, more traditional antique book styling with decorative botanical borders, worn burgundy/red-brown cloth tones and classic historical lettering; **not the original minimalist modern navy cover or font**.
- **Smooth closing:** earlier 3D leaf/backface close felt janky. The revised standalone preview now uses a longer eased hinge movement plus an **independent cover reveal**, blending away the folded pages to avoid a sudden flip/glitch.
- **No pictorial/graphic symbols:** removed the bus drawing, star divider, monogram and modern graphic symbols. Floral ornamentation remains because it is directly desired in the reference.
- **Quotation:** **reduce final-quote type size 15%** at desktop, tablet and mobile breakpoints. Keep the reflective Harper quotation and gentle glow.
- This update is a **second iteration, awaiting creator visual review**, not final approved gameplay.
- Source visual reference was attached by the creator in the conversation. The mockup uses editable SVG/CSS floral decorations to interpret that look; these are *not* exact image textures from the attachment.
- Preview continues to be `https://bonniexu2030.github.io/the-power-to-change/preview/poetic-book-ending.html`; no changes to main game and no final narration/music selected.

## Physical book-motion reference — latest revision (November 23, 2026)

**User's latest creative request:** simplify the cover by **removing the ornate/decorative botanical outline on the *front cover*** and keeping only **one clean square rectangular gold border** around the traditional antique book title. Keep the vintage burgundy cloth/aged binding feel and the reduced quote size. The user uploaded `istockphoto-1180809193-640_adpp_is.mp4` as a **motion reference**. The attached 15.3-second stock video shows the *continuous physical action of paper leaves fanning/settling into a book until a hard cover lays down*, then repeating. **The video is reference material only and was not copied or embedded into the site**.

**Animation refactor in the same standalone mockup:**
- Replaced the disconnected book-fade/cover-fade with **one physically attached front board**: the book's left leaf has a reverse-facing cover that turns around the shared spine with a smooth eased `rotateY` closure.
- Added **six small paper leaves** that rotate one after another to mimic the staggered fan visible in the supplied stock clip, before the heavier cover settles on them.
- Eliminated the separate floating cover overlay; the book shifts toward the center as it closes.
- Simplified front appearance to **one square rectangular gold border and historically styled lettering**; no floral border around the cover. Botanical page decorations remain, as the request concerned the *front cover*.
- Retained the warm paper pages, reflective quotation and 15%-smaller cursive quote; automatic animation now approximately **16 seconds**, with pause/replay/skip and reduced-motion controls.
- Source is editable HTML/CSS/JS in `preview/poetic-book-ending.html`; the playable game is still unchanged.

**QA limits:** Code syntax and exact DOM-style presence confirmed through GitHub. New animation is a hand-implemented simulation of the reference's feel, **not a frame-for-frame match or licensed reuse**, and awaits the creator's live browser review for smoothness. Browser screenshot/visual QA of the live revision has not yet been independently completed.

## Simplified full-screen parchment ending — creator's latest approved concept

The creator **rejected the book-closing animation entirely** after several drafts. Do not reintroduce a book/cover/page flip unless explicitly asked.

The creator selected:
1. **B**: antique parchment background with subtle, faint floral decorations.
2. **D**: understated, soft typewriter-like appearance of the ending summary.
3. **A + D**: summary fades out as a whole with a little blur.
4. **B**: final cursive quote fades in with a gentle glow.
5. **B**: quote lingers for about five seconds.
6. **C**: muted dusty rose, brown, antique cream palette.
7. **A**: summary text → fade out → historical quotation. **No separate opening title** on the stage.
8. **D**: sample role doesn't matter; the standalone preview uses Evelyn as placeholder.

**Production plan:** One full-screen parchment scene with SVG botanical decoration and vintage texture. Summary reveals quietly over ~4 seconds, lingers, then dims/blurs away. A smaller-than-first-draft cursive public-domain Harper quotation fades in and glows subtly, lingering ~5 seconds. No book props, character animation, or embedded stock video. Keep main gameplay unaffected.

**Implemented mockup:** `preview/poetic-book-ending.html` overwritten with the new HTML/CSS/JS version (same public GitHub Pages address). Includes silent automatic playback (~15 s), Replay, Pause, Skip to quote, and reduced-motion support. It is **not yet integrated into the game's nine endings** and awaits user's review.

**Historical quote:** Frances Ellen Watkins Harper, `We Are All Bound Up Together` (1866), source link embedded in preview; character summary is original draft, not from an archival source.

**Quality:** Verified repository contains correct markup and JavaScript syntax; GitHub Pages build to be checked. Browser screenshot/visual review from actual user is still outstanding.
