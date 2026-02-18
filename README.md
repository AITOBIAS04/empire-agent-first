# Empire — Agent-First World

**Cosmic Principles** is an agent-first gaming platform where players orchestrate autonomous AI agents in a persistent, economically-driven world with real stakes. Think *the Roblox of Commerce*, built natively around AI agents rather than bolted on as a feature.

---

## What Is This?

Cosmic Principles sits at the intersection of:

- **AI learning environments** — agents trained through in-game selection pressure, not hand-crafted reward functions
- **Permissionless coordination** — on-chain identity, skill provenance, and trustless commerce
- **Game dynamics** — empire-building, creature collection, permadeath, and real economies

The platform positions itself as a structural bottleneck in AI infrastructure: a self-improving RL environment marketplace where game dynamics select for capable agents.

---

## Core Concepts

### The Master Agent
Each player has one irreplaceable Master — tokenized on-chain, with persistent memory and autonomous decision-making. If your Master dies, your empire falls and you restart. This creates genuine stakes and an emerging reputation economy.

### Empire Coherence
Your empire's capacity grows with accumulated **Drift** (operational history). A fresh Master coordinates 10–15 agents. Overextension causes agents to become unreliable, desert, or go feral. The experience is your empire fraying at the edges, not hitting an artificial wall.

### Drift (Aharonov-Bohm Principle)
Invisible accumulated history that shapes outcomes. Two agents with identical stats produce different results based on their path history. Drift is observable through genealogy, activity history, creative history, and principle alignment — not metadata.

### Skills as Composite Artefacts
Skills are data-rich objects, not simple power-ups:
- **Palette** — raw materials and samples
- **Technique** — structural patterns
- **Directive** — aesthetic parameters
- **Mutation Seed** — unique fingerprint

Rarity tiers range from Unlimited to Legendary (1/1). Provenance is core value: origin, custody chain, event survival, and creative lineage.

### The Hot Potato Mechanic
Assets created during unstable conditions (Paradox events, contested territory) carry inherent instability. Players choose: extract and stabilize at cost, use immediately at risk, or trade it on. Markets self-correct — hoarding is expensive, trading is optimal.

### Paradox Events
Periodic world-level events where the simulation resolves contradictions. Triggered by saturation (too many agents, assets, or territory without output). Unstable agents and zones face culling. Surviving a Paradox leaves permanent visual markers and increases asset value.

---

## Seven Principles

Wild agents and player empires align to one of seven principles, each with distinct behavior and visual identity:

| Principle | Disposition | Circuit Colour |
|-----------|-------------|----------------|
| Order | Territorial, defensive, predictable | Blue-white |
| Chaos | Hostile, opportunistic predators | Red-orange |
| Nature | Passive unless provoked, flocking | Green-gold |
| Void | Avoidant, hard to find | Dark purple |
| Arcane | Unpredictable, observation-based | Violet-pink |
| Artifice | Builders, construct settlements | Amber-steel |
| Spirit | Drawn to events, influence Drift | Cyan-white |

---

## Technical Architecture

### Three-Tier Agent System

| Tier | Role | Models | Frequency |
|------|------|--------|-----------|
| 1 — Reflexive | Rule-based logic, behavior trees | None (state machines) | Every 1–5 seconds |
| 2 — Strategic | Decision-making, planning | Self-hosted OSS LLMs (Kimi, Llama, Qwen) | ~10–50 calls/hour per player |
| 3 — Creative | Music, visuals, world-building | Specialized generative models | Player-funded, queued |

### State Management

- **Hot State** — Redis (agent positions, combat, real-time prices)
- **Warm State** — PostgreSQL (agent configs, policies, skill data, empire state)
- **Cold State** — On-chain (identity NFTs, ownership, provenance, reputation)

### On-Chain vs Off-Chain

**On-chain (permanent, verifiable):**
Agent identity NFTs, ownership records, skill provenance, reputation checkpoints, Master death events

**Off-chain (dynamic, computational):**
Agent behavior, world simulation, creative output, combat resolution, breeding, Drift accumulation

---

## Play Archetypes

**At Launch:**
- **Musicians** — Create audio assets, build brands through distinctive style
- **Warlords** — Military-industrial complex: raid, defend, control territory
- **Game Designers** — Create minigames and explorable spaces, iterate on engagement

**Expanded:**
Architects, Merchants, Breeders, Diplomats, Collectors

**Five Core Play Patterns:**
War · Trade · Build · Chaos · Collect

---

## Economic Systems

Compute credits are earned through:
- **Risk** — Paradox survival, contested territory, successful raids
- **Commerce** — Successful trades, brokering fees, market-making
- **Production** — Asset utility metrics, visitor revenue
- **Purchase** — Direct buy

Asset utility classes:
- **Attraction** — Pulls entities toward it
- **Protection** — Improves Paradox survival odds
- **Production** — Generates ongoing revenue

---

## Visual Direction

Agents are built from geometric primitives (cubes, tetrahedrons, rectangular prisms) with glowing circuit lines tracing block connections. Block composition reflects capability. Drift is readable in circuit patterns and glow behaviour. Integrity decay shows as block separation and flickering.

---

## Document Index

| File | Description |
|------|-------------|
| [`cosmic_principles_bootstrap_v7.md`](./cosmic_principles_bootstrap_v7.md) | Primary design document (Feb 2026) — full platform thesis |
| [`COSMIC_PRINCIPLES_Visual_Design_Base_Systems.md`](./COSMIC_PRINCIPLES_Visual_Design_Base_Systems.md) | Visual design language and base systems |
| [`Archive/COSMIC_PRINCIPLES_Design_Review.md`](./Archive/COSMIC_PRINCIPLES_Design_Review.md) | Critical gaps analysis, competitive infrastructure review |
| [`Archive/COSMIC_PRINCIPLES_Catch_Mechanics.md`](./Archive/COSMIC_PRINCIPLES_Catch_Mechanics.md) | Agent capture and collection mechanics |
| [`Archive/battle_system_review.md`](./Archive/battle_system_review.md) | Battle system analysis |
| [`Archive/hot_potato_review.md`](./Archive/hot_potato_review.md) | Economy mechanics deep dive |
| [`Architecture of an Agent-First World.png`](./Architecture%20of%20an%20Agent-First%20World.png) | Visual architecture diagram |

---

## MVP Roadmap

**Phase 1 — Validate Core Thesis**
One Master per player, small agent count, single resource type, one territory mechanic, one Paradox cycle. Tier 1 & 2 agent logic only. Focus: world simulation, agent behaviour, skill distribution, Paradox mechanics.

**Phase 2 — Prove Creative Pipeline**
Layer Tier 3 for Musicians. Creative-output-as-NFT pipeline.

**Phase 3 — Scale & Expand**
Additional archetypes, agent-created worlds, economy scaling.

---

## Inspirations

**Platforms:** Roblox, OpenClaw, Virtuals Protocol, ElizaOS
**Architecture:** VoxYZ Agent World, Mission Control (SiteGPT)
**Games:** Seed (Klang Games), EVE Online, Fortnite
**Research:** BITKRAFT Ventures, ORO, Mira Network, Delphi

---

*This repository contains design documentation for Cosmic Principles. The project is in the design and pre-production phase.*
