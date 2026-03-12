/**
 * actions.js — 50+ Live2D actions / motions
 * Exposes: window.PetActions = { play, playRandom, playForContext, startIdleLoop, all }
 */
(function () {
  'use strict';

  const ALL_ACTIONS = [
    // Standard Cubism motion groups
    'TapBody', 'Idle', 'TapHead', 'TapSpecial',
    // Named-model specific
    'Wave', 'FlickHead', 'Idle01', 'Idle02', 'Idle03',
    // Emotions & gestures (50+)
    'Happy', 'Sad', 'Angry', 'Surprised', 'Confused',
    'Blush', 'Yawn', 'Excited', 'Bored', 'Focused',
    'Sleepy', 'Determined', 'Scared', 'Proud', 'Shy',
    'Embarrassed', 'Cheerful', 'Melancholy', 'Mischief', 'Curious',
    'Dance', 'Clap', 'Cheer', 'Applaud', 'Celebrate',
    'Bow', 'Greet', 'Farewell', 'Wink', 'Pout',
    'Smile', 'Laugh', 'Chuckle', 'Cry', 'Sob',
    'Think', 'Point', 'Stretch', 'Nod', 'ShakeHead',
    'Run', 'Jump', 'Spin', 'Flip', 'Pose',
    'Meditate', 'Focus', 'Write', 'Read', 'Listen',
    'Scratch', 'Peek', 'Swim', 'Roll', 'Fly',
    'Tap', 'Touch', 'Flick', 'Special',
  ];

  function play(name) {
    try {
      var m = window.petApp && window.petApp.model;
      if (!m) return;
      // Try exact name first; if model has known groups, use those directly
      var groups = window.petApp.motionGroups || [];
      if (groups.length) {
        // Case-insensitive match against real groups
        var match = groups.find(function(g) {
          return g.toLowerCase() === name.toLowerCase();
        });
        if (match) { m.motion(match); return; }
        // No match — silently skip (don't spray wrong group names)
        return;
      }
      // No known groups yet — try exact then lowercase
      m.motion(name);
    } catch (e) { /* model may not have this motion */ }
  }

  function playRandom() {
    var m = window.petApp && window.petApp.model;
    if (!m) return;
    var groups = window.petApp.motionGroups;
    if (groups && groups.length) {
      // Pick a random group from what the model actually has
      var group = groups[Math.floor(Math.random() * groups.length)];
      try { m.motion(group); } catch(e) {}
      return;
    }
    // Fallback: try from predefined list
    var name = ALL_ACTIONS[Math.floor(Math.random() * ALL_ACTIONS.length)];
    try { m.motion(name); } catch(e) {}
  }

  function playForContext(ctx) {
    var m = window.petApp && window.petApp.model;
    if (!m) return;
    var map = {
      idle:      ['Idle', 'idle', 'Idle01', 'Idle02', 'Idle03'],
      tap:       ['TapBody', 'tap_body', 'Tap', 'Touch'],
      happy:     ['Happy', 'happy', 'Cheer', 'Celebrate', 'Excited'],
      sad:       ['Sad', 'sad', 'Cry', 'Sob', 'Melancholy'],
      angry:     ['Angry', 'angry', 'Pout'],
      surprised: ['Surprised', 'surprised'],
      wave:      ['Wave', 'wave', 'Greet', 'Farewell'],
      focus:     ['Focus', 'focus', 'Think', 'Meditate', 'Read', 'Write'],
      build:     ['Determined', 'Focus', 'focus'],
      fail:      ['Sad', 'sad', 'Sob', 'Confused'],
      commit:    ['Happy', 'happy', 'Cheer', 'Applaud', 'Celebrate'],
      save:      ['Nod', 'nod', 'Smile', 'smile'],
      chat:      ['TapBody', 'tap_body', 'Wave', 'wave', 'Wink'],
      dance:     ['Dance', 'dance', 'Spin', 'Flip'],
    };
    var candidates = map[ctx] || ALL_ACTIONS;
    var groups = window.petApp.motionGroups;
    if (groups && groups.length) {
      // Find the first candidate that the model actually has (case-insensitive)
      var found = null;
      for (var i = 0; i < candidates.length; i++) {
        var g = groups.find(function(gr) {
          return gr.toLowerCase() === candidates[i].toLowerCase();
        });
        if (g) { found = g; break; }
      }
      if (!found) {
        // Fall back to any idle-like group
        found = groups.find(function(gr) {
          return gr.toLowerCase().indexOf('idle') >= 0;
        }) || groups[0];
      }
      if (found) { try { m.motion(found); } catch(e) {} }
      return;
    }
    // No known groups — try candidates directly
    var pick = candidates[Math.floor(Math.random() * candidates.length)];
    try { m.motion(pick); } catch(e) {}
  }

  var idleTimer;
  function startIdleLoop() {
    if (idleTimer) clearInterval(idleTimer);
    idleTimer = setInterval(function () {
      if (!document.hidden) playForContext('idle');
    }, 15000);
  }

  window.PetActions = { all: ALL_ACTIONS, play: play, playRandom: playRandom, playForContext: playForContext, startIdleLoop: startIdleLoop };
})();
