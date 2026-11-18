# The Power to Change — Illustrated Scene Master Plan

## Goal
Every playable chapter opens its illustrated conversation as the primary storytelling medium. When the scene ends (or is skipped), players return directly to **the existing choice prompts**. The original decisions, relationship and stability changes, archive requirements, journal, results, endings, and storage identifiers remain in the underlying game.

## Complete scene map

| Role / chapter | Historical moment | Dialogue and visual purpose | Scene asset | Source |
| --- | --- | --- | --- | --- |
| Evelyn I | Dec. 4, 1955 | Evelyn and Ruth debate justice, wages, and practical support; Lottie offers help | Brooks kitchen | New |
| Evelyn II | Dec. 15, 1955 | Evelyn and Lottie confront uncertain rides and employer pressure | Brooks kitchen | New |
| Evelyn III | Feb. 23, 1956 | Ruth asks about the threats; Evelyn and Lottie weigh family against neighborhood needs | Brooks kitchen | New |
| Evelyn IV | Nov. 13, 1956 | Good legal news collides with the stopped carpool; Ruth asks what victory means | Brooks kitchen | New |
| Evelyn V | Dec. 20, 1956 | Evelyn and Ruth discuss the boycott ending | Brooks kitchen | Existing |
| Marcus I | Dec. 3, 1955 | Marcus and David consider leaflet distribution and education | Marcus's room | Existing |
| Marcus II | Dec. 15, 1955 | Marcus and David discuss sustaining rides and community work | Meeting | Existing |
| Marcus III | Feb. 24, 1956 | Marcus and David weigh the increased risks and pressures | Campus | Existing |
| Marcus IV | Nov. 13, 1956 | Marcus and David react to the legal ruling and carpool halt | Marcus's room | Existing |
| Marcus V | Dec. 20, 1956 | Marcus and David consider their roles after the boycott | Marcus's room | Existing |
| Daniel I | Dec. 3, 1955 | Daniel faces Bennett's reaction to the bus boycott | Hardware store | Existing |
| Daniel II | Dec. 15, 1955 | Thomas asks to buy supplies for volunteer transport; Bennett objects | Hardware store | New |
| Daniel III | Feb. 24, 1956 | New illustrated prelude before an interactive exchange; existing Daniel and Sarah conversation follows the selection | Carter home | Both |
| Daniel IV | Nov. 13, 1956 | Bennett challenges Daniel as the Supreme Court upholds the ruling | Hardware store | New |
| Daniel V | Dec. 21, 1956 | Daniel encounters integrated buses and faces his own responsibilities | Hardware store | New |

## How the integration works

- `game.js` keeps all original story data, choice buttons, state changes, saved progress, and scene results; it launches an illustrated iframe before enabling decisions.
- `vn-new-scenes.js` provides eight new scripts, including Daniel III's prologue. Earlier chapter selections add contextual lines where the previous decision matters.
- `vn-new.html` displays those scripts using approved character portraits and matching clean backgrounds. Back, Continue, Skip, keyboard navigation, and reduced-motion support are built in.
- Eight original illustrated pages are reused unchanged, retaining their existing branching and dialogue behavior.
- An old save can resume: historical `...vnSeen` fields still count as completed, and the new `illustratedSeen` field tracks other chapters and Daniel's extra prologue.
- The illustrated scene plays by default on arrival, with a replay button left on the chapter screen afterward. Closing/skipping unlocks the original choices but does not make any decision on the player's behalf.

## Test and review checklist

1. Run `node --test tests/illustrated-conversion.test.cjs` to verify all 15 chapter mappings, 10 cast identifiers, scenes and save-key wiring.
2. Run the GitHub Actions workflow `Full illustrated dialogue regression`, which also uses Chromium/Playwright to start and skip every chapter.
3. Manually inspect every scene at both desktop and phone widths, especially portrait placement and dialogue readability.
4. Test real decisions: the Marcus II preliminary ride option, each Chapter III preliminary conversation, and the required Chapter IV court file.
5. Resume a saved character and switch perspectives, confirming choices and journal contents do not reset.
6. After reviewing the draft PR, merge only if the dialogue, art, branching, accessibility and browser tests look correct.

**Historical note:** The protagonists and their exchanges are original fictional characters; archival dates and documented court outcomes remain separate from invented dialogue.

Backup branch: `backup/before-full-visual-novel-2026-11-18`. Feature branch: `feature/full-illustrated-dialogue-15-scenes`.
