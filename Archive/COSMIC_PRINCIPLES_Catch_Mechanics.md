# Cosmic Principles: Catch Mechanics Design Document

**Document Version:** 1.0  
**Status:** DRAFT FOR REVIEW  
**Date:** January 25, 2026

---

## Executive Summary

This document defines the capture mechanics for Cosmic Principles, bridging the gap between exploration and collection. The design philosophy centers on **meaningful choice over complexity**: players encounter creatures and must decide whether to **Harness** (permanent upgrade) or **Capture** (limited slots, tradeable, battle-ready). The capture device—**The Cache**—uses a magnetic probe system with a red/orange/green visual gauge that conveys capture probability without numbers.

The capture system integrates with the broader "creatures as living code" mythology, treating each capture as a **Compile** operation and each harness as a **Function Copy**. This maintains thematic consistency while delivering the satisfying "throw → tension → success" loop that makes Pokémon Go compelling.

---

## Part 1: Core Design Philosophy

### 1.1 The Catch Philosophy

| Principle | Implementation |
|-----------|----------------|
| **Elegance over Complexity** | Single capture action, visual gauge instead of percentage calculations |
| **Meaningful Choice** | Harness vs. Capture creates permanent decision pressure |
| **Thematic Consistency** | All mechanics treated as code operations (Compile, Copy, Inject) |
| **Child-Friendly** | No creature death; harness temporarily drains, capture stores |
| **Slot Scarcity** | 3-5 capture slots create collection pressure without inventory bloat |

### 1.2 The Problem with Pokémon Go's Catch System

Pokémon Go's capture mechanics are simple but lack player agency:

- **Random capture chance** based on capture power vs. creature catch rate
- **Berry + Ball + Curve = higher chance** (optimized, not strategic)
- **No permanent consequence** for capturing vs. not capturing
- **Hoarding is always optimal** (unlimited storage)

### 1.3 Our Innovation: The Choice Loop

Players encounter a rare Void-touched creature:

**Question:** "Do I harness it for permanent entropy resistance, or capture it for trade/battle?"

**Consequence:** 
- **Harness:** You gain a permanent suit upgrade, but the creature respawns elsewhere (weakened)
- **Capture:** You store the creature (limited slots), but you sacrifice an upgrade slot permanently

**This creates the hard choices you want.**

---

## Part 2: The Capture Device — "The Cache"

### 2.1 Physical Design

The Cache is a **palm-sized metallic cube** with the following features:

| Component | Visual Description | Function |
|-----------|-------------------|----------|
| **Core** | Glowing center (color changes based on creature type) | Houses the compiled creature/code |
| **Edges** | Subtle circuitry patterns that glow when active | Indicates device status |
| **Sensor Ring** | Thin LED ring around the perimeter | Shows capture gauge (red→orange→green) |
| **Probe Port** | Hidden compartment on one face | Launches magnetic probe |

**Toy Reference:** The Cache should feel like a premium tech gadget—cool to the touch, slightly weighted, satisfying click when opening.

### 2.2 The Probe Mechanism

Instead of throwing the entire Cache, players launch a **magnetic probe**:

