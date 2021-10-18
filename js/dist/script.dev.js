"use strict";

(function (w, d) {
  'use strict';

  function init() {
    var themeSwitch = d.querySelector('#theme');
    themeSwitch.checked = w.localStorage.getItem('switchedTheme') === 'true';
    themeSwitch.addEventListener('change', function (e) {
      if (e.currentTarget.checked) {
        w.localStorage.setItem('switchedTheme', 'true');
      } else {
        w.localStorage.removeItem('switchedTheme');
      }
    });
    var MENU = {
      menuElement: d.getElementById('menu'),
      toggleClick: function toggleClick(e) {
        if (e.target === this.menuElement && !e.target.classList.contains('act')) {
          e.preventDefault();
          e.stopImmediatePropagation();
          document.getElementsByClassName('nav')[0].focus();
          this.menuElement.classList.toggle('act');
        } else {
          this.menuElement.classList.remove('act');
        }
      },
      close: function close(e) {
        if (e.isComposing || e.key === 229) {
          return false;
        }

        if (e.key === 'Escape') {
          this.menuElement.classList.remove('act');
          e.preventDefault();
          e.stopImmediatePropagation();
        }
      }
    };
    d.addEventListener('click', function (e) {
      return MENU.toggleClick(e);
    });
    w.addEventListener('keyup', function (e) {
      return MENU.close(e);
    });
  }

  d.addEventListener('DOMContentLoaded', init);
})(window, document);