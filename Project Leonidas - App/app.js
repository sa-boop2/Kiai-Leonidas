/**
 * Project Leonidas: Titan Transformation Protocol (62kg → 80kg)
 * Professional Modern Roadmap Engine
 * Intelligent Progression Ranks & Ripple Engine
 */

const DEFAULT_PROTOCOL_PHASES = [
  {
    id: 0,
    name: "Phase 0 — Mini-Cut",
    type: "CUT",
    period: "Jun → Aug 2026",
    weeks: "10 Weeks",
    targetWeight: 57.0,
    targetBF: 11.0,
    targetLBM: 49.5,
    actualWeight: null,
    actualBF: null,
    actualLBM: null,
    status: "ACTIVE",
    rate: "−0.4 to −0.5 kg / wk",
    cals: "400–600 kcal deficit below TDEE",
    desc: "Initial reset phase. Drop visceral fat and optimize insulin sensitivity before embarking on Bulk I.",
    notes: ""
  },
  {
    id: 1,
    name: "Bulk I",
    type: "BULK",
    period: "Sep 2026 → Mar 2027",
    weeks: "28 Weeks",
    targetWeight: 67.5,
    targetBF: 18.0,
    targetLBM: 55.0,
    actualWeight: null,
    actualBF: null,
    actualLBM: null,
    status: "UPCOMING",
    rate: "+0.3 to +0.4 kg / wk",
    cals: "Start at listed surplus, add +100-150 kcal if weight stalls 2-3 wks",
    desc: "First primary muscle foundation block. Controlled gain to minimize fat gain strictly under 18% ceiling.",
    notes: ""
  },
  {
    id: 2,
    name: "Cut I",
    type: "CUT",
    period: "Apr → Jul 2027",
    weeks: "13 Weeks",
    targetWeight: 62.0,
    targetBF: 11.0,
    targetLBM: 54.7,
    actualWeight: null,
    actualBF: null,
    actualLBM: null,
    status: "UPCOMING",
    rate: "−0.4 to −0.5 kg / wk",
    cals: "400–600 kcal deficit below TDEE",
    desc: "Strip fat gained during Bulk I while preserving all newly forged lean muscle tissue.",
    notes: ""
  },
  {
    id: 3,
    name: "Bulk II",
    type: "BULK",
    period: "Jul 2027 → Feb 2028",
    weeks: "30 Weeks",
    targetWeight: 73.5,
    targetBF: 18.0,
    targetLBM: 59.2,
    actualWeight: null,
    actualBF: null,
    actualLBM: null,
    status: "UPCOMING",
    rate: "+0.3 to +0.4 kg / wk",
    cals: "Start at listed surplus, add +100-150 kcal if weight stalls 2-3 wks",
    desc: "Second major expansion block building formidable intermediate muscular frame size.",
    notes: ""
  },
  {
    id: 4,
    name: "Cut II",
    type: "CUT",
    period: "Mar → Jun 2028",
    weeks: "14 Weeks",
    targetWeight: 67.0,
    targetBF: 11.0,
    targetLBM: 58.9,
    actualWeight: null,
    actualBF: null,
    actualLBM: null,
    status: "UPCOMING",
    rate: "−0.4 to −0.5 kg / wk",
    cals: "400–600 kcal deficit below TDEE",
    desc: "Reveal deep abdominal etching and vascularity. Never diet in deficit over 14 straight weeks.",
    notes: ""
  },
  {
    id: 5,
    name: "Bulk III",
    type: "BULK",
    period: "Jun 2028 → Feb 2029",
    weeks: "32 Weeks",
    targetWeight: 79.0,
    targetBF: 18.0,
    targetLBM: 62.4,
    actualWeight: null,
    actualBF: null,
    actualLBM: null,
    status: "UPCOMING",
    rate: "+0.3 to +0.35 kg / wk",
    cals: "Start at listed surplus, add +100-150 kcal if weight stalls 2-3 wks",
    desc: "Heavy compound loading campaign. Focus on progressive overload on all foundational lifts.",
    notes: ""
  },
  {
    id: 6,
    name: "Cut III",
    type: "CUT",
    period: "Feb → May 2029",
    weeks: "14 Weeks",
    targetWeight: 72.0,
    targetBF: 11.0,
    targetLBM: 62.1,
    actualWeight: null,
    actualBF: null,
    actualLBM: null,
    status: "UPCOMING",
    rate: "−0.4 to −0.5 kg / wk",
    cals: "400–600 kcal deficit below TDEE",
    desc: "Shred down to lean peak condition while maintaining heavy lifting intensity.",
    notes: ""
  },
  {
    id: 7,
    name: "Bulk IV (Final)",
    type: "BULK",
    period: "Jun 2029 → Feb 2030",
    weeks: "34 Weeks",
    targetWeight: 82.5,
    targetBF: 18.0,
    targetLBM: 64.6,
    actualWeight: null,
    actualBF: null,
    actualLBM: null,
    status: "UPCOMING",
    rate: "+0.25 to +0.35 kg / wk",
    cals: "Start at listed surplus, add +100-150 kcal if weight stalls 2-3 wks",
    desc: "The final mass accretion campaign pushing total frame weight over the 80kg titan threshold.",
    notes: ""
  },
  {
    id: 8,
    name: "Final Titan Cut",
    type: "CUT",
    period: "Feb → May 2030",
    weeks: "14 Weeks",
    targetWeight: 77.5,
    targetBF: 10.0,
    targetLBM: 69.0,
    actualWeight: null,
    actualBF: null,
    actualLBM: null,
    status: "UPCOMING",
    rate: "−0.4 to −0.5 kg / wk",
    cals: "400–600 kcal deficit below TDEE",
    desc: "The ultimate culmination: 77.5kg @ 10% BF (+18.2kg pure lean muscle). Final goal unlocked.",
    notes: ""
  }
];

