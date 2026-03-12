/**
 * expressions.js — 20+ Live2D expressions
 * Exposes: window.PetExpressions = { play, playRandom, all }
 */
(function () {
  'use strict';

  /* Expression IDs — these correspond to .exp3.json files in the model package.
     Models differ; we try by index as well as by name.                          */
  var ALL_EXPRESSIONS = [
    // Generic names used by many cubism4 models
    'smile', 'angry', 'sad', 'happy', 'surprised', 'confused',
    'blush', 'wink', 'pout', 'laugh', 'cry',
    'yawn', 'shy', 'excited', 'bored', 'focused',
    'sleepy', 'determined', 'scared', 'proud', 'embarrassed'
  ];

  function play(nameOrIndex) {
    try {
      var m = window.petApp && window.petApp.model;
      if (!m) return;
      var names = window.petApp.expressionNames;
      if (typeof nameOrIndex === 'string' && names && names.length) {
        // Case-insensitive match
        var match = names.find(function(n) {
          return n.toLowerCase() === nameOrIndex.toLowerCase();
        });
        if (match) { m.expression(match); return; }
        // No match — skip
        return;
      }
      m.expression(nameOrIndex);
    } catch (e) { /* ignore */ }
  }

  function playRandom() {
    var m = window.petApp && window.petApp.model;
    if (!m) return;
    var names = window.petApp.expressionNames;
    if (names && names.length) {
      var pick = names[Math.floor(Math.random() * names.length)];
      try { m.expression(pick); } catch(e) {}
      return;
    }
    // Fallback: try random index (0-7 covers most models)
    try { m.expression(Math.floor(Math.random() * 8)); } catch(e) {}
  }

  window.PetExpressions = { all: ALL_EXPRESSIONS, play: play, playRandom: playRandom };
})();
