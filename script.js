// script.js
// ---------
// A client-side port of the original Flask app's logic. Reads content from
// QUIZ_DATA (see data.js, auto-generated from quiz_data.py) and drives a
// single-page state machine: intro -> 9 questions -> (Gear only) bonus
// question -> results.
//
// Scoring mirrors app.py's score_answers()/winning_part() exactly, so this
// version and the Python version always produce the same result for the
// same answers.

(function () {
  "use strict";

  const { PARTS, QUESTIONS, INTRO, OUTRO, BONUS_QUESTION, GEAR_PART_LINKS } = QUIZ_DATA;
  const TOTAL_QUESTIONS = QUESTIONS.length;

  // ---- state -------------------------------------------------------------
  let answers = [];       // chosen option index per question, in order
  let handedness = null;  // "left" | "right" | null, only used for Gear

  // ---- scoring (mirrors app.py) ------------------------------------------
  function scoreAnswers(answerList) {
    const scores = {};
    Object.keys(PARTS).forEach((id) => { scores[id] = 0; });
    answerList.forEach((choiceIndex, i) => {
      const option = QUESTIONS[i].options[choiceIndex];
      Object.entries(option.weights).forEach(([partId, points]) => {
        scores[partId] += points;
      });
    });
    return scores;
  }

  function winningPart(scores) {
    const ids = Object.keys(PARTS);
    let best = ids[0];
    ids.forEach((id) => {
      if (scores[id] > scores[best]) best = id;
    });
    return best;
  }

  // ---- DOM refs ------------------------------------------------------------
  const screenIntro = document.getElementById("screen-intro");
  const screenQuiz = document.getElementById("screen-quiz");
  const screenResult = document.getElementById("screen-result");

  function showScreen(el) {
    [screenIntro, screenQuiz, screenResult].forEach((s) => s.classList.add("hidden"));
    el.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }

  // ---- intro screen ----------------------------------------------------
  function renderIntro() {
    const storyEl = document.getElementById("intro-story");
    storyEl.innerHTML = "";
    INTRO.forEach((line) => {
      const p = document.createElement("p");
      p.className = "hero__story-line";
      p.textContent = line;
      storyEl.appendChild(p);
    });
    document.getElementById("intro-question-count").textContent = TOTAL_QUESTIONS;
    showScreen(screenIntro);
  }

  document.getElementById("start-btn").addEventListener("click", () => {
    answers = [];
    handedness = null;
    renderQuestion(0);
  });

  // ---- question screen (shared by the 9 story questions + bonus) --------
  const progressEl = document.getElementById("quiz-progress");
  const progressFill = document.getElementById("quiz-progress-fill");
  const progressLabel = document.getElementById("quiz-progress-label");
  const timeEl = document.getElementById("quiz-time");
  const sceneEl = document.getElementById("quiz-scene");
  const promptEl = document.getElementById("quiz-prompt");
  const optionsEl = document.getElementById("quiz-options");
  const formEl = document.getElementById("quiz-form");
  const submitBtn = document.getElementById("quiz-submit");

  function renderScene(sceneLines) {
    sceneEl.innerHTML = "";
    sceneLines.forEach((line) => {
      const p = document.createElement("p");
      p.className = "quiz__scene";
      p.textContent = line;
      sceneEl.appendChild(p);
    });
  }

  function buildLetteredOptions(options) {
    optionsEl.className = "";
    optionsEl.innerHTML = "";
    const letters = ["A", "B", "C", "D", "E"];
    options.forEach((option, i) => {
      const label = document.createElement("label");
      label.className = "option";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = "choice";
      input.value = String(i);
      input.required = true;

      const marker = document.createElement("span");
      marker.className = "option__marker";
      marker.textContent = letters[i];

      const text = document.createElement("span");
      text.className = "option__text";
      text.textContent = option.text;

      label.appendChild(input);
      label.appendChild(marker);
      label.appendChild(text);
      optionsEl.appendChild(label);
    });
  }

  function buildReactionOptions(options) {
    optionsEl.className = "options--reactions";
    optionsEl.innerHTML = "";
    options.forEach((option, i) => {
      const label = document.createElement("label");
      label.className = "reaction";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = "choice";
      input.value = String(i);
      input.required = true;

      const icon = document.createElement("span");
      icon.className = "reaction__icon";
      if (option.image) {
        const img = document.createElement("img");
        img.src = "images/" + option.image;
        img.alt = option.label;
        icon.appendChild(img);
      } else if (option.gif_url) {
        const img = document.createElement("img");
        img.src = option.gif_url;
        img.alt = option.label;
        icon.appendChild(img);
      } else if (option.emoji) {
        const emoji = document.createElement("span");
        emoji.className = "reaction__emoji";
        emoji.textContent = option.emoji;
        icon.appendChild(emoji);
      }

      const labelText = document.createElement("span");
      labelText.className = "reaction__label";
      labelText.textContent = option.label;

      label.appendChild(input);
      label.appendChild(icon);
      label.appendChild(labelText);
      optionsEl.appendChild(label);
    });
  }

  function renderQuestion(index) {
    const question = QUESTIONS[index];

    progressEl.classList.remove("hidden");
    progressFill.style.width = (index / TOTAL_QUESTIONS) * 100 + "%";
    progressLabel.textContent =
      "QUESTION " + String(index + 1).padStart(2, "0") + " / " + String(TOTAL_QUESTIONS).padStart(2, "0");

    timeEl.textContent = question.time;
    renderScene(question.scene);
    promptEl.textContent = question.prompt;

    if (question.style === "reactions") {
      buildReactionOptions(question.options);
    } else {
      buildLetteredOptions(question.options);
    }

    submitBtn.textContent = index === TOTAL_QUESTIONS - 1 ? "See My Result \u2192" : "Next \u2192";

    formEl.onsubmit = (e) => {
      e.preventDefault();
      const selected = formEl.querySelector('input[name="choice"]:checked');
      if (!selected) return;
      answers[index] = parseInt(selected.value, 10);

      if (index === TOTAL_QUESTIONS - 1) {
        const scores = scoreAnswers(answers);
        if (winningPart(scores) === "gear") {
          renderBonusQuestion();
        } else {
          handedness = null;
          renderResults();
        }
      } else {
        renderQuestion(index + 1);
      }
    };

    showScreen(screenQuiz);
  }

  function renderBonusQuestion() {
    progressEl.classList.add("hidden");
    timeEl.textContent = BONUS_QUESTION.time;
    renderScene(BONUS_QUESTION.scene);
    promptEl.textContent = BONUS_QUESTION.prompt;
    buildLetteredOptionsByValue(BONUS_QUESTION.options);
    submitBtn.textContent = "See My Result \u2192";

    formEl.onsubmit = (e) => {
      e.preventDefault();
      const selected = formEl.querySelector('input[name="choice"]:checked');
      if (!selected) return;
      handedness = selected.value;
      renderResults();
    };

    showScreen(screenQuiz);
  }

  // Like buildLetteredOptions, but radio values are the option's own
  // string "value" (e.g. "left"/"right") instead of an index -- only
  // needed for the bonus question.
  function buildLetteredOptionsByValue(options) {
    optionsEl.className = "";
    optionsEl.innerHTML = "";
    const letters = ["A", "B", "C", "D", "E"];
    options.forEach((option, i) => {
      const label = document.createElement("label");
      label.className = "option";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = "choice";
      input.value = option.value;
      input.required = true;

      const marker = document.createElement("span");
      marker.className = "option__marker";
      marker.textContent = letters[i];

      const text = document.createElement("span");
      text.className = "option__text";
      text.textContent = option.text;

      label.appendChild(input);
      label.appendChild(marker);
      label.appendChild(text);
      optionsEl.appendChild(label);
    });
  }

  // ---- results screen ------------------------------------------------------
  function renderResults() {
    const scores = scoreAnswers(answers);
    const winnerId = winningPart(scores);
    const winner = Object.assign({}, PARTS[winnerId]); // copy, don't mutate PARTS

    if (winnerId === "gear" && handedness && GEAR_PART_LINKS[handedness]) {
      Object.assign(winner, GEAR_PART_LINKS[handedness]);
    }

    // outro
    const outroEl = document.getElementById("result-outro");
    outroEl.innerHTML = "";
    OUTRO.forEach((line) => {
      const p = document.createElement("p");
      p.className = "outro__line";
      p.textContent = line;
      outroEl.appendChild(p);
    });

    document.getElementById("result-name").textContent = winner.name;
    document.getElementById("result-tagline").textContent = "\u201C" + winner.tagline + "\u201D";
    document.getElementById("result-desc").textContent = winner.description;

    // part number, linked to the real McMaster page when one exists (Gear)
    const partnoWrap = document.getElementById("result-partno-wrap");
    partnoWrap.innerHTML = "";
    if (winner.part_url) {
      const a = document.createElement("a");
      a.className = "spec-sheet__partno-value spec-sheet__partno-link";
      a.href = winner.part_url;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = winner.part_number;
      partnoWrap.appendChild(a);
    } else {
      const span = document.createElement("span");
      span.className = "spec-sheet__partno-value";
      span.textContent = winner.part_number;
      partnoWrap.appendChild(span);
    }

    // quotes
    const quotesEl = document.getElementById("result-quotes");
    quotesEl.innerHTML = "";
    winner.quotes.forEach((q) => {
      const li = document.createElement("li");
      li.className = "quotes__item";
      li.textContent = q;
      quotesEl.appendChild(li);
    });

    // breakdown
    const maxScore = Math.max(...Object.values(scores)) || 1;
    const breakdown = Object.entries(scores)
      .map(([id, score]) => ({
        id,
        name: PARTS[id].name,
        score,
        pct: Math.round((100 * score) / maxScore),
      }))
      .sort((a, b) => b.score - a.score);

    const breakdownEl = document.getElementById("result-breakdown");
    breakdownEl.innerHTML = "";
    breakdown.forEach((row) => {
      const div = document.createElement("div");
      div.className = "breakdown__row" + (row.id === winnerId ? " breakdown__row--winner" : "");
      div.innerHTML =
        '<span class="breakdown__name">' + row.name + "</span>" +
        '<span class="breakdown__bar-track"><span class="breakdown__bar-fill" style="width:' + row.pct + '%;"></span></span>' +
        '<span class="breakdown__score">' + row.score + "</span>";
      breakdownEl.appendChild(div);
    });

    // compatible parts
    const compatEl = document.getElementById("result-compatible");
    compatEl.innerHTML = "";
    winner.compatible.forEach((id) => {
      const part = PARTS[id];
      const div = document.createElement("div");
      div.className = "match-card";
      div.innerHTML =
        '<span class="match-card__name">' + part.name + "</span>" +
        '<span class="match-card__tagline">' + part.tagline + "</span>";
      compatEl.appendChild(div);
    });

    // nemesis
    const nemesisEl = document.getElementById("result-nemesis");
    nemesisEl.innerHTML = "";
    const nemesisPart = PARTS[winner.nemesis];
    const nemesisDiv = document.createElement("div");
    nemesisDiv.className = "match-card match-card--nemesis";
    nemesisDiv.innerHTML =
      '<span class="match-card__name">' + nemesisPart.name + "</span>" +
      '<span class="match-card__tagline">' + winner.nemesis_reason + "</span>";
    nemesisEl.appendChild(nemesisDiv);

    showScreen(screenResult);
  }

  document.getElementById("retake-btn").addEventListener("click", () => {
    answers = [];
    handedness = null;
    renderIntro();
  });

  // ---- boot ------------------------------------------------------------
  renderIntro();
})();
