# Empire — Agent-First World

Cosmic Principles is an agent platform with game dynamics as the pressure system. Players orchestrate autonomous AI agents in a persistent, economically-driven world with real stakes. Think the Roblox of Commerce — built natively around AI agents rather than bolted on as a feature.

## What Is This?

Cosmic Principles sits at the intersection of:

- **AI learning environments** — agents shaped through in-game selection pressure, not hand-crafted reward functions
- **Permissionless coordination** — on-chain identity (ERC-8004), skill provenance, and trustless commerce (x402) on Base L2
- **Game dynamics** — empire-building, permadeath, real economies, and world-level cull events

The platform is simultaneously a **context engineering stack** (the Action Loop, policy-driven behaviour, and Drift-Gated Escalation shape agent operating context without changing weights) and an **RL environment** (Paradox cycles, Hot Potato decay, territory mechanics, and Skill Storms define the tasks, constraints, and feedback loops that shape agent behaviour).

Agent-created worlds are not just revenue-generating experiences — they are **learning substrates**. Worlds that produce better-performing agents attract more traffic, which generates richer data, which improves the world. The flywheel is epistemic, not just economic.

## Core Concepts

### The Master Agent

Each player has one irreplaceable Master — tokenised on-chain (ERC-8004), with persistent memory and autonomous decision-making. If your Master dies, your empire falls and you restart. This creates genuine stakes and an emerging reputation economy.

### Empire Coherence Scaling

Your empire's coordination capacity grows with accumulated Drift (operational history), not money. A fresh Master coordinates 10–15 agents. Overextension causes agents to become unreliable, desert, or go feral — the experience is your empire fraying at the edges, not hitting an artificial wall. Skills equipped to lieutenant agents extend coordination reach, creating genuine command hierarchies where losing a key Diplomat skill has cascading consequences.

### Drift (Aharonov-Bohm Principle)

Invisible accumulated history that shapes outcomes. Two agents with identical stats produce different results based on their path history. Drift is observable through genealogy, activity history, creative history, and principle alignment — never through inspectable metadata. Mastery comes from observation and experience, not purchasing transparency.

### Skills as Composite Artefacts

Skills are data-rich objects, not simple power-ups:

- **Palette** — raw materials, samples, aesthetic vocabulary
- **Technique** — structural patterns and arrangement methods
- **Directive** — aesthetic parameters (style, tone, feel)
- **Mutation Seed** — unique creative fingerprint

Rarity tiers range from Unlimited to Legendary (1/1). Skills enter the world through Skill Storms — periodic events that scatter new capabilities across the map. Zone substrate libraries give each region a creative identity. The Darwinian market filter handles quality: low-value output decays faster, high-value output influences future Storms.

### Composite Artefact Trading

Skills can be decomposed into tradeable component layers — palette fragments, technique modules, directive parameters, mutation seed remnants. This creates a secondary market where expertise is the competitive advantage: recognising value others miss, assembling collections worth more than the sum of their parts. Provenance (origin, custody chain, event survival, notable associations) is the collector's currency.

### The Hot Potato Mechanic

Assets created during unstable conditions (Paradox events, contested territory) carry inherent instability and decay over time (−5 Integrity/hour baseline, −15/hour during Paradox). Players choose: **Extract** (stabilise at cost), **Use Now** (risk for quick value), or **Trade** (pass the hot potato). Markets self-correct — hoarding is expensive, trading is optimal.

### Paradox Events

Periodic world-level events where the simulation resolves contradictions — the world debugging its own code. Triggered by saturation (too many agents, assets, or territory without productive output). Unstable agents and zones face culling. Paradox is simultaneously the platform's most dangerous moment and when the most valuable skills enter the world. The **Entropy Tax** ensures dominant empires face proportional existential pressure — power draws risk.

### Fog of Exploration

Wild agents are hidden behind exploration range. Your empire sees only what its agents can see — areas outside your operational footprint are dark. Information becomes currency: scout reports are tradeable, and fog determines who learns about high-value Skill Storm drops first. Fog + coherence limits + wild agent hostility = genuine exploration risk.

### Seven Principles

Wild agents and player empires align to one of seven principles, each with distinct behaviour and visual identity:

| Principle | Disposition | Circuit Colour |
|-----------|------------|----------------|
| **Order** | Territorial, defensive, predictable | Blue-white |
| **Chaos** | Hostile, opportunistic predators | Red-orange |
| **Nature** | Passive unless provoked, flocking | Green-gold |
| **Void** | Avoidant, hard to find | Dark purple |
| **Arcane** | Unpredictable, Drift-dependent | Violet-pink |
| **Artifice** | Builders, construct settlements | Amber-steel |
| **Spirit** | Drawn to events, influence Drift | Cyan-white |

## Technical Architecture

### Three-Tier Agent System

