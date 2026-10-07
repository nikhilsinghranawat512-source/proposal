/**
 * ==========================================================================
 * “Avantika & Nikhil — Our Forever Story”
 * DEVELOPER CONFIGURATION (Only the developer can change these values in code)
 * ==========================================================================
 */

const developerStoryConfig = {
  // Hero watercolor illustration on Chapter 1
  heroImage: "assets/nep.jpeg",

  // Optional custom images for Chapter 2 Polaroids (leave "" to use the built-in romantic art gradients)
  polaroidImages: {
    polaroidImg1: "assets/aa.jpeg", // e.g. "assets/first-hello.jpg"
    polaroidImg2: "assets/bb.jpeg", // e.g. "assets/stargazing.jpg"
    polaroidImg3: "assets/cc.jpeg", // e.g. "assets/roadtrip.jpg"
    polaroidImg4: "assets/dd.jpeg"  // e.g. "assets/rainy-coffee.jpg"
  },

  // Couple details (Avantika & Nikhil)
  herName: "Avantika",
  hisName: "Nikhil",
  coupleNames: "Nikhil & Avantika",
  signature: "Nikhil Singh",
  startDate: "2026-09-24T00:00:00",
  vowsDate: "2027-10-07T18:00:00",
  coordinates: '28°36\'50"N • 77°12\'32"E • Under the Stars'
};

let currentChapter = 1;
let ringBoxOpened = false;
let waitClickCount = 0;

// Sweet playful nudges when Avantika clicks "Wait, let me catch my breath 🥺"
const sweetProposalNudges = [
  "Take a deep breath, Avantika… My heart has been waiting for this moment since day one ✨💍",
  "Look at how that ring sparkles—almost as bright as your eyes, Avantika 🥺💜",
  "Even a million lifetimes wouldn't be enough with you. Ready to click YES? 🥂✨",
  "The stars above are holding their breath waiting for your answer, Avantika… 🌌💖",
  "My hands are slightly shaking too—let’s jump into forever together! 💍❤️"
];

// ==========================================================================
// Developer Configuration Initialization
// ==========================================================================

function applyDeveloperConfig() {
  const heroImg = document.getElementById("heroWatercolorImg");
  if (heroImg && developerStoryConfig.heroImage) {
    heroImg.src = developerStoryConfig.heroImage;
  }

  // Apply developer polaroid images if provided in developerStoryConfig
  Object.entries(developerStoryConfig.polaroidImages).forEach(([id, src]) => {
    if (src) {
      const el = document.getElementById(id);
      if (el) {
        el.style.backgroundImage = `url("${src}")`;
        el.style.backgroundSize = "100% 100%";
        el.style.backgroundPosition = "center";
        el.style.backgroundRepeat = "no-repeat";
      }
    }
  });

  const sigEl = document.getElementById("senderSignature");
  const certHerNameEl = document.getElementById("certHerName");
  const certHisNameEl = document.getElementById("certHisName");
  const certFromNameEl = document.getElementById("certFromName");

  if (sigEl) sigEl.textContent = developerStoryConfig.signature;
  if (certHerNameEl) certHerNameEl.textContent = developerStoryConfig.herName;
  if (certHisNameEl) certHisNameEl.textContent = developerStoryConfig.hisName;
  if (certFromNameEl) certFromNameEl.textContent = developerStoryConfig.hisName;
}

// ==========================================================================
// Chapter Navigation
// ==========================================================================