1. **Aim** (15-20 second aim window, locks onto creature)
2. **Fire** (probe launches toward creature)
3. **Attach** (probe magnetically locks to creature's "code signature")
4. **Gauge** (red→orange→green indicates capture probability)
5. **Result** (success = compile; failure = probe returns)

**Why This Works:**
- **Tactile:** The aim-and-fire feels like using a real device
- **Visual:** The color gauge is instantly readable (no numbers)
- **Thematic:** The probe "locks onto" the creature's code signature
- **Child-Friendly:** No balls bouncing; the probe always returns

### 2.3 Cache Upgrades (Exploration Device Progression)

The Cache is part of the larger **Exploration Device** system. Upgrades improve capture effectiveness:

| Upgrade Tier | Name | Effect | Unlock Requirement |
|--------------|------|--------|-------------------|
| **Base** | Prototype Cache | Standard probe speed and range | Starting equipment |
| **Tier 1** | Stabilized Lens | Faster gauge fill (faster capture) | Collect 10 creatures |
| **Tier 2** | Multi-Band Receiver | Reduced capture resistance | Reach Level 10 |
| **Tier 3** | Quantum Storage | +1 Capture Slot (3→4) | Complete Capture Master quest |
| **Tier 4** | Hyper-Threading | Auto-optimize capture (25% faster) | Capture 50 unique creatures |
| **Tier 5** | The Kernel | Unlocks "Deep Compile" for legendary creatures | Apex Evolution milestone |

**Design Note:** Capture slots are upgraded through progression, not currency. This rewards collection without creating pay-to-win concerns.

---

## Part 3: The Capture Action — "The Compile"

### 3.1 Step-by-Step Capture Sequence

**Phase 1: Encounter**
```
Player encounters a creature in the world
Cache automatically detects creature type and displays on device
Player presses "SCAN" to analyze capture difficulty
```

**Phase 2: The Probe**
```
Player aims and fires the magnetic probe
Probe travels to creature (1-2 second travel time)
Probe attaches to creature's "code signature"
Gauge begins filling...
```

**Phase 3: The Compile (Visual Sequence)**
```
RED (0-33%): Probe initializing, creature resisting
ORANGE (34-66%): Code fragmentation, creature flickering
GREEN (67-99%): Compile nearly complete
CLICK (100%): Creature dissolves into digital particles, absorbed into Cache
```

**Phase 4: Result**
```
SUCCESS: Creature compiled into Cache, creature count increases
FAILURE: Probe returns, creature remains (can try again)
CANCEL: Player chooses to Harness instead
```

### 3.2 Capture Probability Factors

Unlike Pokémon Go's hidden formulas, our system makes factors **visible**:

| Factor | Effect on Capture | Player Control |
|--------|------------------|----------------|
| **Creature Health** | Lower health = easier capture | Battle first |
| **Creature Rarity** | Rarer = harder capture | None (gauge reflects this) |
| **Cache Tier** | Higher tier = easier capture | Upgrade Cache |
| **Probe Accuracy** | Better aim = faster capture | Player skill |
| **Module Bonus** | "Stabilizer" module improves capture | Equip modules |

**Visual Simplification:** Players see only the gauge. The formula is hidden. They learn through experience that "lower health = easier capture."

### 3.3 The Gauge Logic

```
LOW HEALTH CREATURE: Probe attaches, gauge fills FAST (green in 2 seconds)
HIGH HEALTH CREATURE: Probe attaches, gauge fills SLOW (stays orange, may not reach green)
LEGENDARY CREATURE: Probe struggles to attach, gauge barely moves
```

**Key Insight:** Players learn through gameplay that **battling first makes capture easier**—but they don't need to know the math.

---

## Part 4: Harness System — "The Function Copy"

### 4.1 What is Harnessing?

Harnessing is **permanently copying a creature's core function** into your Exploration Device. The creature is not captured—its essence is siphoned, and it respawns elsewhere (weakened).

**The Core Choice:**
```
HARNESS: Gain permanent upgrade, creature respawns elsewhere (weakened)
CAPTURE: Store creature (limited slots), can trade/battle/use later
```

### 4.2 Harness Effects (Permanence Levels)

| Upgrade Type | Permanence | Recharge/Cycle | Example |
|--------------|------------|----------------|---------|
| **Permanent** | Forever | None | "+15% Entropy Resistance" (from Void creature) |
| **Semi-Permanent** | Until overwritten | Can swap once per week | "Charge Move: Void Rift" (one of 3 slots) |
| **Temporary** | Depletes with use | Recharge at Server Bank | "Energy Boost: +50% for 10 battles" |
| **Conditional** | Active in specific contexts | Context-dependent | "+20% damage vs Order creatures" |

**Design Note:** The mix of permanence levels creates variety:
- **Permanent** upgrades feel like meaningful progression
- **Semi-Permanent** create "build identity" decisions
- **Temporary** create ongoing engagement with Server Banks

### 4.3 Harness Categories

**Module → Harness → Effect**

Players unlock **Harness Slots** through progression:

| Slot Type | Purpose | Example Effects |
|-----------|---------|----------------|
| **Core Slot** (1) | Major attribute boost | +25% max HP, +20% damage |
| **Ability Slot** (2) | New charge moves | "Phase Shift" (teleport), "Void Wall" |
| **Passive Slot** (3) | Conditional bonuses | +15% energy gain, +10% damage vs Order |
| **Visual Slot** (1) | Cosmetic effects | Glowing trails, particle effects |

**Example Harness Decision:**
```
ENCOUNTER: Rare Void-Touched creature

OPTION A - CAPTURE:
- Stores in Cache (slot occupied)
- Can trade for valuable resources
- Can deploy in battle
- Can breed for mutations

OPTION B - HARNESS TO ABILITY SLOT:
- Permanently unlocks "Phase Shift" charge move
- Creature respawns elsewhere (weakened)
- Slot is now locked to this ability
- Can overwrite once with another harness
```

### 4.4 The Hard Choice Example

**Scenario:** Player encounters a legendary "Chronos Serpent" (time-manipulation creature)

| Decision | Immediate Benefit | Long-term Consequence |
|----------|------------------|---------------------|
| **Capture** | Store in Cache, tradeable, battle-ready | Takes up slot; must eventually use or trade |
| **Harness to Passive** | +30% Cooldown Reduction (permanent) | Cannot use creature for breeding/mutations |
| **Harness to Core** | +50% Processing Speed (permanent) | Very powerful, but permanently commits build |
| **Do Nothing** | Creature remains in world | Miss opportunity; creature may despawn |

**This is the meaningful choice loop you want.**

---

## Part 5: Capture vs. Harness Comparison

### 5.1 At a Glance

| Aspect | CAPTURE | HARNESS |
|--------|---------|---------|
| **Creature Fate** | Stored in Cache | Respawns (weakened) |
| **Slot Usage** | Takes 1 Cache slot | Takes 1 Harness slot |
| **Reversible** | Trade or release anytime | Permanent or semi-permanent |
| **Battle Use** | Can deploy in battle | Provides passive/active bonuses |
| **Trading** | Fully tradeable | Non-tradeable (personal upgrade) |
| **Breeding** | Can breed with other creatures | Cannot breed |
| **Evolution** | Can evolve through version updates | N/A |

### 5.2 The Slot Economy

**Capture Slots (Cache Capacity):**
- **Base:** 3 creatures
- **Tier 3 Upgrade:** +1 slot (4 total)
- **Tier 5 Upgrade:** +1 slot (5 total)
- **Hard Cap:** 5 (intentional scarcity)

**Harness Slots (Device Upgrades):**
- **Core:** 1 slot (unlocked at start)
- **Ability:** 2 slots (unlocked at Level 5)
- **Passive:** 3 slots (unlocked at Level 10)
- **Visual:** 1 slot (unlocked at Level 15)

### 5.3 When to Capture vs. Harness

| Situation | Recommended Action | Reasoning |
|-----------|-------------------|-----------|
| **Rare creature, valuable traits** | Capture | Trade potential, breeding value |
| **Common creature, perfect for your build** | Harness | Permanent upgrade, slot efficient |
| **Need creature for collection completion** | Capture | Living dex progress |
| **Creature type you're over-collecting** | Capture | Trading fodder |
| **Creature has ability you lack** | Harness | Fills ability gap |
| **Low-integrity creature (unstable)** | Capture | Can't harness degraded creatures |

---

## Part 6: Integration with Existing Systems

### 6.1 Battle Integration

| Capture Method | Battle Function |
|----------------|-----------------|
| **Captured Creature** | Deploy as active combatant (standard battle flow) |
| **Harnessed Ability** | Available as charge move or passive effect |
| **Harnessed Passive** | Always active (e.g., +15% damage vs Order) |
| **Harnessed Core** | Permanent stat modifier |

### 6.2 Hot Potato Integration

**Unstable Creatures:**
- Unstable Copies (raided) can be captured with reduced success chance
- Low Integrity creatures have visual "glitch" effects
- Failed capture on unstable creature: risk of "data corruption" (probe malfunctions)

**Paradox Events:**
- Paradox-affected creatures have modified capture gauges (harder or easier, rotates weekly)
- Harnessing Paradox creatures has increased risk/reward

### 6.3 Server Bank Integration

**Storage vs. Server Bank:**
| Storage Type | Purpose | Creature Status |
|--------------|---------|----------------|
| **Cache (3-5 slots)** | Active creatures, ready for battle/deployment | Alive, can be deployed |
| **Server Bank (unlimited)** | Long-term storage, AFK farming | Dormant, generates resources |

**AFK Farming Logic:**
- Captured creatures in Server Bank generate resources while player is away
- Order creatures → Encryption Keys (currency)
- Nature creatures → Raw Data (XP)
- Chaos creatures → Glitch Fragments (crafting)

### 6.4 Breeding Integration

| Parent Source | Offspring Result |
|---------------|-----------------|
| **Two Captured Creatures** | Standard breeding (stable inheritance) |
| **Harnessed + Captured** | Reduced success rate, mutation risk |
| **Two Harnessed Creatures** | Cannot breed (functions copied, not stored) |

---

## Part 7: Visual & Audio Design

### 7.1 Probe Launch Visual

```
1. Player presses FIRE on device
2. Small projectile exits Cache (blue trail)
3. Projectile accelerates toward creature
4. Trail effect shows path clearly for children to follow
5. Impact: Small burst of particles
```

### 7.2 Gauge Progression

| Phase | Visual | Audio Cue |
|-------|--------|-----------|
| **RED** | Steady glow, pulsing slowly | Low hum, resistance sound |
| **ORANGE** | Faster pulse, slight shake | Tension building, static noise |
| **GREEN** | Steady bright glow, calm | Success tone building |
| **CLICK** | Flash, creature dissolves | Satisfying "chime" sound |

**Audio Design Note:** The sounds should feel like a computer compiling code—satisfying, technical, not biological.

### 7.3 Creature Dissolve Effect

```
1. Probe connection established (glowing line between Cache and creature)
2. Creature begins "pixelating" from extremities inward
3. Color shifts to wireframe/binary representation
4. Particles flow toward Cache
5. Cache snaps shut with mechanical click
6. Internal light illuminates with creature's color
```

### 7.4 Harness Visual Effect

```
1. Player selects HARNESS option
2. Probe attaches to creature
3. Energy beam extracts visible "code" from creature
4. Code streams toward player's device
5. Creature flickers and respawns elsewhere (teleport effect)
6. Device displays new module/ability icon
7. Haptic feedback (if controller/mobile vibration)
```

---

## Part 8: Progression & Learning Curve

### 8.1 Tutorial Flow

**Minute 0-5: First Encounter**
```
1. Player spawns in starting area
2. Tutorial creature appears (passive, non-threatening)
3. Cache activates automatically, highlights creature
4. Prompt: "Press SCAN to analyze"
5. Gauge appears (shows easy green)
6. Prompt: "Press FIRE to Capture"
7. Success! Creature compiled into Cache
```

**Minute 5-10: First Battle**
```
1. Encounter enemy creature
2. Battle begins (mechanics from Battle System v2.1)
3. Creature health drops
4. Post-battle prompt: "Now try capturing!"
5. Lower health = faster gauge fill
6. Player learns: "Battle first = easier capture"
```

**Minute 10-15: First Harness**
```
1. Encounter special creature with visible "upgrade" icon
2. Tutorial explains: "This creature has unique abilities"
3. Prompt: "HARNESS or CAPTURE?"
4. Player chooses, sees permanent upgrade applied
5. Tutorial explains slot limits and hard choices
```

### 8.2 Player Knowledge Progression

| Experience Level | Understanding |
|-----------------|---------------|
| **Beginner** | Lower health = easier capture |
| **Intermediate** | Rarer creatures are harder; harness is permanent |
| **Advanced** | Optimal build paths; when to harness vs capture |
| **Expert** | Mini-maxing slot economy; breeding combinations |

**Design Goal:** All players understand the basics. Experts optimize.

---

## Part 9: Edge Cases & Solutions

### 9.1 Full Cache Scenario

**Problem:** Player has 5 creatures, encounters a legendary.

**Solutions:**
```
Option A: Delete lowest-value creature
- Penalty: Lost progress, creature becomes "Glitched Relic" in inventory
- Trade-off: Permanent loss of that specific creature

Option B: Trade existing creature for slot
- Risk: Trading below market value
- Benefit: Keeps both creatures temporarily

Option C: Harness instead
- Benefit: No slot needed, permanent upgrade
- Consequence: Cannot breed/trade this creature type

Option D: Ignore creature
- Consequence: Miss opportunity, creature may despawn
```

### 9.2 Failed Capture Scenarios

| Scenario | Result | Player Action |
|----------|--------|---------------|
| **Gauge doesn't reach green** | Probe returns, creature remains | Battle first, then retry |
| **Creature leaves area** | Creature despawns | Find another, or wait for respawn |
| **Network/connection issue** | Capture aborted, creature remains | Retry (no penalty) |
| **Low-integrity creature** | Glitch effect, reduced capture chance | Accept risk, or avoid |

### 9.3 Harness Mistakes

**Problem:** Player harnesses a creature, then regrets it.

**Solution: Semi-Permanent Slots**
- **Core Slot:** Permanent (cannot change)
- **Ability Slots:** Semi-permanent (1 overwrite per week)
- **Passive Slots:** Semi-permanent (overwrite anytime)

**This creates build identity without punishing experimentation.**

### 9.4 Creature Respawn Logic

**Harnessed creatures respawn:**
- **Location:** Random spawn point in same biome
- **Condition:** Respawns at 50% health, slightly weaker
- **Timer:** 5-30 minutes (based on creature rarity)
- **Cap:** Each creature can be harnessed 3 times per day (prevents farming)

---

## Part 10: Comparison with Pokémon Go

| Aspect | Pokémon Go | Cosmic Principles |
|--------|------------|-------------------|
| **Capture Device** | Pokéball (sphere) | The Cache (cube) |
| **Capture Action** | Throw, bounce, shake | Probe, gauge, compile |
| **Visual Feedback** | Ball shaking | Red→Orange→Green gauge |
| **Decision Pressure** | Berries vs. balls | Harness vs. Capture |
| **Capture Consequence** | None (unlimited storage) | Slot scarcity (3-5 limit) |
| **Permanent Choice** | No | Yes (harness is permanent) |
| **Alternative to Capture** | Run away | Harness for upgrade |
| **Thematic Fit** | Nature/biome | Technology/code |

---

## Part 11: Summary Table

| Component | Description | Key Innovation |
|-----------|-------------|----------------|
| **Device** | The Cache (cube) with probe launcher | Cube geometry = Order/Data; Probe = tactile aiming |
| **Capture Action** | Probe → Attach → Gauge (Red→Orange→Green) | Visual gauge instead of hidden percentage |
| **Capture Result** | "Compile" (creature stored as code) | Thematic fit with "creatures as code" mythology |
| **Harness Alternative** | Copy creature function to device | Creates hard choices (upgrade vs. collect) |
| **Slot Economy** | 3-5 capture slots (upgradeable) | Scarcity creates trading incentive |
| **Harness Slots** | Core/Ability/Passive/Visual | Build identity without punishing experimentation |
| **Server Bank** | Unlimited storage, AFK resource generation | Offline progression without empty world |
| **Respawn Logic** | Harnessed creatures respawn (weakened) | Preserves world population, child-friendly |

---

## Part 12: Open Questions for Design Lock

### Questions Requiring Answers

1. **Harness Permanence Level Mix:**
   - How many Permanent vs. Semi-Permanent vs. Temporary upgrades?
   - Current thought: 40% Permanent, 40% Semi-Permanent, 20% Temporary

2. **Slot Economy Balance:**
   - Is 5 capture slots too restrictive?
   - Should Tier 5 upgrade add 2 slots (5→7)?

3. **Harness Cooldowns:**
   - How often can a creature be harnessed?
   - Current thought: 3 times per day per creature

4. **Respawn Timing:**
   - Should rare creatures respawn slower?
   - Current thought: 5 min (common) → 30 min (rare) → 2 hours (legendary)

5. **Failed Capture Penalty:**
   - Should failed captures have any penalty?
   - Current thought: No penalty (child-friendly)

---

## Appendix A: The Cache Visual Description (For Art Team)

**Front Face:**
- Sleek metallic surface
- Glowing circuit lines (faint when idle, bright when active)
- Central sensor array (circular, responds to touch)

**Side Edges:**
- Subtle beveled edges
- Hidden probe port (covered, opens when firing)
- Status LED ring (shows device state)

**Top/Bottom:**
- Flat surfaces for stable placement
- Ventilation pattern (aesthetic only)
- "COSMIC PRINCIPLES" branding (small, corner)

**Interaction States:**
- **Idle:** Subtle pulse of inner light (matches environment)
- **Scanning:** Rotating blue light
- **Aiming:** Red target overlay on creature
- **Capturing:** Gauge fills (red→orange→green)
- **Success:** Brief flash, creature color illuminates Cache
- **Harnessing:** Blue energy beam from probe to device

---

## Appendix B: Sample Creature Capture Screen

```
┌─────────────────────────────────────────┐
│  VOID PHANTOM v1.3                      │
│  [RARE] [UNSTABLE: 72%]                 │
├─────────────────────────────────────────┤
│                                         │
│         ●  CREATURE  ●                  │
│            (wireframe)                  │
│                                         │
│    ═══════════════════════              │
│    [███░░░░░░░░░░░░░]  67%             │
│    ═══════════════════════              │
│      RED  ORANGE  GREEN                 │
│                                         │
├─────────────────────────────────────────┤
│  [FIRE]        [HARNESS]        [RUN]   │
└─────────────────────────────────────────┘
```

**UI Notes:**
- No numbers shown (67% hidden, gauge is visual only)
- "UNSTABLE" indicator shown if Integrity < 80%
- "HARNESS" button shows icon of what upgrade you'll receive
- "RUN" is subtle (we want players to engage, not avoid)

---

*Document prepared for design review. Capture mechanics are the final core system needed before full development can proceed.*