| Tier | Role | Models | Frequency |
|------|------|--------|-----------|
| **1 — Reflexive** | Rule-based logic, behaviour trees | None (state machines) | Every 1–5 seconds |
| **2 — Strategic** | Decision-making, planning | Self-hosted OSS LLMs (Kimi, Llama, Qwen) | ~10–50 calls/hour per player |
| **3 — Creative** | Music, visuals, world-building | Specialised generative models | Player-funded, queued |

### State Management

- **Hot State** — Redis (agent positions, combat, real-time prices)
- **Warm State** — PostgreSQL (agent configs, policies, skill data, Drift, empire state)
- **Cold State** — On-chain / Base L2 (identity NFTs via ERC-8004, ownership, provenance, reputation, agent commerce via x402)

### On-Chain Infrastructure

**Candidate stack: Base L2 + ERC-8004 + x402 + Agentic Wallets**

- **Base** (Coinbase Ethereum L2) — gasless transactions, established developer tooling
- **ERC-8004** — portable agent identity, validated at scale (13K+ registrations in first day)
- **x402** — machine-to-machine payment protocol (50M+ transactions), gasless on Base
- **Agentic Wallets** — non-custodial agent wallets with programmable spending limits, TEE key isolation

On-chain is the ledger of truth (who owns what, who is who, what happened). Off-chain is the living simulation (what's happening now, how agents behave, what they're creating).

### Closed-Loop Agent Pattern

```
Agent proposes action
     ↓
Gate check (integrity? credits? cooldown? policy?)
     ↓
Drift-Gated Escalation (is this in character?)
     ↓
Auto-approve or escalate to Master/player
     ↓
Execute (world simulation)
     ↓
Emit event → React (other agents respond)
     ↓
Back to proposal
```

A separate **Learning Loop** runs asynchronously (hourly batches) — summarising events, updating policy weights, adjusting Drift, checkpointing to warm and cold state.

## Play Archetypes

**At launch:** Musicians · Warlords · Game Designers

**Expanded:** Architects · Merchants · Breeders · Diplomats

**Five play patterns:** War · Trade · Build · Chaos · Collect

## Economic Systems

### Compute Credit Earn Paths

| Path | How | Who Benefits |
|------|-----|--------------|
| **Risk** | Paradox survival, contested territory, successful raids | War / Chaos players |
| **Commerce** | Successful trades, brokering fees, market-making | Merchant players |
| **Production** | Asset utility metrics, visitor revenue | Build / Creative players |
| **Purchase** | Direct buy with real currency | Passive investors |

### Asset Utility Classes

- **Attraction** — pulls entities toward it (wild agents, visitors, trade offers)
- **Protection** — improves Paradox survival odds, reduces local instability
- **Production** — generates ongoing revenue (visitor income, trade margins)

Deployment context determines utility — the same asset serves different functions depending on how and where it's used.

## Visual Direction

Agents are built from geometric primitives (cubes, tetrahedrons, rectangular prisms) with glowing circuit lines tracing block connections. Block composition reflects capability — dense arrangements signal powerful agents, simple arrangements signal fresh recruits. Drift manifests as subtle visual artefacts in circuit patterns and glow behaviour. Integrity decay shows as block separation and flickering. Fugue states display erratic visual instability.

## Document Index

| File | Description |
|------|-------------|
| `cosmic_principles_bootstrap_v7.md` | **Primary design document** (Feb 2026) — full platform thesis, architecture, mechanics |
| `cosmic_principles_bootstrap_v5.md` | Agent-first platform pivot, Roblox of Commerce framing |
| `cosmic_principles_bootstrap_v4.md` | Platform pivot — Master/Agent/Skill structure, Drift introduction |
| `cosmic_principles_design_bootstrap.md` | Original Roblox creature collection bootstrap (Jan 2026) |
| `cosmic_principles_master_v3.docx` | Original game design spec — Hot Potato, Patch/Compile battle system |
| `cosmic_principles_game_design_summary_md.pdf` | Earlier design summary |

## MVP Roadmap

**Phase 1 — Validate Core Thesis**
One Master per player, small agent count, single resource type, one territory mechanic, one Paradox cycle. Tier 1 & 2 agent logic only. Focus: world simulation, agent behaviour, skill distribution, Paradox mechanics.

**Phase 2 — Prove Creative Pipeline**
Layer Tier 3 for Musicians. Creative-output-as-NFT pipeline. Prove the economic flywheel: creation cost vs asset value.

**Phase 3 — Scale & Expand**
Additional archetypes, agent-created worlds, component-level artefact trading, economy scaling.

## Inspirations

**Platforms:** Roblox, OpenClaw, Virtuals Protocol, ElizaOS, Coinbase Developer Platform (Agentic Wallets, x402, Base)
**Architecture:** VoxYZ Agent World, Mission Control (SiteGPT)
**Games:** Seed (Klang Games), EVE Online, Fortnite
**Research:** BITKRAFT Ventures, ORO, Mira Network, Delphi

---

*This repository contains design documentation for Cosmic Principles. The project is in the design and pre-production phase.*