function navigateToChapter(chapterNum) {
  currentChapter = Number(chapterNum);

  // Toggle active chapter screen
  document.querySelectorAll(".chapter-screen").forEach((sec, idx) => {
    sec.classList.toggle("active", idx + 1 === currentChapter);
  });

  // Update top navigation stepper tabs
  document.querySelectorAll(".chapter-tab").forEach((tab) => {
    const tabChap = Number(tab.getAttribute("data-chapter"));
    tab.classList.toggle("active", tabChap === currentChapter);
  });

  // Toggle candlelit mode on Chapter 3
  document.body.classList.toggle("candlelight-mode", currentChapter === 3);

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==========================================================================
// Chapter 1: Live Days We've Loved Counter & Wax Seal Love Letter
// ==========================================================================

function updateLoveAndVowsCounters() {
  const now = new Date();

  // 1. Chapter 1: Days We've Loved Counter
  const start = new Date(developerStoryConfig.startDate);
  const diffMs = Math.max(0, now - start);

  const totalSeconds = Math.floor(diffMs / 1000);
  const totalHours = Math.floor(totalSeconds / 3600);
  const totalDays = Math.floor(totalHours / 24);
  const remMinutes = Math.floor((totalSeconds % 3600) / 60);
  const remSeconds = totalSeconds % 60;

  // Approx 72 heartbeats per minute = 1.2 beats per second
  const totalHeartbeats = Math.floor(totalSeconds * 1.2);

  const daysEl = document.getElementById("daysLovedVal");
  const hoursEl = document.getElementById("hoursLovedVal");
  const minsEl = document.getElementById("minutesLovedVal");
  const secsEl = document.getElementById("secondsLovedVal");
  const beatsEl = document.getElementById("heartbeatsCountVal");

  if (daysEl) daysEl.textContent = totalDays.toLocaleString();
  if (hoursEl) hoursEl.textContent = totalHours.toLocaleString();
  if (minsEl) minsEl.textContent = String(remMinutes).padStart(2, "0");
  if (secsEl) secsEl.textContent = String(remSeconds).padStart(2, "0");
  if (beatsEl) beatsEl.textContent = totalHeartbeats.toLocaleString();

  // 2. Chapter 4: Countdown to Exchanging Vows
  const vowsTarget = new Date(developerStoryConfig.vowsDate);
  const vowsDiff = Math.max(0, vowsTarget - now);

  const vSecTotal = Math.floor(vowsDiff / 1000);
  const vDays = Math.floor(vSecTotal / 86400);
  const vHours = Math.floor((vSecTotal % 86400) / 3600);
  const vMinutes = Math.floor((vSecTotal % 3600) / 60);
  const vSeconds = vSecTotal % 60;

  const vowDaysEl = document.getElementById("vowDays");
  const vowHoursEl = document.getElementById("vowHours");
  const vowMinutesEl = document.getElementById("vowMinutes");
  const vowSecondsEl = document.getElementById("vowSeconds");

  if (vowDaysEl) vowDaysEl.textContent = vDays.toLocaleString();
  if (vowHoursEl) vowHoursEl.textContent = String(vHours).padStart(2, "0");
  if (vowMinutesEl) vowMinutesEl.textContent = String(vMinutes).padStart(2, "0");
  if (vowSecondsEl) vowSecondsEl.textContent = String(vSeconds).padStart(2, "0");
}

function initWaxSealLetter() {
  const breakBtn = document.getElementById("breakWaxSealBtn");
  const sealGate = document.getElementById("waxSealGate");

  if (breakBtn && sealGate) {
    breakBtn.addEventListener("click", () => {
      sealGate.classList.add("unsealed");
      spawnGoldConfettiShower(35);
    });
  }
}

// ==========================================================================
// Chapter 2: Interactive Polaroid Timeline
// ==========================================================================

function initPolaroidTimeline() {
  document.querySelectorAll(".polaroid-card").forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });
}

// ==========================================================================
// Chapter 3: Interactive Ring Reveal & Proposal Climax
// ==========================================================================

function initProposalClimax() {
  const velvetBox = document.getElementById("velvetRingBox");
  const openHeartBtn = document.getElementById("openHeartPromptBtn");
  const openHeartText = document.getElementById("openHeartPromptText");
  const grandReveal = document.getElementById("grandProposalReveal");
  const millionYesBtn = document.getElementById("millionTimesYesBtn");
  const playfulWaitBtn = document.getElementById("playfulWaitBtn");
  const feedbackBanner = document.getElementById("proposalFeedbackBanner");

  function openVelvetRingBox() {
    if (!ringBoxOpened) {
      ringBoxOpened = true;
      if (velvetBox) velvetBox.classList.add("opened");
      if (grandReveal) grandReveal.classList.add("revealed");
      if (openHeartText) openHeartText.textContent = "Nikhil’s heart is wide open for you, Avantika 💍";
      spawnGoldConfettiShower(55);
    } else {
      spawnGoldConfettiShower(30);
    }
  }

  if (velvetBox) {
    velvetBox.addEventListener("click", openVelvetRingBox);
    velvetBox.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openVelvetRingBox();
      }
    });
  }

  if (openHeartBtn) {
    openHeartBtn.addEventListener("click", openVelvetRingBox);
  }

  // Playful "Wait, let me catch my breath 🥺" button
  if (playfulWaitBtn) {
    playfulWaitBtn.addEventListener("click", () => {
      if (!ringBoxOpened) openVelvetRingBox();

      const msg = sweetProposalNudges[waitClickCount % sweetProposalNudges.length];
      waitClickCount++;

      if (feedbackBanner) {
        feedbackBanner.textContent = msg;
      }

      // Grow the "YES! A Million Times Yes! 💍" button
      if (millionYesBtn) {
        const scale = Math.min(1 + waitClickCount * 0.08, 1.38);
        millionYesBtn.style.transform = `scale(${scale})`;
      }

      // Playfully nudge the Wait button
      const offsetX = Math.round((Math.random() - 0.5) * 90);
      const offsetY = Math.round((Math.random() - 0.5) * 32);
      playfulWaitBtn.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
  }

  // Radiant "YES! A Million Times Yes! 💍" button
  if (millionYesBtn) {
    millionYesBtn.addEventListener("click", () => {
      if (!ringBoxOpened) openVelvetRingBox();

      // Stamp today's proposal date onto the Milestone Certificate
      const todayFormatted = new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
      });
      const ticketDateVal = document.getElementById("ticketDateVal");
      if (ticketDateVal) ticketDateVal.textContent = todayFormatted;

      // Launch grand brinjal-purple & rose-gold celebration confetti
      spawnGoldConfettiShower(110);
      setTimeout(() => spawnGoldConfettiShower(80), 650);

      // Transition to Chapter 4: Forever Keepsake — "She Said Yes!"
      navigateToChapter(4);
    });
  }
}

