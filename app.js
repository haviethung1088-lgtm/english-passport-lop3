// ============================================================
// APP LOGIC - Ho chieu hanh trinh Tieng Anh lop 3
// ============================================================

const STORAGE_PROFILE = "eaPassport_profile_v1";
const STORAGE_PROGRESS = "eaPassport_progress_v1";

let state = {
  profile: null,
  progress: {},
  currentUnitId: null,
  currentTab: "vocab",
  quiz: { list: [], index: 0, correct: 0, mode: "core" },
};

// ---------- Storage helpers ----------
// Du phong bo nho tam trong RAM neu trinh duyet chan localStorage
// (che do rieng tu, cai dat chan cookie/luu tru...)
let memoryFallback = { profile: null, progress: null };
let storageBlocked = false;

function loadProfile() {
  try { return JSON.parse(localStorage.getItem(STORAGE_PROFILE)); }
  catch (e) { storageBlocked = true; return memoryFallback.profile; }
}
function saveProfile(p) {
  memoryFallback.profile = p;
  try { localStorage.setItem(STORAGE_PROFILE, JSON.stringify(p)); }
  catch (e) { storageBlocked = true; }
}
function loadProgress() {
  try { return JSON.parse(localStorage.getItem(STORAGE_PROGRESS)) || {}; }
  catch (e) { storageBlocked = true; return memoryFallback.progress || {}; }
}
function saveProgress() {
  memoryFallback.progress = state.progress;
  try { localStorage.setItem(STORAGE_PROGRESS, JSON.stringify(state.progress)); }
  catch (e) { storageBlocked = true; }
}

function getUnitProgress(id) {
  if (!state.progress[id]) state.progress[id] = { stars: 0, coreDone: false, extDone: false };
  return state.progress[id];
}

// ---------- TTS ----------
// Danh sach giong doc, nap bat dong bo tren nhieu trinh duyet di dong
let cachedVoices = [];
let voicesReady = false;

function loadVoices() {
  if (!("speechSynthesis" in window)) return;
  const v = window.speechSynthesis.getVoices();
  if (v && v.length) {
    cachedVoices = v;
    voicesReady = true;
  }
}
if ("speechSynthesis" in window) {
  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;
}

function pickEnglishVoice() {
  if (!cachedVoices.length) return null;
  const enVoices = cachedVoices.filter(v => v.lang && v.lang.toLowerCase().startsWith("en"));
  if (!enVoices.length) return null;
  // Uu tien giong chat luong cao (Enhanced/Premium/Neural) neu may co san
  const qualityKeywords = ["enhanced", "premium", "neural", "natural", "wavenet"];
  const highQuality = enVoices.find(v =>
    qualityKeywords.some(k => (v.name || "").toLowerCase().includes(k))
  );
  if (highQuality) return highQuality;
  // Sau do uu tien giong US chuan
  return (
    enVoices.find(v => v.lang === "en-US") ||
    enVoices.find(v => v.lang.toLowerCase().startsWith("en-us")) ||
    enVoices[0]
  );
}

function speakNow(text) {
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  u.rate = 0.9;
  const voice = pickEnglishVoice();
  if (voice) u.voice = voice;
  window.speechSynthesis.speak(u);
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  if (voicesReady) {
    speakNow(text);
  } else {
    // Tren mot so trinh duyet di dong, danh sach giong chua nap kip
    // -> thu nap lai va doi toi da ~600ms truoc khi doc
    loadVoices();
    if (voicesReady) { speakNow(text); return; }
    let waited = 0;
    const timer = setInterval(() => {
      loadVoices();
      waited += 100;
      if (voicesReady || waited >= 600) {
        clearInterval(timer);
        speakNow(text);
      }
    }, 100);
  }
}

// ---------- Screen navigation ----------
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  const topbar = document.getElementById("topbar-map");
  const nav = document.querySelector(".bottom-nav");
  const hideChrome = id === "screen-login";
  topbar.style.display = hideChrome ? "none" : "flex";
  nav.style.display = hideChrome ? "none" : "flex";
}

function goHome() {
  renderMap();
  showScreen("screen-map");
  setBottomNav("home");
}