const SPARTAN_RANKS = [
  { rank: "I", title: "Neophyte", minLBM: 0, icon: "🛡️", desc: "Starting baseline. Building foundational training discipline." },
  { rank: "II", title: "Agoge Cadet", minLBM: 49.0, icon: "⚔️", desc: "Visceral fat cleared. The body is primed for Bulk I." },
  { rank: "III", title: "Hoplite", minLBM: 54.0, icon: "🥋", desc: "Established muscle foundation. Solid physique structure." },
  { rank: "IV", title: "Captain", minLBM: 58.0, icon: "🏛️", desc: "Commanding intermediate muscle size and physical poise." },
  { rank: "V", title: "Commander", minLBM: 61.5, icon: "🦁", desc: "Heavy compound master commanding serious physical presence." },
  { rank: "VI", title: "General", minLBM: 64.0, icon: "🦅", desc: "Crossed 80kg frame threshold. Advanced natural strength." },
  { rank: "VII", title: "Titan Goal", minLBM: 68.5, icon: "👑", desc: "The ultimate culmination: 77.5kg @ 10% BF. Calm, lethal identity." }
];

const TRAINING_SPLIT_PRESETS = {
  upperLower: [
    { day: "Monday", focus: "Upper A", color: "#38bdf8" },
    { day: "Tuesday", focus: "Lower A", color: "#34d399" },
    { day: "Wednesday", focus: "Tai Chi", color: "#f43f5e" },
    { day: "Thursday", focus: "Upper B", color: "#38bdf8" },
    { day: "Friday", focus: "Lower B", color: "#34d399" },
    { day: "Saturday", focus: "Rest", color: "#94a3b8" },
    { day: "Sunday", focus: "Rest", color: "#94a3b8" }
  ],
  ppl: [
    { day: "Monday", focus: "Push (Chest/Delts/Tri)", color: "#f59e0b" },
    { day: "Tuesday", focus: "Pull (Back/Rear Delts/Bi)", color: "#38bdf8" },
    { day: "Wednesday", focus: "Legs & Tai Chi", color: "#34d399" },
    { day: "Thursday", focus: "Push (Hypertrophy)", color: "#f59e0b" },
    { day: "Friday", focus: "Pull (Hypertrophy)", color: "#38bdf8" },
    { day: "Saturday", focus: "Legs (Quads/Hams)", color: "#34d399" },
    { day: "Sunday", focus: "Total Rest", color: "#94a3b8" }
  ],
  fullbody: [
    { day: "Monday", focus: "Spartan Full Body A", color: "#fbbf24" },
    { day: "Tuesday", focus: "Tai Chi & Core Mobility", color: "#f43f5e" },
    { day: "Wednesday", focus: "Spartan Full Body B", color: "#fbbf24" },
    { day: "Thursday", focus: "Conditioning / Cardio", color: "#38bdf8" },
    { day: "Friday", focus: "Spartan Full Body C", color: "#fbbf24" },
    { day: "Saturday", focus: "Deep Stretching", color: "#34d399" },
    { day: "Sunday", focus: "Total Rest", color: "#94a3b8" }
  ],
  bro: [
    { day: "Monday", focus: "Chest & Calves", color: "#f59e0b" },
    { day: "Tuesday", focus: "Back & Abs", color: "#38bdf8" },
    { day: "Wednesday", focus: "Shoulders & Tai Chi", color: "#a855f7" },
    { day: "Thursday", focus: "Arms (Biceps/Triceps)", color: "#ec4899" },
    { day: "Friday", focus: "Legs (Heavy Squats)", color: "#34d399" },
    { day: "Saturday", focus: "Weak Point Focus", color: "#fbbf24" },
    { day: "Sunday", focus: "Rest", color: "#94a3b8" }
  ]
};

