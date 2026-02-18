import { useState, useEffect, useRef, useCallback } from "react";

// ─── WORLD DATA ───
const ZONES = [
  // Core cluster
  { id: "spire", name: "The Spire", principle: "Arcane", wx: 0, wy: 0, agents: 56, stability: 52, owner: "You", color: [236,72,153], paradox: 0.3, landmark: "tower", motif: "arcane" },
  { id: "harmonic", name: "Harmonic Basin", principle: "Order", wx: -2, wy: -1.5, agents: 47, stability: 94, owner: "Crystalline Accord", color: [59,130,246], paradox: 0, landmark: "crystal", motif: "order" },
  { id: "verdant", name: "Verdant Reach", principle: "Nature", wx: -3, wy: 0, agents: 31, stability: 88, owner: "Grove Pact", color: [16,185,129], paradox: 0, landmark: "tree", motif: "nature" },
  { id: "eastern", name: "Eastern Wastes", principle: "Chaos", wx: 2.5, wy: -1, agents: 23, stability: 28, owner: "Contested", color: [239,68,68], paradox: 0.85, landmark: "ruin", motif: "chaos" },
  { id: "forge", name: "Forge Districts", principle: "Artifice", wx: 2, wy: 1, agents: 38, stability: 65, owner: "Iron Assembly", color: [245,158,11], paradox: 0.1, landmark: "factory", motif: "artifice" },
  { id: "void", name: "Void Margins", principle: "Void", wx: -1, wy: 2, agents: 12, stability: 78, owner: "Shadow Collective", color: [139,92,246], paradox: 0, landmark: "rift", motif: "void" },
  { id: "thresh", name: "Threshold", principle: "Spirit", wx: -3.5, wy: 1.5, agents: 8, stability: 95, owner: "Unclaimed", color: [6,182,212], paradox: 0, landmark: "shrine", motif: "spirit" },
  { id: "rift", name: "The Rift", principle: "Chaos", wx: 3.5, wy: 0.5, agents: 5, stability: 15, owner: "Contested", color: [220,38,38], paradox: 0.95, landmark: "crater", motif: "chaos" },
  // Outer ring
  { id: "glacis", name: "Glacis Shelf", principle: "Order", wx: -1, wy: -3, agents: 19, stability: 90, owner: "Frost Compact", color: [96,165,250], paradox: 0, landmark: "wall", motif: "order" },
  { id: "mire", name: "Tanglevine Mire", principle: "Nature", wx: -4, wy: -1, agents: 14, stability: 82, owner: "Grove Pact", color: [34,197,94], paradox: 0, landmark: "swamp", motif: "nature" },
  { id: "crucible", name: "The Crucible", principle: "Artifice", wx: 1, wy: 2.5, agents: 29, stability: 55, owner: "Iron Assembly", color: [251,191,36], paradox: 0.15, landmark: "furnace", motif: "artifice" },
  { id: "echoes", name: "Echo Chamber", principle: "Arcane", wx: 1.5, wy: -2.5, agents: 16, stability: 70, owner: "Contested", color: [217,70,239], paradox: 0.05, landmark: "mirror", motif: "arcane" },
  { id: "drift", name: "Drift Fields", principle: "Void", wx: -2, wy: 3, agents: 7, stability: 85, owner: "Unclaimed", color: [168,85,247], paradox: 0, landmark: "field", motif: "void" },
  { id: "beacon", name: "Signal Beacon", principle: "Spirit", wx: 0, wy: -2.5, agents: 22, stability: 76, owner: "You", color: [34,211,238], paradox: 0, landmark: "antenna", motif: "spirit" },
  { id: "slagheap", name: "Slagheap", principle: "Chaos", wx: 4, wy: -1.5, agents: 3, stability: 20, owner: "Contested", color: [248,113,113], paradox: 0.7, landmark: "debris", motif: "chaos" },
  { id: "commons", name: "The Commons", principle: "Nature", wx: -1.5, wy: 1, agents: 33, stability: 91, owner: "Grove Pact", color: [52,211,153], paradox: 0, landmark: "plaza", motif: "nature" },
];

const EDGES = [
  ["spire","harmonic"], ["spire","verdant"], ["spire","eastern"], ["spire","forge"], ["spire","void"], ["spire","commons"],
  ["harmonic","glacis"], ["harmonic","echoes"], ["harmonic","beacon"],
  ["verdant","thresh"], ["verdant","mire"], ["verdant","commons"],
  ["eastern","forge"], ["eastern","echoes"], ["eastern","slagheap"], ["eastern","rift"],
  ["forge","crucible"], ["forge","rift"],
  ["void","commons"], ["void","drift"], ["void","thresh"],
  ["glacis","beacon"], ["glacis","echoes"],
  ["mire","thresh"],
  ["crucible","drift"],
  ["slagheap","rift"],
  ["beacon","echoes"],
];