// ==========================================================================
// Chapter 4: Forever Keepsake — Champagne Toast, Certificate & Time Capsule
// ==========================================================================

function downloadLoveCertificatePng() {
  const canvas = document.createElement("canvas");
  canvas.width = 1100;
  canvas.height = 760;
  const ctx = canvas.getContext("2d");

  // 1. Soft Pink & Sky-Blue Gradient Background
  const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  grad.addColorStop(0, "#FFE4EE");
  grad.addColorStop(0.42, "#FCE7F3");
  grad.addColorStop(0.75, "#E0F2FE");
  grad.addColorStop(1, "#CBEAFE");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 2. Inner Translucent White Card & Double Romantic Borders
  ctx.fillStyle = "rgba(255, 255, 255, 0.68)";
  ctx.fillRect(42, 42, canvas.width - 84, canvas.height - 84);

  ctx.strokeStyle = "rgba(219, 39, 119, 0.45)";
  ctx.lineWidth = 3;
  ctx.strokeRect(42, 42, canvas.width - 84, canvas.height - 84);

  ctx.strokeStyle = "rgba(56, 189, 248, 0.55)";
  ctx.lineWidth = 2;
  ctx.strokeRect(56, 56, canvas.width - 112, canvas.height - 112);

  // 3. Corner Flowers & Small Hearts
  ctx.font = "28px sans-serif";
  ctx.textAlign = "left";
  ctx.fillText("🌸 💕", 74, 98);
  ctx.fillText("🌷 ✨", 74, canvas.height - 74);
  ctx.textAlign = "right";
  ctx.fillText("💕 🌸", canvas.width - 74, 98);
  ctx.fillText("✨ 🌷", canvas.width - 74, canvas.height - 74);

  // 4. Title & Ornament
  ctx.textAlign = "center";
  ctx.font = "24px sans-serif";
  ctx.fillText("💗   ✨   💖   ✨   💗", canvas.width / 2, 128);

  ctx.fillStyle = "#831843";
  ctx.font = "bold 36px Georgia, serif";
  ctx.fillText("💖 OFFICIAL LOVE CERTIFICATE 💖", canvas.width / 2, 182);

  ctx.fillStyle = "#EC4899";
  ctx.font = "20px Georgia, serif";
  ctx.fillText("─── ❖ ♥ ❖ ───", canvas.width / 2, 218);

  // 5. Main Certificate Text
  ctx.fillStyle = "#3B0764";
  ctx.font = "26px Georgia, serif";
  ctx.fillText("This certificate proudly confirms that", canvas.width / 2, 278);

  ctx.fillStyle = "#BE185D";
  ctx.font = "italic bold 52px Georgia, serif";
  ctx.fillText(developerStoryConfig.herName, canvas.width / 2, 342);

  ctx.fillStyle = "#3B0764";
  ctx.font = "26px Georgia, serif";
  ctx.fillText("has officially accepted", canvas.width / 2, 396);

  ctx.fillStyle = "#BE185D";
  ctx.font = "italic bold 46px Georgia, serif";
  ctx.fillText(`${developerStoryConfig.hisName}’s proposal`, canvas.width / 2, 454);

  ctx.fillStyle = "#3B0764";
  ctx.font = "26px Georgia, serif";
  ctx.fillText("and agreed to be a beautiful part of his love story. ❤️", canvas.width / 2, 506);

  // 6. Status Pill
  ctx.fillStyle = "rgba(255, 255, 255, 0.92)";
  ctx.strokeStyle = "rgba(236, 72, 153, 0.55)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(canvas.width / 2 - 220, 540, 440, 52, 26);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#BE185D";
  ctx.font = "bold 22px sans-serif";
  ctx.fillText("Proposal Status: ACCEPTED 💍✨", canvas.width / 2, 574);

  // 7. Date & From Footer
  const dateVal = document.getElementById("ticketDateVal")?.textContent || "October 7, 2026";
  ctx.fillStyle = "#0369A1";
  ctx.font = "bold 16px sans-serif";
  ctx.fillText(`DATE: ${dateVal}`, 230, 665);
  ctx.fillText(`FROM: ${developerStoryConfig.hisName}`, canvas.width - 230, 665);

  ctx.fillStyle = "#BE185D";
  ctx.font = "bold 20px Georgia, serif";
  ctx.fillText("✦ A ♥ N ✦", canvas.width / 2, 665);

  const link = document.createElement("a");
  link.download = `Official-Love-Certificate-${developerStoryConfig.herName}-${developerStoryConfig.hisName}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

function initForeverKeepsake() {
  const popChampagneBtn = document.getElementById("popChampagneBtn");
  const printKeepsakeBtn = document.getElementById("printKeepsakeBtn");
  const downloadCertImgBtn = document.getElementById("downloadCertImgBtn");
  const sealCapsuleBtn = document.getElementById("sealCapsuleBtn");
  const downloadCapsuleBtn = document.getElementById("downloadCapsuleBtn");
  const textarea = document.getElementById("timeCapsuleTextarea");
  const editorWrap = document.getElementById("capsuleEditorWrap");
  const sealedView = document.getElementById("capsuleSealedView");
  const sealedPreview = document.getElementById("sealedMessagePreview");
  const sealedTime = document.getElementById("sealedTimestampText");
  const statusBadge = document.getElementById("capsuleStatusBadge");

  if (popChampagneBtn) {
    popChampagneBtn.addEventListener("click", () => {
      spawnGoldConfettiShower(100);
    });
  }

  if (downloadCertImgBtn) {
    downloadCertImgBtn.addEventListener("click", () => {
      downloadLoveCertificatePng();
      spawnGoldConfettiShower(45);
    });
  }

  if (printKeepsakeBtn) {
    printKeepsakeBtn.addEventListener("click", () => {
      window.print();
    });
  }

  // Load any previously sealed Time Capsule note
  const savedCapsule = localStorage.getItem("foreverTimeCapsuleNote");
  const savedCapsuleDate = localStorage.getItem("foreverTimeCapsuleDate");

  function showSealedState(noteText, dateStr) {
    if (editorWrap) editorWrap.hidden = true;
    if (sealedView) sealedView.hidden = false;
    if (sealedPreview) sealedPreview.textContent = `“${noteText}”`;
    if (sealedTime) sealedTime.textContent = `Sealed on ${dateStr}`;
    if (statusBadge) statusBadge.textContent = "🔒 Sealed Forever";
  }

  if (savedCapsule) {
    if (textarea) textarea.value = savedCapsule;
    showSealedState(savedCapsule, savedCapsuleDate || "October 7, 2026");
  }

  if (sealCapsuleBtn && textarea) {
    sealCapsuleBtn.addEventListener("click", () => {
      const text = textarea.value.trim() || "My heart is overflowing—yes to a lifetime with you, Nikhil! ❤️💍";
      const timestamp = new Date().toLocaleString("en-US", {
        dateStyle: "long",
        timeStyle: "short"
      });

      try {
        localStorage.setItem("foreverTimeCapsuleNote", text);
        localStorage.setItem("foreverTimeCapsuleDate", timestamp);
      } catch (_) {}

      showSealedState(text, timestamp);
      spawnGoldConfettiShower(50);
    });
  }

  if (downloadCapsuleBtn) {
    downloadCapsuleBtn.addEventListener("click", () => {
      const note = (textarea && textarea.value.trim()) || localStorage.getItem("foreverTimeCapsuleNote") || "Avantika Said Yes to Nikhil! 💍";
      const dateStr = localStorage.getItem("foreverTimeCapsuleDate") || new Date().toLocaleDateString();
      const content = [
        "====================================================",
        "   AVANTIKA & NIKHIL — FOREVER STORY TIME CAPSULE   ",
        "====================================================",
        `Couple: ${developerStoryConfig.coupleNames}`,
        `Sealed On: ${dateStr}`,
        `Coordinates: ${developerStoryConfig.coordinates}`,
        "----------------------------------------------------",
        "",
        note,
        "",
        "===================================================="
      ].join("\n");

      const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Avantika-and-Nikhil-Time-Capsule.txt";
      a.click();
      URL.revokeObjectURL(url);
    });
  }
}

// ==========================================================================
// Starlight Canvas & Brinjal-Purple / Rose-Gold Confetti Shower
// ==========================================================================

function initStarlightCanvas() {
  const canvas = document.getElementById("starlightCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let w = (canvas.width = window.innerWidth);
  let h = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });

  const colors = ["#8B2FC9", "#A855F7", "#FFFFFF", "#EC4899"];
  const starCount = Math.min(Math.floor((w * h) / 14000), 75);

  const stars = Array.from({ length: starCount }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: 1.2 + Math.random() * 2.5,
    vy: -0.1 - Math.random() * 0.25,
    alpha: 0.25 + Math.random() * 0.65,
    delta: 0.005 + Math.random() * 0.01,
    color: colors[Math.floor(Math.random() * colors.length)]
  }));

  function render() {
    ctx.clearRect(0, 0, w, h);

    for (const s of stars) {
      s.y += s.vy;
      s.alpha += s.delta;
      if (s.alpha >= 0.9 || s.alpha <= 0.2) s.delta *= -1;
      if (s.y < -5) s.y = h + 5;

      ctx.save();
      ctx.globalAlpha = Math.max(0.1, Math.min(1, s.alpha));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = s.color;
      ctx.shadowBlur = 10;
      ctx.shadowColor = s.color;
      ctx.fill();
      ctx.restore();
    }

    requestAnimationFrame(render);
  }

  render();
}

function spawnGoldConfettiShower(count = 70) {
  const stage = document.getElementById("confettiStage");
  if (!stage) return;

  const symbols = ["💜", "💍", "✨", "❤️", "🥂", "💖"];
  const colors = ["#8B2FC9", "#D8B4FE", "#F472B6", "#4A1259", "#FFFFFF"];

  const startXCenter = window.innerWidth / 2;
  const startYCenter = window.innerHeight * 0.35;

  for (let i = 0; i < count; i++) {
    const p = document.createElement("div");
    p.className = "confetti-particle";

    if (i % 3 === 0) {
      p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      p.style.fontSize = `${14 + Math.random() * 18}px`;
    } else {
      const w = 7 + Math.random() * 9;
      p.style.width = `${w}px`;
      p.style.height = `${w * 0.6}px`;
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      p.style.borderRadius = "2px";
      p.style.boxShadow = "0 0 8px rgba(139, 47, 201, 0.35)";
    }

    p.style.left = `${startXCenter + (Math.random() - 0.5) * 260}px`;
    p.style.top = `${startYCenter + (Math.random() - 0.5) * 90}px`;

    const angle = Math.random() * Math.PI * 2;
    const dist = 120 + Math.random() * Math.max(window.innerWidth, window.innerHeight) * 0.5;
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist + 180;
    const rot = `${(Math.random() - 0.5) * 720}deg`;
    const dur = 1.9 + Math.random() * 1.6;

    p.style.setProperty("--dx", `${dx}px`);
    p.style.setProperty("--dy", `${dy}px`);
    p.style.setProperty("--rot", rot);
    p.style.animationDuration = `${dur}s`;

    stage.appendChild(p);
    setTimeout(() => p.remove(), dur * 1000 + 100);
  }
}

// ==========================================================================
// Initialize Experience
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  applyDeveloperConfig();
  initStarlightCanvas();
  initWaxSealLetter();
  initPolaroidTimeline();
  initProposalClimax();
  initForeverKeepsake();

  updateLoveAndVowsCounters();
  setInterval(updateLoveAndVowsCounters, 1000);

  // Top chapter navigation tabs
  document.querySelectorAll(".chapter-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = Number(tab.getAttribute("data-chapter"));
      navigateToChapter(target);
    });
  });

  // Chapter progression buttons ([data-goto])
  document.querySelectorAll("[data-goto]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = Number(btn.getAttribute("data-goto"));
      navigateToChapter(target);
    });
  });
});
