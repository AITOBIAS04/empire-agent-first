**COSMIC PRINCIPLES**

Roblox Game Design Document

Version 2.0 — Hot Potato Economy

Status: **Locked Design**  |  January 2026

| STOLEN GOODS ARE HOT. COOL THEM DOWN OR THEY BURN UP. |
| --- |

# Executive Summary

Cosmic Principles is a creature collection game for Roblox where creatures are living code, capture is compilation, and your collection is a living genealogy that evolves across generations.

This document locks the core economy design: the Hot Potato system. Raiding copies genetic data from other players, but copied genetics are unstable and decay over time. Players must choose to stabilise their copies (spending resources), use them quickly, or trade them to others. When too many copies of a rare lineage exist, a Paradox Event triggers, accelerating decay and creating high-stakes moments.

The result is an economy that self-regulates: the more people raid a rare lineage, the more expensive it becomes to maintain stolen goods. No complex fragment counts or fidelity scores — just one visible meter and clear choices.

## The Core Loop

**HATCH → TRAIN → BATTLE → BREED → RAID → STABILISE → TRADE → REPEAT**

## Roblox Inspirations (Adapted)

| Source | Mechanic | Our Implementation |
| --- | --- | --- |
| Adopt Me! | Egg hatching, pet care | Data Core incubation with care tasks |
| Blox Fruits | Stat levelling, rare fruits | Stat training by use, Protocols from Paradox |
| Steal a Brainrot | PvP theft, base defence | Raid for unstable genetic copies (Hot Potato) |
| Grow a Garden | Weather mutations | Environmental breeding mutations + Paradox Events |

# Part 1: The Hot Potato Economy

This is the signature mechanic that governs raiding, breeding, and trading. It replaces all fragment/fidelity complexity with one visible meter and clear player choices.

## 1.1 Core Concept

When you raid another player’s Codex, you copy genetic data from their Gene Bank. The victim keeps their originals — nothing is stolen. However, the copy you receive is unstable.

**The Rule: **Copied genetics decay over time unless you spend resources to stabilise them.

## 1.2 The Integrity Meter

Every genetic record (creature data in your Gene Bank) has an Integrity value from 0 to 100. This is the only number players need to understand.

| Integrity | Status | Effect |
| --- | --- | --- |
| 100 | Stable | Full functionality, no decay, safe from Corrupt |
| 40–99 | Unstable | Usable normally, decaying passively |
| 20–39 | Critical | Warning state, UI turns orange, decay continues |
| 1–19 | Failing | UI turns red, cannot breed, limited battle use |
| 0 | Collapsed | Cannot breed/trade, becomes Glitched Relic (display only) |

## 1.3 Decay Rules (Locked Numbers)

Raid creates Unstable Copy at 60 Integrity

Base decay: −5 Integrity per hour

During Paradox Event: −15 Integrity per hour for affected lineage

Collapsed copies become Glitched Relics (not deleted — collector value preserved)

## 1.4 Player Choices (The Hot Potato)

When you receive an Unstable Copy, you have three options:

| Choice | What You Do | Outcome |
| --- | --- | --- |
| EXTRACT | Spend Cycles + (Bits OR Patch Kit) | Copy becomes Stable (Integrity 100) |
| USE NOW | Battle or breed before decay | Risk it for quick value, offspring inherit instability |
| TRADE | Pass to another player | They inherit the decay timer (hot potato passed) |

# Part 2: Raiding System

## 2.1 The Codex Structure

Every player has a Codex (home base) containing:

Active Slots (3–5): Creatures deployed for battle

Storage Vault: Unlimited creature storage (safe from raids)

Gene Bank: Extracted genetic data (raidable target)

## 2.2 Raid Flow

Launch Raid: Select a target player’s Codex (matchmaking by power level)

Breach Defence: Battle their defensive creatures (AI-controlled or live if online)

Victory Screen: Choose your reward action

Escape Window: Defender gets notification and limited time to counter-raid

## 2.3 Raid Actions (Copy vs Corrupt)

On victory, the raider chooses one action:

| Action | Effect | When to Use |
| --- | --- | --- |
| COPY | Take Unstable Copy of target’s genetics (Integrity 60) | You want the creature/lineage for yourself |
| CORRUPT | Reduce Integrity of target’s Unstable Copies by 10 | Force rival to spend resources stabilising |

## 2.4 Corrupt Rules (Locked)

Corrupt is the sabotage mechanic. To prevent griefing, it has hard constraints:

Paradox-Only: Corrupt is only available during an active Paradox Event for that lineage

Unstable-Only: Can only target Unstable Copies, never Stable copies or originals

Non-Destructive Floor: Cannot push Integrity below 20 (creates urgency, not deletion)

Rate-Limited: Costs Rift Charge (event currency), max 3 uses per player per event

Per-Target Cooldown: Cannot hit the same player twice within 10 minutes

**Counterplay: **Defenders can spend a small amount to Shield a specific Unstable Copy for the event duration, or Extract to stabilise and become immune.

## 2.5 Anti-Griefing Protections (Non-Negotiable)

Raid Shield: 30 minutes protection after being raided

Counter-Raid Shield: Additional 15 minutes after counter-raiding

Diminishing Returns: 1st raid on same target/day = 100% rewards; 2nd = 50%; 3rd+ = 0 genetics (minor Bits only)

Sanctuary Servers: Opt-in servers with no raiding enabled

# Part 3: Paradox Events

Paradox is the economy’s self-policing mechanism. It emerges when the gap between what players claim (through raiding) and what the system can sustain grows too wide.

## 3.1 What Triggers Paradox

For each Lineage Signature (a specific rare genetic line), the server tracks:

Count of Unstable Copies created in the last 24 hours

Total Unstable Copies currently active across all players

When either threshold is exceeded, a Paradox Event triggers for that lineage.

**Example: **The Void Dragon lineage gets raided 50 times in 6 hours. Server announces: ‘Void Dragon line destabilising — Paradox imminent.’

## 3.2 What Happens During Paradox

A Paradox Event lasts approximately 20 minutes and affects only the triggered lineage:

Decay Acceleration: Unstable Copies of that lineage decay at −15/hour (3x normal)

Extract Cost Increase: Stabilising costs 25% more Cycles

Corrupt Enabled: Players can use Corrupt actions during the event

Battle Hazards: Fielding that lineage in battle has increased Paradox spawn chance

Protocol Drops: Event milestones reward Protocol Keys

## 3.3 Paradox Rewards (Exposure-Gated)

Paradox Events are the primary source of Protocols (rare evolution unlocks). However, rewards require exposure to risk:

**Exposure Rule: **You only earn Protocol Keys if you field at least one Unstable Copy of the event lineage in battle during the event, or complete an event objective while carrying unstable genetics.

This prevents ‘spawn event, print Protocols’ farming. You want Paradox, but you’re also holding the hot potato.

## 3.4 Protocol Keys (Not Shards)

Protocol Keys are deterministic tokens earned from Paradox milestones:

Complete the Rift objective: 1 Protocol Key

Complete 3 event objectives: Bonus Protocol Key

Win battle with Unstable Copy actively fielded: Bonus Protocol Key (once per day)

Protocol Keys unlock alternate evolution branches or Tier-4 signature ability variants. They are earned through participation, not purchased through randomised rolls.

## 3.5 Lineage Cooldown

After a Paradox Event ends, that lineage cannot trigger another Paradox for 6 hours. This prevents coordinated farming and encourages collection diversity.

# Part 4: Battle Integration

## 4.1 Core Combat (Pokémon Go Foundation)

Battles retain the proven Pokémon Go framework:

Fast Moves: Tap to attack, builds energy, 1–5 turn duration visible

Charge Moves: Spend energy for powerful attacks, mastery tier bonuses apply

Shields: 2 per battle, block charge moves, type-matched shields stronger

Switching: Swap creatures with cooldown, switch-in effects per creature

## 4.2 Entropy Pressure

Every turn, both creatures lose Stability. This decay accelerates over time:

Turns 1–10: 1% Stability loss per turn

Turns 11–20: 2% loss per turn

