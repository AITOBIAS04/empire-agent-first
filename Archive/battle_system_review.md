**COSMIC PRINCIPLES**

Battle System Specification

Version 2.1 — Patch/Compile + Creature Autonomy

Status: **Locked for Development**  |  January 2026

| PATCH TO COMPILE. CATCH THEIR CHARGE, IT GETS BLOCKED. MISTIME IT, YOU LOSE OFFENCE. |
| --- |

# Battle Design Goals

Roblox-simple inputs, high skill ceiling: tap, two charge buttons, swap, patch

90–120 second average match length; Entropy prevents stall metas

Hot Potato integration from day one: Unstable Copies create risk and reward

Readable counterplay: type matchups + patch timing + swap tempo decide outcomes

Creature autonomy as innovation: commander, not puppeteer

## What Makes This Different From Pokémon Go

Pokémon Go’s shields are reactive — you see a prompt when a charge move is incoming and decide whether to block. Our Patch/Compile system is proactive — you choose when to stabilise, and if you time it into their charge move, you get the block. This rewards battlefield reading over reaction speed.

Additionally, creatures have autonomy. They have tendencies based on their archetype that influence how they behave after you make decisions. You’re negotiating with your team, not puppeteering them.

# Battle Format

## Team Structure

3 creatures per player

1 active at a time

Win condition: defeat all 3 enemy creatures

## Core Resources (Player-Facing)

Players track only three things:

| Resource | Function |
| --- | --- |
| HP | Creature health. Reduced by attacks and Entropy. Hits 0 = KO. |
| Energy | Built by Fast Moves. Spent on Charge Moves. |
| Patches (2) | Activate to enter Compile state. Blocks charge if timed correctly. |

**Important: **Combat HP is separate from Integrity (the Hot Potato meter). Integrity governs breeding/trading/decay. HP is moment-to-moment battle health.

# Core Combat Loop

## Fast Moves

Tap to attack

Deals damage and builds Energy

Each creature has 1 Fast Move

Turn duration: 1–3 taps (varies by move speed)

## Charge Moves

Each creature has 2 Charge Moves: one cheap (Bait), one expensive (Finisher)

Spend Energy to fire

Bait moves force Patch decisions; Finishers punish bad Patch usage

Mastery tiers (from training) improve efficiency or add secondary effects

## Charge Move Design (Bait + Finisher)

| Type | Energy Cost | Purpose |
| --- | --- | --- |
| Bait | Low (35–45 energy) | Force opponent to Patch early or take chip damage |
| Finisher | High (55–75 energy) | Punish opponents who burned Patches on baits |

## Switching

Swap to a different creature from your team of 3

Swap cooldown: 10 seconds

Some creatures have switch-in effects (e.g., reduce enemy energy gain briefly)

Cannot swap while Compiling

# The Patch/Compile System (Locked)

This is the signature defensive mechanic that replaces reactive shields with proactive stabilisation.

## Core Rules

| Rule | Detail |
| --- | --- |
| Patches per battle | 2 |
| Activation | Player can activate at ANY time (proactive, no prompt) |
| Compile duration | 4 seconds |
| During Compile | Entropy paused, Fast Move damage reduced 50%, cannot attack/swap |
| Charge into Compile | Charge Move is BLOCKED (0 damage) and Compile ENDS immediately |

## Why “Charge Ends Compile” Matters

This single rule preserves the bait/finisher mind games:

If opponent fires a Bait into your Compile, they “pop” your Patch cheaply

If you Compile expecting a Finisher but they hold, you’ve lost 4 seconds of offence

If you read correctly and block their Finisher, massive value

The skill expression is in reading your opponent, not reacting to a prompt.

## Anti-Abuse Constraints (Non-Negotiable)

No swapping during Compile: prevents Compile → swap → reset tempo stalling

Charge block ends Compile: prevents Compile from being a universal safe zone

Only 2 Patches: forces genuine resource management

## Visual Design

Compile should be instantly readable:

Creature shows clear “shielded” visual (cube-shell forming, code compiling animation)

Single icon: COMPILE: DEFENCE ON

No numbers displayed — players see the state, not the math

# Entropy Pressure (The Anti-Stall Clock)

Entropy is constant HP decay that prevents matches from stalling. It creates urgency and rewards aggression.

## Entropy Clock (Locked Numbers)

| Phase | Time Window | Decay per Tick |
| --- | --- | --- |
| Phase 1 | 0–45 seconds | −1% max HP |
| Phase 2 | 45 seconds+ | −3% max HP |

**Entropy Tick: **Every 5 seconds

This naturally ends matches around 90–120 seconds. Phase 2 creates “sudden death” pressure that punishes passive play.

## Type Interactions with Entropy

| Principle | Entropy Interaction |
| --- | --- |
| Void | Takes 50% less Entropy damage (passive). Tanks in long fights. |
| Nature | Can pause Entropy for 1 tick via specific move effect (active, costs energy). |

## Compile and Entropy Interaction

During Compile, Entropy is completely paused. This is the only in-combat way to stop the clock (besides Nature’s move). It means Patches have defensive value even when no charge move is incoming — you’re buying time against the decay.

# Creature Autonomy (Innovation Layer)

This is the signature differentiator. Creatures are not blank slates — they have behavioural tendencies based on their archetype. You are a commander giving guidance, not a puppeteer controlling every action.

## Core Principle: Bias, Not Betrayal

For MVP, autonomy affects post-decision behaviour, not the decisions themselves. The player still triggers Patch, still chooses which Charge Move to queue. The creature’s archetype influences what happens after.