const STORAGE_KEY = "leonidas_stoic_protocol_v4";
const THEME_KEY = "leonidas_theme_pref";

class ModernRoadmapApp {
  constructor() {
    this.state = {
      activeView: "dashboard",
      activePhaseId: 0,
      theme: "dark",
      phases: [],
      trainingSplit: "upperLower",
      activeContingency: null
    };
  }

  init() {
    this.loadState();
    this.applyTheme(this.state.theme);
    this.setupEventListeners();
    this.renderAll();
  }

  loadState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        this.state.activePhaseId = parsed.activePhaseId ?? 0;
        this.state.phases = parsed.phases ?? JSON.parse(JSON.stringify(DEFAULT_PROTOCOL_PHASES));
        this.state.trainingSplit = parsed.trainingSplit || "upperLower";
        this.state.activeContingency = parsed.activeContingency || null;
      } catch (err) {
        this.resetBaselineData();
      }
    } else {
      this.resetBaselineData();
    }

    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme) {
      this.state.theme = savedTheme;
    }
  }

  saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      activePhaseId: this.state.activePhaseId,
      phases: this.state.phases,
      trainingSplit: this.state.trainingSplit,
      activeContingency: this.state.activeContingency
    }));
  }

  resetBaselineData() {
    if (confirm("Reset all custom measurements and actuals back to original PDF baseline?")) {
      this.state.activePhaseId = 0;
      this.state.phases = JSON.parse(JSON.stringify(DEFAULT_PROTOCOL_PHASES));
      this.saveState();
      this.renderAll();
    }
  }

  toggleTheme() {
    this.state.theme = this.state.theme === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, this.state.theme);
    this.applyTheme(this.state.theme);
  }

  applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const icon = document.getElementById("sidebarThemeIcon");
    const text = document.getElementById("sidebarThemeText");
    if (icon && text) {
      icon.textContent = theme === "dark" ? "☀️" : "🌙";
      text.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
    }
  }

  setupEventListeners() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        document.querySelectorAll(".modal-overlay.active").forEach(m => m.classList.remove("active"));
      }
    });
  }

  navigate(viewId) {
    this.state.activeView = viewId;

    document.querySelectorAll(".view-section").forEach(sec => {
      sec.classList.toggle("active", sec.id === `view-${viewId}`);
    });

    document.querySelectorAll(".nav-btn").forEach(btn => {
      const isActive = btn.id === `nav-${viewId}`;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-selected", isActive);
    });

    document.querySelectorAll(".bottom-nav-item").forEach(btn => {
      btn.classList.toggle("active", btn.id === `bot-${viewId}`);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add("active");
      if (modalId === "phaseModal") {
        this.renderPhaseSelectorModal();
      }
    }
  }

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove("active");
  }

  openEditModal(phaseId) {
    const p = this.state.phases[phaseId];
    if (!p) return;

    document.getElementById("editPhaseId").value = p.id;
    document.getElementById("editModalTag").textContent = `PHASE ${p.id} — ${p.type}`;
    document.getElementById("editModalTag").className = `phase-tag ${p.type === "CUT" ? "cut" : ""}`;
    document.getElementById("modalEditTitle").textContent = `${p.name} Configuration`;
    
    document.getElementById("editStatus").value = p.status || "UPCOMING";
    document.getElementById("editTargetWeight").value = p.targetWeight;
    document.getElementById("editTargetBF").value = p.targetBF;
    document.getElementById("editActualWeight").value = p.actualWeight ?? "";
    document.getElementById("editActualBF").value = p.actualBF ?? "";
    document.getElementById("editNotes").value = p.notes || "";

    this.openModal("editModal");
  }

  handleEditSubmit(e) {
    e.preventDefault();
    const phaseId = parseInt(document.getElementById("editPhaseId").value);
    const p = this.state.phases[phaseId];
    if (!p) return;

    const newStatus = document.getElementById("editStatus").value;
    const tWeight = parseFloat(document.getElementById("editTargetWeight").value);
    const tBF = parseFloat(document.getElementById("editTargetBF").value);
    const aWeightInput = document.getElementById("editActualWeight").value;
    const aBFInput = document.getElementById("editActualBF").value;
    const notes = document.getElementById("editNotes").value;

    p.status = newStatus;
    p.targetWeight = tWeight;
    p.targetBF = tBF;
    p.targetLBM = parseFloat((tWeight * (1 - tBF / 100)).toFixed(1));
    p.notes = notes;

    if (aWeightInput !== "" && aBFInput !== "") {
      const aW = parseFloat(aWeightInput);
      const aB = parseFloat(aBFInput);
      p.actualWeight = aW;
      p.actualBF = aB;
      p.actualLBM = parseFloat((aW * (1 - aB / 100)).toFixed(1));
    } else {
      p.actualWeight = null;
      p.actualBF = null;
      p.actualLBM = null;
    }

    if (newStatus === "ACTIVE") {
      this.state.phases.forEach(other => {
        if (other.id !== phaseId && other.status === "ACTIVE") {
          other.status = other.id < phaseId ? "COMPLETED" : "UPCOMING";
        }
      });
      this.state.activePhaseId = phaseId;
    }

    this.intelligentRippleForward(phaseId);

    this.saveState();
    this.closeModal("editModal");
    this.renderAll();
  }

  intelligentRippleForward(startIndex) {
    const current = this.state.phases[startIndex];
    if (current.actualWeight === null || current.actualBF === null) return;

    let prevLBM = current.actualLBM;

    for (let i = startIndex + 1; i < this.state.phases.length; i++) {
      const nextPhase = this.state.phases[i];
      const defaultPhase = DEFAULT_PROTOCOL_PHASES[i];
      const defaultPrevPhase = DEFAULT_PROTOCOL_PHASES[i - 1];

      const expectedDelta = defaultPhase.targetLBM - defaultPrevPhase.targetLBM;
      const newTargetLBM = prevLBM + expectedDelta;
      nextPhase.targetLBM = parseFloat(newTargetLBM.toFixed(1));

      const newTargetWeight = newTargetLBM / (1 - nextPhase.targetBF / 100);
      nextPhase.targetWeight = parseFloat(newTargetWeight.toFixed(1));

      if (nextPhase.actualLBM !== null) {
        prevLBM = nextPhase.actualLBM;
      } else {
        prevLBM = nextPhase.targetLBM;
      }
    }
  }

  setActivePhaseQuick(phaseId) {
    this.state.activePhaseId = phaseId;
    this.state.phases.forEach(p => {
      if (p.id === phaseId) p.status = "ACTIVE";
      else if (p.id < phaseId && p.status !== "COMPLETED") p.status = "COMPLETED";
      else if (p.id > phaseId && p.status === "ACTIVE") p.status = "UPCOMING";
    });
    this.saveState();
    this.closeModal("phaseModal");
    this.renderAll();
  }

  computeCurrentRankInfo() {
    let currentEffectiveLBM = 49.5;
    
    this.state.phases.forEach(p => {
      if (p.status === "COMPLETED" && p.actualLBM !== null) {
        if (p.actualLBM > currentEffectiveLBM) currentEffectiveLBM = p.actualLBM;
      } else if (p.status === "ACTIVE") {
        if (p.actualLBM !== null && p.actualLBM > currentEffectiveLBM) currentEffectiveLBM = p.actualLBM;
        else if (p.targetLBM > currentEffectiveLBM && p.id > 0) currentEffectiveLBM = p.targetLBM - 1.0;
      }
    });

    let currentRankObj = SPARTAN_RANKS[0];
    let nextRankObj = SPARTAN_RANKS[1];

    for (let i = SPARTAN_RANKS.length - 1; i >= 0; i--) {
      if (currentEffectiveLBM >= SPARTAN_RANKS[i].minLBM) {
        currentRankObj = SPARTAN_RANKS[i];
        nextRankObj = SPARTAN_RANKS[i + 1] || SPARTAN_RANKS[i];
        break;
      }
    }

    const startLBM = 49.5;
    const maxLBM = 69.0;
    let progressPct = ((currentEffectiveLBM - startLBM) / (maxLBM - startLBM)) * 100;
    if (progressPct < 0) progressPct = 0;
    if (progressPct > 100) progressPct = 100;

    return {
      currentEffectiveLBM,
      currentRankObj,
      nextRankObj,
      progressPct: Math.round(progressPct)
    };
  }

  renderAll() {
    const p = this.state.phases[this.state.activePhaseId] || this.state.phases[0];
    const rankInfo = this.computeCurrentRankInfo();

    // 1. Progression Rank Hero Banner
    document.getElementById("rankIcon").textContent = rankInfo.currentRankObj.icon;
    document.getElementById("rankTitle").textContent = `Rank ${rankInfo.currentRankObj.rank} — ${rankInfo.currentRankObj.title}`;
    document.getElementById("rankDesc").textContent = rankInfo.currentRankObj.desc;
    
    if (rankInfo.currentRankObj.rank === "VII") {
      document.getElementById("rankNextLabel").textContent = `🏆 Final Master Goal Achieved`;
    } else {
      document.getElementById("rankNextLabel").textContent = `Next: Rank ${rankInfo.nextRankObj.rank} — ${rankInfo.nextRankObj.title} (${rankInfo.nextRankObj.minLBM} kg LBM)`;
    }

    document.getElementById("rankPercentVal").textContent = `${rankInfo.progressPct}% Progression`;
    document.getElementById("rankProgressBar").style.width = `${rankInfo.progressPct}%`;

    // 2. Centerpiece Active Focus Card
    const tagEl = document.getElementById("centralPhaseTag");
    tagEl.textContent = `PHASE ${p.id} — ${p.type}`;
    tagEl.className = `phase-tag ${p.type === "CUT" ? "cut" : ""}`;
    
    document.getElementById("centralPhaseTitle").textContent = p.name;
    document.getElementById("centralPhaseDesc").textContent = p.desc;
    document.getElementById("centralPhaseGoal").textContent = `${p.targetWeight.toFixed(1)} kg @ ${p.targetBF.toFixed(1)}% BF`;
    document.getElementById("centralPhaseLBM").textContent = `Target Lean Body Mass: ${p.targetLBM.toFixed(1)} kg`;

    const actualValEl = document.getElementById("centralPhaseActual");
    const actualLbmEl = document.getElementById("centralActualLBM");
    if (p.actualWeight !== null && p.actualBF !== null) {
      actualValEl.textContent = `${p.actualWeight.toFixed(1)} kg @ ${p.actualBF.toFixed(1)}% BF`;
      actualLbmEl.textContent = `Actual Lean Body Mass: ${p.actualLBM.toFixed(1)} kg`;
    } else {
      actualValEl.textContent = `Pending Review (Click Log)`;
      actualLbmEl.textContent = `Actual Lean Body Mass: Pending`;
    }

    const rateEl = document.getElementById("centralPhaseRate");
    rateEl.textContent = p.rate;
    rateEl.style.color = p.type === "CUT" ? "var(--crimson)" : "var(--emerald)";
    document.getElementById("centralPhaseCals").textContent = p.cals;
    document.getElementById("centralPhaseWks").textContent = `${p.weeks} (${p.period})`;

    // 3. Master Roadmap Table
    this.renderRoadmapTable();

    // 4. Ranks Gallery
    this.renderRanksGallery(rankInfo.currentRankObj.rank);

    // 5. Training Split & Contingency
    this.renderTrainingSplit();
    this.renderContingencyBanner();
  }

  changeTrainingSplit(val) {
    this.state.trainingSplit = val;
    this.saveState();
    this.renderTrainingSplit();
  }

  renderTrainingSplit() {
    const splitEl = document.getElementById('trainingSplitBody');
    const selEl = document.getElementById('trainingSplitSelector');
    if (selEl) selEl.value = this.state.trainingSplit;
    if (!splitEl) return;
    const rows = TRAINING_SPLIT_PRESETS[this.state.trainingSplit] || TRAINING_SPLIT_PRESETS.upperLower;
    splitEl.innerHTML = rows.map(r => `
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
        <td style="padding: 6px 8px; font-weight: 700; color: var(--text-primary);">${r.day}</td>
        <td style="padding: 6px 8px; color: ${r.color}; font-weight: 700;">${r.focus}</td>
      </tr>
    `).join('');
  }

  selectContingency(sit, act) {
    this.state.activeContingency = { situation: sit, action: act };
    this.saveState();
    this.renderContingencyBanner();
  }

  clearContingency() {
    this.state.activeContingency = null;
    this.saveState();
    this.renderContingencyBanner();
  }

  renderContingencyBanner() {
    const banner = document.getElementById('activeContingencyBanner');
    if (!banner) return;
    if (this.state.activeContingency) {
      document.getElementById('pinnedContingencyTitle').textContent = this.state.activeContingency.situation;
      document.getElementById('pinnedContingencyAction').textContent = this.state.activeContingency.action;
      banner.style.display = 'flex';
    } else {
      banner.style.display = 'none';
    }
  }

  renderRoadmapTable() {
    const tbody = document.getElementById("roadmapTableBody");
    if (!tbody) return;

    tbody.innerHTML = this.state.phases.map(p => {
      const isCurrent = p.id === this.state.activePhaseId;
      const tagClass = p.type === "CUT" ? "phase-tag cut" : "phase-tag";
      
      let statusText = "⏳ Upcoming";
      if (p.status === "ACTIVE") statusText = "⚡ Active";
      else if (p.status === "COMPLETED") statusText = "✓ Completed";

      let actualDisplay = `<span style="color: var(--text-tertiary);">—</span>`;
      if (p.actualWeight !== null) {
        actualDisplay = `<strong style="color: var(--emerald);">${p.actualWeight.toFixed(1)} kg @ ${p.actualBF.toFixed(1)}%</strong>`;
      }

      return `
        <tr class="${isCurrent ? "active-phase" : ""}">
          <td><strong style="${isCurrent ? "color: var(--gold);" : ""}">${p.name}</strong></td>
          <td><span class="${tagClass}">${p.type}</span></td>
          <td>${p.period}</td>
          <td><strong>${p.targetWeight.toFixed(1)} kg @ ${p.targetBF.toFixed(1)}%</strong></td>
          <td>${actualDisplay}</td>
          <td>${p.targetLBM.toFixed(1)} kg</td>
          <td style="font-weight: 700; color: ${p.type === "CUT" ? "var(--crimson)" : "var(--emerald)"};">${p.rate}</td>
          <td>
            <button class="btn ${isCurrent ? "btn-primary" : "btn-glass"}" style="padding: 6px 14px; font-size: 0.8rem;" onclick="Leonidas.openEditModal(${p.id})">
              ✏️ Log / ${statusText}
            </button>
          </td>
        </tr>
      `;
    }).join("");
  }

  renderRanksGallery(currentRankTier) {
    const container = document.getElementById("ranksGalleryBox");
    if (!container) return;

    const tierIndices = { "I": 1, "II": 2, "III": 3, "IV": 4, "V": 5, "VI": 6, "VII": 7 };
    const currentIdx = tierIndices[currentRankTier] || 1;

    container.innerHTML = SPARTAN_RANKS.map(r => {
      const thisIdx = tierIndices[r.rank] || 1;
      const isUnlocked = thisIdx <= currentIdx;
      const isCurrent = r.rank === currentRankTier;

      return `
        <div class="rank-card ${isUnlocked ? "unlocked" : ""} ${isCurrent ? "current" : ""}">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 2.2rem;">${r.icon}</span>
            <span style="font-family: var(--font-header); font-size: 1.4rem; font-weight: 800; color: ${isCurrent ? "var(--gold)" : "var(--text-tertiary)"};">Rank ${r.rank}</span>
          </div>
          <div>
            <h3 style="font-family: var(--font-header); font-size: 1.2rem; font-weight: 800; color: var(--text-primary); margin-bottom: 4px;">${r.title}</h3>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--gold); text-transform: uppercase; margin-bottom: 8px;">Target: ${r.minLBM > 0 ? `${r.minLBM} kg LBM` : "Transformation Baseline"}</div>
            <p style="color: var(--text-secondary); font-size: 0.9rem;">${r.desc}</p>
          </div>
          <div style="margin-top: auto; padding-top: 12px; border-top: 1px solid var(--border-glass); font-size: 0.78rem; font-weight: 800; color: ${isCurrent ? "var(--gold)" : isUnlocked ? "var(--emerald)" : "var(--text-disabled)"}; text-transform: uppercase;">
            ${isCurrent ? "⚡ Current Status" : isUnlocked ? "✓ Achieved" : "🔒 Upcoming Target"}
          </div>
        </div>
      `;
    }).join("");
  }

  renderPhaseSelectorModal() {
    const container = document.getElementById("modalPhaseList");
    if (!container) return;

    container.innerHTML = this.state.phases.map(p => {
      const isCurrent = p.id === this.state.activePhaseId;
      return `
        <div onclick="Leonidas.setActivePhaseQuick(${p.id})" style="display: flex; justify-content: space-between; align-items: center; padding: var(--space-md); background: ${isCurrent ? "rgba(245, 179, 1, 0.15)" : "var(--bg-tertiary)"}; border: 1px solid ${isCurrent ? "var(--gold)" : "var(--border-glass)"}; border-radius: var(--radius-md); cursor: pointer; transition: all 0.2s;">
          <div>
            <div style="font-weight: 800; color: ${isCurrent ? "var(--gold)" : "var(--text-primary)"}; font-size: 1.05rem;">${p.name}</div>
            <div style="font-size: 0.85rem; color: var(--text-tertiary);">${p.period} (${p.weeks})</div>
          </div>
          <span class="phase-tag ${p.type === "CUT" ? "cut" : ""}">${p.type}</span>
        </div>
      `;
    }).join("");
  }

  evaluateQuiz() {
    const cutChecked = document.querySelectorAll(".quiz-cut:checked").length;
    const bulkChecked = document.querySelectorAll(".quiz-bulk:checked").length;

    const resBox = document.getElementById("quizResultBox");
    const resTitle = document.getElementById("quizResultTitle");
    const resText = document.getElementById("quizResultText");

    resBox.style.display = "block";

    if (bulkChecked >= 3) {
      resTitle.textContent = "🛑 CEASE BULKING — SWITCH TO CUT PHASE";
      resTitle.style.color = "var(--crimson)";
      resBox.style.borderColor = "var(--crimson)";
      resText.innerHTML = `You checked <strong>${bulkChecked} stop signals</strong> for bulking. You have reached the <strong>~18% BF ceiling</strong>. Take your mandatory <strong>2-Week Maintenance Break</strong> now, then begin your next Cut phase.`;
    } else if (cutChecked >= 3) {
      resTitle.textContent = "⚡ CUT COMPLETE — PREPARE FOR BULK PHASE";
      resTitle.style.color = "var(--emerald)";
      resBox.style.borderColor = "var(--emerald)";
      resText.innerHTML = `You checked <strong>${cutChecked} stop signals</strong> for cutting. You have reached your target lean condition (~10-11% BF). Take your mandatory <strong>2-Week Maintenance Break</strong>, then begin your next Bulk phase.`;
    } else {
      resTitle.textContent = "✓ HOLD THE LINE — CONTINUE CURRENT PHASE";
      resTitle.style.color = "var(--gold)";
      resBox.style.borderColor = "var(--gold)";
      resText.innerHTML = `You checked ${cutChecked} cutting and ${bulkChecked} bulking symptoms. None of the critical transition thresholds have been crossed. Maintain your current training and caloric targets!`;
    }
  }
}

const Leonidas = new ModernRoadmapApp();
document.addEventListener("DOMContentLoaded", () => Leonidas.init());