function goProgress() {
  renderProgress();
  showScreen("screen-progress");
  setBottomNav("progress");
}

function setBottomNav(which) {
  document.querySelectorAll(".bottom-nav .nav-btn").forEach(b => b.classList.remove("active"));
  const el = document.getElementById("nav-" + which);
  if (el) el.classList.add("active");
}

// ---------- Init ----------
function init() {
  state.progress = loadProgress();
  const p = loadProfile();
  if (p) {
    state.profile = p;
    goHome();
  } else {
    showScreen("screen-login");
  }
  document.getElementById("login-form").addEventListener("submit", onLogin);
  document.getElementById("nav-home").addEventListener("click", goHome);
  document.getElementById("nav-progress").addEventListener("click", goProgress);
  document.getElementById("logout-btn").addEventListener("click", onLogout);
  updateStampCount();
}

function onLogin(e) {
  e.preventDefault();
  try {
    const name = document.getElementById("input-name").value.trim();
    const cls = document.getElementById("input-class").value.trim();
    if (!name) return;
    state.profile = { name, cls };
    saveProfile(state.profile);
    goHome();
    updateStampCount();
    if (storageBlocked) {
      alert("Tr\u00ecnh duy\u1ec7t \u0111ang ch\u1eb7n l\u01b0u tr\u1eef d\u1eef li\u1ec7u (v\u00ed d\u1ee5 ch\u1ebf \u0111\u1ed9 duy\u1ec7t ri\u00eang t\u01b0). Em v\u1eabn h\u1ecdc \u0111\u01b0\u1ee3c b\u00ecnh th\u01b0\u1eddng, nh\u01b0ng ti\u1ebfn \u0111\u1ed9 s\u1ebd m\u1ea5t khi t\u1eaft trang. H\u00e3y d\u00f9ng ch\u1ebf \u0111\u1ed9 duy\u1ec7t web th\u01b0\u1eddng \u0111\u1ec3 l\u01b0u \u0111\u01b0\u1ee3c ti\u1ebfn \u0111\u1ed9.");
    }
  } catch (err) {
    console.error("Login error:", err);
    alert("C\u00f3 l\u1ed7i x\u1ea3y ra. Vui l\u00f2ng th\u1eed l\u1ea1i ho\u1eb7c \u0111\u1ed5i tr\u00ecnh duy\u1ec7t kh\u00e1c.");
  }
}

function onLogout() {
  if (!confirm("\u0110\u1ed5i h\u1ecdc sinh kh\u00e1c? To\u00e0n b\u1ed9 ti\u1ebfn \u0111\u1ed9 (sao, k\u1ebft qu\u1ea3) c\u1ee7a h\u1ecdc sinh hi\u1ec7n t\u1ea1i s\u1ebd b\u1ecb x\u00f3a kh\u1ecfi thi\u1ebft b\u1ecb n\u00e0y v\u00e0 kh\u00f4ng th\u1ec3 kh\u00f4i ph\u1ee5c. B\u1ea1n c\u00f3 ch\u1eafc ch\u1eafn mu\u1ed1n ti\u1ebfp t\u1ee5c?")) return;
  localStorage.removeItem(STORAGE_PROFILE);
  localStorage.removeItem(STORAGE_PROGRESS);
  memoryFallback.profile = null;
  memoryFallback.progress = null;
  state.profile = null;
  state.progress = {};
  showScreen("screen-login");
}

function updateStampCount() {
  const total = UNITS.length;
  let stamped = 0;
  UNITS.forEach(u => { if (getUnitProgress(u.id).stars > 0) stamped++; });
  const el = document.getElementById("stamp-count");
  if (el) el.textContent = stamped + " / " + total;
}

// ---------- Map render ----------
function renderMap() {
  document.getElementById("greeting-name").textContent = state.profile ? state.profile.name : "";
  const container = document.getElementById("map-container");
  container.innerHTML = "";

  for (let g = 1; g <= 4; g++) {
    const groupUnits = UNITS.filter(u => u.group === g);
    const island = document.createElement("div");
    island.className = "island";

    const title = document.createElement("div");
    title.className = "island-title";
    title.innerHTML = `<span class="badge">\u0110\u1EA3o ${g}</span><h2>${GROUP_NAMES[g]}</h2>`;
    island.appendChild(title);

    const path = document.createElement("div");
    path.className = "path";

    groupUnits.forEach(u => {
      path.appendChild(renderNode(u));
    });

    // review node
    const review = REVIEWS.find(r => r.afterGroup === g);
    if (review) path.appendChild(renderReviewNode(review));

    island.appendChild(path);
    container.appendChild(island);
  }
}