## Archetype Behaviours (Locked)

| Archetype | Combat Tendency | Player Role |
| --- | --- | --- |
| Shark | Dumps energy aggressively after Compile ends. Prioritises damage. | Guide timing. Know when aggression is right. |
| Diplomat | Holds energy after Compile. Waits for opponent to commit first. | Choose deployment moment. Protect carries. |
| Saboteur | Prioritises Bait moves over Finishers. High variance choices. | Embrace chaos. Use when behind or desperate. |
| Spy | Delays charge until detecting opponent used Patch recently. | Read opponent. Signal and respond. |

## What Autonomy Does NOT Do (MVP)

Creatures do NOT randomly change Compile duration

Creatures do NOT refuse player commands

Creatures do NOT auto-Patch without player input

Autonomy creates texture in how creatures execute your strategy, not whether they follow it. “My Shark went aggressive after Compile” is interesting. “My Shark ignored my Patch” is frustrating.

## Future Autonomy (Post-MVP)

Later iterations could add opt-in “Autopilot” settings where creatures make more independent decisions. But MVP keeps player agency primary.

# Type System in Combat

## Primary Principle + Secondary Domain

Each creature has:

1 Primary Principle: Order, Chaos, or Nature (the core triangle)

1 Optional Secondary Domain: Arcane, Void, Artifice, or Spirit (expanded types)

MVP can ship with Primary Principles only. Secondary Domains add depth post-launch.

## Damage Multipliers (Simple)

| Matchup | Multiplier | Meaning |
| --- | --- | --- |
| Strong | 1.4x damage | Your type beats theirs |
| Neutral | 1.0x damage | No advantage |
| Weak | 0.7x damage | Their type beats yours |

## The Foundation Triangle

Order beats Chaos (structure binds randomness)

Chaos beats Nature (unpredictability disrupts balance)

Nature beats Order (entropy erodes structure)

# Hot Potato Battle Integration

## Patch Components (Battle-Earned Stabilisation)

Players can earn stabilisation materials through battle skill:

**Rule: **Patch Components drop when you win after deploying an Unstable Copy at least once.

### Implementation Requirements

Track boolean per match: unstable_fielded = true when Unstable Copy enters combat

Award Patch Components only if: match_win AND unstable_fielded AND Integrity > 0 at deployment

Daily cap prevents exploit loops (suggested: 10 per day)

### Patch Kit Path

Patch Components combine into Patch Kits. Patch Kits are an alternative to Bits for the Extract action:

Extract costs: Cycles + (Bits OR Patch Kit)

This gives skilled battlers a non-currency path to stabilisation

## Paradox Battle Hazards

Using Unstable Copies in battle increases the chance of a Paradox hazard spawning:

### Hazard Trigger

Base chance: 5% per Unstable Copy fielded

Increased during active Paradox Events for that lineage

Triggers once per match maximum

### Hazard Effect (MVP: One Type Only)

**Rift Pulse: **Both players lose 15 energy over 6 seconds. Telegraphed 2 seconds before activation.

This is readable, affects both sides equally, and integrates with the energy/charge economy.

### Hazard Reward

Surviving the match after a hazard triggers: +1 Patch Component

This ties battle mastery directly to stabilisation

# Stats in Combat

Your four trainable stats (Stability, Processing, Bandwidth, Latency) map to combat effects:

| Stat | Combat Effect | Build Identity |
| --- | --- | --- |
| Stability | Increases max HP, reduces Entropy damage taken | Tank |
| Processing | Increases Fast Move damage and energy gain | Tempo/Farm |
| Bandwidth | Increases Charge Move damage | Burst/Nuke |
| Latency | Reduces swap cooldown, priority on simultaneous charges | Pivot/Skill |

Stats create build identity without requiring players to do combat math. A high-Stability creature feels tanky. A high-Processing creature farms energy fast. Players experience the difference without calculating it.

# MVP Battle Checklist

Engineering deliverables for battle system v1:

## Core Combat

Combat state machine: 3v3, 1 active, swap, KO transitions

Fast Move tap loop + energy generation

Two Charge Moves per creature + energy costs

Patch/Compile system: 2 patches, 4s duration, charge-block-ends-compile

Swap cooldown (10s) + no-swap-during-compile

## Entropy

Entropy tick every 5 seconds

Phase 1 (0–45s): −1% HP per tick

Phase 2 (45s+): −3% HP per tick

Void: 50% entropy resistance (passive)

Nature: entropy pause move effect

## Hot Potato Integration

unstable_fielded boolean tracking

Patch Component reward on win (with daily cap)

Paradox hazard trigger (Rift Pulse)

Hazard reward: +1 Patch Component

## Creature Autonomy (MVP Scope)

Archetype tag per creature (Shark/Diplomat/Saboteur/Spy)

Post-Compile behaviour bias based on archetype

Charge Move selection bias based on archetype

# Battle System Summary

| Retained from Pokémon Go | Our Innovation |
| --- | --- |
| Fast Move → Energy → Charge Move loop | Patch/Compile: proactive defence with reactive reward |
| Bait + Finisher mind games | Entropy Clock: constant pressure, no stalling |
| Team of 3, switching matters | Creature Autonomy: bias, not betrayal |
| Type advantages drive swaps | Hot Potato integration: Unstable = risk + reward |

| STATUS: LOCKED FOR DEVELOPMENT Patch/Compile replaces reactive shields. Entropy creates urgency. Autonomy creates texture. |
| --- |