Turns 21+: 5% loss per turn (critical entropy)

Void creatures take 50% less entropy damage; Nature creatures can temporarily halt decay.

## 4.3 Patch Components (Battle-Earned Stabilisation)

Players can earn stabilisation materials through battle skill, not just currency:

**Rule: **Patch Components drop when you win a battle after deploying an Unstable Copy at least once.

Implementation details:

Track boolean per match: unstable_deployed = true when Unstable Copy enters combat

Award Patch Components only if: match_win AND unstable_deployed AND copy Integrity > 0 at deployment

Daily cap prevents exploit loops

Patch Components combine into Patch Kits, which are an alternative to Bits for the Extract action.

## 4.4 Extract Cost Structure

| Component | Option A (Grind) | Option B (Battle) |
| --- | --- | --- |
| Base Cost | Cycles (always required) | Cycles (always required) |
| Variable Cost | Bits | Patch Kit |

This gives players two paths: currency grinders pay Bits; skilled battlers earn Patch Kits through victories.

## 4.5 Paradox Battle Hazards

Using Unstable Copies in battle slightly increases the chance of a Paradox hazard spawning mid-fight:

Hazard Effect: Neutral anomaly that drains shields/energy from both sides

Hazard Reward: Defeating or surviving the hazard drops a stabilising Patch Component

This ties the battle loop directly to the Hot Potato economy.

# Part 5: Breeding & Genealogy

## 5.1 The Splice Mechanic

Breeding is code-splicing: merging two creature codebases to fork a new genetic line. Offspring inherit traits from both parents.

## 5.2 Stability Inheritance

The Hot Potato spreads through breeding:

| Parent Status | Breeding Cost | Offspring Integrity |
| --- | --- | --- |
| Both Stable | Normal (Cycles only) | Stable (100) |
| One Unstable | Normal + mutation chance | Starts at parent’s Integrity −20 |
| Both Unstable | Normal + high mutation chance | Starts at lower parent’s Integrity −30 |

## 5.3 Environmental Mutations

Weather and server conditions during breeding affect mutation outcomes:

| Condition | Effect | Mutation Type |
| --- | --- | --- |
| Solar Flare | Chaos principle boosted | Unstable variants, higher Processing stat |
| Network Storm | Arcane principle amplified | Enhanced abilities, glitch aesthetics |
| Void Eclipse | Void mutations possible | Shadow variants, entropy resistance |
| Genesis Bloom | Nature principle dominant | Rapid growth, regeneration traits |
| Stability Lock | Order principle guaranteed | Perfect inheritance, no variance, higher cost |

## 5.4 Genealogy Tracking

Every creature maintains a full family tree viewable in their data profile:

Lineage Depth: How many generations can be traced (valuable for traders)

Founder Tags: Original discoverers get permanent credit

Pedigree Bonuses: Prestigious lineages gain small stat buffs

Genetic Markers: Visual indicators of rare mutation history

Generation Tags: Raided copies show Gen 2, Gen 3, etc. in lineage view

# Part 6: Protocols

Protocols replace the ‘Blox Fruits’ fantasy with something that fits the creatures-as-code fiction and rewards skill over luck.

## 6.1 What Protocols Are

Protocols are installable code modules that:

Unlock an alternate evolution branch (e.g., Void Phase variant instead of standard v3)

Add a signature modifier to an ability set

Enable Apex evolution requirements

## 6.2 How Protocols Are Earned

Protocols come from participation, not purchase:

Paradox Events: Primary source (exposure-gated, see Part 3)

Boss Milestones: Defeat progression bosses

Exploration Gates: Complete zone challenges

Genealogy Achievements: Breed specific lineage combinations

**Design Principle: **If anything is ever sold for Robux, it must be deterministic (e.g., ‘Protocol Scanner’ revealing event locations), never ‘pay to roll a random Protocol.’

## 6.3 Protocol Mastery

Installing a Protocol doesn’t instantly grant power. Like abilities, Protocols have mastery tiers unlocked through use:

Tier 1 (Install): Base Protocol effect

Tier 2 (100 uses): Reduced activation cost

Tier 3 (500 uses): Enhanced effect