function renderNode(unit) {
  const prog = getUnitProgress(unit.id);
  const row = document.createElement("div");
  row.className = "node-row";
  const stars = "\u2B50".repeat(prog.stars) + "\u2606".repeat(3 - prog.stars);
  row.innerHTML = `
    <button class="node-btn" data-unit="${unit.id}">
      <div class="node ${prog.stars > 0 ? "done" : ""}">${unit.icon}</div>
      <div class="node-info">
        <div class="titles">
          <div class="en">${unit.titleEn}</div>
          <div class="vi">${unit.titleVi}</div>
        </div>
        <div class="stars-mini">${stars}</div>
      </div>
    </button>
  `;
  row.querySelector(".node-btn").addEventListener("click", () => openUnit(unit.id));
  return row;
}

function renderReviewNode(review) {
  const row = document.createElement("div");
  row.className = "node-row";
  // average stars across units in review
  let totalStars = 0;
  review.units.forEach(id => totalStars += getUnitProgress(id).stars);
  const avg = Math.round(totalStars / review.units.length);
  const stars = "\u2B50".repeat(avg) + "\u2606".repeat(3 - avg);
  row.innerHTML = `
    <button class="node-btn" data-review="${review.id}">
      <div class="node review">\uD83C\uDFC6</div>
      <div class="node-info">
        <div class="titles">
          <div class="en">${review.titleVi}</div>
          <div class="vi">T\u1ed5ng h\u1ee3p ${review.units.length} unit</div>
        </div>
        <div class="stars-mini">${stars}</div>
      </div>
    </button>
  `;
  row.querySelector(".node-btn").addEventListener("click", () => openReview(review.id));
  return row;
}

// ---------- Unit detail ----------
function openUnit(id) {
  state.currentUnitId = id;
  const unit = UNITS.find(u => u.id === id);
  document.getElementById("unit-icon").textContent = unit.icon;
  document.getElementById("unit-title-en").textContent = unit.titleEn;
  document.getElementById("unit-title-vi").textContent = unit.titleVi;
  switchTab("vocab");
  renderUnitContent(unit);
  showScreen("screen-unit");
}

function switchTab(tab) {
  state.currentTab = tab;
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  document.getElementById("tabbtn-" + tab).classList.add("active");
  document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
  document.getElementById("panel-" + tab).classList.add("active");
}

function renderUnitContent(unit) {
  // VOCAB tab
  const vocabGrid = document.getElementById("vocab-grid");
  vocabGrid.innerHTML = "";
  unit.core.forEach(w => vocabGrid.appendChild(makeFlashcard(w)));

  const patternsBox = document.getElementById("patterns-box");
  patternsBox.innerHTML = "";
  unit.patterns.forEach(p => {
    const div = document.createElement("div");
    div.className = "pattern-card";
    div.innerHTML = `<div class="en">${p.en}</div><div class="vi">${p.vi}</div><button class="say-btn">\uD83D\uDD0A Nghe</button>`;
    div.querySelector(".say-btn").addEventListener("click", () => speak(p.en));
    patternsBox.appendChild(div);
  });

  // PRACTICE core tab
  document.getElementById("practice-core-info").textContent =
    `${unit.quizCore.length} c\u00e2u tr\u1eafc nghi\u1ec7m t\u1eeb v\u1ef1ng & m\u1eabu c\u00e2u c\u01a1 b\u1ea3n.`;

  // EXTENSION tab
  const extGrid = document.getElementById("ext-vocab-grid");
  extGrid.innerHTML = "";
  unit.ext.forEach(w => extGrid.appendChild(makeFlashcard(w)));

  const grammarBox = document.getElementById("grammar-box");
  grammarBox.innerHTML = `
    <h3>\uD83D\uDCD8 ${unit.grammar.title}</h3>
    <div class="explain">${unit.grammar.explain}</div>
    <div class="example">${unit.grammar.example}</div>
  `;

  const readingBox = document.getElementById("reading-box");
  readingBox.innerHTML = `
    <h3>\uD83D\uDCD6 ${unit.reading.title}</h3>
    <p>${unit.reading.text}</p>
    <button class="say-btn">\uD83D\uDD0A Nghe b\u00e0i \u0111\u1ecdc</button>
  `;
  readingBox.querySelector(".say-btn").addEventListener("click", () => speak(unit.reading.text));

  document.getElementById("practice-ext-info").textContent =
    `${unit.quizExt.length} c\u00e2u n\u00e2ng cao + ${unit.reading.questions.length} c\u00e2u \u0111\u1ecdc hi\u1ec3u.`;
}