const SCARS = [
  { wx: 2.8, wy: -0.3, age: 0.3, type: "crack", radius: 40 },
  { wx: 3.2, wy: 0.2, age: 0.7, type: "bloom", radius: 30 },
  { wx: -0.5, wy: -0.5, age: 0.9, type: "residue", radius: 20 },
  { wx: 3.8, wy: -1, age: 0.1, type: "crack", radius: 50 },
];

const getZone = (id) => ZONES.find(z => z.id === id);
const lerp = (a, b, t) => a + (b - a) * t;
const ease = (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

// ─── PROJECTION ───
function project(wx, wy, t, cx, cy, scale) {
  // t=0: top-down, t=1: isometric
  const topX = wx * scale;
  const topY = wy * scale;
  const isoScaleX = scale * 0.7;
  const isoScaleY = scale * 0.4;
  const isoX = (wx - wy) * isoScaleX;
  const isoY = (wx + wy) * isoScaleY;
  return {
    x: cx + lerp(topX, isoX, t),
    y: cy + lerp(topY, isoY, t),
  };
}

// ─── FLOW PARTICLES ───
class FlowParticle {
  constructor(edge) {
    this.edge = edge;
    this.progress = Math.random();
    this.speed = 0.003 + Math.random() * 0.004;
    this.offset = (Math.random() - 0.5) * 6;
  }
  update() {
    this.progress += this.speed;
    if (this.progress > 1) this.progress -= 1;
  }
}

// ─── MAIN CANVAS RENDERER ───
export default function CosmicDualLens() {
  const canvasRef = useRef(null);
  const [lensT, setLensT] = useState(0);
  const [targetT, setTargetT] = useState(0);
  const [selected, setSelected] = useState(null);
  const [hovering, setHovering] = useState(null);
  const [variants, setVariants] = useState({ events: true, motifs: true, coherence: true, scars: true });
  const timeRef = useRef(0);
  const particlesRef = useRef([]);
  const lensRef = useRef(0);
  const panRef = useRef({ x: 0, y: 0 });
  const dragRef = useRef(null);
  const scaleRef = useRef(80);

  // Init particles
  useEffect(() => {
    const particles = [];
    for (const edge of EDGES) {
      const count = 2 + Math.floor(Math.random() * 3);
      for (let i = 0; i < count; i++) {
        particles.push(new FlowParticle(edge));
      }
    }
    particlesRef.current = particles;
  }, []);

  // Animate lens
  useEffect(() => {
    const animate = () => {
      lensRef.current += (targetT - lensRef.current) * 0.06;
      if (Math.abs(lensRef.current - targetT) < 0.001) lensRef.current = targetT;
      setLensT(lensRef.current);
    };
    const id = setInterval(animate, 16);
    return () => clearInterval(id);
  }, [targetT]);

  // Hit test
  const hitTest = useCallback((mx, my) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.width / dpr;
    const h = canvas.height / dpr;
    const cx = w / 2 + panRef.current.x;
    const cy = h / 2 + panRef.current.y;
    const t = lensRef.current;

    for (const zone of ZONES) {
      const pos = project(zone.wx, zone.wy, t, cx, cy, scaleRef.current);
      const dx = mx - pos.x, dy = my - pos.y;
      const hitR = 22 + zone.agents * 0.2;
      if (dx * dx + dy * dy < hitR * hitR) return zone.id;
    }
    return null;
  }, []);

  const handleClick = useCallback((e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const hit = hitTest(e.clientX - rect.left, e.clientY - rect.top);
    setSelected(hit === selected ? null : hit);
  }, [selected, hitTest]);

  const handleMove = useCallback((e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    if (dragRef.current) {
      panRef.current.x += mx - dragRef.current.x;
      panRef.current.y += my - dragRef.current.y;
      dragRef.current = { x: mx, y: my };
      return;
    }

    const hit = hitTest(mx, my);
    setHovering(hit);
    canvasRef.current.style.cursor = hit ? "pointer" : "grab";
  }, [hitTest]);

  const handleDown = useCallback((e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const hit = hitTest(mx, my);
    if (!hit) {
      dragRef.current = { x: mx, y: my };
      canvasRef.current.style.cursor = "grabbing";
    }
  }, [hitTest]);

  const handleUp = useCallback(() => { dragRef.current = null; }, []);

  const handleWheel = useCallback((e) => {
    e.preventDefault();
    scaleRef.current = Math.max(40, Math.min(160, scaleRef.current - e.deltaY * 0.1));
  }, []);

  // Main render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;

    const render = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const w = rect.width;
      const h = rect.height;
      const t = lensRef.current;
      const time = timeRef.current;
      timeRef.current += 0.016;
      const cx = w / 2 + panRef.current.x;
      const cy = h / 2 + panRef.current.y;
      const scale = scaleRef.current;

      // ─── BACKGROUND ───
      ctx.fillStyle = "#0b0b12";
      ctx.fillRect(0, 0, w, h);

      // Grid (fades with iso)
      const gridAlpha = 0.025 + (1 - t) * 0.025;
      ctx.strokeStyle = `rgba(255,255,255,${gridAlpha})`;
      ctx.lineWidth = 0.5;
      const gs = 30;
      for (let gx = -20; gx <= 20; gx++) {
        for (let gy = -20; gy <= 20; gy++) {
          // Vertical lines
          if (gy === -20) {
            const p1 = project(gx * gs / scale, -20 * gs / scale, t, cx, cy, scale);
            const p2 = project(gx * gs / scale, 20 * gs / scale, t, cx, cy, scale);
            ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
          }
          if (gx === -20) {
            const p1 = project(-20 * gs / scale, gy * gs / scale, t, cx, cy, scale);
            const p2 = project(20 * gs / scale, gy * gs / scale, t, cx, cy, scale);
            ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
          }
        }
      }

      // ─── MOTIF REGIONS (variant) ───
      if (variants.motifs) {
        const motifColors = {
          order: [59,130,246], chaos: [239,68,68], nature: [16,185,129],
          void: [139,92,246], arcane: [236,72,153], artifice: [245,158,11], spirit: [6,182,212],
        };
        for (const zone of ZONES) {
          const pos = project(zone.wx, zone.wy, t, cx, cy, scale);
          const [mr, mg, mb] = motifColors[zone.motif] || [128,128,128];
          const motifR = scale * 1.2 + zone.agents * 0.5;
          const grad = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, motifR);
          grad.addColorStop(0, `rgba(${mr},${mg},${mb},0.04)`);
          grad.addColorStop(0.6, `rgba(${mr},${mg},${mb},0.015)`);
          grad.addColorStop(1, "transparent");
          ctx.fillStyle = grad;
          ctx.beginPath(); ctx.arc(pos.x, pos.y, motifR, 0, Math.PI * 2); ctx.fill();
        }
      }

      // ─── SCAR PERSISTENCE (variant) ───
      if (variants.scars) {
        for (const scar of SCARS) {
          const pos = project(scar.wx, scar.wy, t, cx, cy, scale);
          const freshness = 1 - scar.age;
          const r = scar.radius * (scale / 80);

          if (scar.type === "crack") {
            ctx.strokeStyle = `rgba(239,68,68,${freshness * 0.2})`;
            ctx.lineWidth = 1 + freshness;
            const arms = 5 + Math.floor(freshness * 4);
            for (let i = 0; i < arms; i++) {
              const angle = (i / arms) * Math.PI * 2 + scar.wx;
              const len = r * (0.4 + Math.random() * 0.6) * freshness;
              ctx.beginPath();
              ctx.moveTo(pos.x, pos.y);
              const segments = 3;
              let px = pos.x, py = pos.y;
              for (let s = 1; s <= segments; s++) {
                const frac = s / segments;
                const jitter = (Math.random() - 0.5) * len * 0.3;
                px = pos.x + Math.cos(angle + jitter * 0.1) * len * frac + jitter * 0.2;
                py = pos.y + Math.sin(angle + jitter * 0.1) * len * frac;
                ctx.lineTo(px, py);
              }
              ctx.stroke();
            }
          } else if (scar.type === "bloom") {
            const grad = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, r);
            grad.addColorStop(0, `rgba(255,200,100,${freshness * 0.08})`);
            grad.addColorStop(0.5, `rgba(239,68,68,${freshness * 0.04})`);
            grad.addColorStop(1, "transparent");
            ctx.fillStyle = grad;
            ctx.beginPath(); ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2); ctx.fill();
          } else {
            // residue sigils
            ctx.strokeStyle = `rgba(139,92,246,${freshness * 0.12})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, r * 0.5, 0, Math.PI * 2);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, r * 0.3, 0, Math.PI * freshness * 2);
            ctx.stroke();
          }
        }
      }

      // ─── EDGES ───
      for (const [aId, bId] of EDGES) {
        const za = getZone(aId), zb = getZone(bId);
        const posA = project(za.wx, za.wy, t, cx, cy, scale);
        const posB = project(zb.wx, zb.wy, t, cx, cy, scale);
        const isActive = selected === aId || selected === bId;
        const isHoverEdge = hovering === aId || hovering === bId;
        const maxP = Math.max(za.paradox, zb.paradox);
        const avgStab = (za.stability + zb.stability) / 200;

        // Route strength: stronger in top-down
        const routeAlpha = lerp(0.08, 0.04, t) + (isActive ? 0.3 : isHoverEdge ? 0.1 : 0);

        let er, eg, eb;
        if (maxP > 0.6) {
          const pulse = 0.5 + 0.5 * Math.sin(time * 4);
          er = 239; eg = 68 + pulse * 40; eb = 68;
        } else if (maxP > 0.15) {
          er = 245; eg = 180; eb = 80;
        } else {
          er = 100; eg = 160; eb = 220;
        }

        ctx.strokeStyle = `rgba(${er},${eg},${eb},${routeAlpha + avgStab * 0.06 + maxP * 0.15})`;
        ctx.lineWidth = isActive ? 2.5 : 1 + maxP * 1.5;

        // Territory coherence: contested edges jitter
        if (variants.coherence && (za.owner === "Contested" || zb.owner === "Contested" || za.owner !== zb.owner)) {
          ctx.beginPath();
          const steps = 24;
          for (let i = 0; i <= steps; i++) {
            const frac = i / steps;
            let x = posA.x + (posB.x - posA.x) * frac;
            let y = posA.y + (posB.y - posA.y) * frac;
            const contested = za.owner === "Contested" || zb.owner === "Contested";
            const jitter = contested ? 3 + maxP * 4 : (za.owner !== zb.owner ? 1.5 : 0);
            if (jitter > 0) {
              const perpX = -(posB.y - posA.y);
              const perpY = posB.x - posA.x;
              const len = Math.sqrt(perpX * perpX + perpY * perpY) || 1;
              const wobble = Math.sin(frac * 12 + time * 3 + posA.x * 0.1) * jitter * Math.sin(frac * Math.PI);
              x += (perpX / len) * wobble;
              y += (perpY / len) * wobble;
            }
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.moveTo(posA.x, posA.y);
          ctx.lineTo(posB.x, posB.y);
          ctx.stroke();
        }

        // Paradox glow on edge
        if (variants.events && maxP > 0.5) {
          ctx.save();
          ctx.shadowColor = `rgba(${er},${eg},${eb},0.4)`;
          ctx.shadowBlur = 6 + maxP * 8;
          ctx.beginPath();
          ctx.moveTo(posA.x, posA.y);
          ctx.lineTo(posB.x, posB.y);
          ctx.stroke();
          ctx.restore();
        }
      }

      // ─── FLOW PARTICLES ───
      // Stronger in top-down
      const particleAlpha = lerp(0.6, 0.25, t);
      for (const p of particlesRef.current) {
        p.update();
        const za = getZone(p.edge[0]), zb = getZone(p.edge[1]);
        const posA = project(za.wx, za.wy, t, cx, cy, scale);
        const posB = project(zb.wx, zb.wy, t, cx, cy, scale);
        const x = posA.x + (posB.x - posA.x) * p.progress;
        const y = posA.y + (posB.y - posA.y) * p.progress;
        const perpX = -(posB.y - posA.y);
        const perpY = posB.x - posA.x;
        const len = Math.sqrt(perpX * perpX + perpY * perpY) || 1;
        const ox = x + (perpX / len) * p.offset;
        const oy = y + (perpY / len) * p.offset;

        const maxP = Math.max(za.paradox, zb.paradox);
        const pr = maxP > 0.5 ? 239 : 150;
        const pg = maxP > 0.5 ? 100 : 200;
        const pb = maxP > 0.5 ? 80 : 255;

        ctx.beginPath();
        ctx.arc(ox, oy, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${pr},${pg},${pb},${particleAlpha * 0.5})`;
        ctx.fill();
      }

      // ─── PARADOX EVENT BLOOMS (variant) ───
      if (variants.events) {
        for (const zone of ZONES) {
          if (zone.paradox < 0.6) continue;
          const pos = project(zone.wx, zone.wy, t, cx, cy, scale);
          const bloomR = scale * 0.8 + zone.paradox * scale * 0.6;
          const pulse = 0.7 + 0.3 * Math.sin(time * 2.5 + zone.wx);
          const [r, g, b] = zone.color;

          // Outer bloom
          const grad = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, bloomR);
          grad.addColorStop(0, `rgba(${r},${g},${b},${0.12 * pulse})`);
          grad.addColorStop(0.4, `rgba(${r},${g},${b},${0.05 * pulse})`);
          grad.addColorStop(1, "transparent");
          ctx.fillStyle = grad;
          ctx.beginPath(); ctx.arc(pos.x, pos.y, bloomR, 0, Math.PI * 2); ctx.fill();

          // Distortion rings
          ctx.strokeStyle = `rgba(${r},${g},${b},${0.08 * pulse})`;
          ctx.lineWidth = 1;
          for (let ring = 1; ring <= 3; ring++) {
            const rr = bloomR * 0.3 * ring + Math.sin(time * 2 + ring) * 4;
            ctx.beginPath(); ctx.arc(pos.x, pos.y, rr, 0, Math.PI * 2); ctx.stroke();
          }
        }
      }

      // ─── ZONE NODES ───
      // Sort by wy for depth in iso
      const sorted = [...ZONES].sort((a, b) => {
        const pa = project(a.wx, a.wy, t, cx, cy, scale);
        const pb = project(b.wx, b.wy, t, cx, cy, scale);
        return pa.y - pb.y;
      });

      for (const zone of sorted) {
        const pos = project(zone.wx, zone.wy, t, cx, cy, scale);
        const isSel = selected === zone.id;
        const isHov = hovering === zone.id;
        const isOwn = zone.owner === "You";
        const [r, g, b] = zone.color;
        const p = zone.paradox;

        // Node size adapts to lens
        const baseSize = 10 + zone.agents * 0.15;
        const nodeW = baseSize + lerp(0, 12, t); // wider in iso
        const nodeH = baseSize + lerp(0, -2, t); // flatter in iso

        // ─── ISO: plate/plinth style ───
        if (t > 0.1) {
          const plateAlpha = t * 0.6;
          const depth = 4 + t * 6;

          // Shadow
          ctx.fillStyle = `rgba(0,0,0,${0.15 * t})`;
          ctx.beginPath();
          ctx.ellipse(pos.x + 2, pos.y + depth + 2, nodeW + 2, nodeH * 0.6, 0, 0, Math.PI * 2);
          ctx.fill();

          // Side face
          ctx.fillStyle = `rgba(${Math.floor(r*0.4)},${Math.floor(g*0.4)},${Math.floor(b*0.4)},${plateAlpha})`;
          ctx.beginPath();
          ctx.moveTo(pos.x - nodeW, pos.y);
          ctx.lineTo(pos.x - nodeW, pos.y + depth);
          ctx.ellipse(pos.x, pos.y + depth, nodeW, nodeH * 0.6, 0, Math.PI, 0);
          ctx.lineTo(pos.x + nodeW, pos.y);
          ctx.fill();

          // Top face
          ctx.fillStyle = `rgba(${r},${g},${b},${0.12 + plateAlpha * 0.1})`;
          ctx.strokeStyle = `rgba(${r},${g},${b},${0.3 + (isSel ? 0.5 : isHov ? 0.3 : 0)})`;
          ctx.lineWidth = isSel ? 2 : 1.2;
          ctx.beginPath();
          ctx.ellipse(pos.x, pos.y, nodeW, nodeH * 0.6, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          // Landmark hint (iso stronger)
          if (t > 0.4) {
            const lmH = 8 + zone.agents * 0.15;
            ctx.fillStyle = `rgba(${r},${g},${b},${t * 0.4})`;
            ctx.fillRect(pos.x - 2, pos.y - lmH, 4, lmH);
            ctx.fillRect(pos.x - 4, pos.y - lmH, 8, 3);
          }
        }

        // ─── TOP-DOWN: diamond node ───
        if (t < 0.9) {
          const tdAlpha = 1 - t;
          const ns = baseSize;

          // Jitter for high paradox
          let jx = 0, jy = 0;
          if (p > 0.6) {
            jx = (Math.random() - 0.5) * p * 3;
            jy = (Math.random() - 0.5) * p * 3;
          }

          // Diamond shape
          ctx.fillStyle = `rgba(${r},${g},${b},${(0.12 + p * 0.15) * tdAlpha})`;
          ctx.strokeStyle = `rgba(${r},${g},${b},${(isSel ? 1 : isHov ? 0.7 : 0.35 + p * 0.35) * tdAlpha})`;
          ctx.lineWidth = isSel ? 2.5 : 1.5;
          ctx.beginPath();
          ctx.moveTo(pos.x + jx, pos.y - ns + jy);
          ctx.lineTo(pos.x + ns + jx, pos.y + jy);
          ctx.lineTo(pos.x + jx, pos.y + ns + jy);
          ctx.lineTo(pos.x - ns + jx, pos.y + jy);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();

          // Chromatic aberration for warped zones
          if (p > 0.6 && variants.events) {
            const off = p * 3;
            ctx.globalAlpha = p * 0.25 * tdAlpha;
            ctx.strokeStyle = `rgba(0,180,255,0.6)`;
            ctx.beginPath();
            ctx.moveTo(pos.x - off, pos.y - ns); ctx.lineTo(pos.x + ns - off, pos.y);
            ctx.lineTo(pos.x - off, pos.y + ns); ctx.lineTo(pos.x - ns - off, pos.y); ctx.closePath();
            ctx.stroke();
            ctx.strokeStyle = `rgba(255,50,50,0.6)`;
            ctx.beginPath();
            ctx.moveTo(pos.x + off, pos.y - ns); ctx.lineTo(pos.x + ns + off, pos.y);
            ctx.lineTo(pos.x + off, pos.y + ns); ctx.lineTo(pos.x - ns + off, pos.y); ctx.closePath();
            ctx.stroke();
            ctx.globalAlpha = 1;
          }

          // Center pip
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r},${g},${b},${0.7 * tdAlpha})`;
          ctx.fill();
        }

        // ─── OWNERSHIP INDICATOR ───
        if (isOwn) {
          const dotY = t > 0.5 ? pos.y - (8 + zone.agents * 0.15 + t * 8) : pos.y - baseSize - 6;
          ctx.beginPath();
          ctx.arc(pos.x, dotY, 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgb(${r},${g},${b})`;
          ctx.fill();
          ctx.save();
          ctx.shadowColor = `rgb(${r},${g},${b})`;
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.restore();
        }

        // ─── SELECTION RING ───
        if (isSel) {
          const ringR = baseSize + 10;
          ctx.setLineDash([4, 4]);
          ctx.lineDashOffset = -time * 20;
          ctx.strokeStyle = `rgba(${r},${g},${b},0.5)`;
          ctx.lineWidth = 1;
          if (t > 0.5) {
            ctx.beginPath();
            ctx.ellipse(pos.x, pos.y, ringR + 4, (ringR + 4) * 0.55, 0, 0, Math.PI * 2);
            ctx.stroke();
          } else {
            ctx.beginPath();
            ctx.moveTo(pos.x, pos.y - ringR); ctx.lineTo(pos.x + ringR, pos.y);
            ctx.lineTo(pos.x, pos.y + ringR); ctx.lineTo(pos.x - ringR, pos.y); ctx.closePath();
            ctx.stroke();
          }
          ctx.setLineDash([]);
        }

        // ─── LABELS ───
        if (isSel || isHov) {
          const labelY = t > 0.5 ? pos.y + nodeH * 0.6 + 14 + t * 8 : pos.y + baseSize + 16;
          ctx.font = "600 11px 'JetBrains Mono', monospace";
          ctx.textAlign = "center";
          ctx.fillStyle = `rgba(${r},${g},${b},0.9)`;
          ctx.fillText(zone.name, pos.x, labelY);
          ctx.font = "400 9px 'JetBrains Mono', monospace";
          ctx.fillStyle = "rgba(255,255,255,0.4)";
          const sub = `${zone.principle} · ${zone.agents} agt · ${zone.stability}%${p > 0.5 ? " · ⚠ PARADOX" : ""}`;
          ctx.fillText(sub, pos.x, labelY + 13);
        }
      }

      // ─── SCANLINE (paradox active) ───
      if (variants.events && ZONES.some(z => z.paradox > 0.7)) {
        const scanY = ((time * 60) % h);
        ctx.strokeStyle = "rgba(239,68,68,0.025)";
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(0, scanY); ctx.lineTo(w, scanY); ctx.stroke();
      }

      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);
    return () => cancelAnimationFrame(raf);
  }, [selected, hovering, variants]);

  // ─── DETAIL PANEL ───
  const selZone = selected ? getZone(selected) : null;

  return (
    <div style={{ width: "100%", height: "100vh", background: "#0b0b12", position: "relative", overflow: "hidden", fontFamily: "'JetBrains Mono', 'SF Mono', monospace" }}>
      <canvas ref={canvasRef}
        onClick={handleClick}
        onMouseMove={handleMove}
        onMouseDown={handleDown}
        onMouseUp={handleUp}
        onMouseLeave={handleUp}
        onWheel={handleWheel}
        style={{ width: "100%", height: "100%", display: "block" }}
      />

      {/* ─── TOP BAR ─── */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 44,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 16px", background: "rgba(11,11,18,0.85)", backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.04)", zIndex: 50,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 7, height: 7, transform: "rotate(45deg)", background: "#EC4899", boxShadow: "0 0 8px rgba(236,72,153,0.4)" }} />
          <span style={{ fontSize: 12, color: "#fafafa", fontWeight: 700 }}>COSMIC PRINCIPLES</span>
          <span style={{ fontSize: 9, color: "#3f3f46" }}>WORLD LATTICE</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 9 }}>
          <span style={{ color: "#52525b" }}>{ZONES.length} zones · {ZONES.reduce((s, z) => s + z.agents, 0)} agents</span>
          {ZONES.some(z => z.paradox > 0.7) && (
            <span style={{ color: "#EF4444", fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ display: "inline-block", width: 5, height: 5, borderRadius: "50%", background: "#EF4444", animation: "pulse 1.2s ease-in-out infinite" }} />
              PARADOX ACTIVE
            </span>
          )}
        </div>
      </div>

      {/* ─── LENS CONTROL ─── */}
      <div style={{
        position: "absolute", top: 56, left: "50%", transform: "translateX(-50%)",
        display: "flex", alignItems: "center", gap: 12,
        background: "rgba(11,11,18,0.85)", backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.06)", borderRadius: 8,
        padding: "8px 16px", zIndex: 50,
      }}>
        <button onClick={() => setTargetT(0)} style={{
          background: "none", border: "none", cursor: "pointer",
          fontSize: 9, color: targetT < 0.5 ? "#fafafa" : "#52525b", fontFamily: "inherit", fontWeight: 600,
          letterSpacing: "0.06em", padding: "2px 6px", borderRadius: 4,
          background: targetT < 0.5 ? "rgba(255,255,255,0.06)" : "transparent",
        }}>
          STRATEGIC
        </button>
        <div style={{ position: "relative", width: 120, height: 4, background: "rgba(255,255,255,0.08)", borderRadius: 2, cursor: "pointer" }}
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setTargetT(Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)));
          }}
        >
          <div style={{
            position: "absolute", top: -4, left: `${lensT * 100}%`, transform: "translateX(-50%)",
            width: 12, height: 12, borderRadius: "50%",
            background: "#fafafa", boxShadow: "0 0 8px rgba(255,255,255,0.3)",
            transition: "none",
          }} />
          <div style={{
            width: `${lensT * 100}%`, height: "100%", borderRadius: 2,
            background: "rgba(255,255,255,0.15)",
          }} />
        </div>
        <button onClick={() => setTargetT(1)} style={{
          background: "none", border: "none", cursor: "pointer",
          fontSize: 9, color: targetT > 0.5 ? "#fafafa" : "#52525b", fontFamily: "inherit", fontWeight: 600,
          letterSpacing: "0.06em", padding: "2px 6px", borderRadius: 4,
          background: targetT > 0.5 ? "rgba(255,255,255,0.06)" : "transparent",
        }}>
          WORLD
        </button>
      </div>

      {/* ─── VARIANT TOGGLES ─── */}
      <div style={{
        position: "absolute", bottom: 16, left: 16,
        display: "flex", gap: 6, zIndex: 50,
      }}>
        {[
          { key: "events", label: "Events", color: "#EF4444" },
          { key: "motifs", label: "Motifs", color: "#8B5CF6" },
          { key: "coherence", label: "Borders", color: "#F59E0B" },
          { key: "scars", label: "Scars", color: "#EC4899" },
        ].map(v => (
          <button key={v.key}
            onClick={() => setVariants(prev => ({ ...prev, [v.key]: !prev[v.key] }))}
            style={{
              padding: "5px 10px", borderRadius: 4, cursor: "pointer",
              background: variants[v.key] ? `${v.color}15` : "rgba(255,255,255,0.03)",
              border: `1px solid ${variants[v.key] ? v.color + "40" : "rgba(255,255,255,0.06)"}`,
              color: variants[v.key] ? v.color : "#52525b",
              fontSize: 9, fontFamily: "inherit", fontWeight: 500,
            }}
          >
            {v.label}
          </button>
        ))}
      </div>

      {/* ─── LEGEND ─── */}
      <div style={{
        position: "absolute", bottom: 16, right: selected ? 272 : 16,
        display: "flex", gap: 14, alignItems: "center",
        fontSize: 8, color: "#3f3f46", zIndex: 50,
        transition: "right 0.3s ease",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <div style={{ width: 7, height: 7, transform: "rotate(45deg)", border: "1px solid rgba(100,160,220,0.5)", background: "rgba(100,160,220,0.1)" }} />
          <span>Calm</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <div style={{ width: 7, height: 7, transform: "rotate(45deg)", border: "1px solid rgba(245,158,11,0.7)", background: "rgba(245,158,11,0.15)" }} />
          <span>Tense</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <div style={{ width: 7, height: 7, transform: "rotate(45deg)", border: "1px solid rgba(239,68,68,0.9)", background: "rgba(239,68,68,0.2)", boxShadow: "0 0 4px rgba(239,68,68,0.3)" }} />
          <span>Warped</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#fafafa" }} />
          <span>You</span>
        </div>
      </div>

      {/* ─── DETAIL PANEL ─── */}
      {selZone && (
        <div style={{
          position: "absolute", right: 16, top: 56, width: 240,
          background: "rgba(11,11,18,0.88)", backdropFilter: "blur(16px)",
          border: `1px solid rgba(${selZone.color.join(",")},0.2)`,
          borderRadius: 6, overflow: "hidden", zIndex: 100,
          animation: "fadeIn 0.2s ease",
        }}>
          <div style={{ height: 2, background: selZone.paradox > 0.5 ? `repeating-linear-gradient(90deg, rgb(${selZone.color.join(",")}) 0px, rgb(${selZone.color.join(",")}) 3px, transparent 3px, transparent 6px)` : `rgb(${selZone.color.join(",")})`, opacity: selZone.paradox > 0.5 ? 0.8 : 0.4 }} />
          <div style={{ padding: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ fontSize: 13, color: "#fafafa", fontWeight: 700 }}>{selZone.name}</div>
                <div style={{ fontSize: 9, color: `rgb(${selZone.color.join(",")})`, marginTop: 2, textTransform: "uppercase", letterSpacing: "0.1em" }}>{selZone.principle}</div>
              </div>
              <button onClick={() => setSelected(null)} style={{ background: "none", border: "none", color: "#52525b", cursor: "pointer", fontSize: 14, padding: 0 }}>✕</button>
            </div>
            <div style={{ height: 1, background: "rgba(255,255,255,0.06)", margin: "12px 0" }} />

            <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
              {[
                { label: "PARADOX", value: selZone.paradox > 0.7 ? "WARPED" : selZone.paradox > 0.3 ? "TENSE" : "CALM", color: selZone.paradox > 0.7 ? "#EF4444" : selZone.paradox > 0.3 ? "#F59E0B" : "#10B981" },
                { label: "TERRITORY", value: selZone.stability < 30 ? "COLLAPSING" : selZone.owner === "Contested" ? "CONTESTED" : "COHERENT", color: selZone.stability < 30 ? "#EF4444" : selZone.owner === "Contested" ? "#F59E0B" : "#10B981" },
              ].map(s => (
                <div key={s.label} style={{ flex: 1, padding: "7px 8px", background: `${s.color}10`, border: `1px solid ${s.color}25`, borderRadius: 4, textAlign: "center" }}>
                  <div style={{ fontSize: 8, color: "#71717a", marginBottom: 2 }}>{s.label}</div>
                  <div style={{ fontSize: 10, color: s.color, fontWeight: 600 }}>{s.value}</div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontSize: 9, color: "#71717a" }}>Stability</span>
                  <span style={{ fontSize: 10, color: selZone.stability > 70 ? "#10B981" : selZone.stability > 40 ? "#F59E0B" : "#EF4444", fontWeight: 600 }}>{selZone.stability}%</span>
                </div>
                <div style={{ height: 3, background: "#1a1a2e", borderRadius: 2 }}>
                  <div style={{ width: `${selZone.stability}%`, height: "100%", borderRadius: 2, background: selZone.stability > 70 ? "#10B981" : selZone.stability > 40 ? "#F59E0B" : "#EF4444" }} />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: 9, color: "#71717a" }}>Agents</span>
                <span style={{ fontSize: 10, color: "#e4e4e7" }}>{selZone.agents}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: 9, color: "#71717a" }}>Controller</span>
                <span style={{ fontSize: 10, fontWeight: 600, color: selZone.owner === "You" ? `rgb(${selZone.color.join(",")})` : selZone.owner === "Contested" ? "#EF4444" : "#e4e4e7" }}>{selZone.owner}</span>
              </div>
              {selZone.paradox > 0.5 && (
                <div style={{ marginTop: 4, padding: "7px 10px", background: "#EF444410", border: "1px solid #EF444425", borderRadius: 4, fontSize: 9, color: "#EF4444", display: "flex", alignItems: "center", gap: 6 }}>
                  <span>⚠</span><span>Decay ×{selZone.paradox > 0.8 ? "3" : "2"} — Integrity draining</span>
                </div>
              )}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 16 }}>
              <button style={{ padding: "9px 0", borderRadius: 4, background: `rgba(${selZone.color.join(",")},0.12)`, border: `1px solid rgba(${selZone.color.join(",")},0.3)`, color: `rgb(${selZone.color.join(",")})`, fontSize: 10, fontFamily: "inherit", cursor: "pointer", fontWeight: 600, letterSpacing: "0.05em" }}>
                DEPLOY AGENTS
              </button>
              <button style={{ padding: "9px 0", borderRadius: 4, background: "transparent", border: "1px solid rgba(255,255,255,0.08)", color: "#71717a", fontSize: 10, fontFamily: "inherit", cursor: "pointer" }}>
                VIEW SKILL STORMS
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        button:hover { filter: brightness(1.15); }
      `}</style>
    </div>
  );
}