Tier 4 (1000 uses): Signature variant with unique visual

## 6.4 Apex Evolution Requirements

The highest evolution tier (v3 → Apex) requires multiple conditions:

High stat XP (all four stats above threshold)

Catalyst item (type-specific)

Lineage condition (e.g., must descend from Void Eclipse marker)

Protocol component (specific Protocol installed and mastered)

Location/weather condition (breed or evolve during specific event)

This creates a long-term prestige chase that rewards dedication over luck.

# Part 7: Economy & Trading

## 7.1 Currency Structure

| Currency | Source | Primary Use |
| --- | --- | --- |
| Bits | Battles, quests, daily login | Basic items, fast travel, Extract (Option A) |
| Cycles | Breeding, evolution, weekly challenges | Breeding, evolution catalysts, Extract (base cost) |
| Flux | Premium (Robux), rare drops, events | Prime Cores, cosmetics, Codex locks |
| Rift Charge | Paradox Event participation only | Corrupt actions, event objectives |

## 7.2 Trading Rules

Trade Window: Both players see full creature stats, lineage, Integrity, and traits before confirming

Trade Lock: New creatures have 24-hour trade cooldown (prevents rapid flipping)

Value Indicator: System shows estimated rarity/value to prevent scams

Integrity Visible: Buyers see exact Integrity and decay rate before accepting

Protocol Key Lock: Newly earned Protocol Keys locked for 24 hours

## 7.3 Why the Economy Self-Regulates

The Hot Potato system creates natural scarcity pressure without artificial limits:

Raiding is free, but maintaining stolen goods costs resources

Popular lineages trigger Paradox, making hoarding expensive

Unstable copies decay, creating constant demand for stabilisation materials

Trading passes the hot potato — buyers inherit decay timers

Collapsed copies become Glitched Relics (collector floor, not deletion)

**Result: **The more a rare lineage is raided, the more expensive it becomes to hold. The market self-corrects.

# Part 8: MVP Scope

The minimum implementation to validate the Hot Potato thesis:

## 8.1 MVP Features (Build First)

Codex + Gene Bank: Storage for creatures and genetic data

Raid System: Copy genetic data, Unstable Copy creation at Integrity 60

Integrity Decay: −5/hour base decay, visible meter

Extract Action: Spend Cycles + Bits to stabilise

Battle System: Pokémon Go-style combat with Entropy Pressure

Patch Components: Battle-earned stabilisation (Unstable Copy fielded requirement)

Paradox Event v1: One lineage, accelerated decay, Protocol Key drops

Protocol v1: One Protocol unlocking an alternate evolution branch

Trading: Full visibility of Integrity/lineage before trade

## 8.2 Post-MVP (Layer After Validation)

Corrupt mechanic (Paradox-only, Unstable-only, rate-limited)

Multiple Paradox Events running simultaneously

Full Protocol library with mastery tiers

Environmental breeding mutations

Genealogy prestige system (Founder bonuses)

Sanctuary servers (opt-out of raiding)

## 8.3 Success Metrics

Raid frequency vs Extract frequency (should stabilise, not runaway)

Average Integrity at trade (healthy = 40–60, not 90+)

Paradox Event participation rate (target: 60%+ of active players)

Protocol Key earn rate vs Protocol install rate (validates exposure gating)

# Design Principles Summary

| Core Values | Avoid |
| --- | --- |
| Simple UI (one meter, traffic-light colours) | Complex fragment/fidelity systems |
| Raiding feels like winning (you got the thing) | Raiding feels punishing (your base gets worse) |
| Victims don’t lose originals | Deletion or permanent loss from raids |
| Self-regulating economy (Paradox as governor) | Artificial caps or admin intervention |
| Skill expression (battle-earned Patch Kits) | Pure RNG or pay-to-win |
| Collapsed = Glitched Relic (floor, not deletion) | Rage-quit moments from total loss |
| Corrupt as competitive event mechanic | Ambient griefing outside Paradox |

| STATUS: LOCKED FOR DEVELOPMENT This document represents the canonical design. Changes require explicit unlocking. |
| --- |