function makeFlashcard(word) {
  const div = document.createElement("div");
  div.className = "flash";
  div.innerHTML = `
    <span class="speak-hint">\uD83D\uDD0A</span>
    <div class="icon">${word.icon || "\uD83D\uDCDD"}</div>
    <div class="en">${word.en}</div>
    <div class="vi">${word.vi}</div>
  `;
  div.addEventListener("click", () => {
    div.classList.toggle("flipped");
    speak(word.en);
  });
  return div;
}

// ---------- Quiz ----------
function startQuiz(mode) {
  const unit = UNITS.find(u => u.id === state.currentUnitId);
  let list = mode === "core" ? [...unit.quizCore] : [...unit.quizExt];
  if (mode === "ext") {
    // append reading comprehension questions
    unit.reading.questions.forEach(q => list.push(q));
  }
  state.quiz = { list, index: 0, correct: 0, mode, unitId: unit.id };
  showScreen("screen-quiz");
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const { list, index } = state.quiz;
  if (index >= list.length) { finishQuiz(); return; }
  const q = list[index];
  document.getElementById("quiz-progress").textContent = `C\u00e2u ${index + 1} / ${list.length}`;
  document.getElementById("quiz-question").textContent = q.q;
  const optsBox = document.getElementById("quiz-options");
  optsBox.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "quiz-opt";
    btn.textContent = opt;
    btn.addEventListener("click", () => answerQuiz(i, btn));
    optsBox.appendChild(btn);
  });
}

function answerQuiz(i, btn) {
  const { list, index } = state.quiz;
  const q = list[index];
  const allBtns = document.querySelectorAll(".quiz-opt");
  allBtns.forEach(b => b.disabled = true);
  if (i === q.answer) {
    btn.classList.add("correct");
    state.quiz.correct++;
  } else {
    btn.classList.add("wrong");
    allBtns[q.answer].classList.add("correct");
  }
  setTimeout(() => {
    state.quiz.index++;
    renderQuizQuestion();
  }, 900);
}

function finishQuiz() {
  const { list, correct, mode, unitId } = state.quiz;
  const pct = list.length ? correct / list.length : 0;
  let starsEarned = pct >= 0.99 ? 3 : pct >= 0.7 ? 2 : pct >= 0.4 ? 1 : 0;

  const prog = getUnitProgress(unitId);
  if (mode === "core") prog.coreDone = true;
  if (mode === "ext") prog.extDone = true;
  prog.stars = Math.max(prog.stars, starsEarned);
  saveProgress();
  updateStampCount();

  document.getElementById("result-stars").textContent = "\u2B50".repeat(starsEarned) + "\u2606".repeat(3 - starsEarned);
  document.getElementById("result-score").textContent = `\u0110\u00fang ${correct} / ${list.length} c\u00e2u`;
  document.getElementById("result-msg").textContent =
    pct >= 0.99 ? "Xu\u1ea5t s\u1eafc! Em \u0111\u00e3 nh\u1eadn \u0111\u1ee7 3 sao \u2B50" :
    pct >= 0.7 ? "R\u1ea5t t\u1ed1t! C\u1ed1 th\u00eam ch\u00fat n\u1eefa \u0111\u1ec3 \u0111\u1ea1t 3 sao nh\u00e9." :
    pct >= 0.4 ? "Kh\u00e1 \u1ed5n! H\u00e3y \u00f4n l\u1ea1i t\u1eeb v\u1ef1ng r\u1ed3i th\u1eed l\u1ea1i." :
    "\u0110\u1eebng n\u1ea3n! H\u00e3y xem l\u1ea1i t\u1eeb v\u1ef1ng r\u1ed3i luy\u1ec7n t\u1eadp th\u00eam nh\u00e9.";
  showScreen("screen-result");
}

function retryQuiz() {
  startQuiz(state.quiz.mode);
}

function backToUnitFromResult() {
  openUnit(state.currentUnitId);
}

// ---------- Review mode (mixed quiz across 5 units) ----------
function openReview(reviewId) {
  const review = REVIEWS.find(r => r.id === reviewId);
  let pool = [];
  review.units.forEach(uid => {
    const u = UNITS.find(x => x.id === uid);
    pool = pool.concat(u.quizCore.map(q => ({ ...q, unit: u.titleEn })));
  });
  // shuffle and take up to 12
  pool = shuffle(pool).slice(0, 12);
  state.quiz = { list: pool, index: 0, correct: 0, mode: "review", reviewId };
  showScreen("screen-quiz");
  renderQuizQuestionReview();
}

function renderQuizQuestionReview() {
  const { list, index } = state.quiz;
  if (index >= list.length) { finishReview(); return; }
  const q = list[index];
  document.getElementById("quiz-progress").textContent = `C\u00e2u ${index + 1} / ${list.length}`;
  document.getElementById("quiz-question").textContent = q.q;
  const optsBox = document.getElementById("quiz-options");
  optsBox.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "quiz-opt";
    btn.textContent = opt;
    btn.addEventListener("click", () => answerReview(i, btn));
    optsBox.appendChild(btn);
  });
}

function answerReview(i, btn) {
  const { list, index } = state.quiz;
  const q = list[index];
  const allBtns = document.querySelectorAll(".quiz-opt");
  allBtns.forEach(b => b.disabled = true);
  if (i === q.answer) { btn.classList.add("correct"); state.quiz.correct++; }
  else { btn.classList.add("wrong"); allBtns[q.answer].classList.add("correct"); }
  setTimeout(() => { state.quiz.index++; renderQuizQuestionReview(); }, 900);
}

function finishReview() {
  const { list, correct, reviewId } = state.quiz;
  const pct = list.length ? correct / list.length : 0;
  const starsEarned = pct >= 0.9 ? 3 : pct >= 0.6 ? 2 : pct >= 0.3 ? 1 : 0;
  const review = REVIEWS.find(r => r.id === reviewId);
  review.units.forEach(uid => {
    const prog = getUnitProgress(uid);
    prog.stars = Math.max(prog.stars, starsEarned);
  });
  saveProgress();
  updateStampCount();
  document.getElementById("result-stars").textContent = "\u2B50".repeat(starsEarned) + "\u2606".repeat(3 - starsEarned);
  document.getElementById("result-score").textContent = `\u0110\u00fang ${correct} / ${list.length} c\u00e2u`;
  document.getElementById("result-msg").textContent = "\u00d4n t\u1eadp t\u1ed5ng h\u1ee3p ho\u00e0n th\u00e0nh!";
  state.quiz.mode = "review-done";
  showScreen("screen-result");
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---------- Progress screen ----------
function renderProgress() {
  const container = document.getElementById("progress-list");
  container.innerHTML = "";
  let totalStars = 0;
  UNITS.forEach(u => {
    const prog = getUnitProgress(u.id);
    totalStars += prog.stars;
    const div = document.createElement("div");
    div.className = "node-info";
    div.style.marginBottom = "10px";
    div.innerHTML = `
      <div class="titles">
        <div class="en">${u.icon} ${u.titleEn}</div>
        <div class="vi">${u.titleVi}</div>
      </div>
      <div class="stars-mini">${"\u2B50".repeat(prog.stars)}${"\u2606".repeat(3 - prog.stars)}</div>
    `;
    container.appendChild(div);
  });
  document.getElementById("progress-summary").textContent =
    `T\u1ed5ng: ${totalStars} / ${UNITS.length * 3} sao`;
}

document.addEventListener("DOMContentLoaded", init);
